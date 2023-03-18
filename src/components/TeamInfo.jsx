import React from "react";

import {NavLink} from "react-router-dom"
import { Members } from "../data/Data";

import "../styles/Team.css";

const TeamInfo = () => {
  return (
    <>
      <div className="team_member">
        <h1 className="heading">Our Management Team</h1>
        <div className="members_list">
          {Members.map(
            ({
              img,
              name,
              title,
              linkedin,
              github,
              twitter,
              icon1,
              icon2,
              icon3,
            }) => {
              return (
                <>
                  <div className="member_details">
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <p>{title}</p>
                    <div className="social-icons">
                      <a href={linkedin}>{icon1}</a>
                      <a href={github}>{icon2}</a>
                      <a href={twitter}>{icon3}</a>
                    </div>
                  </div>
                </>
              );
            }
          )}
        </div>
      </div >
      <div className="customer_support">
      <h2>We are here to help! Speak to out 24/7 Customer Support Team Anytime!</h2>
     <NavLink to="/support"><button className="customer_support_btn"> Connect Now</button></NavLink> 
    </div>
    </>
  );
};

export default TeamInfo;
