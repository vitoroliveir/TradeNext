import styled from 'styled-components'
import { FcGoogle } from "react-icons/fc";

export const Container =  styled.div`
    width: 100%;
    max-width: 410px;
`;

export const WrapInput =  styled.div`
    width: 100%;
`;

export const Google =  styled(FcGoogle)`
    height: 24px;
    width:  24px;
`;

export const Access =  styled.div`
    margin-top: 10px;
    width: 100%;

    > Button{
        margin-bottom: 27px;
    }
`;


export const SignUp =  styled.div`
    min-height: 21px;
    width: 100%;
    max-width: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;

    > a{
        text-decoration: none;
        color: rgba(84, 41, 255, 1);

        font-family: 'Inter';
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        
    }
`;

