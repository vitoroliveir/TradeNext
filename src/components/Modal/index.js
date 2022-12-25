import React, { useState } from 'react';
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react";
import { addAcoesDb, existDb, deleteDb, updateDb} from "../../services/db"


import {
  Container,
  ContainerModal,
  Close,
  IoClose
} from './styles';

export default function Modal({ onClose = () => { }, children, data, onError, results, page, type , operation,resetData}) {
  const { user } = useContext(AuthContext);

  const reset = (data)=>{
    data.name = ""
    data.value = ""
    data.corretora= ""
    data.date = ""
    data.qtd = ""
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(type == "EDITAR" ){
      var local = window.location
      if(operation == "delete"){
        await deleteDb(user.uid, data).then(async ()=>{
          window.location.href = `${local}`
        })
      }else{
        await updateDb(user.uid, data).then(async ()=>{
          window.location.href = `${local}`
        })
      }

      
    }else{
      if((data.name == undefined || data.name == "") || (data.value == undefined || data.value == "") || (data.corretora == undefined || data.corretora == "") || (data.date == undefined || data.date == "") || (data.qtd == undefined || data.qtd == "")) {

        return onError("Preencha todos os campos")
  
      }else{
        await existDb(user.uid, data).then(async (Response) => {
          if (results.includes(data.name.toUpperCase()) == false) {
            return onError("Ação não existe")
  
          }if(Response == true) {
            return onError("Ação já Cadastrada")
          }
          

          await addAcoesDb(user.uid, data)

          reset(data)

          setTimeout(async () => {
            reset(data)
            await onError("Cadastrada com sucesso" , true)
            resetData(true)
          }, 500)

          await e.target.reset();
        })
        
      }
    }

  }

  return (
    <Container>
      <ContainerModal onSubmit={handleSubmit}>
        <Close onClick={onClose} href={`/${page}`} ><IoClose /></Close>
        {children}
      </ContainerModal>
    </Container>
  );
}