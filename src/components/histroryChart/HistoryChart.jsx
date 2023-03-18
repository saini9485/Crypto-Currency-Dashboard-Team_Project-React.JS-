import React from 'react'

import { HistoryHeader } from '../historyHeader/HistoryHeader'
import { OpenClose } from '../openCloseChart/OpenClose'
import {MainChart} from "../mainChart/MainChart"
// import { TradeHistory } from '../tradehistory/TradeHistory'

import "./HistoryChart.css"

export  function HistoryChart() {
  return (
    <div> 
       <HistoryHeader/>
     <MainChart/>
      {/* <TradeHistory/> */}
      <OpenClose/>
     
      </div>
  )
}

