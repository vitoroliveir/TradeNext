import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    z-index:100;
    top:100px;

    height: 50px;
    width: 100vw;

    background-color:white ;

    .slick-prev,
    .slick-next{
        display: none !important;
    }

    @media(min-width:501px){
        width: 94vw;
        left: 6%;
    }

    @media(min-width:1511px){
        width: 96vw;
        left: 4%;
    }
`;

export const Card = styled.div`
    height: 30px;
    border-right: 1px solid rgba(0,0,0,0.2);
    border-left: 1.5px solid rgba(0,0,0,0.2);
    line-height: 32px;
    background-color:white ;
    margin-top:9px;
    padding-left: 10%;

    h2{
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 600;

    }

    h3{
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 600;
    
    }

    span{
        left: 137px;
        top: -32px;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 600;
    
    }

    div{
        width: 80%;
        height: 100%;
        display: flex;
        align-items:center;
        justify-content:space-around;
    }

`
