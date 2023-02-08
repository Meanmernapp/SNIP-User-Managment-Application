import React from "react";
import img2 from "../../images/stock-photo-male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-they-re-standing-1062915392.png";
import Image from "react-bootstrap/Image";
import img1 from "../../images/ic-setting.png";
import img3 from "../../images/ic-user-list.png";

const NavigationPanel = () => {
  return (
    <div className="container-fluid bg-img">
      <h1 className="navpanel_h2">
        SELECCIONE ALGÚN MÓDULO PARA NAVEGAR HACÍA LA SECCIÓN
      </h1>
      <div className="row">
        <div className="settings_div col-sm-5 col-md-4 col-lg-3 mx-3 pt-3">
          <div className="d-flex justify-content-center ">
            <img src={img1} className="setting-img" />
          </div>
          <p className="setting_h3 pt-3">
            CONFIGURACIÓN <br /> DEL <br /> SISTEMA
          </p>
        </div>
        <div className="settings_div col-sm-5 col-md-4 col-lg-3 mx-3 pt-3">
          <div className="d-flex justify-content-center">
            <img src={img3} className="setting-img" />
          </div>
          <p className="setting_h3 pt-3">PERFIL DE USUARIO</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationPanel;
