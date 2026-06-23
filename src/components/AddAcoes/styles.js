import styled from 'styled-components';

export const Container = styled.div`

`;

export const Title = styled.h1`
    position: absolute;
    top: 1rem;
    left: 1rem;

    font-family: 'Inter';
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
`;

export const Dados = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    gap: 0.5rem;
    width: 100%;
    max-width: none;

    button{
        width: min(100%, 240px);
        justify-self: center;
        margin-top: 0.5rem;
    }

    @media (min-width: 515px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.75rem 1rem;

        button{
            grid-column: 1 / -1;
        }
    }

    @media (min-width: 1140px) {
        grid-template-columns: repeat(3, minmax(180px, 1fr));
        gap: 0.9rem 1.25rem;
    }
`;

export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0;

    Input {
        padding-right: 5px;
        margin-top: 4px;
        margin-bottom: 10px;
        width: 100%;
    }

    @media (min-width:515px) {
        input{
            width: 100%;
        }
    }

    @media (min-width: 1140px) {
        input{
            width: 100%;
        }
    }

`;

export const Errs = styled.div`
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: min(240px, calc(100vw - 2rem));
    display: flex;
    justify-content: flex-end;
    z-index: 20000;

    > div {
        top: 0;
        width: 100%;
        box-sizing: border-box;
    }

    @media (max-width: 500px) {
        top: 5.75rem;
        right: 0.75rem;
    }
`;

export const WrapEdit = styled.div`
    display: flex;
    gap: 0.75rem;
    grid-column: 1 / -1;
    justify-content: center;
    flex-wrap: wrap;

   button{
        width: min(100%, 180px);
        margin-top: 0.5rem;
   }
`;



