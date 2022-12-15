import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { Content } from "./style"
import React, { useEffect, useState } from 'react';
import { readDb } from "../../../services/db"

export default function Donut() {
  const [cost, setCost] = useState([])
  const [name, setName] = useState([])



  useEffect(() => {
    readDb(localStorage.getItem('uid'), "total", "PIE").then((value) => {
      setCost(value.cost)
      setName(value.name)
    })
  }, [])
  var show = cost.length <= 12 ? false : true
  var state = {
    name: name,
    series: cost,
    labels: name,
    options: {
      labels: name,
    },

    legend: {
      show: false,
      position: "right",
    },

    width: "50px",

    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            show: show,
            position: "bottom",
            containerMargin: {
              left: 35,
              right: 60,
            }
          }
        }
      }
    ],

  }

  return (
    <Content>
      <Chart options={state} series={state.series} type="donut" />
    </Content>
  );

}


