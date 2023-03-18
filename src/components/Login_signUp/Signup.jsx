import { Button } from "antd";

import "./logout_delete.css";

const Signup = () => {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="log_out_delete_section">
      <div className="Home-Container">
        <div className="log_out_delete_heading">
          <h1>Welcome to Crypto World</h1>
          <h3>Welcome {localStorage.getItem("Fullname")} </h3>
        </div>
        <div className="log_out_delete_btn">
          <Button onClick={logout} className="logout">
            LogOut
          </Button>
          <Button onClick={deleteAccount} className="delete">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
