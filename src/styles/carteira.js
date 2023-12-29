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
        top:75%;

    }


    @media (min-width:501px) {
        width:75vw;
        top:85px;
        left: 20px;
    }
    
    @media (min-width:662px) {
        width:80vw;
        left: 0;

        >p{
            top:75%;
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
    margin-bottom: 30px;


    @media (min-width:501px) {
        width:75vw;
        top:100px;
        left: 20px;
    }

    @media (min-width:662px) {
        width:80vw;
        top:100px;
        left: 0px;
    }
    

    @media (min-width:850px) {
        width:51.1vw;
        height:85vh;
        margin-left:7.5px;
        left:12%;
        top:100px;
        margin-bottom: 0px;
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
    width:78vw;
    height:35px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:5px;
    padding-top:5px;
    cursor:pointer;

    > div{
        margin:5px;
        height:25px;
        width: 10px;
        display:flex;
        align-items:center;

        &:nth-child(1) {
            width:17px;
            margin-right:25px;
        }
        
    }

    @media (min-width:501px) {
        width:69vw;
        padding-right:25px;
    }

    @media (min-width:850px) {
        width: 51vw;
        padding-right:0px;

        >span{
            width:00vw;
            &:nth-child(6) {
                width:52px;
                margin-right:25px;

            }
            &:nth-child(4) {
                width:1px;
                margin-right:25px;

            }
            &:nth-child(5) {
                width:44px;
                margin-right:25px;

            }
        }

    }


    @media (min-width:1450px) {
        /* margin-left:4vw; */
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
    font-size: 11px;
    font-weight: 600;

    border-radius:5px;
    width:78vw;
    height:35px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:0vw;
    padding-top:40px;


    > div{
        margin:5px;
        height:25px;
        width:10px;

        &:nth-child(6) {
            width:10px;
            padding-right: 28px;
        } 

        &:nth-child(2) {
            width:5px;

        }

        &:nth-child(1) {
            width:0px;

        }

    }

    @media (min-width:375px) {
        padding-left:-1vw;
        font-size: 13px;
        width:73vw;
        > div{
            &:nth-child(6) {
                padding-left:2vw;
                padding-right:2vw;
            } 
        }
    }

    @media (min-width:501px) {
        width:60vw;
        padding-left: 21px;
        
    }

    @media (min-width:655px) {
        padding-left: 29px;

        &:nth-child(6) {
            width:0vw;
        } 
        
    }

    @media (min-width:730px) {
        width:62vw;
    }

    @media (min-width:850px) {
        width:42vw;
        padding-left:34px;
        font-size: 13px;

        >div{
            &:nth-child(6) {
                margin-left:36px;
            } 
        }


    }

    @media (min-width:1100px) {
        width:43vw;
        padding-left: 37px;
    }


    @media (min-width:1200px) {
        padding-left: 2vw;
        width:45vw;
        >div{
            &:nth-child(6) {
                margin-left:15px;
            } 
        }
    }

    @media (min-width:1450px) {
        padding-left: 2vw;
        width:46vw;
        >div{
            &:nth-child(5) {
                margin-left:15px;
            }
            &:nth-child(6) {
                margin-left:0px;
            } 
        }
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
        top:17px;
    }

    > p{
        font-family: "inter";
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;

        color:var(--grenn-100);

        position:relative;
        left:30px;
        top:20px;
    }

    @media (min-width:375px) {
        >p{
            left:60px;
        }
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
    top:18%;
    left:-7%;
    width:320px;

    @media (min-width:375px) {
        left:2%;
    }


    @media (min-width:501px) {
        position:absolute;
        width:350px;
        margin-top:50px;
        left:10%;
        
    }

    @media (min-width:602px) {
        left:15%;
    }

    @media (min-width:670px) {
        left:20%;
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
