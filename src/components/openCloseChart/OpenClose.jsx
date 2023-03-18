// import axios from "axios";
// import React, { useState, useEffect } from "react";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// export function OpenClose() {
//   const [historyData, setHistoryData] = useState([
//     {
//     "Time Series (5min)":"2022-11-23 20:00:00",
//     "1. open": "16354",
//     "2. high": "16853",
//     "3. low": "15363",
//     "4. close": "15667"
//     },
//   ]);
 
//   useEffect(() => {
//     axios
//       .get(
//         `https://alpha-vantage.p.rapidapi.com/query`,{
//           params: {
//             interval: '5min',
//             function: 'TIME_SERIES_INTRADAY',
//             symbol: 'MSFT',
//             datatype: 'json',
//             output_size: 'compact'
//           },
//    headers: {
//     'X-RapidAPI-Key': '82a76f8ad3mshe05dc70539423d5p18ba88jsndb26b70a6c41',
//     'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
//    }
//         })
//       .then((response) => {
//         const result = (response.data["Time Series (5min)"]["2022-11-23 20:00:00"])
//         //console.log("result",result)
//          //console.log("Response",response.data["Time Series (5min)"]["2022-11-23 20:00:00"]);
//          setHistoryData([historyData, ...result])
//       });
//   }, []);
//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={historyData}
//       margin={{
//         top: 20,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="Time Series (5min)" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="1. open" stackId="a" fill="#8884d8" />
//       <Bar dataKey="2. high" fill="#82ca9d" />
//       <Bar dataKey="3. low" fill="#ffc658" />
//       <Bar dataKey="4. close" fill="#ffc658" />
//     </BarChart>
//   );
// }
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

const CustomizedLabel = ({ x, y, stroke, value }) => {
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  };




export function OpenClose () {
  
    const [obj, setObj] = useState([
        {
          symbol: "",
          current_price: "",
          high_24h: "",
          low_24h: "",
          ath:""
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
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y"
            )
            .then((res) => {
              setObj(res.data);
            });
        };
        MainChartData();
      }, []);


  return (
    <BarChart
      width={1000}
      height={400}
      data={obj}
      margin={{
        top: 40,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey=" symbol"  tick={<CustomizedAxisTick />}/>
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
  );
}



