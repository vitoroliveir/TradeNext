import styled from 'styled-components';
import { FaCoins } from "react-icons/fa";

export const IconFaCoins = styled(FaCoins)`
    height: 25px;
    width: 25px;
    

`;

export const Body= styled.div`
    background-color: var(--background);
    min-height: 100vh;
    width: 100%;
    padding-bottom: 2rem;
    box-sizing: border-box;

`;


export const Patrimony =  styled.div`
    position: relative;
    background-color:white;
    width:min(100%, 380px);
    min-height:430px;
    border-radius:15px;
    padding: 1rem 0.5rem 1.25rem;
    box-sizing: border-box;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

    >p{
        font-family: "inter";
        font-size: 17px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;

        color:var(--gray-50);
        margin: 0.75rem 1rem;

    }

    @media (min-width:850px) {
        width:min(35vw, 380px);
    }

`;

export const Valor = styled.span`
    color:black;
    position:relative;
    left:4%;

    font-family: "inter";
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    text-align: start;
`

export const List =  styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: min(100%, 900px);
    min-height: 780px;
    position: relative;
    border-radius: 15px;
    padding: 1rem 0.75rem 2rem;
    box-sizing: border-box;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

    @media (min-width:850px) {
        width:min(58vw, 920px);
    }

`;


export const ContainerCarteira =  styled.div`
    display:flex;
    align-items:stretch;
    justify-content:center;
    flex-direction:column;
    gap: 1.25rem;
    width: min(100%, 1280px);
    margin: 8.5rem auto 0;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (min-width:850px) {
        flex-direction:row;
        align-items:flex-start;
        padding: 0 1.5rem;
    }
`;

export const Total = styled.div`
    display:flex;
    flex-direction:column;
    gap: 0.5rem;
    >h1{
        font-family: "inter";
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;

        color:var(--grenn-100);
        margin: 0 1rem;
        display: flex;
        align-items: center;
        gap: 0.45rem;
    }

    > p{
        font-family: "inter";
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;

        color:var(--grenn-100);
        margin: 0 1rem;
    }

`

export const Graphic = styled.div`
    width:100%;
    max-width: 340px;
    margin: 0.5rem auto 0;
`

export const New = styled.div`
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
`;

export const Card = styled.li`
    list-style: none;   
`;

export const Content = styled.a`
  text-decoration: none;
  width: 100%;
  max-width: 370px;

  img{
    height: 160px;
    width: 100%;
    object-fit: cover;
    border-radius:5px;
  }

  margin: 10px;

  display: flex;
  flex-direction:column;

  
  @media(min-width:601px){
    img{
        height: 170px;
        width: 100%;
    }
  }

  @media(min-width:1120px){
    flex-direction:row;
    margin: 14px;
    max-width: 520px;
    align-items: center;
    img{
        height: 100px;
        width: 100px;
    }
  }
  
`;


export const News = styled.ul`


`;


export const Title = styled.h1`
    color: black;
    margin-left: 10px;
    margin-top: 10px;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-align: left;
    width:100%;

    @media(min-width:601px){
        width:100%;
        margin-top: 10px;
    }

    @media(min-width:1120px){
        width:calc(100% - 120px);
        margin-top: 0;
    }

    @media(min-width:1380px){
        width:calc(100% - 120px);
        margin-top:10px;
    }
`;
