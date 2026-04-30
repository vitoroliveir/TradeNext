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

  let totalCost = 0
  let totalReturn = 0
  const groupedByDate = new Map()

  sortedAssets.forEach((asset) => {
    const date = normalizeDate(asset.date)
    totalCost += Number(asset.cost || 0)
    totalReturn += Number(asset.return || 0)

    const percentage = totalCost > 0
      ? (((totalReturn - totalCost) / totalCost) * 100).toFixed(2)
      : 0

    groupedByDate.set(date, percentage)
  })

  return {
    values: Array.from(groupedByDate.values()),
    dates: Array.from(groupedByDate.keys()),
  }
}

const fetchSelicPercentages = async (dates) => {
  if (!dates.length) return []

  const response = await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json')
  const data = await response.json()
  const selicData = Array.isArray(data) ? data : []

  if (!selicData.length) return dates.map(() => 0)

  const orderedSelic = selicData
    .map((item) => ({
      date: normalizeDate(String(item.data || '').split('/').reverse().join('-')),
      value: Number(String(item.valor || 0).replace(',', '.')),
    }))
    .filter((item) => item.date && !Number.isNaN(item.value))
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  return dates.map((date) => {
    const targetDate = normalizeDate(date)
    const total = orderedSelic.reduce((sum, item) => {
      return item.date <= targetDate ? sum + item.value : sum
    }, 0)

    return total.toFixed(2)
  })
}

export default function SplineArea() {
  const [value, setValue] = useState([])
  const [date, setDate] = useState([])
  const [valueSelic, setValueSelic] = useState([])
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
    ]).then(async ([history, assets]) => {
      const historyValues = Array.isArray(history?.percentage) ? history.percentage : []
      const historyDates = Array.isArray(history?.dateAll) ? history.dateAll : []
      const historySelic = Array.isArray(history?.percentageSelic) ? history.percentageSelic.slice().reverse() : []

      if (historyValues.length && historyDates.length) {
        setValue(historyValues)
        setDate(historyDates)
        setValueSelic(historySelic.length ? historySelic : await fetchSelicPercentages(historyDates))
        return
      }

      const fallback = buildFallbackSeries(Array.isArray(assets) ? assets : [])
      setValue(fallback.values)
      setDate(fallback.dates)
      setValueSelic(await fetchSelicPercentages(fallback.dates))
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <EmptyChart>Carregando comparativo...</EmptyChart>
  }

  if (!value.length || !date.length) {
    return <EmptyChart>Sem historico suficiente para comparar carteira e Selic.</EmptyChart>
  }

  const state = {
    series: [
      {
        name: 'Carteira',
        data: value
      },
      {
        name: 'Selic',
        data: valueSelic
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Carteira vs Selic'
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: date
      },
      tooltip: {
        x: {
          format: 'yy/MM/dd'
        },
      },
    },
  };

  return (
    <Graphic>
      <ReactApexChart options={state.options} series={state.series} type="line" height="350px" />
    </Graphic>
  )
}
