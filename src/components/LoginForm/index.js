import Link from "next/link";
import { useState , useContext} from "react";
import Button from '../Button';
import Input from '../Input'
import Err from '../Err'

import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthContext } from "../../contexts/AuthContext";

import {
  Container,
  WrapInput,
  Access,
  SignUp,
  Google,

} from './style'


export default function LoginForm() {
  const { loginInWithGoogle, loginInWithEmailAndPassword, error} = useContext(AuthContext);
  const schema =  yup.object().shape({
    email: yup.string().email().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  })
  
  var [err , setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register , handleSubmit: onSubmit , formState:{errors} } = useForm({
    resolver:yupResolver(schema),
  });

  
  const handleSubmit = async (data) =>{
    await loginInWithEmailAndPassword(data.email, data.password)

    if(error != ""){
      if(error == "Firebase: Error (auth/user-not-found)."){
        setErr( "Usuario não cadastrado" )
      }else {
        setErr( "Senha incorreta" )
      }
    }

  }

  
  return (
      <Container>
        {err != "" ? <Err>{err}</Err> : ""}
        <form onSubmit={onSubmit(handleSubmit)}>
          <WrapInput> 
              <Input
                type={"email"}
                name={"email"}
                label={"Email"}
                placeholder={'Email.holt@example.com'}
                onChange={(e) => setEmail(e.target.value)}
               register={register}   
               error={errors.email?.message}
            /> 
          </WrapInput>

          <WrapInput>
              <Input 
                type={"password"}
                name={"password"}
                label={"Password"}
                placeholder={"••••••••"}
                onChange={(e) => setPassword(e.target.value)}
                register={register}
                error={errors.password?.message}             
            /> 

          </WrapInput>

          <Access>
            <Button type="submit" backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}> Login </Button>
            <Button type="button" onClick={loginInWithGoogle}><Google/>&nbsp;Login com Google</Button>

            <SignUp>
              <span>Não possui conta?&nbsp;</span>
              <Link href="/signUp">
                  Sign up
              </Link>
            </SignUp>
          </Access>

        </form>
      </Container>
  )
    
  }