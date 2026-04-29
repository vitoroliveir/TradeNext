import styled from 'styled-components'

export const Body = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    padding: 3.5rem 2rem 2rem;
    box-sizing: border-box;

    @media (max-width: 867px) {
        padding: 1.5rem 1rem;
        gap: 1.5rem;
    }
`;

export const SideImage =  styled.div`
    width: min(46%, 700px);
    min-height: 640px;
    background-color: var(--green-50);
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;

    @media (max-width: 1080px) {
        width: 50%;
        min-height: 560px;
    }

    @media (max-width: 867px) {
        display: none;
    }
`;


export const Logo =  styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;

    @media (max-width: 500px) {
        margin-bottom: 1rem;
    }

    > p{
        margin: 0;

        font-family: 'Inter';
        font-size: 16px;
        font-weight: 500;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-align: left;
    }
`;

export const FormLogin =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: min(430px, 100%);
    margin-top: 0.5rem;

    > h1{
        margin: 0 0 0.5rem 0;
        font-family: 'Inter';
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 0.01em;
        text-align: left;
    }

    > p{
        margin: 0 0 1.5rem 0;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
    }

    @media (max-width: 500px) {
        width: 100%;
        margin-top: 0;

        > h1{
            font-size: 32px;
            line-height: 39px;
        }

        > p{
            font-size: 14px;
            line-height: 24px;
        }
    }
`;


