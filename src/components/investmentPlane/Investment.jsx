// import React from "react";
import React, { useState } from "react";
import { Col, InputNumber, Row, Slider } from "antd";

import SIPG from "../../Assets/sip-growth-graph.jpg";

import "./Investment.css";

const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{
            margin: "0 16px",
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export function Investment() {
  const [inputValue, setInputValue] = useState(0);
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };

  return (
    <>
      <div className="investment_main_container">
        <div className="left_container">
          <div className="plane_text">
            <h1>Say Hello to </h1>
            <h1 style={{ color: "blue", fontWeight: "bolder" }}>
              Systematic Investment Plane
              <span style={{ color: "black" }}>(SIP)</span>
            </h1>
            <h2 style={{ color: "#4f4c4c" }}>
              Invest a fixed amount every month to beat market volatility with
              rupee cost averaging.
            </h2>
          </div>
          <div className="plane_calculator">
            <h3 style={{ margin: "10px" }}>If you bought</h3>
            <div className="Slider">
              <input type="range" className="slider" />

              <Row>
                <Col span={12}>
                  <Slider
                    min={100}
                    max={1000000}
                    onChange={onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={100}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={0}
                    max={1}
                    style={{
                      margin: "0 16px",
                    }}
                    step={0.01}
                    value={inputValue}
                    onChange={onChange}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="right_container">
          <img src={SIPG} className="plane_img" alt="image" />
        </div>
      </div>
    </>
  );
}
<IntegerStep/>