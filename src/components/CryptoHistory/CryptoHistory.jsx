import { NavLink } from "react-router-dom";

import "./CryptoHistory.css";

export function CryptoHistory() {
  return (
    <div className="crypto_history_container">
      <div className="chart_history">
        <NavLink
          to="/mainChart"
          id="links"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active"
          }
          end
        >
          <h4>Chart</h4>
        </NavLink>
        <NavLink
          to="/investment"
          id="links"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active"
          }
          end
        >
          <h4>Plane</h4>
        </NavLink>
        <NavLink
          to="/support"
          id="links"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active"
          }
          end
        >
          <h4>Conversation</h4>
        </NavLink>
        <NavLink
          to="/historyChart"
          id="links"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active"
          }
          end
        >
          <h4>Historical Chart</h4>
        </NavLink>
      </div>

      <div className="time_history">
        <NavLink
          to="/coins"
          id="links"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active"
          }
          end
        >
          <h4>1H</h4>
        </NavLink>
        <NavLink
          to="/coins"
          id="links"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active"
          }
          end
        >
          <h4>24H</h4>
        </NavLink>
        <NavLink
          to="/mainChart"
          id="links"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active"
          }
          end
        >
          <h4>1W</h4>
        </NavLink>
        <NavLink
          to="/monthly"
          id="links"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active"
          }
          end
        >
          {" "}
          <h4>1M</h4>
        </NavLink>
        <NavLink
          to="/coins"
          id="links"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active"
          }
          end
        >
          <h4>1Y</h4>
        </NavLink>
      </div>
    </div>
  );
}
