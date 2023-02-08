import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { alertSidebarData } from "./AlertsSidebar";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { AppContext } from "../../../../App";

const Alerts = () => {
  const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState(false);
  const { val1 } = useContext(AppContext);
  const value = "Dashboard";

  const handleClickAway = () => {
    val1.dispatch({ type: "UPDATE_SIDEBAR", data: false });
    val1.dispatch({ type: "UPDATE_MARGIN", data: false });
    val1.dispatch({ type: "UPDATE_CHECK", data: false });
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        style={{ display: val1.state.sidebar === false ? "none" : "block" }}
        className="navbar-2">
        <nav
          className={
            val1.state.sidebar === false ? "nav-menu-2 active" : "nav-menu-2"
          }>
          <h3 className="navbar-heading"> ALERTAS</h3>
          <div className="nav-submenu-items">
            {alertSidebarData.map((item, index) => (
              <Link
                to={item.path}
                className="nav-values"
                onClick={handleClickAway}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </ClickAwayListener>
  );
};

export default Alerts;
