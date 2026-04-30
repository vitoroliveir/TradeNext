import styled from 'styled-components';

export const Body = styled.div`
    background-color: var(--background);
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
`;

export const DashboardContent = styled.main`
    width: min(1180px, calc(100% - 32px));
    margin: 0 auto;
    padding: 96px 0 40px;

    @media(min-width: 515px){
        width: calc(100% - 180px);
        margin-left: 148px;
        padding-top: 104px;
    }

    @media(min-width: 1200px){
        width: calc(100% - 220px);
        margin-left: 172px;
    }
`;

export const DashboardHeader = styled.header`
    margin-bottom: 24px;

    h1 {
        color: #111827;
        font-size: 28px;
        font-weight: 700;
        line-height: 1.2;
    }

    p {
        color: var(--gray-50);
        font-size: 15px;
        line-height: 1.5;
        margin-top: 8px;
        max-width: 620px;
    }
`;

export const ChartGrid = styled.section`
    display: grid;
    gap: 24px;
`;

const ChartCard = styled.div`
    background-color: #fff;
    border: 1px solid rgba(208, 213, 221, 0.8);
    border-radius: 8px;
    box-shadow: 0 14px 34px rgba(17, 24, 39, 0.06);
    min-height: 390px;
    padding: 18px 16px 8px;

    @media(min-width: 768px){
        padding: 22px 20px 10px;
    }
`;

export const GraphicSplineArea = styled(ChartCard)``;

export const GraphicBasicLine = styled(ChartCard)``;

export const EmptyMessage = styled.p`
    background: #fff;
    border: 1px solid rgba(246, 75, 60, 0.22);
    border-radius: 8px;
    color: var(--red-50);
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 18px;
    padding: 12px 14px;
`;
