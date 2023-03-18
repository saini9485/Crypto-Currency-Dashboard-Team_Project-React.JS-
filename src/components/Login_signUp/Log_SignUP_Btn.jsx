import React, { useState } from "react";

import { Button, Modal,theme } from "antd";

import { Route, Routes } from "react-router-dom";

import Signup from "../Login_signUp/Signup";
import Login from "../Login_signUp/Login";

const Log_SignUP_Btn = () => {





  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>
      

          _ {localStorage.getItem("Fullname")} 
      </Button>
      <Modal
        width={1000}
        padding={2000}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        // style={{ backgroundColor: token.colorSuccess }}
      >
        {/* <Signup /> */}
        {/* <Routes> */}

          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        {/* </Routes> */}


        <Login/>
      </Modal>
    </>
  );
};

export default Log_SignUP_Btn;
