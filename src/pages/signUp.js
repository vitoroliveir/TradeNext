import { useContext } from "react";
import Image from 'next/image'
import Head from 'next/head'
import SignUpForm from '../components/SignUpForm'
import { AuthContext } from "../contexts/AuthContext";
import Router from 'next/router';
import {
  BodyLogin,
  SideImage,
  Logo,
  FormLogin,
  Body
} from '../styles/Login'




export default function SignUp() {
  const { logado } = useContext(AuthContext);
  
  if (logado ){
    Router.push('/home')
  }else {
    return (
      <Body>
        <Head>
          <title>Cadastro | TradeNext</title>
        </Head >

        <SideImage>
          <Image
            src="/images/planilha.svg"
            alt="planilha"
            width="718"
            height="488" />
        </SideImage>

        <FormLogin>
          <Logo>
            <Image
              src="/images/logo.svg"
              alt="logo"
              width="32"
              height="32" />

            <p>Trade Next</p>
          </Logo>

          <h1>Crie sua conta</h1>

          <SignUpForm />

        </FormLogin>

      </Body >


)
  }
  
}