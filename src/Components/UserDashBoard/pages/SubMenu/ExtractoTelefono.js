import React, { useState, useContext } from "react";
import { exSidebarData } from "./ExtractoSidebar";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../App";

const ExtractoTelefono = () => {
  const value = "Dashboard";
  // const [sidebar, setSidebar] = useState(false);
  const { val1 } = useContext(AppContext);

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
          <h3 className="navbar-heading"> EXTRACTO TELEFÓNICO</h3>
          <div className="nav-submenu-items">
            {exSidebarData.map((item, index) => (
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

export default ExtractoTelefono;
