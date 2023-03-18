import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Legend,
} from "recharts";

import '../mainChart/MainChart.css'

const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

export function MainChartN() {
  const [obj, setObj] = useState([
    {
      symbol: "",
      current_price: "",
      high_24h: "",
      low_24h: "",
      ath: "",
    },
  ]);

  const CustomizedAxisTick = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-40)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  useEffect(() => {
    const MainChartData = async () => {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y"
        )
        .then((res) => {
          setObj(res.data);
        });
    };
    MainChartData();
  }, []);

  return (
    <>
      <div className="main_chart_container">
        <BarChart
          width={750}
          height={300}
          data={obj}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey=" symbol" tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar type="monotone" dataKey="symbol" stroke="#0000FF">
            <LabelList content={<CustomizedLabel />} />
          </Bar>
          <Bar dataKey="current_price" stackId="a" fill="#8884d8" />
          <Bar dataKey="high_24h" fill="#82ca9d" />
          <Bar dataKey="low_24h" fill="#ffc658" />
          <Bar dataKey="ath" fill="#ffc658" />
        </BarChart>
      </div>
    </>
  );
}
