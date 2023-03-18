import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Signup from "./Signup";

// import sideImage from "../../Stuck at Home - Stats and Graphs (1).png";

import "./signup.css";

function Login() {
  const Fullname = useRef();
  const email = useRef();
  const password = useRef();
  const ConfirmPassword = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  // const localConfirmPassword = localStorage.getItem("ConfirmPassword");
  const localName = localStorage.getItem("Fullname");
  const redirectPage = useNavigate();

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });
  const handleClick = () => {
    if (
      Fullname.current.value &&
      email.current.value &&
      password.current.value &&
      ConfirmPassword.current.value
    ) {
      localStorage.setItem("Fullname", Fullname.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("ConfirmPassword", ConfirmPassword.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
      redirectPage("/dashboard");
    } else {
      alert("Please Enter Detalis");
    }
  };

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
      redirectPage("/dashboard");
    } else {
      alert("Please Enter valid Credential");
    }
  };
  return (
    <>
      <div>
        {showHome ? (
          <Signup />
        ) : show ? (
          <div className="main_log_in">

         

            <div className="log_in_right_section">
              <input placeholder="Email" type="email" ref={email} />

              <input placeholder="Password" type="password" ref={password} />
              <Button onClick={handleSignIn}>Sign In</Button>
            </div>



            <div className="log_in_left_section">
              <h1>Hello, {localName} </h1>
              <h1>Login To Your Account</h1>
            </div>

          </div>
        ) : (
          <div className="main_sign_up">
            <div className="sign_up_left_section">
              {/* <div className="SignUpPageProfile"></div> */}{" "}
              <h1>Create Account </h1> {/* <div className="input_space"> */}
              <input
                autofocus="false"
                minLength={7}
                placeholder="Full Name"
                type="text"
                ref={Fullname}
                required
              />
              {/* </div> */}
              {/* <div className="input_space">
            </div> */}
              <input placeholder="Email" type="email" ref={email} required />
              {/* <div className="input_space">
            </div> */}
              <input
                minLength={7}
                placeholder="Password"
                type="password"
                ref={password}
                required
              />
              {/* <div className="input_space">
            </div> */}
              <input
                // minLength={7}
                placeholder="Confirm Password"
                type="password"
                ref={ConfirmPassword}
                required
              />
              <div className="sign_up_btn">
                <Button onClick={handleClick}>Sign Up</Button>
              </div>
            </div>

            <div className="sign_up_right_section">
              <div className="login_page_image">
                {/* <img src={sideImage} alt="" style={{ maxWidth: 400 }} /> */}
              </div>
              {/* </div><div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Login;
