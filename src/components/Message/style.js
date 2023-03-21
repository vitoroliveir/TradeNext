import styled from 'styled-components'

export const Container =  styled.div`
    position: absolute;
    bottom:10px;
    left: 3vw;
    width: 97vw;
    height: 100vh;
    z-index:1000000; 

    display: flex;
    align-items:end;
    justify-content:center;
`

export const Messages =  styled.div`
    width: 40vw;
    height: 50px;

    background-color: var(--gray-50);
    border-radius:15px;

    display: flex;
    align-items:center;
    justify-content:center;

    h1{
        font-family: 'Inter';
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color:white;
    }

`
