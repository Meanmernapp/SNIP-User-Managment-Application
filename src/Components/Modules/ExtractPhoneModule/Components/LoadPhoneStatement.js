import React, { useContext } from "react";
import { AppContext } from "../../../../App";
import word_file from "../../../../images/ic-file-word-solid.svg";
import edit_white from "../../../../images/ic-edit-outline-white.svg";
import cloud from "../../../../images/cloud.svg";
import ic_pdf from "../../../../images/pdf-img.svg";
import ic_trash_outline from "../../../../images/ic-trash-outline.png";
import ic_excel from "../../../../images/ic-excel.svg";
import { useNavigate } from "react-router-dom";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";

const LoadPhoneStatement = () => {
  const { val1 } = useContext(AppContext);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/data-in-main-all");
  };
  const handleBackButton = () => {
    navigate("/data-in-main-all");
  };
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className=" container-fluid">
          <div className="row">
            <h1 className="Actual_h1 col-12">
              <button
                onClick={handleClick}
                className="department-create-header__button">
                <img src={ic_left_arrow} className="back-arrow" />
              </button>
              CREAR ROL DE CASO
            </h1>
          </div>
          <div className="report-create report-update row justify-content-center">
            <div className="report-create__left vl-update-report col-sm-12 col-lg-6 col-xl-6">
              <div className="create-report-mainDiv w-100 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h3 className="updateReport_mainHeading">
                  CARGAR UN EXTRACTO TELEFÓNICO
                </h3>

                <div className="report-info__detail w-100 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                  <div className="input-group-report">
                    <label className="input-group-report__label">NÚMERO</label>
                    <input className="input-group-report__text user-info__name"></input>
                  </div>
                  <div className="input-group-report">
                    <label className="input-group-report__label">
                      IDENTIFICADOR / ALIAS
                    </label>
                    <input className="input-group-report__text user-info__name"></input>
                  </div>
                  <div className="input-group-report form-group-report">
                    <label className="input-group-report__label">CASOS</label>
                    {/* <input className='input-group-report__text user-info__name'></input> */}
                    <select class="input-group-report__text user-info__name form-control classic ">
                      <option style={{ display: "none" }}></option>
                      <option>BIL-2091 | Encargado: Luis Cornejo</option>
                      <option>BIL-2091 | Encargado: Luis Cornejo</option>
                      <option>BIL-2091 | Encargado: Luis Cornejo</option>
                      <option>BIL-2091 | Encargado: Luis Cornejo</option>
                    </select>
                  </div>
                </div>
                <h3 className="loadPhone_mainHeading">SUBIR ARCHIVO</h3>
                <div className="report-info__detail w-100 col-sm-12 col-md-12 col-lg-10 col-xl-10">
                  <div className="images-model-body__addImage-upload col-12 pt-2">
                    <div className="row py-4">
                      <div className="col-7">
                        <img
                          src={cloud}
                          className="images-model-body__cloudImage w-100"
                        />
                      </div>
                      <div className="col-5 my-auto ">
                        <p className="images-model-body__p w-100 px-2">
                          ARRASTRA Ó SULETA TU ARCHIVO
                          <span> 20 MB MAX. </span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h3 className="loadPhone_mainHeading pl-0">ARCHIVO</h3>
                  <div className="grupos-card p-2">
                    <div className="row">
                      <div className="col-2">
                        <img src={ic_pdf} className="loadPhone__images" />
                      </div>
                      <div className="p-2 col-8">
                        <p className="loadPhone__fp">
                          extracto telefónico_telcel_12232321.pdf
                        </p>
                        <p className="loadPhone__sp">TAMAÑO: 18 MB.</p>
                      </div>
                      <div className="col-2">
                        <img
                          src={ic_trash_outline}
                          className="loadPhone__image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <button className="department-create--footer__buttonCancel role-model-close-btn col-6">
                      DESCARTAR
                    </button>
                    <button className="department-create--footer__buttonOk col-6">
                      CARGAR
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-10 col-lg-6 col-xl-6">
              <div className="report-update-right-col">
                <div className="create-report-mainDiv col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <h3 className="updateReport_mainHeading text-end">
                    EXTRACTO TELEFÓNICO A SUBIR
                  </h3>
                  <p className="loadPhone-right__p">
                    Total extracto(s) telefónico(s) a subir 4
                  </p>
                </div>
              </div>
              <div className="mx-auto px-auto col-10 mt-2">
                <table class="table table-borderless ">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col" className="loadPhone-right__heading">
                        TIPO
                      </th>
                      <th scope="col" className="loadPhone-right__heading">
                        EXTRACTO TELEFÓNICO
                      </th>
                      <th scope="col" className="loadPhone-right__heading">
                        NÚMERO
                      </th>
                      <th scope="col" className="loadPhone-right__heading">
                        REMOVER
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="report-update-right-col__box">
                      <th
                        className="report-update-right-col__box__p2"
                        scope="row">
                        <img src={ic_excel} className="loadPhone__images" />
                      </th>
                      <td className="report-update-right-col__box__p2">
                        <p className="loadPhone-right__fp">
                          sabana_telcel_12232321.xlsx
                        </p>
                        <p className="loadPhone-right__sp">TAMAÑO: 18 MB.</p>
                      </td>
                      <td className="report-update-right-col__box__p2">
                        <p className="loadPhone-right__fp">4422232321</p>
                        <p className="loadPhone-right__sp">TELCEL</p>
                      </td>
                      <td className="report-update-right-col__box__p2">
                        <img
                          src={ic_trash_outline}
                          className="loadPhone__images"
                        />
                      </td>
                    </tr>
                    <tr className="loadPhone-right__box mt-2">
                      <th
                        className="report-update-right-col__box__p2"
                        scope="row">
                        <img src={ic_pdf} className="loadPhone__images" />
                      </th>
                      <td className="report-update-right-col__box__p2">
                        <p className="loadPhone-right__fp">
                          sabana_telcel_12232321.xlsx
                        </p>
                        <p className="loadPhone-right__sp">TAMAÑO: 18 MB.</p>
                      </td>
                      <td className="report-update-right-col__box__p2">
                        <p className="loadPhone-right__fp">4422232321</p>
                        <p className="loadPhone-right__sp">TELCEL</p>
                      </td>
                      <td className="report-update-right-col__box__p2">
                        <img
                          src={ic_trash_outline}
                          className="loadPhone__images"
                        />
                      </td>
                    </tr>
                    <tr className="loadPhone-right__box mt-2">
                      <th
                        className="report-update-right-col__box__p2"
                        scope="row">
                        <img src={ic_pdf} className="loadPhone__images" />
                      </th>
                      <td className="report-update-right-col__box__p2">
                        <p className="loadPhone-right__fp">
                          sabana_telcel_12232321.xlsx
                        </p>
                        <p className="loadPhone-right__sp">TAMAÑO: 18 MB.</p>
                      </td>
                      <td className="report-update-right-col__box__p2">
                        <p className="loadPhone-right__fp">4422232321</p>
                        <p className="loadPhone-right__sp">TELCEL</p>
                      </td>
                      <td className="report-update-right-col__box__p2">
                        <img
                          src={ic_trash_outline}
                          className="loadPhone__images"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="row mt-5">
                  <button className="department-create--footer__buttonCancel role-model-close-btn col-5">
                    CANCELAR PROCESO
                  </button>
                  <button className="department-create--footer__buttonOk col-7">
                    SUBIR 4 EXTRACTO TELEFÓNICO(S)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadPhoneStatement;
