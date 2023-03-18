import React from 'react'

import "./HistoryHeader.css"

export  function  HistoryHeader ()  {
   
        return (
            <>
            <div className='history-header-container'>
                     <div>
             <h1 className='history-header'>Crypto History</h1>
             </div>
             
            </div>
            <div className='selectCoin'>
                        <select  name='selectCoin'>
                            <option value="bitcoin">Select Coin</option>
                            <option value="avalanche-2">Avalanche (AVAX)</option>
                            <option value="binancecoin">Binance (BNB)</option>
                            <option value="bitcoin">Bitcoin (BTC) </option>
                            <option value="cardano">Cardano (ADA)</option>
                            <option value="decentraland">Decentraland (MANA)</option>
                            <option value="dogecoin">Dogecoin (DOGE)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="ripple">Ripple (XRP)</option>
                            <option value="solana">Solana (SOL)</option>
                            <option value="tether">Tether (USDT)</option>
                    </select>
                    </div>
            </>
        )
    
}



