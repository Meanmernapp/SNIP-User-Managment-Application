import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ic_search from "../../../../images/NavBar/ic-search.svg";
import word_file from "../../../../images/ic-file-word-solid.svg";
import edit_white from "../../../../images/ic-edit-outline-white.svg";
import { AppContext } from "../../../../App";

const UpdateReport = () => {
  let navigate = useNavigate();
  const { val1 } = useContext(AppContext);

  const handleBackButton = () => {
    navigate("/report");
  };
  return (
    <div
      className="home"
      style={{
        marginLeft: val1.state.inputMargin === true ? "235px" : "100px",
      }}>
      <div className="container-size">
        <div className="department-header row">
          <div className="col-sm-6 col-md-6 col-lg-12 col-xl-12 float-start">
            <h1 className="department-header__h1">
              <button className="actual_backbutton" onClick={handleBackButton}>
                <i class="fa-solid fa-arrow-left-long"></i>{" "}
              </button>
              ACTUALIZAR REPORTE
            </h1>
            {/* <p className='department-header__p'>Total: 4 Departamentos.</p> */}
          </div>
        </div>

        <div className="report-create report-update row">
          <div className="report-create__left vl-update-report col-md-10 col-lg-6 col-xl-6">
            <div className="create-report-mainDiv col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h3 className="updateReport_mainHeading">DATOS</h3>

              <div className="report-info__detail  col-sm-12 col-md-10 col-lg-12 col-xl-10">
                <div className="input-group-report">
                  <label className="input-group-report__label">NOMBRE</label>
                  <input className="input-group-report__text user-info__name"></input>
                </div>
                <div className="input-group-report form-group-report">
                  <label className="input-group-report__label">CASOS</label>
                  <select class="input-group-report__text user-info__name form-control classic ">
                    <option style={{ display: "none" }}></option>
                    <option>BIL-2091 | Encargado: Luis Cornejo</option>
                    <option>BIL-2091 | Encargado: Luis Cornejo</option>
                    <option>BIL-2091 | Encargado: Luis Cornejo</option>
                    <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  </select>
                  <i
                    class="fa fa-caret-down"
                    style={{ marginTop: "-1.3em" }}></i>
                </div>
              </div>
              <h3 className="updateReport_mainHeading">ARCHIVO</h3>
              <div className="report-info__detail col-sm-12 col-md-12 col-lg-10 col-xl-10">
                <div className="report-rightColumn__update ">
                  <img src={word_file} className="fileSize__update col-12" />
                  <button className="department-create--footer__buttonOk col-10">
                    <img
                      src={edit_white}
                      className="report-rightColumn__update__btnimg"
                    />
                    EDITAR REPORTE
                  </button>
                  {/* <div className='col-8'>
                  <div className=' row'>
                    <div className='report-rightColumn__firstItem__div col-6'>
                      <p className='report-rightColumn__firstItem__div__fp'>
                        NOMBRE
                      </p>
                      <p className='report-rightColumn__firstItem__div__sp'>
                        Asesinatos
                      </p>
                    </div>
                    <div className='report-rightColumn__firstItem__div col-6'>
                      <p className='report-rightColumn__firstItem__div__fp'>
                        IMÁGENES
                      </p>
                      <p className='report-rightColumn__firstItem__div__sp'>
                        4
                      </p>
                    </div>
                  </div>

                  <div className='report-rightColumn__firstItem__div'>
                    <p className='report-rightColumn__firstItem__div__fp'>
                      CASO
                    </p>
                    <p className='report-rightColumn__firstItem__div__sp'>
                      Asesinato María
                    </p>
                  </div>
                </div>  */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className=' col-1'> </div> */}
          <div className="col-md-10 col-lg-6 col-xl-6">
            <div className="report-update-right-col">
              <p className="report-rightColumn__pUpdate">AGREGAR IMAGEN +</p>
              <p className="report-rightColumn__headingOne">IMÁGENES</p>
            </div>
            <div className="report-update-right-col__box col-10">
              <p className="report-update-right-col__box__p col-10">
                NO HAY IMÁGENES ASOCIADAS CLICK AQUÍ PARA AGREGAR UNA NUEVA
              </p>
            </div>
          </div>
        </div>
        <div className="updateReport-footer-buttons row">
          <button className="col-sm-5 col-md-4 col-lg-3 col-xl-3 report-model-close-btn">
            CANCELAR
          </button>
          <button className="col-sm-5 col-md-4 col-lg-3 col-xl-3 report-model-confirm-btn">
            ACTUALIZAR REPORTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateReport;
