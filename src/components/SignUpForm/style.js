import styled from 'styled-components'
import { FcGoogle } from "react-icons/fc";

export const Sign = styled.div`
    width: 100%;
    max-width: 410px;

    form {
        width: 100%;
    }

    Input,label{
        font-size: 16px;
    } 

    Button{
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Name = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 20px;

    Input{
        width: 100%;
        min-width: 0;
        margin-right: 0;
    }

     @media (max-width: 500px) {
        flex-direction: column;
        gap: 0;

        Input{
            width: 100%;
        }
    }

`;


export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;

    > Input {
        margin-top: 10px;
        width: 100%;
    }
`;

export const Google =  styled(FcGoogle)`
    height: 24px;
    width:  24px;
`;

export const Login =  styled.div`
    min-height: 21px;
    width: 100%;
    max-width: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    
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
