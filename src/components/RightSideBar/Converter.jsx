import React, { useEffect, useState } from "react";
import CurrencyOptions from "./CurrencyConverterComponent/CurrencyInput";
import { Input } from "antd";

import "./RightSideBarCSS_Files/converter.css";

export const Converter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [currencyNames, setCurrencyNames] = useState({});
  useEffect(() => {
    fetch(`https://api.frankfurter.app/currencies`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions(Object.keys(data));
        setFromCurrency(Object.keys(data)[0]);
        setToCurrency(Object.keys(data)[0]);
        setCurrencyNames(data);
      });
  }, []);
  useEffect(() => {
    if (parseInt(fromAmount) === 0) {
      setToAmount(0);
    } else if (fromAmount === "") {
      setToAmount("");
    } else if (fromCurrency === toCurrency) {
      setToAmount(fromAmount);
    } else {
      fetch(
        `https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => setToAmount(Object.values(data.rates)[0]));
    }
  }, [fromCurrency, toCurrency, fromAmount, toAmount]);
  return (
    <div className="converter_section">
      {/* <div className="container"> */}
      <div className="inside_converter_section_1">
        <Input
          type="number"
          autoComplete="off"
          value={fromAmount}
          className="input"
          onChange={(e) => setFromAmount(e.target.value)}
          autoFocus="false"
        />
        <CurrencyOptions
          prop="To currency"
          toCurrency={toCurrency}
          currencyOptions={currencyOptions}
          updateCurrency={(e) => setToCurrency(e.target.value)}
        />
      </div>

      <div className="inside_converter_section_1">
        <input className="output" disabled value={toAmount} type="text" />
        <CurrencyOptions
          prop="From currency"
          fromCurrency={fromCurrency}
          currencyOptions={currencyOptions}
          updateCurrency={(e) => setFromCurrency(e.target.value)}
        />
      </div>
      {/* </div> */}
    </div>
  );
};
