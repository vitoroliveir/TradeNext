import styled from 'styled-components';
import { IoMdAdd } from "react-icons/io";
import { TbPlugConnected } from "react-icons/tb";


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
    height:955px;
    width: 100vw;

    @media(min-width:515px){
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





