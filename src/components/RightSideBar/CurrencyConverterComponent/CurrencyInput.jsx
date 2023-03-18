import React from "react";
import {Select} from "antd"

import "./currencyInput.css"

function CurrencyOptions({
  prop,
  fromCurrency,
  toCurrency,
  currencyOptions,
  updateCurrency,
}) {
  const options = currencyOptions.map((data, index) => {
    return (
      <option key={index} value={data}>
        {data}
      </option>
    );
  });
  return (
    <>
      {prop === "From currency" ? (
        <select
          autoFocus="false"
          name="currency"
          className={prop}
          value={fromCurrency}
          onChange={updateCurrency}
        >
          {options}
        </select>
      ) : prop === "To currency" ? (
        <select
          name="currency"
          className={prop}
          value={toCurrency}
          onChange={updateCurrency}
        >
          {options}
        </select>
      ) : null}
    </>
  );
}

export default CurrencyOptions;
