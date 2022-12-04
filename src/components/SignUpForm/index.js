import { useState, useContext } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Err from '../Err'
import { AuthContext } from "../../contexts/AuthContext";

import { 
    Sign,
    Name,
    Email,
    Password,
    WrapInput,
    Google,
    Login,
} from './style'
import Button from '../Button'
import Input from '../Input'



export default function SignUpForm(){
    const { loginInWithGoogle, singUpWithEmailAndPassword, error} = useContext(AuthContext);
    var [err,setErr] =  useState(error)

    const schema =  yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        lastName: yup.string().required("Campo obrigatório"),
        email: yup.string().email().required("Campo obrigatório"),
        password: yup.string().min(6,"Minimo 6 caracteres").required("Campo obrigatório"),
        confirmPassword: 
        yup.string()
        .required('Campos obrigatório')
        .oneOf([yup.ref('password')], 'Senha não confere'),
    })

    const { register , handleSubmit , formState:{errors} } = useForm({
        resolver:yupResolver(schema),
    });


    const addSubmit = async (data)=> {      
        await singUpWithEmailAndPassword(data.email, data.password, data.name, data.lastName)

        if(error){
            setErr("Usuario ja cadastrado")
        }
    }

    return (
    <Sign>
        {err != "" ? <Err>{err}</Err> : ""}
        <form onSubmit={handleSubmit(addSubmit)}>
            <Name>
                <WrapInput>
                    <Input 
                        type={"text"} 
                        name={"name"}
                        label={"Nome"} 
                        placeholder={""}
                        register={register}
                        error={errors.name?.message}
                    /> 
                </WrapInput>
                <WrapInput>
                    <Input 
                        type={"text"} 
                        name={"lastName"} 
                        label={"Sobrenome"} 
                        placeholder={""}
                        register={register }
                        error={errors.lastName?.message}
                    />
                </WrapInput>
            </Name>
            
                
            <Email>
                <Input
                    type={"email"} 
                    name={"email"}
                    label={"Email"}
                    placeholder={'Email.holt@example.com'}
                    register={register}
                    error={errors.email?.message}
                /> 
            </Email>

            <Password>
                <Input 
                type={"password"  }
                name={"password" }
                label={"Password"}
                placeholder={'••••••••' }
                register={register}
                error={errors.password?.message}
                /> 

                <Input 
                type={"password" }
                name={"confirmPassword"} 
                label={"Confirme Password"}
                placeholder={'••••••••' }
                register={register}
                error={errors.confirmPassword?.message}
                /> 
                
            </Password>
            
            <Button type="submit" backgroundColor={'rgba(33, 119, 121, 1)'} color={'white'}>Cadastrar</Button>
            <Button type="button" onClick={loginInWithGoogle}><Google/>&nbsp;Login com Google</Button>

            <Login>
              <span>Já possui conta?&nbsp;</span>
              <Link href="/login">
                  Login
              </Link>
            </Login>
        </form>
    </Sign>)
} 