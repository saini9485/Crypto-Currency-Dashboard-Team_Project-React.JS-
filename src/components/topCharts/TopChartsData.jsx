import { HighPriceChart } from "./HighPriceChart";

export function TopChartsData({
  image,
  circulating_supply,
  total_supply,
  max_supply,
}) {
  return (
    <>
      {/* <div> */}
      {/* <div className="top_chart_container"> */}
      <div className="circulating_supply supply_box">
        <img src={image} className="ChartImage" />
        <h3 className="Supply">Circulating Supply</h3>
        <h3 className="circulatingData">${circulating_supply}</h3>
        <div className="chart">
          <HighPriceChart />
        </div>
      </div>
      <div className="total_supply supply_box">
        <img src={image} className="ChartImage" />
        <h3 className="Supply">Total_supply</h3>
        <h3 className="totalData">${total_supply}</h3>
        <div className="chart">
          <HighPriceChart />
        </div>
      </div>
      <div className="max_supply supply_box">
        <img src={image} className="ChartImage" />
        <h3 className="Supply">Max_supply</h3>
        <h3 className="maxData">${max_supply}</h3>
        <div className="chart">
          <HighPriceChart />
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
