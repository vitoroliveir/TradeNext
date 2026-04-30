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
    width:100%;
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
        width:min(35%, 380px);
        flex: 0 0 min(35%, 380px);
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
    width: 100%;
    min-height: 780px;
    position: relative;
    border-radius: 15px;
    padding: 1rem 0.75rem 2rem;
    box-sizing: border-box;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

    @media (min-width:850px) {
        flex: 1;
        min-width: 0;
    }

`;


export const ContainerCarteira =  styled.div`
    display:flex;
    align-items:stretch;
    justify-content:center;
    flex-direction:column;
    gap: 1.25rem;
    width: 100%;
    max-width: 1280px;
    margin: 8.5rem auto 0;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (min-width:501px) {
        width: calc(100% - 112px);
        margin-left: 96px;
        margin-right: 16px;
    }

    @media (min-width:850px) {
        flex-direction:row;
        align-items:flex-start;
        padding: 0 1.5rem;
        width: calc(100% - 112px);
        max-width: 1280px;
        margin-left: 96px;
        margin-right: auto;
    }

    @media (min-width:1300px) {
        width: calc(100% - 128px);
        margin-left: 104px;
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
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media(min-width: 680px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media(min-width: 1120px){
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Card = styled.li`
    list-style: none;   
    min-width: 0;
`;

export const Content = styled.a`
  text-decoration: none;
  width: 100%;
  height: 100%;

  img{
    height: 160px;
    width: 100%;
    object-fit: cover;
    border-radius:5px;
  }

  display: flex;
  flex-direction:column;
  gap: 0.75rem;

  
  @media(min-width:601px){
    img{
        height: 170px;
        width: 100%;
    }
  }

  @media(min-width:1120px){
    img{
        height: 132px;
        width: 100%;
    }
  }
  
`;


export const News = styled.ul`


`;


export const Title = styled.h1`
    color: black;
    margin: 0;
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: 0.01em;
    text-align: left;
    width:100%;

    @media(min-width:601px){
        width:100%;
        margin-top: 10px;
    }

    @media(min-width:1120px){
        width:100%;
    }

    @media(min-width:1380px){
        width:100%;
    }
`;
