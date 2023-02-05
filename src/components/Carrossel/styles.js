import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    z-index:100;
    top:20px;

    height: 300px;
    width: 85vw;
    border-radius: 15px;

    .slick-prev,
    .slick-next{
        display: none !important;
    }


    @media(min-width:501px){
        width: 70vw;
    }
    
    @media(min-width:850px){
        width: 45vw;
    }

    @media(min-width:1107px){
        width: 50vw;
    }

    @media(min-width:1218px){
        width: 55vw;
    }
`;

export const Card = styled.div`      
    width: 40vw;
    height: 300px;
    border-radius: 15px;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background: #000;
    }

    a{
        text-decoration:none;
    }

    h2{
        position: relative;
        
        top:-65px;
        left: 35px;
        width:85% ;

        font-family: 'Inter';
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0.01em;
        text-align: left;
        color: white;

    }

`
