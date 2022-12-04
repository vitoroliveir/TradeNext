import { createContext, useState, useEffect } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import {
  setDoc,
  doc,
} from "firebase/firestore";

import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '../services/firebase';

export const AuthContext = createContext();

const formatUser = async (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  token: user.za,
  provider: user.providerData[0].providerId,
  photoUrl: user.photoURL,
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [logado, setLogado] = useState(false);


  const handleUser = async (currentUser) => {
    if (currentUser) {
      const formatedUser = await formatUser(currentUser);
      setUser(formatedUser);
      setSession(true);
      setLogado(true)
      return formatedUser.email;
    }
    setUser(false);
    setSession(false);
    return false;
  }

  const setSession = (session) => {
    if (session) {
      cookie.set('tradeNext-auth', session, {
        expires: 1,
      });
    } else {
      cookie.remove('tradeNext-auth');
    }
  }


  function loginInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        auth
        handleUser(result.user);
        localStorage.setItem("uid", result.user.uid)
        await setDoc(doc(db, "Usuarios", result.user.uid), {
          name: `${result.user.displayName}`,
          email: result.user.email,
        })

        Router.push('/home')
      }).catch((error) => {
        console.log(error);
      });
  }

  async function loginInWithEmailAndPassword(email, password) {
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, email, password).then(singedUser => {
      localStorage.setItem("uid", singedUser.user.uid)
      handleUser(singedUser);
      Router.push('/home')

    }).catch((error) => {
      setError(error.message)
    })
  }

  async function singUpWithEmailAndPassword(email, password, name, lastName) {
    const auth = getAuth()

    await createUserWithEmailAndPassword(auth, email, password).then(async (singeUser) => {
      localStorage.setItem("uid", singeUser.user.uid)
      await updateProfile(singeUser.user, {
        displayName: `${name} ${lastName}`
      });

      await setDoc(doc(db, "Usuarios", singeUser.user.uid), {
        name: `${name} ${lastName}`,
        email: email,
      })

      await handleUser(singeUser.user)

      Router.push('/home')

    }).catch((err) => {
      setError(err.message)
    })
  }


  const signOut = async () => {
    Router.push('/');
    await getAuth().signOut();
    handleUser(false);
    setLogado(false);

  }

  useEffect(() => {
    const unsubscribe = getAuth().onIdTokenChanged(handleUser);
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