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
  const [valueSelic, setValueSelic] = useState([])

  useEffect(() => {
    readDb(localStorage.getItem('uid'), "total", "HISTORY").then((value) => {
        setValue(value.percentage)
        setDate(value.dateAll)
        setValueSelic(value.percentageSelic.reverse())
    })
  }, [])

  const state = {

    series: [{
        name: 'carterira',
        data: value
      },
      {
        name: 'selic',
        data: valueSelic
      }],
      
      options: {
        chart: {
          height: 350,
          type: 'area'
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
      <ReactApexChart options={state.options} series={state.series} type="line" height="350px"/>
    </Graphic>
  )
}