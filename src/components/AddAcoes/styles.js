import styled from 'styled-components';

export const Container = styled.div`

`;

export const Title = styled.h1`
    position:absolute;
    top:10px;
    left:5%;

    font-family: 'Inter';
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    @media (min-width: 515px) {
        top:20px;
    }
`;

export const Dados = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    position:relative;
    left:0;
    top:55px;
    max-width:630px;

    flex-wrap:wrap;
    width:50vw;
    height:18vh;

    button{
        position:absolute;
        top:355%;
        left:30%;
        width: 40%;
    }

    @media (min-width: 515px) {
        position:absolute;
        left:35px;
        top:65px;
        display:flex;
        margin-left:2%;
        height:20vh;

        justify-content:center;
        align-items:start;

        button{
            top:265%;
            left:30%;
        }
    }

    @media (min-width: 1140px) {
        display:flex;
        margin-left:0%;

        justify-content:start;
        align-items:start;


    }

    @media(min-width: 1020px){
        button{
            top:165%;
            left:25%;
        }
    }
`;

export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;

    Input {
        margin-right: 10px;
        padding-right:5px;
        margin-top: 4px;
        width: 90%;
    }

    @media (min-width:515px) {
        margin-right:${props => props.date ? "82px" : "none"};
        input{
            width:90%;
        }
    }

    @media (min-width: 1140px) {
        margin-left:30px;
        margin-right:0px;
        
        input{
            width:100%;
        }
    }

`;

export const Errs = styled.div`
    position:absolute;
    z-index:100000;
    right:0;
    margin-right:15px;



`;

