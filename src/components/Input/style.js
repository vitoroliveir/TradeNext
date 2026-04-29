import styled from 'styled-components'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    >label{
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
    }
`

export const InputField = styled.input`
        height: 44px;
        width: 100%;
        border: solid 1px rgba(208, 213, 221, 1);
        border-radius: 8px;
        margin-bottom: 22px;
        padding-left: 14px;
        margin-top: 8px;
        box-sizing: border-box;

        font-family: 'Inter';
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;

        &::placeholder{
            font-family: 'Inter';
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
        }

        &:focus {
            outline: none;
        }

`;

export const Eyes = styled(AiOutlineEye)`
    height: 25px;
    width: 18.5px;
    color:rgba(102, 112, 133, 1);
    position: absolute;
    right: 12px;
    top: 19px;
`;

export const Eyes2 = styled(AiOutlineEyeInvisible)`
    height: 25px;
    width: 18.5px;
    color:rgba(102, 112, 133, 1);
    position: absolute;
    right: 12px;
    top: 19px;
    
`;


export const WrapInput = styled.div`
    position: relative;
`;

export const Error = styled.p`
    position: absolute;
    color: red;
    bottom: 1px;
    left: 5px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
`




