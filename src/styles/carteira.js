import styled from 'styled-components';
import { FaCoins } from "react-icons/fa";


export const IconFaCoins = styled(FaCoins)`
    height: 25px;
    width: 25px;


`;


export const Body = styled.div`
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



export const Patrimony = styled.div`
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

export const List = styled.div`
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
        width:51.1vw;
        height:85vh;
        margin-left:7.5px;
        left:12%;
        top:100px;
    }

    @media (min-width:1450px) {
        width:55.6vw;
        left:8%;
    }


    h1{
        font-family: "inter";
        font-size: 20px;
        font-weight: 600;
        color:var(--grenn-100);
        position:absolute;
        left:20px;
        top:15px;

        
    }

`;



export const Item = styled.li`
    margin:10px;

    font-family: "inter";
    font-size: 13px;
    font-weight: 500;
    
    border-radius:15px;
    width:80vw;
    height:35px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:5px;
    padding-top:5px;
    cursor:pointer;

    > span{
        margin:5px;
        height:25px;
        
        &:nth-child(1) {
            font-size: 16px;
            font-weight: 600;
            width:57px;
        }

        &:nth-child(2) {
            width:23px;
            margin-right:-5px;
        }

        &:nth-child(4) {
            width:35px;
            margin-right:-5px;
        }

        &:nth-child(5) {
            width:50px;
        }
        &:nth-child(6) {
            width:40px;
        }
    }

    @media (min-width:501px) {
        width:69vw;
        padding-right:25px;
    }

    @media (min-width:850px) {
        width:48vw;
        padding-right:0px;

        >span{
            &:nth-child(6) {
                width:52px;
                margin-right:25px;

            }
            &:nth-child(4) {
                width:1px;
                margin-right:25px;

            }
            &:nth-child(5) {
                width:39px;
                margin-right:25px;

            }
        }

    }


    @media (min-width:1450px) {
        margin-left:4vw;
        >span{


            &:nth-child(3) {
                margin-right:10px;

            }
        }

    }

`

export const Header = styled.div`
    margin:10px;

    font-family: "inter";
    font-size: 13px;
    font-weight: 600;

    border-radius:5px;
    width:81vw;
    height:35px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:5px;
    padding-top:40px;

    > span{
        margin:5px;
        height:25px;
        &:nth-child(1) {
            width:64px;
        }

        &:nth-child(2) {
            width:34px;
            margin-right:-5px;
        }


        &:nth-child(5) {
            width:65px;
        }
        &:nth-child(4) {
            width:40px;
        }
        &:nth-child(6) {
            width:65px;
        }
    }

    @media (min-width:501px) {
        width:70vw;
        padding-right:25px;
    }

    @media (min-width:850px) {
        width:47vw;
        padding-right:0px;

        >span{
            &:nth-child(6) {
            width:60px;
            margin-right:25px;

        }
        }

    }


    @media (min-width:1450px) {
        margin-left:4vw;

    }
`

export const Modal = styled.button`
    width:100%;
    height:40px;
    position:absolute;
    bottom:0;
    border:none;
    cursor:pointer;
    border-radius:0 0 15px 15px;
    font-family: "inter";
    font-size: 15px;
    font-weight: 600;
    background-color:var(--grenn-150);
    color:white;

`
export const ModalEdit = styled.div`
    :hover{
        background-color:#E8E8E8;
        border-radius:5px;
    }

`


export const Scroll = styled.ul`
    overflow-y:scroll;
    overflow-x:hidden;
        
    position:absolute;
    top:10%;

    width:100%;
    height:85%;
        
    &::-webkit-scrollbar{
        width:13px;
        border: 1px solid white;
    }

    &::-webkit-scrollbar-thumb{
        background-color: var(--grenn-150);
        border-radius:6px;
        
    }  

`


export const ContainerCarteira = styled.div`
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
