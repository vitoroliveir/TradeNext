import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height:1355px;
    width: 100vw;
    position: absolute;

    
    background-color: var(--background);

    @media (max-width: 870px){
      left: 0;
      display: flex;
      flex-direction: column;

    }

    @media(min-width:515px){
        height:100vh;
    }

`;

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
  width: 73vw;
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
    width: 38vw;
    padding-left:4px;
  }

  @media (min-width: 1200px) {
    width: 40vw;

  }
`;

export const Content = styled.a`
  text-decoration: none;
  
`;

export const NewsMain = styled.div`
   background-color: white;
    position: relative;
    width: 90vw;
    border-radius: 10px;
    top: 100px;

    >h1{
      position: relative;
      left: 25%;
      color: black;
      margin-left: 10px;
      margin-top: 20px;
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

        h1{
          left: 30%;
        }
    }

    @media (min-width: 870px) {
      width: 45vw;
      height: 85vh;
      top: 30px;
      left: 100px;
      
    }

    @media (min-width: 1750px) {
      h1{
        left: 40%;
      }
  }

`;



export const CardMain = styled.li`
  margin-left: 15px;
`;

export const Main = styled.div`
  position: relative;
  width: 93%;
  padding-bottom: 25px;
  display: flex;
  align-items: center;

  

  img{
    width: 100%;
    height: 20%;
    left: 5px;
    border-radius: 5px;
  }

  @media (min-width: 870px) {
      position: relative;
      bottom: 15px;
      img{
        width: 100%;
        max-width: 650px;

      }
  }
  @media (min-width: 1750px) {
      position: relative;
      left: 8%;

  }
`;

export const SubNews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  top: 50px;
  width: 95%;
  height: 100px;
  display: flex;
  align-items: center;


  img{
    width: 100%;
    height: 130px;
    border-radius: 5px;
  }


  @media (min-width: 870px) {
        flex-direction: row;
        position: absolute;
        top: 425px;


        img{
          width: 100%;
          max-width: 400px;
          height: 170px;
          border-radius: 5px;
        }
  }
`;



export const List = styled.ul`
  position: relative;
  top: 70px;
  overflow-y: scroll;
  height: 90%;
  width: 95%;

  &::-webkit-scrollbar{
        width:13px;
        border: 1px solid white;
    }

    &::-webkit-scrollbar-thumb{
        background-color: var(--grenn-150);
        border-radius:6px;
        
    }

`;

export const ListMain = styled.ul`
  position: relative;
  top: 40px;
  left: 2%;

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



