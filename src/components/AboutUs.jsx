import React from "react";

import teamImage from "../Assets/Images/about-us.jpg";

import "../styles/Team.css";

const AboutUs = () => {
  return (
    <>
      <div className="about_us_section">
        <h1 className="heading">About Us</h1>
        <div className="content_data">
          <div className="content_text">
            <h3 className="sub-heading">Who we are?</h3>
            <p>
              We didn't become India's biggest crypto company overnight. The
              journey to make money equal for all began in 2017 with just a
              handful of us.
              <br />
              <br />
              CoinSwitch is now India's largest crypto app with over 18 million
              users and more than 500 employees. We're backed by some of the
              world's leading investors including a16z, Tiger Global and Sequoia
              Capital.
              <br />
              <br />
              The cornerstones of our culture are customer obsession and an
              employee-first approach. We're building a platform that
              democratises investments for everyone — making them simple, safe
              and accessible to every Indian.
            </p>
          </div>

          <div className="img">
            <img src={teamImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
