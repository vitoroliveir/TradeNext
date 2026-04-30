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

export default function Modal({ onClose , onSuccess, children, data, onError, results, page, type , operation,resetData}) {
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
    const ticker = (data?.name || "").trim().toUpperCase();

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
      if((ticker == undefined || ticker == "") || (data.value == undefined || data.value == "") || (data.corretora == undefined || data.corretora == "") || (data.date == undefined || data.date == "") || (data.qtd == undefined || data.qtd == "")) {

        return onError("Preencha todos os campos")
  
      }else{
        const payload = {
          ...data,
          name: ticker
        };

        await existDb(user.uid, payload).then(async (Response) => {
          const hasTickerInList = Array.isArray(results) && results.includes(ticker);
          let hasTickerInQuote = false;

          try {
            const quote = await fetch(`https://brapi.dev/api/quote/${ticker}?token=x6Cr3XN4ZDKxycrrRbx7kM`);
            const quoteData = await quote.json();
            hasTickerInQuote = Array.isArray(quoteData?.results) && quoteData.results.length > 0;
          } catch (error) {
            hasTickerInQuote = false;
          }

          if (!hasTickerInList && !hasTickerInQuote) {
            return onError("Ação não existe")
  
          }if(Response == true) {
            return onError("Ação já Cadastrada")
          }

          await addAcoesDb(user.uid, payload)

          reset(payload)
        
          setTimeout(async () => {
            reset(payload)
            await onError("Cadastrada com sucesso" , true)
            resetData(true)
            if (onSuccess) {
              onSuccess()
            }
            if (onClose) {
              onClose()
            }
          }, 500)
          await e.target.reset();
        })
        
      }
    }

  }

  return (
    <Container>
      <ContainerModal onSubmit={handleSubmit}>
        <Close onClick={onClose} ><IoClose /></Close>
        {children}
      </ContainerModal>
    </Container>
  );
}