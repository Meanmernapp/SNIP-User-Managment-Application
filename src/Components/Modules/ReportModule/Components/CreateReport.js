import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../App";

const CreateReport = () => {
  let navigate = useNavigate();
  const { val1 } = useContext(AppContext);

  const handleBackButton = () => {
    navigate("/report");
  };
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className=" container-fluid">
          <h1 className="Actual_h1">
            <button className="actual_backbutton" onClick={handleBackButton}>
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>
            CREAR REPORTE
          </h1>
          <div className="create-report-mainDiv col-sm-12 col-md-10 col-xl-6 mx-auto  ">
            <h3 className="settings_mainHeading ">DATOS</h3>
            <div className="report-info__detail col-12">
              <div className="input-group-report">
                <label className="input-group-report__label">NOMBRE</label>
                <input className="input-group-report__text user-info__name"></input>
              </div>
              <div className="input-group-report form-group-report">
                <label className="input-group-report__label">CASOS</label>
                {/* <input className='input-group-report__text user-info__name'></input> */}
                <select class="input-group-report__text user-info__name classic form-control ">
                  <option style={{ display: "none" }}></option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                </select>
              </div>
            </div>
            <div className="create-report-btns">
              <button className="report-model-close-btn col-6 ">
                CANCELAR
              </button>
              <button className="report-model-confirm-btn  col-6">
                CONFIRMAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReport;
