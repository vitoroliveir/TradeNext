import styled from 'styled-components';
import { FaCoins } from "react-icons/fa";

export const IconFaCoins = styled(FaCoins)`
    height: 25px;
    width: 25px;


`;

export const Body= styled.div`
    background-color: var(--background);
    height:1800px;
    width: 100vw;

    @media(min-width:501px){
        height:1900px;
    }   

    @media(min-width:601px){
        height:1600px;
    }  

    @media(min-width:850px){
        height:1400px;
    } 
    
    @media(min-width:1120px){
        height:100vh;
    } 

`;


export const Patrimony =  styled.div`
    position: relative;
    background-color:white;
    width:90vw;
    height:45vh;
    bottom:15px;
    border-radius:15px;
    top:3vh;

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
        top:16vh;
        height:53vh;

        >p{
            top:10%;
        }
    }

    @media (min-width:850px) {
        width:35vw;
        height:50vh;
        bottom:0;
        

        margin-left:8.5px;
        left:11%;
        top:-19vh;


        >p{
            top:10%;
        }
    }

    @media (min-width:1023px) {
        width:350px;
        height:470px;

        top:-19.5vh;

        p{
            top:5%;
        }

    }

    @media (min-width:1120px) {

        top:2vh;

    }

    @media (min-width:1339px) {
        top:0px;
        height:430px;
    }

    @media (min-width:1219px) {
        left:8%;
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
    width: 90vw;
    height: 120vh;
    position: relative;
    border-radius: 15px;
    top:60px;

    @media (min-width:501px) {
        width:80vw;
        top:180px;
        height: 118vh;
    }

    @media (min-width:601px) {
        height: 93.5vh;
    }

    @media (min-width:850px) {
        width:51vw;
        top:165px;
        height:123vh;
        margin-left:7.5px;
        left:12%;

    }

    @media (min-width:1107px) {
        width:55vw;

    }

    @media (min-width:1120px) {
        height:80vh;
        
    }
    @media (min-width:1219px) {
        width:60vw;
        left:10%;
    }

    @media (min-width:1450px) {
        width:65vw;
    }

    @media (min-width:1668px) {
        width:68vw;
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
    top:12%;
    left:-5%;
    width:350px;

    @media(min-width:361px){
        left:3%;
    }

    @media(min-width:413px){
        left:10%;
    }

    @media (min-width:501px) {
        position:relative;
        width:350px;
        margin-top:50px;
        left:22%;
    }

    @media (min-width:850px) {
        position:relative;
        width:85%;
        margin-top:80px;
        max-width:350px;
        left:4%;
    }

    @media (min-width:1340px) {
        position:relative;
        width:80%;
        max-width:300px;
        margin-top:50px;
        left:8%;
    }
`

export const New = styled.div`
  position: relative;
  top:35px;

  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:space-around;

  @media(min-width:1120px){
    top:40px;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:space-around;
  }
  
    
`;

export const Card = styled.li`
    list-style: none;   
`;

export const Content = styled.a`
  text-decoration: none;

  img{
    height: 20vw;
    width: 34vw;
    border-radius:5px;
  }

  margin: 15px;

  display: flex;
  flex-direction:column;

  
  @media(min-width:601px){
    img{
        height: 15vw;
         width: 20vw;
    }
  }

  @media(min-width:1120px){
    flex-direction:row;
    margin: 14px;
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
    width:32vw;

    @media(min-width:601px){
        width:20vw;
        margin-top: 10px;
    }

    @media(min-width:1120px){
        width:15vw;
        margin-top: 0;
    }

    @media(min-width:1380px){
        width:18vw;
        margin-top:10px;
    }
`;
