import styled from 'styled-components';

export const SearchBox = styled.div`
    position:relative;
    height: 25px;
    width: 43%;
    top:-18px;
    left: 50%;
    padding: 10px;
    border-radius: 15px;
    border: 1.9px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .8s;
    cursor:pointer;


    @media (min-width: 912px){
        width: 30%;
    }

    @media (max-width: 1200px) {
        left: 47%;
    }

    @media (max-width: 414px){
        left: 35%;
    }

    @media (max-width: 320px){
        left: 44%;
    }
   

    > Link{
        width: 20px;
        height: 40px;
        border-radius: 50%;
        color:black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const Input = styled.input`
    width: 87%;
    padding: 0;
    border: none;
    background: none;
    outline: none;
    color:black;
    cursor: pointer;

    @media (max-width: 820px) {
        width: 80%;
        margin-left: 1px;
    }

    margin-left: 10px;
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-align: left;



`

export const Mess = styled.div`
    position: absolute;
    top: 950px;

`
