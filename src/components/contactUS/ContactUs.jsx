import React from "react";

import "./contactUs.css";

const ContactUs = ({ onSubmitFirstName }) => {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitFirstName(event.currentTarget.elements.usernameInput.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Contact_Form">
          <div>
            <h2 className="Sent_A_Massege">Send A Massege </h2>
            <label htmlFor="usernameInput" className="Contact_Form_Lable">
              FirstName
            </label>
            <input
              id="usernameInput"
              type="text"
              placeholder="First Name"
              className="Contact_Input_Box"
            ></input>
            <label className="Contact_Form_Lable">LastName</label>
            <input
              type="text"
              placeholder="Last Name"
              className="Contact_Input_Box"
            ></input> 
             <label className="Contact_Form_Lable">Email</label>
            <input
              type="text"
              placeholder="Email Address"
              className="Contact_Input_Box"
            ></input>
            <label className="Contact_Form_Lable">Massage</label>
            <input
              type="text"
              placeholder="Write Your Massage Here "
              className="Contact_Input_Massage_Box"
            ></input>
          </div>
          <div>
            <button type="submit" className="Contact_Form_Send_Btn" >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default ContactUs;

