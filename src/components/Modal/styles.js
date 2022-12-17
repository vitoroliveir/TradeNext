import styled from 'styled-components';
import { IoCloseSharp } from "react-icons/io5";

export const Container = styled.div`
    position:absolute;
    z-index:1000;
    width:100vw;
    height:1500px;
    background-color:rgba(98, 95, 95, 0.58);
    display:flex;
    justify-content:center;

    @media (min-width: 515px) {
        height:100vh;
    }

    
    
`;

export const ContainerModal = styled.form`
    position:absolute;
    width:80vw;
    height:80vh;
    display:flex;
    justify-content:center;
    border-radius: 15px;
    top:10%;

    background-color: white;
    
    @media (min-width: 515px) {
        width:60vw;
        height:70vh;

        max-width:630px;
        top:15%;
    }

    @media (min-width: 870px) {
        padding-left:3%
    }

    @media (min-width: 1020px) {
        height:50vh;
    }


    
`;

export const IoClose = styled(IoCloseSharp)`
    height: 20px;
    width:  20px;
    color:black;
`;

export const Close = styled.a`
    position:absolute;
    border-radius:50px;
    background-color: var(--green-50);
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    left:80%;
    top:1%;
    width:35px;
    height:35px;
    text-decoration:none;

    @media (min-width: 515px) {
        background-color: white;
        left:101%;
    }
    
`;