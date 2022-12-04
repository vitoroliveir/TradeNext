import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import {Content} from "./style"
import React, { Component, useState } from 'react';
import { readDb, listDb } from "../../../services/db"

export default function Donut ({uid, qtd}) {
  
    var cost = []
    var name = []
    var show = cost.length <= 12 ? false : true

    listDb(uid).then((response)=>{
      response.map((item)=>{
        readDb(uid , "analytics", item.name ).then((value)=>{
          cost.push(value.cost)
          name.push(value.name)
        })
      })

    })
    
    var state = {
      options: {
        labels:name,
      },

      legend: {
        position: "right",
      },

      width:"50px",

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
              show:show,
              position: "bottom",
              containerMargin: {
                left: 35,
                right: 60,
              }
            }
          }
        }
      ],

      name:name,
      series: cost,
      labels: name,
      
    }

    return (
      <Content>
        <Chart options={state} series={state.series} type="donut"  />
      </Content>
    );
  
}


