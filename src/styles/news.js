import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--background);
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 6.5rem 1rem 1.5rem;

  @media (min-width: 870px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    padding: 6.5rem 1.25rem 1.25rem 6.25rem;
  }
`;

export const NewsMain = styled.section`
  background-color: white;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  > h1 {
    margin: 0 0 1rem;
    color: black;
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 600;
  }

  @media (min-width: 870px) {
    width: min(46vw, 700px);
    min-height: calc(100vh - 8rem);
  }
`;

export const ListMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Main = styled.div`
  width: 100%;
  min-height: 300px;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
`;

export const SubNews = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
  width: 100%;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardMain = styled.li`
  list-style: none;
  margin: 0;

  border-radius: 8px;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const New = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  > h1 {
    align-self: flex-start;
    margin: 0 0 1rem;
    color: black;
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 600;
  }

  @media (min-width: 870px) {
    width: min(44vw, 660px);
    min-height: calc(100vh - 8rem);
  }
`;

export const List = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  height: min(70vh, 650px);
  width: 100%;

  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--grenn-150);
    border-radius: 6px;
  }
`;

export const Card = styled.li`
  min-height: 55px;
  width: 100%;
  background-color: rgba(236, 236, 236, 0.72);
  margin: 8px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 0.35rem 0.5rem;
  box-sizing: border-box;

  :hover {
    background-color: rgba(145, 228, 137, 0.5);
  }
`;

export const Content = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

export const Title = styled.h1`
  color: black;
  margin: 0;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.01em;
  text-align: left;
`;
