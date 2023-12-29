import React, { useState, useEffect } from 'react';

export default function TextLimiter({ text, qtd }) {
  const [larguraDaTela, setLarguraDaTela] = useState(null);
  const [texto, setTexto] = useState(text); // Insira seu texto original aqui
  const tamanhoMaximo = qtd; // Número de letras máximo para exibição

  const [textoOriginal, setTextoOriginal] = useState(text);
  const [textoLimitado, setTextoLimitado] = useState();


  useEffect(() => {
    const handleResize = () => {
        setLarguraDaTela(window.innerWidth);
      };
  
      const updateWidth = () => {
        setLarguraDaTela(window.innerWidth);
      };
  
      // Verifica se o código está sendo executado no ambiente do navegador antes de adicionar o event listener
      if (typeof window !== 'undefined') {
        setLarguraDaTela(window.innerWidth);
        window.addEventListener('resize', handleResize);
  
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      } else {
        // Simula a atualização da largura em um ambiente onde window não está disponível (SSR)
        updateWidth();
      }
  }, []);

  useEffect(() => {
    if (larguraDaTela <= 501) {
      if(text !=""){
        console.log(text);
        setTextoLimitado(textoOriginal.slice(0, tamanhoMaximo) + '...')
        setTexto(textoLimitado);
      }
      
    }else {
      setTexto(text);
    }
  }, [larguraDaTela, tamanhoMaximo]);

  return (
    <div>
      <span>{texto}</span>
    </div>
  );
};


