import React from "react";

import ChatBot from "../components/chatbot/ChatBot";
import ContactUs from "../components/contactUS/ContactUs";

import "../styles/Support.css";

const Support = () => {
  return (
    <>
      <div class="container">
        <form class="form-container">
          <div class="headline">
            <span>Contact us</span>
          </div>
          <div class="form-line success">
            <input type="text" class="form-input" />
            <label class="top">Name</label>
            <div class="check-label"></div>
          </div>
          <div class="form-line">
            <input type="text" class="form-input" required />
            <label>Your email *</label>
            <div class="error-label">Field is required!</div>
            <div class="check-label"></div>
          </div>
          <div class="form-line">
            <input type="text" class="form-input" />
            <label>Subject</label>
            <div class="check-label"></div>
          </div>
          <div class="form-line">
            <input class="form-input" required/>
            <label>Message</label>
            <div class="check-label"></div>
            <div class="error-label">Field is required!</div>
          </div>

          <input type="button" class="form-button" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Support;
