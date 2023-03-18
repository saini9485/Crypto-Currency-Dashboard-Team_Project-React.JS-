import { AreaChart, Area } from "recharts";

 const data = [
  {
    uv: 4000,
    pv: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
  },
  {
    uv: 2000,
    pv: 9800,
  },
  {
    uv: 2780,
    pv: 3908,
  },
  {
    uv: 1890,
    pv: 4800,
  },
  {
    uv: 2390,
    pv: 3800,
  },
  {
    uv: 3490,
    pv: 4300,

  }
];  //this is not static data 

export  function HighPriceChart () {
  return (
    <AreaChart
      width={230}
      height={70}
      data={data}
      margin={{ 
        right: 0,
        left: 0,
        bottom:5,
      }}
    >
      <Area type="monotone" dataKey="uv" stroke="#f896e7" fill="#d1e5fe" />
    </AreaChart>
  );
}
