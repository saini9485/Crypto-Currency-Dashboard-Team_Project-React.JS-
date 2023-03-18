import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export function MonthlyChart() {
  const [monthlyData, setMonthlyData] = useState([
   {
     name: "",
     price: ""
  }
  ]);

  useEffect(() => {
    const monthlyData = async () => {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y"
        )
        .then((res) => {
           // console.log("res",res.data[0].sparkline_in_7d.price)
          setMonthlyData([...res.data[0].sparkline_in_7d.price]);
        });
    };
    monthlyData();
  }, []);
  // useEffect(()=>{
  //    console.log("m",monthlyData)
  // },[monthlyData])
//  {monthlyData.map((item)=>{
//   return(
//      monthlyData.push(item[1]) 
//   )
//  })}
// console.log("monthlyD",monthlyData)
  return (
    <BarChart
      width={500}
      height={300}
      data={monthlyData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" stackId="a" fill="#8884d8" />
      {/* <Bar dataKey="prices" fill="#82ca9d" /> */}
     
    </BarChart>
  );
}
