import axios from "axios";
import React,{useEffect, useState} from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export  function TradeHistory () {
const [tradeHistoryData, setTradeHistoryData] = useState([
    {
        atl_date:"",
        current_price: ""
    }
])

useEffect(()=>{
    const tradeData = async () =>{
        await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/`)
        .then((res)=>{
            //console.log("res",res.data.market_data.current_price)
            const result = ("res",res.data.market_data.current_price)
            //console.log("result",result)
             setTradeHistoryData([res.data]) 
        })
      
    }
    tradeData()
},[])
//console.log("tradeHistoryD",tradeHistoryData)

  return (
    <BarChart
      width={500}
      height={300}
      data={tradeHistoryData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="atl_date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="current_price" stackId="a" fill="#8884d8" />
      {/* <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
      <Bar dataKey="uv" fill="#ffc658" /> */}
    </BarChart>
  );
}
