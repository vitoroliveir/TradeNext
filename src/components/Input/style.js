import styled from 'styled-components'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

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
        width: 352px;
        border: solid 1px rgba(208, 213, 221, 1);
        border-radius: 8px;
        margin-bottom: 27px;
        padding-left: 14px;
        margin-top: 8px;

        font-family: 'Inter';
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;

        > input::placeholder{       
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

        @media (max-width: 500px) {
            height: 44px;
            width: 290px;
        }
    
`;

export const Eyes = styled(AiOutlineEye)`
    height: 25px;
    width: 18.5px;
    color:rgba(102, 112, 133, 1);
    position: absolute;
    left: 335px;
    top: 19px;
    
    @media (max-width: 500px) {
        left: 270px;
    }
`;

export const Eyes2 = styled(AiOutlineEyeInvisible)`
    height: 25px;
    width: 18.5px;
    color:rgba(102, 112, 133, 1);
    position: absolute;
    left: 335px;
    top: 19px;

    @media (max-width: 500px) {
        left: 270px;
    }
    
`;


export const WrapInput = styled.div`
    position: relative;
`;

export const Error = styled.p`
    position: absolute;
    color: red;
    bottom: 5px;
    left: 5px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
`




