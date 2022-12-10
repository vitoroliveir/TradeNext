import styled from 'styled-components';
import { FaCoins } from "react-icons/fa";

export const IconFaCoins = styled(FaCoins)`
    height: 25px;
    width: 25px;


`;


export const Body= styled.div`
    background-color: var(--background);
    height:1050px;
    width: 100vw;

    @media(min-width:501px){
        height:1500px;
    }   

    @media(min-width:850px){
        height:100vh;
    }   

`;



export const Patrimony =  styled.div`
    position: relative;
    background-color:white;
    width:90vw;
    height:60vh;
    bottom:15px;
    border-radius:15px;

    >p{
        font-family: "inter";
        font-size: 18px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;

        color:var(--gray-50);

        position:relative;
        left:20px;
        top:72%;

    }

    
    @media (min-width:501px) {
        width:80vw;
        top:85px;

        >p{
            top:10%;
        }
    }

    @media (min-width:850px) {
        width:35vw;
        height:85vh;
        bottom:0;
        

        margin-left:8.5px;
        left:11%;
        top:100px;


        >p{
            top:10%;
        }
    }

    @media (min-width:1023px) {
    
        width:35vw;
        height:85vh;

    }

    @media (min-width:1450px) {
        left:7%;

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
    position: relative;
    background-color:white;
    width:90vw;
    height:80vh;
    border-radius:15px;

    @media (min-width:501px) {
        width:80vw;
        top:100px;
    }

    @media (min-width:850px) {
        width:50vw;
        height:85vh;
        margin-left:7.5px;
        left:12%;
        top:100px;
    }

    @media (min-width:1450px) {
        width:55vw;
        left:8%;

    }

`;


export const ContainerCarteira =  styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    top:15%;
    left:5%;

    @media (min-width:501px) {
            top:13px;
            left:15%;
    }

    @media (min-width:850px) {
        flex-direction:row;
        top:0;
        left:0;

    }
`;

export const Total = styled.div`
    display:flex;
    flex-direction:row;
    >h1{
        font-family: "inter";
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;

        color:var(--grenn-100);

        position:relative;
        left:20px;
        top:15px;
    }

    > p{
        font-family: "inter";
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;

        color:var(--grenn-100);

        position:relative;
        left:60px;
        top:20px;
    }


        
    @media (min-width:501px) {
        flex-direction:column;
        > p{
            top:40px;
            left:30px;
        }

        > h1{
            top:30px;
            left:30px
        }


    }


`

export const Graphic = styled.div`
    position:absolute;
    top:15%;
    left:2%;
    width:320px;


    @media (min-width:501px) {
        position:relative;
        width:350px;
        margin-top:50px;
        left:22%;
    }

    @media (min-width:850px) {
        position:relative;
        width:90%;
        margin-top:80px;
        left:4%;
    }

    @media (min-width:1340px) {
        position:relative;
        width:80%;
        max-width:500px;
        margin-top:80px;
        left:8%;
    }
`
