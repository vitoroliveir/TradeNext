import styled from 'styled-components';

export const Container = styled.div`
    position:absolute;
    z-index:1000;
    width:100vw;
    left:500px;
    display:flex;
    flex-direction:row;

    div{
        background-color:gray;

        &:nth-child(1){
            background-color:black;
            width:100px;
        }
        &:nth-child(2){
            background-color:black;
            width:100px;
        }
        &:nth-child(3){
            background-color:red;
            width:100px;
        }
        &:nth-child(4){
            background-color:gray;
            width:100px;
        }
        &:nth-child(5){
            background-color:green;
            width:100px;
        }
    }

    h3{
        color:black;
    }
`;