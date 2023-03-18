import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


import { TopCoinsData } from "./TopCoinsData";
import img3 from '../../Assets/Coins2.jpg'

// import './TopCoins.css'

export function TopCoins() {
  const [topCoin, setTopCoin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Crypto = async () => {
      // setLoading(true);
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      );
      setTopCoin(response.data);
      setLoading(false);
    };
    Crypto();
  }, []);

  return (
    <div className="top_coin_card m-5">
      {loading ? (
        <h1 className="Loader">
          <i className="fa fa-refresh fa-spin"></i>
        </h1>
      ) : (
        topCoin.map(
          (
            {
              image,
              symbol,
              price_change_percentage_24h,
              price_change_24h,
              total_volume,
              current_price,
            },
            i
          ) => {
            if (i < 3) {
              return (
                <>
                  <TopCoinsData
                    image={image}
                    symbol={symbol}
                    price_change_percentage_24h={price_change_percentage_24h}
                    price_change_24h={price_change_24h}
                    total_volume={total_volume}
                    current_price={current_price}
                  />
                </>
              );
            }
          }
        )
      )}
      <div className="all_coins coin_box">
        <img className="all_coins_logo" src={img3} alt="coins" />
        <div className="ExploreCoin">
          <h3>Crypto Exchange</h3>
          <p>Trusted by millions, fees and fast traders</p>
        </div>
        <div className="explore_coins_btn">
          <NavLink to="/coins" className="ExploreCoins">
            Explore Coins
          </NavLink>
        </div>
      </div>
    </div>
  );
}
