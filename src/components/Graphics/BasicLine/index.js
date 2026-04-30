import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import { listDb, readDb } from '../../../services/db';
import {
  EmptyChart,
  Graphic
} from "./style"

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const normalizeDate = (date) => {
  if (!date) return new Date().toISOString().slice(0, 10)
  return String(date).replaceAll('/', '-')
}

const buildFallbackSeries = (assets) => {
  const sortedAssets = [...assets].sort((a, b) => {
    return new Date(normalizeDate(a.date)) - new Date(normalizeDate(b.date))
  })

  let total = 0
  const groupedByDate = new Map()

  sortedAssets.forEach((asset) => {
    const date = normalizeDate(asset.date)
    total += Number(asset.return || 0)
    groupedByDate.set(date, total.toFixed(2))
  })

  return {
    values: Array.from(groupedByDate.values()),
    dates: Array.from(groupedByDate.keys()),
  }
}

export default function BasicLine() {
  const [value, setValue] = useState([])
  const [date, setDate] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const uid = localStorage.getItem('uid')

    if (!uid) {
      setLoading(false)
      return
    }

    Promise.all([
      readDb(uid, "total", "HISTORY"),
      listDb(uid, "analytics")
    ]).then(([history, assets]) => {
      const historyValues = Array.isArray(history?.averageMonthValue) ? history.averageMonthValue : []
      const historyDates = Array.isArray(history?.averageMonthDate) ? history.averageMonthDate : []

      if (historyValues.length && historyDates.length) {
        setValue(historyValues)
        setDate(historyDates)
        return
      }

      const fallback = buildFallbackSeries(Array.isArray(assets) ? assets : [])
      setValue(fallback.values)
      setDate(fallback.dates)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <EmptyChart>Carregando evolucao da carteira...</EmptyChart>
  }

  if (!value.length || !date.length) {
    return <EmptyChart>Sem historico suficiente para exibir este grafico.</EmptyChart>
  }

  const state = {
    series: [{
      name: 'Carteira',
      type: 'column',
      data: value
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: 'Evolucao Carteira'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: date,
      xaxis: {
        type: 'datetime'
      },
    },
  };

  return (
    <Graphic>
      <ReactApexChart options={state.options} series={state.series} type="line" height="350px" />
    </Graphic>
  )
}
