import React, { useState, useContext } from "react";
import { confiSidebar } from "./ConfigurationSidebar";
import { Link } from "react-router-dom";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { AppContext } from "../../../../App";

const Configurations = () => {
  const [sidebar, setSidebar] = useState(false);
  const [show, setShow] = useState(false);
  const value = "Dashboard";
  const { val1 } = useContext(AppContext);

  
  const handleClickAway = () => {
    val1.dispatch({ type: "UPDATE_SIDEBAR", data: false });
    val1.dispatch({ type: "UPDATE_MARGIN", data: false });
    val1.dispatch({ type: "UPDATE_CHECK", data: false });
    console.log("kkr");
    console.log(val1.state.sidebar);
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
          <h3 className="navbar-heading"> CONFIGURACIONES</h3>
          <div className="nav-submenu-items">
            {confiSidebar.map((item, index) => (
              <Link to={item.path} className="nav-values" onClick={handleClickAway}>
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </ClickAwayListener>
  );
};

export default Configurations;
