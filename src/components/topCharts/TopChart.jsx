import axios from "axios";
import { useEffect, useState } from "react";

import { TopChartsData } from "./TopChartsData";

import "./TopChart.css";

export function TopChart() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
      )
      .then((response) => {
        setCoins([...response.data]);
      });
  }, []);

  return (
    <>
    <div className="top_coin_card">
      {coins.map(
          ({
            image,
            circulating_supply,
            total_supply,
            max_supply,
            
          },i) => {
            if (i < 1) {
              return (
                <>
                  <TopChartsData
                  image={image}
                  circulating_supply={circulating_supply}
                  total_supply={total_supply}
                  max_supply={ max_supply}
                   
                  />
                </>
              );
            }
          }
        )
      }

    </div>
    </>
  );
}
