import styled from 'styled-components';

export const New = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 90vw;
    height: 100vh;
    position: relative;
    top: 280px;
    border-radius: 10px;
    
    
    >h1{
      position: absolute;

      height: 50px;
      background-color: white;
      color: black;
      padding-left: 15px;
      padding-top: 20px;
      font-family: 'Inter';
      font-size: 20px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0.01em;
      text-align: left;
    }

    @media (min-width: 515px){
        width: 80vw;
        left: 5%;
    }

    @media (min-width: 870px) {
      width: 45vw;
      height: 85vh;
      top: 30px;
      left: 110px;
    }
    
    

    
`;

export const Card = styled.li`
  height: 55px;
  width: 80vw;
  background-color: rgba(236, 236, 236, 0.716);
  margin: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;

  :hover{
    background-color: rgba(145, 228, 137, 0.5);
  }

  @media (min-width: 870px) {
    height: 55px;
    width: 42.5vw;
    }
`;

export const Content = styled.a`
  text-decoration: none;
  
`;

export const List = styled.ul`
  position: relative;
  top: 70px;
  overflow: scroll;
  height: 90%;
  width: 95%;

`;


export const Title = styled.h1`
    color: black;
    margin-left: 5px;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-align: left;
`;