import styled from 'styled-components';

export const Body = styled.div`
  background-color: var(--background);
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export const Page = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 8.5rem 1rem 2.5rem;
  box-sizing: border-box;

  @media(min-width: 501px){
    width: calc(100% - 112px);
    margin-left: 96px;
    margin-right: 16px;
  }

  @media(min-width: 850px){
    width: calc(100% - 112px);
    margin-left: 96px;
    margin-right: auto;
    padding: 8.5rem 1.5rem 2.5rem;
  }

  @media(min-width: 1300px){
    width: calc(100% - 128px);
    margin-left: 104px;
  }
`;

export const Header = styled.header`
  background: #fff;
  border: 1px solid rgba(208, 213, 221, 0.8);
  border-radius: 8px;
  box-shadow: 0 14px 34px rgba(17, 24, 39, 0.06);
  padding: 20px;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Identity = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;

  img {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    border: 1px solid rgba(208, 213, 221, 0.75);
    object-fit: contain;
    padding: 5px;
  }

  h1 {
    color: #111827;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    color: var(--gray-50);
    font-size: 14px;
    line-height: 1.4;
    margin-top: 5px;
  }
`;

export const PriceBlock = styled.div`
  text-align: left;

  @media(min-width: 720px){
    text-align: right;
  }

  strong {
    color: #111827;
    display: block;
    font-size: 34px;
    font-weight: 700;
    line-height: 1;
  }

  span {
    color: ${({ positive }) => positive ? '#138a5b' : '#d93025'};
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    margin-top: 8px;
  }

  p {
    color: var(--gray-50);
    font-size: 12px;
    margin-top: 8px;
  }
`;

export const HeaderStats = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 22px;

  @media(min-width: 760px){
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Stat = styled.div`
  border-top: 1px solid rgba(208, 213, 221, 0.9);
  padding-top: 12px;

  span {
    color: var(--gray-50);
    display: block;
    font-size: 12px;
    line-height: 1.2;
  }

  strong {
    color: #111827;
    display: block;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.25;
    margin-top: 6px;
  }
`;

export const ContentGrid = styled.section`
  display: grid;
  gap: 20px;
  margin-top: 20px;

  @media(min-width: 980px){
    grid-template-columns: minmax(0, 1fr) 340px;
    align-items: start;
  }
`;

export const Panel = styled.div`
  background: #fff;
  border: 1px solid rgba(208, 213, 221, 0.8);
  border-radius: 8px;
  box-shadow: 0 14px 34px rgba(17, 24, 39, 0.06);
  min-width: 0;
  padding: 18px;

  h2 {
    color: #111827;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 14px;
  }
`;

export const ChartWrap = styled.div`
  height: 360px;
  min-width: 0;

  @media(max-width: 600px){
    height: 300px;
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  gap: 0;
`;

export const MetricRow = styled.div`
  align-items: center;
  border-top: 1px solid rgba(208, 213, 221, 0.75);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 0;

  span {
    color: var(--gray-50);
    font-size: 14px;
    line-height: 1.25;
  }

  strong {
    color: #111827;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.25;
    text-align: right;
  }
`;

export const StateMessage = styled.div`
  background: #fff;
  border: 1px solid rgba(208, 213, 221, 0.8);
  border-radius: 8px;
  color: var(--gray-50);
  font-size: 15px;
  line-height: 1.5;
  padding: 18px;
`;
