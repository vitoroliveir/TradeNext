import React, { useState } from 'react';
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react";
import { addAcoesDb, existDb, deleteDb, updadeDb} from "../../services/db"


import {
  Container,
  ContainerModal,
  Close,
  IoClose
} from './styles';

export default function Modal({ onClose = () => { }, children, data, onError, results, page, type , operation}) {
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
        await deleteDb(user.uid, data).then(()=>{
          window.location.href = `${local}`
        })
      }else{
        await updadeDb(user.uid, data).then(()=>{
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
  
          await addAcoesDb(user.uid, data).then(()=>{
            reset(data)
          })
          
          onError("Cadastrada com sucesso" , true)
  
          e.target.reset();
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