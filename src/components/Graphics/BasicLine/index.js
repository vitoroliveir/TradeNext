import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import {
  Graphic
} from "./style"
import { useEffect, useState } from 'react';
import { readDb } from '../../../services/db';


export default function BasicLine() {
  const [value, setValue] = useState([])
  const [date, setDate] = useState([])

  useEffect(() => {
    readDb(localStorage.getItem('uid'), "total", "HISTORY").then((value) => {
        setValue(value.averageAll)
        setDate(value.dateAll)
    })
  }, [])

  const state = {

    series: [{
      name: 'Carteira',
      type: 'column',
      data: value
    }],
    width: "150px",
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: 'Evolução Carteira'
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels:date,
      xaxis: {
        type: 'datetime'
      },
    },


  };

  return (


    <Graphic>
      <ReactApexChart options={state.options} series={state.series} type="line" height={350} width={850} />
    </Graphic>
  )
}


