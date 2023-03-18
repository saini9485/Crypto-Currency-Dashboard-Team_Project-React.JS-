import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import "./RightSideBarCSS_Files/Total_balance.css";

export const TotalBalance = () => {
  return (
    <>
      <div className="Total_balance">
        <div className="balance">
          <h3>Total balance</h3>
          <span className="total_amount">$45,747.093</span>
        </div>
        <NavLink to='/wallet' className="arrow">
          <RiArrowRightSLine />
        </NavLink>
      </div>
    </>
  );
};
