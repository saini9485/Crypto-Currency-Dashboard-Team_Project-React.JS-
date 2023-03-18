import React from "react";

import AboutUs from "../components/AboutUs";
import TeamInfo from "../components/TeamInfo";

import "../styles/Team.css";

const Team = () => {
  return (
    <>
      <div>
        <AboutUs />

        <div className="middle_text">
          <h4>Starts your crypto journey here!</h4>
        </div>

        <TeamInfo />
      </div>
    </>
  );
};

export default Team;
