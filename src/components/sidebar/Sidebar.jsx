import React from "react";
import { NavLink } from "react-router-dom";
import { RiHandCoinLine, RiInformationLine } from "react-icons/ri";

import { SidebarData } from "../../data/Data";

import "../../components/sidebar/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
          <div className="nav-menu">
            <div className="links">
              {SidebarData.map(({ path, icon, title }, index) => {
                return (
                  <NavLink
                    to={path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "menuItem active" : "menuItem"
                    }
                  >
                    {icon}
                    <span>{title}</span>
                  </NavLink>
                );
              })}
            </div>

            <div className="help-box">
              <div className="info-card">
                <RiInformationLine className="icon" />
                <div className="card-content">
                  <div className="circle1"></div>
                  <div className="circle2"></div>

                  <h3>Help Center</h3>
                  <p>
                    Having trouble in CryptoTrade, Connect us for more info.
                  </p>
                  <NavLink to="/support" className="btn">
                    Know More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Sidebar;
