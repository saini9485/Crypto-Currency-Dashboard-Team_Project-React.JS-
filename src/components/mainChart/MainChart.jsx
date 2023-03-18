import axios from "axios";
import { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";

import './MainChart.css'

const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export function MainChart() {
  const [obj, setObj] = useState([
    {
      symbol: "",
      current_price: "",
      high_24h: "",
      low_24h: "",
      close: 536,
    },
  ]);

  useEffect(() => {
    const MainChartData = async () => {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
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
      <ResponsiveContainer>
        <LineChart
          // width={750}
          // height={330}
          data={obj}
          margin={{
            top: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="symbol" height={60} tick={<CustomizedAxisTick />} />

          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="current_price" stroke="#0000FF">
            <LabelList content={<CustomizedLabel />} />
          </Line>
          <Line type="monotone" dataKey="high_24h" stroke="#82ca9d" />
          <Line type="monotone" dataKey="low_24h" stroke="#FF0000" />
          <Line type="monotone" dataKey="close" stroke="#FF0000" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </>
  );
}