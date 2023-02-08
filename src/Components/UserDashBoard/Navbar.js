import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/NavBar/ic-menu.svg";
import img2 from "../../images/white_logo_citras.png";
import { Image } from "react-bootstrap";
import { SidebarData } from "./SidebarData";
import { ListItemSecondaryAction } from "@material-ui/core";
import { valueToPercent } from "@mui/base";
import { AppContext } from "../../App";
import Dashboard from "./pages/SubMenu/Dashboard";
import ManualInteractivo from "./pages/SubMenu/ManualInteractivo";
import ExtractoTelefono from "./pages/SubMenu/ExtractoTelefono";
import Switch from "./pages/SubMenu/Switch";
import Case from "./pages/SubMenu/Case";
import Analysis from "./pages/SubMenu/Analysis";
import Correlation from "./pages/SubMenu/Correlation";
import Estadiscas from "./pages/SubMenu/Estadiscas";
import Report from "./pages/SubMenu/Report";
import Users from "./pages/SubMenu/Users";
import Departments from "./pages/SubMenu/Departments";
import Images from "./pages/SubMenu/Images";
import Connections from "./pages/SubMenu/Connections";
import Alerts from "./pages/SubMenu/Alerts";
import Log from "./pages/SubMenu/Log";
import Configurations from "./pages/SubMenu/Configurations";

const Navbar = () => {
  const { val1 } = useContext(AppContext);
  const [sidebar, setSidebar] = useState(false);
  const [subMenu, setSubMenu] = useState();
  // const [value, setValue] = useState(0)
  const [check, setCheck] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  let value;
  const handleClick = (item) => {
    value = item.title;
    const values = val1.state.inputText.value;
    console.log(values);
    console.log(value);
    console.log(check);
    console.log(check == true && value == val1.state.inputText.value);

    if (val1.state.check == true && value == val1.state.inputText.value) {
      console.log("ayesha");
      val1.dispatch({ type: "UPDATE_CHECK", data: false });
      val1.dispatch({ type: "UPDATE_INPUT", data: { value } });
      val1.dispatch({ type: "UPDATE_MARGIN", data: false });
      console.log("Kainat");
    } else if (
      val1.state.check === true &&
      value != val1.state.inputText.value
    ) {
      val1.dispatch({ type: "UPDATE_CHECK", data: true });
      val1.dispatch({ type: "UPDATE_MARGIN", data: true });
      val1.dispatch({ type: "UPDATE_INPUT", data: { value } });
      val1.dispatch({ type: "UPDATE_SIDEBAR", data: true });
      console.log("Kiran");
    } else {
      val1.dispatch({ type: "UPDATE_CHECK", data: true });
      val1.dispatch({ type: "UPDATE_MARGIN", data: true });
      val1.dispatch({ type: "UPDATE_INPUT", data: { value } });
      val1.dispatch({ type: "UPDATE_SIDEBAR", data: true });

      console.log("Rashid");
    }
    console.log(val1.state.check);
  };

  return (
    <>
      <div id="sidebar">
        <img
          src={img2}
          className="snip_image mt-2 mx-auto d-flex align-items-center justify-content-center"
        />
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className="nav-menu-items d-flex flex-column align-items-center mt-5">
            {SidebarData.map((item, index) => {
              return (
                <button
                  onClick={() => handleClick(item)}
                  className={
                    item.title == val1.state.inputText.value && val1.state.check === true
                      ? "nav-selected"
                      : "nav-text"
                  }>
                  {item.icon}
                </button>
              );
            })}
            {/* </div> */}
          </div>
        </nav>
        {val1.state.inputText.value === "Dashboard" &&
        val1.state.check === true ? (
          <Dashboard />
        ) : null}
        {val1.state.inputText.value === "Manual" &&
        val1.state.check === true ? (
          <ManualInteractivo />
        ) : null}
        {val1.state.inputText.value === "Extract" &&
        val1.state.check === true ? (
          <ExtractoTelefono />
        ) : null}
        {val1.state.inputText.value === "Switch" &&
        val1.state.check === true ? (
          <Switch />
        ) : null}
        {val1.state.inputText.value === "Case" && val1.state.check === true ? (
          <Case />
        ) : null}
        {val1.state.inputText.value === "Analysis" &&
        val1.state.check === true ? (
          <Analysis />
        ) : null}
        {val1.state.inputText.value === "Correlation" &&
        val1.state.check === true ? (
          <Correlation />
        ) : null}
        {val1.state.inputText.value === "Estadisticas" &&
        val1.state.check === true ? (
          <Estadiscas />
        ) : null}
        {val1.state.inputText.value === "Report" &&
        val1.state.check === true ? (
          <Report />
        ) : null}
        {/* {val1.state.inputText.value === 'Report' ? <Report /> : null} */}
        {val1.state.inputText.value === "Users" && val1.state.check === true ? (
          <Users />
        ) : null}
        {val1.state.inputText.value === "Department" &&
        val1.state.check === true ? (
          <Departments />
        ) : null}
        {val1.state.inputText.value === "Images" &&
        val1.state.check === true ? (
          <Images />
        ) : null}
        {val1.state.inputText.value === "Connections" &&
        val1.state.check === true ? (
          <Connections />
        ) : null}
        {val1.state.inputText.value === "Alerts" &&
        val1.state.check === true ? (
          <Alerts />
        ) : null}
        {val1.state.inputText.value === "Log" && val1.state.check === true ? (
          <Log />
        ) : null}
        {val1.state.inputText.value === "Configuration" &&
        val1.state.check === true ? (
          <Configurations />
        ) : null}

        <img
          className="display_image mt-2 mx-auto d-flex align-items-center justify-content-center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-wq5bwwbn0cFhs2F4nWn1ZGgOrsNG3JKbQ&usqp=CAU"
        />
      </div>
    </>
  );
};

export default Navbar;
