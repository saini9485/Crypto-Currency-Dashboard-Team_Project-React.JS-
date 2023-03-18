import { useState } from "react";

import { CryptoHistory } from "../CryptoHistory/CryptoHistory";
import { MainChart } from "../mainChart/MainChart";
import { MainChartN } from "../mainChartN/MainChartN";
import { OpenClose } from "../openCloseChart/OpenClose";
import { TopChart } from "../topCharts/TopChart";
import { TopCoins } from "../topCoins/TopCoins";


import "./MainSection.css";

export function MainSection() {
  const [lightDark , setLightDark] = useState(true)
  return (
    <>
      <div className="crypto_main_container">
        <div className={lightDark ? "white" : "dark"}>
        <div className="main_header">
          <div className="Investment">
            <span className="rate">$34,5464.89 </span>
            <span className="profit_loss">+$454.67</span>
          </div>
          <div style ={{display:"flex"}}>
          <h2>Bitcoin-USD(BTC-USD)</h2>
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
        </div>
        <TopChart />
        <CryptoHistory />
<MainChartN/>
         {/* <OpenClose/> */}
         <MainChart/>
        <TopCoins />
      </div>
      </div>
    </>
  );
}
