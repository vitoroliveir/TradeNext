import styled from 'styled-components';

export const Graphic = styled.div`
  width: 100%;
  height: clamp(280px, 46vw, 380px);
  min-width: 0;

  .apexcharts-canvas,
  .apexcharts-svg,
  .apexcharts-inner {
    max-width: 100%;
  }
`

export const EmptyChart = styled.div`
  align-items: center;
  color: var(--gray-50);
  display: flex;
  font-size: 14px;
  justify-content: center;
  min-height: 350px;
  text-align: center;
`
