import styled from 'styled-components'
import { FcGoogle } from "react-icons/fc";

export const Sign = styled.div`
    height: 200px;
    width:  410px;
    Input,label{
        font-size: 16px;
    } 
    Button{
        margin-top: 15px;
    }
`;

export const Name = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 45px;
    Input{
        width: 157px;
        margin-right: 20px;
    }

     @media (max-width: 500px) {
        Input{
            width: 125px;
        }
    }

`;


export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;

    > Input {
        margin-right: 20px;
        margin-top: 10px;
        width: 164px;
    }
`;

export const Google =  styled(FcGoogle)`
    height: 24px;
    width:  24px;
`;

export const Login =  styled.div`
    height: 21px;
    width: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 15px;
    
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

export const Email = styled.div`

`;

export const Password = styled.div`

`;
