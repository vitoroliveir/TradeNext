import styled from 'styled-components';
import { FaCoins } from "react-icons/fa";

export const IconFaCoins = styled(FaCoins)`
    height: 25px;
    width: 25px;
`;

export const Body = styled.div`
    background-color: var(--background);
    min-height: 100vh;
    width: 100%;
    padding-bottom: 2rem;
    box-sizing: border-box;
    overflow-x: hidden;
`;

export const Patrimony = styled.div`
    position: relative;
    background-color: white;
    width: 100%;
    min-height: 430px;
    border-radius: 15px;
    padding: 1rem 0.5rem 1.25rem;
    box-sizing: border-box;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

    > p {
        font-family: "inter";
        font-size: 17px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;
        color: var(--gray-50);
        margin: 0.75rem 1rem;
    }

    @media (min-width: 850px) {
        width: min(35%, 380px);
        flex: 0 0 min(35%, 380px);
    }
`;

export const Valor = styled.span`
    color: black;
    position: relative;
    left: 4%;
    font-family: "inter";
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    text-align: start;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: white;
    width: 100%;
    min-height: 780px;
    border-radius: 15px;
    padding: 1rem 0.75rem;
    box-sizing: border-box;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    overflow: hidden;

    h1 {
        font-family: "inter";
        font-size: 20px;
        font-weight: 600;
        color: var(--grenn-100);
        margin: 0.25rem 0.75rem 0.75rem;
    }

    @media (min-width: 850px) {
        flex: 1;
        min-width: 0;
    }
`;

export const TableArea = styled.div`
    width: 100%;
    flex: 1;
    min-width: 0;
    overflow: hidden;
    padding-bottom: 0.5rem;
`;

export const Item = styled.li`
    list-style: none;
    font-family: "inter";
    font-size: 13px;
    font-weight: 500;
    border-radius: 15px;
    min-height: 42px;
    width: 100%;
    min-width: 0;
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.58fr) minmax(0, 0.9fr) minmax(0, 0.9fr) minmax(0, 0.9fr) minmax(0, 1fr);
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.45rem;
    box-sizing: border-box;
    cursor: pointer;

    > div,
    > span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    > div span {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media (max-width: 420px) {
        font-size: 11px;
        gap: 0.2rem;
        padding-inline: 0.25rem;
    }
`;

export const Header = styled.div`
    font-family: "inter";
    font-size: 12px;
    font-weight: 600;
    width: 100%;
    min-width: 0;
    min-height: 35px;
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.58fr) minmax(0, 0.9fr) minmax(0, 0.9fr) minmax(0, 0.9fr) minmax(0, 1fr);
    align-items: center;
    gap: 0.35rem;
    padding: 0.25rem 0.45rem;
    box-sizing: border-box;

    > div {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    > div span {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media (min-width: 850px) {
        font-size: 13px;
    }

    @media (max-width: 420px) {
        font-size: 10px;
        gap: 0.2rem;
        padding-inline: 0.25rem;
    }
`;

export const Modal = styled.button`
    width: calc(100% + 1.5rem);
    height: 44px;
    flex: 0 0 auto;
    position: relative;
    z-index: 3;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    font-family: "inter";
    font-size: 15px;
    font-weight: 600;
    background-color: var(--grenn-150);
    color: white;
    margin: 0.5rem -0.75rem -1rem;
    border-radius: 0 0 15px 15px;
`;

export const ModalEdit = styled.div`
    width: 100%;
    min-width: 0;

    :hover {
        background-color: #E8E8E8;
        border-radius: 5px;
    }

`;

export const Scroll = styled.ul`
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    min-width: 0;
    flex: 1;
    margin: 0;
    padding: 0;
    max-height: 690px;

    &::-webkit-scrollbar {
        width: 13px;
        border: 1px solid white;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--grenn-150);
        border-radius: 6px;
    }
`;

export const ContainerCarteira = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
    max-width: 1280px;
    margin: 8.5rem auto 0;
    padding: 0 1rem;
    box-sizing: border-box;

    @media (min-width: 501px) {
        width: calc(100% - 112px);
        margin-left: 96px;
        margin-right: 16px;
    }

    @media (min-width: 850px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 0 1.5rem;
        width: calc(100% - 112px);
        max-width: 1280px;
        margin-left: 96px;
        margin-right: auto;
    }

    @media (min-width: 1300px) {
        width: calc(100% - 128px);
        margin-left: 104px;
    }
`;

export const Total = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > h1 {
        font-family: "inter";
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;
        color: var(--grenn-100);
        margin: 0 1rem;
        display: flex;
        align-items: center;
        gap: 0.45rem;
    }

    > p {
        font-family: "inter";
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        text-align: start;
        color: var(--grenn-100);
        margin: 0 1rem;
    }
`;

export const Graphic = styled.div`
    width: 100%;
    max-width: 340px;
    margin: 0.5rem auto 0;
`;
