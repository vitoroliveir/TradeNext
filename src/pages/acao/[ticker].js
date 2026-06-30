import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import {
  Body,
  ChartWrap,
  ContentGrid,
  Header,
  HeaderStats,
  HeaderTop,
  Identity,
  MetricRow,
  MetricsGrid,
  Page,
  Panel,
  PriceBlock,
  Stat,
  StateMessage,
} from '../../styles/acao';

const formatCurrency = (value) => {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return '-';

  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

const formatNumber = (value) => {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return '-';
  return Number(value).toLocaleString('pt-BR');
};

const formatCompact = (value) => {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return '-';

  return Intl.NumberFormat('pt-BR', {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(Number(value));
};

const formatPercent = (value) => {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return '-';
  const number = Number(value);
  return `${number > 0 ? '+' : ''}${number.toFixed(2).replace('.', ',')}%`;
};

const formatDate = (value) => {
  if (!value) return '-';

  return new Date(value).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const sanitizeTicker = (ticker) => String(ticker || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');

export default function StockPage() {
  const router = useRouter();
  const ticker = sanitizeTicker(router.query.ticker);
  const [stock, setStock] = useState(null);
  const [ChartComponent, setChartComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    import('react-apexcharts').then((module) => {
      if (isMounted) {
        setChartComponent(() => module.default);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!router.isReady || !ticker) return;

    const controller = new AbortController();

    setLoading(true);
    setError('');

    fetch(`/api/quote/${ticker}?range=6mo&interval=1d`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || 'Nao foi possivel consultar o ativo');
        }

        setStock(data.results[0]);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Nao foi possivel consultar o ativo');
          setStock(null);
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [router.isReady, ticker]);

  const chart = useMemo(() => {
    const historical = Array.isArray(stock?.historicalDataPrice) ? stock.historicalDataPrice : [];

    return {
      series: [{
        name: stock?.symbol || 'Ativo',
        data: historical.map((item) => ({
          x: new Date(item.date * 1000),
          y: Number(item.close || 0),
        })),
      }],
      options: {
        chart: {
          type: 'area',
          height: '100%',
          parentHeightOffset: 0,
          toolbar: { show: false },
          zoom: { enabled: false },
        },
        colors: ['#119598'],
        dataLabels: { enabled: false },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.28,
            opacityTo: 0.03,
          },
        },
        grid: {
          borderColor: '#eef0f5',
        },
        stroke: {
          curve: 'smooth',
          width: 3,
        },
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              colors: '#667085',
              fontSize: '11px',
            },
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => `R$ ${Number(value || 0).toFixed(2)}`,
            style: {
              colors: '#667085',
              fontSize: '11px',
            },
          },
        },
        tooltip: {
          x: {
            format: 'dd/MM/yyyy',
          },
          y: {
            formatter: (value) => formatCurrency(value),
          },
        },
      },
    };
  }, [stock]);

  const changePercent = Number(stock?.regularMarketChangePercent || 0);
  const isPositive = changePercent >= 0;

  return (
    <Body>
      <Sidebar Page={ticker || 'Ativo'} />

      <Page>
        {loading ? (
          <StateMessage>Carregando dados do ativo...</StateMessage>
        ) : error ? (
          <StateMessage>{error}</StateMessage>
        ) : stock ? (
          <>
            <Header>
              <HeaderTop>
                <Identity>
                  {stock.logourl ? <img src={stock.logourl} alt={stock.symbol} /> : null}
                  <div>
                    <h1>{stock.symbol} - {stock.longName || stock.shortName}</h1>
                    <p>Moeda em {stock.currency || 'BRL'} - atualizado em {formatDate(stock.regularMarketTime)}</p>
                  </div>
                </Identity>

                <PriceBlock positive={isPositive}>
                  <strong>{formatCurrency(stock.regularMarketPrice)}</strong>
                  <span>{formatCurrency(stock.regularMarketChange)} ({formatPercent(stock.regularMarketChangePercent)})</span>
                  <p>Fechamento anterior: {formatCurrency(stock.regularMarketPreviousClose)}</p>
                </PriceBlock>
              </HeaderTop>

              <HeaderStats>
                <Stat>
                  <span>Abertura</span>
                  <strong>{formatCurrency(stock.regularMarketOpen)}</strong>
                </Stat>
                <Stat>
                  <span>Minima do dia</span>
                  <strong>{formatCurrency(stock.regularMarketDayLow)}</strong>
                </Stat>
                <Stat>
                  <span>Maxima do dia</span>
                  <strong>{formatCurrency(stock.regularMarketDayHigh)}</strong>
                </Stat>
                <Stat>
                  <span>Volume</span>
                  <strong>{formatCompact(stock.regularMarketVolume)}</strong>
                </Stat>
              </HeaderStats>
            </Header>

            <ContentGrid>
              <Panel>
                <h2>Historico de preco</h2>
                <ChartWrap>
                  {chart.series[0].data.length && ChartComponent ? (
                    <ChartComponent options={chart.options} series={chart.series} type="area" width="100%" height="100%" />
                  ) : chart.series[0].data.length ? (
                    <StateMessage>Carregando grafico...</StateMessage>
                  ) : (
                    <StateMessage>Sem historico suficiente para exibir este grafico.</StateMessage>
                  )}
                </ChartWrap>
              </Panel>

              <Panel>
                <h2>Estatisticas</h2>
                <MetricsGrid>
                  <MetricRow>
                    <span>Faixa 52 semanas</span>
                    <strong>{stock.fiftyTwoWeekRange || '-'}</strong>
                  </MetricRow>
                  <MetricRow>
                    <span>Minima 52 semanas</span>
                    <strong>{formatCurrency(stock.fiftyTwoWeekLow)}</strong>
                  </MetricRow>
                  <MetricRow>
                    <span>Maxima 52 semanas</span>
                    <strong>{formatCurrency(stock.fiftyTwoWeekHigh)}</strong>
                  </MetricRow>
                  <MetricRow>
                    <span>Valor de mercado</span>
                    <strong>{formatCompact(stock.marketCap)}</strong>
                  </MetricRow>
                  <MetricRow>
                    <span>P/L</span>
                    <strong>{formatNumber(stock.priceEarnings)}</strong>
                  </MetricRow>
                  <MetricRow>
                    <span>LPA</span>
                    <strong>{formatCurrency(stock.earningsPerShare)}</strong>
                  </MetricRow>
                </MetricsGrid>
              </Panel>
            </ContentGrid>
          </>
        ) : null}
      </Page>
    </Body>
  );
}
