import { createContext, useState, useEffect } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import {
  setDoc,
  doc,
} from "firebase/firestore";

import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from '../services/firebase';

export const AuthContext = createContext();

const buildUserPayload = async (firebaseUser) => ({
  uid: firebaseUser.uid,
  email: firebaseUser.email,
  name: firebaseUser.displayName || "",
  token: await firebaseUser.getIdToken(),
});

const persistUserBaseData = async ({ uid, name, email }) => {
  await setDoc(doc(db, "Usuarios", uid), {
    name: name || "",
    email: email || "",
  });

  await setDoc(doc(db, `Usuarios/${uid}/total`, "RESULTTOTAL"), {
    totalCost: 0,
    totalReturn: 0,
    percentage: 0,
  });
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [logado, setLogado] = useState(false);

  const setSessionCookie = (isAuthenticated) => {
    if (isAuthenticated) {
      cookie.set('tradeNext-auth', true, {
        expires: 1,
      });
    } else {
      cookie.remove('tradeNext-auth');
    }
  };

  const syncUserState = async (firebaseUser) => {
    if (!firebaseUser) {
      setUser(null);
      setSessionCookie(false);
      setLogado(false);
      return null;
    }

    const formattedUser = await buildUserPayload(firebaseUser);
    setUser(formattedUser);
    setSessionCookie(true);
    setLogado(true);
    localStorage.setItem("uid", firebaseUser.uid);
    return formattedUser;
  };

  async function loginInWithGoogle() {
    setError("");
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      await syncUserState(result.user);
      await persistUserBaseData({
        uid: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
      });
      Router.push('/home');
    } catch (err) {
      setError(err?.message || "Nao foi possivel entrar com Google.");
    }
  }

  async function loginInWithEmailAndPassword(email, password) {
    setError("");
    try {
      const signedUser = await signInWithEmailAndPassword(auth, email, password);
      await syncUserState(signedUser.user);
      Router.push('/home');
    } catch (err) {
      setError(err?.message || "Email ou senha invalidos.");
    }
  }

  async function singUpWithEmailAndPassword(email, password, name, lastName) {
    setError("");
    try {
      const signedUser = await createUserWithEmailAndPassword(auth, email, password);
      const fullName = `${name} ${lastName}`.trim();

      await updateProfile(signedUser.user, {
        displayName: fullName,
      });

      await persistUserBaseData({
        uid: signedUser.user.uid,
        name: fullName,
        email,
      });

      await syncUserState(signedUser.user);
      Router.push('/home');
    } catch (err) {
      setError(err?.message || "Nao foi possivel criar sua conta.");
    }
  }


  const signOut = async () => {
    setError("");
    localStorage.removeItem("uid");
    await auth.signOut();
    await syncUserState(null);
    Router.push('/');
  };

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(syncUserState);
    return () => unsubscribe();
  }, []);


  return (
    <AuthContext.Provider value={{
      user,
      loginInWithGoogle,
      loginInWithEmailAndPassword,
      singUpWithEmailAndPassword,
      error,
      signOut,
      logado

    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;