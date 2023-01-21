import styled from 'styled-components';

export const Body= styled.div`
    background-color: var(--background);
    height:955px;
    width: 100vw;


    @media(min-width:515px){
        height:100vh;
        
    }   

`;

export const GraphicSplineArea = styled.div`
    position:absolute;
    left:9vw;
    top:500px;
    width:80vw;
    background-color:white;
    border-radius:10px;


    @media(min-width:515px){
       width:70vw;
       height:40vh;
       top:550px;
       left:17vw;
    }   

`;


export const GraphicBaiscLine = styled.div`
    position:absolute;
    left:9vw;
    top:100px;
    width:80vw;
    background-color:white;
    border-radius:10px;


    @media(min-width:515px){
        width:70vw;
        top:120px;
        height:40vh;
        left:17vw;
    }   

`;







