import styled from 'styled-components';
import { AiOutlineHome } from "react-icons/ai";
import { FaGlobeAmericas,FaWallet } from "react-icons/fa";
import { BsChatDots, BsArrowLeftShort } from "react-icons/bs";
import { MdOutlineSpaceDashboard,MdMenu } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMenu } from "react-icons/io";


export const IconMdOutlineSpaceDashboard = styled(MdOutlineSpaceDashboard)`
    height: 24px;
    width: 24px;
`;

export const IconMdMenu = styled(MdMenu)`
    height: 30px;
    width: 30px;
    position: absolute;
    left: 25px;
    top: 28px;
    display: none;

    @media (max-width: 500px){
        display: block;
    }
`;

export const IconCiWallet = styled(FaWallet)`
    height: 24px;
    width: 24px;
`;

export const IconHiOutlineLogout = styled(HiOutlineLogout)`
    height: 24px;
    width: 24px;
    position: fixed;
    bottom: 4%;
    left: 28px;
    
`;

export const IconAiOutlineHome = styled(AiOutlineHome)`
    height: 24px;
    width: 24px;
`;

export const IconFaGlobeAmericas = styled(FaGlobeAmericas)`
    height: 24px;
    width: 24px;
`;

export const IconBsChatDots = styled(BsChatDots)`
    height: 24px;
    width: 24px;
`;

export const IconBsArrowLeftShort = styled(BsArrowLeftShort)`
    height: 24px;
    width: 24px;
    position: relative;
    left: 30px;
    top: 15px;
    color:#53545C;

    @media (max-width: 500px){
        display: none;
    }

    display:${props => props.active ? "block" : "none"};
`;

export const Logo = styled.div`
    position: relative;
    top: 15px;
    left: 23px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    

    p{
        @media (max-width: 425px){
            display: none;
        }
        display:${props => props.active ? "block" : "none"};
        margin-left: 10px;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
    }

    @media (max-width: 500px){
        left: 73px;
        top: 8px;
    }

`;


export const Container = styled.div`
    position: fixed;

    z-index:1000;

`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 88px;
    height: 100vh;
    position: relative;
    left: 2px;

    width:${props => props.active ? "200px" : "88px"};
    
    @media (max-width: 500px){
        height: 9vh;
        width: 100vw;
        height:${props => props.active ? "100vh" : "9vh"};
        width: ${props => props.active ? "190px" : "100vw"};
    }
 
`

export const Top_section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 36px;
    margin-top: 16px;

`

export const Icon = styled.div`
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    
`

export const Link_text = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    left: 17px;
    padding-left: 12px;
    top: 12px;
    color:#53545C;
    cursor: pointer;

    
    @media (max-width: 500px){
        display:${props => props.active ? "flex" : "none"};
    }

    title{
        margin-left: -20px;
        display:${props => props.active ? "block" : "none"};


        font-family: 'Inter';
        font-size: 14px;
        font-weight: 425;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
    }

    &:hover{
        color:black;
        title{
            font-size: 14.5px;
        }

        width:${props => props.active ? "150px" : "36px"};
        background-color: rgba(145, 228, 137, 0.5);
        border-radius: 12px;
    }
`
export const Menu = styled.div`
    position: absolute;
    top:0;
    background-color:white;
    height: 50px;
    width:100vw;
    padding-top:35px;
    display: flex;
    
    flex-direction: row;

`;

export const User = styled.div`
    position: absolute;
    right: 5%;
    top:35px;
    display: none;


    @media (min-width: 780px){
        display: block;
    }

`

export const Name = styled.div`
    position: absolute;
    left:${props => props.active ? "220px" : "100px"};
    top:40px;

    margin-left: 10px;
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-align: left;

    @media (max-width: 750px) {
        display:${props => props.active ? "none" : "block"};
    }


    @media (max-width: 425px){
        display: none;
    }

    @media (max-width: 500px){
        left: 110px;
        top: 35px;
    }

`

export const SingOut = styled.div`
    cursor: pointer;

    @media (max-width: 500px){
        display:${props => props.active ? "block" : "none"};

        > p{
            display:${props => props.active ? "block" : "none"};
        }
    }


    > p{
           position: fixed;
            bottom: 4%;
            left: 65px;
            
            display:${props => props.active ? "block" : "none"};

            margin-left: 10px;
            font-family: 'Inter';
            font-size: 16px;
            font-weight: 500;
            line-height: 19px;
            letter-spacing: 0.01em;
            text-align: left;
        }
`

export const Access = styled.ul`




`

