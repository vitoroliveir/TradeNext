import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    z-index:100;
    top:0;

    height: 300px;
    width: 100%;
    max-width: 100%;
    border-radius: 15px;
    margin-bottom: 1.5rem;
    overflow: hidden;

    .slick-slider,
    .slick-list,
    .slick-track,
    .slick-slide,
    .slick-slide > div {
        height: 100%;
    }

    .slick-prev,
    .slick-next{
        display: none !important;
    }
`;

export const Card = styled.div`      
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
        background: #000;
    }

    a{
        display: block;
        height: 100%;
        text-decoration:none;
    }

    h2{
        position: absolute;
        left: 18px;
        right: 18px;
        bottom: 18px;
        width:auto;
        margin: 0;

        font-family: 'Inter';
        font-size: 18px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 0.01em;
        text-align: left;
        color: white;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
        overflow-wrap: anywhere;

    }

    @media(min-width:768px){
        h2{
            left: 28px;
            right: 28px;
            font-size: 20px;
        }
    }
`
