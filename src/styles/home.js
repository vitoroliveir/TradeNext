import styled from 'styled-components';
import { IoMdAdd } from "react-icons/io";
import { TbPlugConnected } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";

export const IconFaCoins = styled(FaCoins)`
    height: 25px;
    width: 25px;


`;

export const IconIoMdAdd = styled(IoMdAdd)`
    height: 50px;
    width: 50px;
    border-radius:50px;
    background-color:#119598;
    position:absolute;
    bottom:70%;
    left:36%;

`;


export const IconTbPlugConnected= styled(TbPlugConnected)`
    height: 50px;
    width: 50px;
    border-radius:50px;
    background-color:#119598;
    position:absolute;
    bottom:70%;
    left:36%;

`;

export const Body= styled.div`
    background-color: var(--background);
    height:1250px;
    width: 100vw;

    @media(min-width:501px){
        height:1500px;
    }   

    @media(min-width:850px){
        height:100vh;
    }   

`;

export const Modal= styled.button`
    margin-top:65px;
    padding: 30px 16px;
    width: 215px;
    height: 270px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    border:0;
    position:relative;
    margin-right:15px;
    margin-left:10px;
    cursor:pointer;

    font-family: "inter";
    font-size: 20px;
    font-weight: 500;
    line-height: 1.17;
    text-align: center;

    :hover{
        width: 220px;
        height: 275px;
        background-color: rgba(145, 228, 137, 0.5);
        color:#ffff;
    }

    @media(min-width:515px){
        margin-right:20px;
        margin-left:20px;
    }   


`;

export const Container= styled.div`
    position:absolute;
    width:100vw;
    height:100vh;

`;


export const Welcome= styled.div`
    position:relative;
    top:20%;
    width:100vw;
    display:flex;
    align-items:center;
    flex-direction:column;

   > p{
        width:370px;
        font-family: "inter";
        font-size: 14px;
        font-weight: 500;
        line-height: 1.17;
        text-align: center;
        margin-top:15px;


    }

    >h1{
        font-family: "inter";
        font-size: 24px;
        font-weight: 700;
        line-height: 1.17;
        text-align: center;
        margin-top:15px;
        color: #2d2d2d;
    }

    @media (min-width:501px) {
        p{
            left:5%;
        }
    }

    @media (min-width:729px) {
        p{
            width:620px;
        }
    }


`;

export const Add= styled.div`
    position:relative;
    top:25%;
    display:flex;
    align-items:center;
    justify-content:center;

    h1{
        position:absolute;
        bottom:95%;
        font-family: "inter";
        font-size: 24px;
        font-weight: 700;
        line-height: 1.17;
        text-align: center;
        color: #2d2d2d;

    }
`;


export const Logo =  styled.div`
    position: relative;

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
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 90vw;
    height: 80vh;
    position: relative;
    border-radius: 15px;

    >h1{
      position: absolute;

      height: 50px;
      background-color: white;
      color: black;
      padding-left: 15px;
      padding-top: 20px;
      font-family: 'Inter';
      font-size: 20px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0.01em;
      text-align: left;
    }


    @media (min-width:501px) {
        width:80vw;
        top:100px;
    }

    @media (min-width:850px) {
        width:50vw;
        height:85vh;
        margin-left:7.5px;
        left:12%;

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

export const New = styled.div`
   position: relative;
    top: 70px;
    overflow-y: scroll;
    height: 90%;
    width: 95%;

    &::-webkit-scrollbar{
        width:13px;
        border: 1px solid white;
    }

    &::-webkit-scrollbar-thumb{
        background-color: var(--grenn-150);
        border-radius:6px;
        
    }
    

    
`;

export const Card = styled.li`
  height: 55px;
  width: 71vw;
  background-color: rgba(236, 236, 236, 0.716);
  margin: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius:10px;
  padding:4px;

  :hover{
    background-color: rgba(145, 228, 137, 0.5);
  }

  @media (min-width: 850px) {
    height: 55px;
    width: 42.6vw;
    padding-left:4px;
}

    @media (min-width: 1460px) {
        width: 48.5vw;
    }
`;

export const Content = styled.a`
  text-decoration: none;
  
`;


export const News = styled.ul`
  position: relative;
  top: 70px;
  overflow: scroll;
  height: 90%;
  width: 95%;

`;


export const Title = styled.h1`
    color: black;
    margin-left: 5px;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-align: left;
`;
