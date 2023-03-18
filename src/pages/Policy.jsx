import React from "react";
import {MdOutlinePolicy} from 'react-icons/md'

import { PolicyText } from "../data/Data";

import "../styles/policy.css";

const Policy = () => {
  return (
    <>
      <div className="policy_section">
        <div className="header">
          <div className="left">
            <h1>PRIVACY POLICY</h1>
            <h3>CryptoTrade</h3>
          </div>
          <div className="right">
            <MdOutlinePolicy />
          </div>
        </div>
        <hr />

        <p className="policyText">
          <PolicyText />
        </p>
      </div>
    </>
  );
};

export default Policy;
