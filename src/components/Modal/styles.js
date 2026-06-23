import styled from 'styled-components';
import { IoCloseSharp } from "react-icons/io5";

export const Container = styled.div`
    position: fixed;
    z-index: 10000;
    inset: 0;
    width: 100vw;
    min-height: 100vh;
    min-height: 100dvh;
    background-color: rgba(98, 95, 95, 0.58);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
`;

export const ContainerModal = styled.form`
    position: relative;
    width: min(100%, 720px);
    max-height: calc(100vh - 2rem);
    max-height: calc(100dvh - 2rem);
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: white;
    overflow-y: auto;
    padding: 3rem 1rem 1.5rem;
    box-sizing: border-box;

    @media (min-width: 515px) {
        width: min(86vw, 760px);
        height: auto;
        max-height: none;
        overflow-y: visible;
        padding: 3.25rem 1.5rem 1.25rem;
    }

    @media (min-width: 1200px) {
        width: min(72vw, 980px);
        padding: 3.5rem 2rem 1.5rem;
    }
    
`;

export const IoClose = styled(IoCloseSharp)`
    height: 20px;
    width:  20px;
    color:black;
`;

export const Close = styled.a`
    position: absolute;
    border-radius: 50px;
    background-color: var(--green-50);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0.75rem;
    top: 0.75rem;
    width: 35px;
    height: 35px;
    text-decoration: none;
    cursor: pointer;

    @media (min-width: 515px) {
        background-color: var(--green-50);
        right: 0.75rem;
        top: 0.75rem;
    }
    
`;
