import axios from "axios";
import { SearchOutlined } from "@ant-design/icons"
import React, { useState, useEffect } from "react";

import Coin from "./Coin";

import "./Crypto.css";


export function Crypto() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
   const [lightDark , setLightDark] = useState(true)
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false`
      )
      .then((response) => {
        setCoins([...response.data]);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="coins_container" >
        <div className={lightDark ? "white" : "dark"}>
          <div className="coin-search-container">
        <div className="coin-search" >
          <form>
            <input
              className="coin-input"
              type="text"
              onChange={handleChange}
              placeholder="Search"
            />
            <button className="Search_Btn">
              <SearchOutlined />
            </button>
          </form>
        </div>
        <div className="top-toggle">
          {lightDark ? (
            <i
              class="fa-solid fa-moon mo" 
              onClick={() => setLightDark(!lightDark)}
            ></i>
          ) : (
            <i
              class="fa-solid fa-sun su" style = {{"color":"lightcoral"}}
              onClick={() => setLightDark(!lightDark)}
            ></i>
          )}
        </div>
       
        </div>
        <div className="explore_coins_header" >
          <h3 className="header_text" >NAME</h3>
          <h3 className="header_text">SYMBOL</h3>
          <h3 className="header_text">PRICE</h3>
          <h3 className="header_text">VOLUM</h3>
          <h3 className="header_text">24H CHANCE</h3>
          <h3 className="header_text">M. CAP</h3>
        </div>
        {filteredCoins.map(
          ({
            id,
            name,
            current_price,
            symbol,
            total_volume,
            market_cap,
            image,
            price_change_percentage_24h,
          }) => {
            return (
              <Coin
                key={id}
                name={name}
                price={current_price}
                symbol={symbol}
                marketcap={total_volume}
                volume={market_cap}
                image={image}
                priceChange={price_change_percentage_24h}
              />
            );
          }
        )}
        </div>
      </div>
    </>
  );
}
