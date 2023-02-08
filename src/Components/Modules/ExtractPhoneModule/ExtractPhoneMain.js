import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../App";
import ic_add from "../../../images/ic-add.svg";
import ic_trash from "../../../images/trash-alt-regular.svg";
import ic_layer from "../../../images/ic-layer-group-solid.svg";
import ic_download from "../../../images/ic-download-file.svg";
import ic_pdf from "../../../images/pdf-img.svg";
import edit_white from "../../../images/ic-edit-outline-white.svg";
import Modal from "react-bootstrap/Modal";
import ic_table from "../../../images/ic-table-solid.svg";
import ic_map from "../../../images/ic-map.svg";
import ic_search from "../../../images/NavBar/ic-search.svg";
import ic_edit_outline from "../../../images/ic-edit-outline.svg";

const ExtractPhoneMain = () => {
  const { val1 } = useContext(AppContext);
  const [open, setOpen] = useState(true);
  const [openA, setOpenA] = useState(false);
  const [openMis, setOperMis] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalSee, setModalSee] = useState(false);
  const [groupModal, setGroupModal] = useState(true);
  let navigate = useNavigate();

  const handleManual = () => {
    navigate("/switch");
  };
  const handleActualBtn = () => {
    navigate("/data-in-load-update");
  };
  const [values, setValues] = useState([
    {
      id: "1",
      csvName: "4433343343_telcel.csv",

      phone: "4433343343",
      identifier: "POE-123",
      group: "LOP-#44",
      opc: "OPC",
    },
    {
      id: "1",
      csvName: "4433343343_telcel.csv",

      phone: "4433343343",
      identifier: "POE-123",
      group: "LOP-#44",
      opc: "OPC",
    },
    {
      id: "1",
      csvName: "4433343343_telcel.csv",

      phone: "4433343343",
      identifier: "POE-123",
      group: "LOP-#44",
      opc: "OPC",
    },
    {
      id: "1",
      csvName: "4433343343_telcel.csv",

      phone: "4433343343",
      identifier: "POE-123",
      group: "LOP-#44",
      opc: "OPC",
    },
  ]);
  const [groupValues, setGroupValues] = useState([
    {
      id: "12321-SAD-23D-211",
      groupValue: "ICL-029",

      phone: "4",
      caseValue: "PLK-#44",

      opc: "OPC",
    },
  ]);
  const handleExtractPhone = () => {
    navigate("/data-in-load-sabanas");
  };

  const handleClick = () => {};
  const removeValue = () => {};
  const handleBackButton = () => {};
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className="Actual_h1 row">
            <div className="col-sm-5 ">
              <div className="images-header-row">
                <h1 className="images-header__h1">EXTRACTO TELEFÓNICO</h1>
                <p className="images-header__p">Total 10.</p>
              </div>
            </div>
            <div className="images-header__buttons mx-0 col-sm-7 ">
              <div className="row mx-0 px-0">
                <div className="col-sm-12 col-md-8 ms-auto col-lg-5 mx-0 mt-1">
                  <button
                    onClick={handleManual}
                    className="department-header__buttons__downloadButton w-100 h-100 ">
                    BUSQUEDA MANUAL
                    <img
                      src={ic_search}
                      className="images-header__buttons__icAdd"
                    />
                  </button>
                </div>
                <div className="col-sm-12 col-md-8 ms-auto col-lg-7 mx-0  mt-1">
                  <button
                    className="department-header__buttons__addButton w-100 h-100  "
                    onClick={handleExtractPhone}>
                    CARGAR EXTRACTO TELEFÓNICO
                    <img
                      src={ic_add}
                      className="images-header__buttons__icAdd"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="roles-main-heading row mx-0 px-0">
            <button
              className="roles-main-heading__roles col-6"
              onClick={() => {
                setOpen(false);
                setOpenA(true);
                setGroupModal(false);
              }}
              style={{
                color: open === false && openA === true && "#63B3CE",
                borderBottom:
                  open == false && openA === true && "2px solid #63B3CE",
              }}>
              EXTRACTO TELEFÓNICO
            </button>
            <button
              className="roles-main-heading__permission col-6"
              onClick={() => {
                setOpen(true);
                setOpenA(false);
                setGroupModal(true);
              }}
              style={{
                color: open === true && openA === false && "#63B3CE",
                borderBottom:
                  open === true && openA == false && "2px solid #63B3CE",
              }}>
              GRUPOS
            </button>
          </div>
          <div style={{ display: !groupModal ? "block" : "none" }}>
            <div className="row mx-0 px-0">
              <div className="col-12 col-lg-8 vl-report px-0">
                <div className="row mx-0 px-0">
                  <div className="department-main-heading col-4">
                    <div className="row mx-0 px-0">
                      <button
                        className="department-main-heading__exdept text-start col-7 px-0"
                        onClick={() => setOperMis(false)}
                        style={{
                          borderBottom: !openMis ? "2px solid #00506A" : "none",
                          color: !openMis ? "#00506A" : "#707070",
                          fontWeight: !openMis ? "bold " : "normal",
                        }}>
                        MIS EXTRACTOS <br /> TELEFÓNICOS
                      </button>
                      <button
                        className="department-main-heading__extodos text-start text-start col-5 "
                        onClick={() => setOperMis(true)}
                        style={{
                          borderBottom: openMis ? "2px solid #00506A" : "none",
                          color: openMis ? "#00506A" : "#707070",
                          fontWeight: openMis ? "bold " : "normal",
                        }}>
                        <br />
                        TODOS
                      </button>
                    </div>
                  </div>
                  <div className="department-main-heading col-8 ">
                    <div className="row mx-0 px-0">
                      <div className="col-sm-8 col-lg-4 ms-auto mb-2 mx-0">
                        <button
                          className="extract_button_add w-100"
                          onClick={() => setModalSee(true)}>
                          CREAR GRUPO
                          <img src={ic_add} className="extractButton" />
                        </button>
                        <AddImageModal
                          show={modalShow}
                          onHide={() => setModalSee(false)}
                        />
                      </div>
                      <div className="col-sm-8 col-lg-8 py-auto ms-auto">
                        <button
                          className="extract_button_delete  w-100 "
                          onClick={removeValue}>
                          ELIMINAR EXTRACTO(S) TELEFÓNICO(S)
                          <img src={ic_trash} className="extractButton" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: openMis ? "block" : "none" }}>
                    <div className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div">
                      <table class="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col-xs-auto" className="addUser_labels">
                              EXTRACTO TELEFÓNICO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              TELÉFONO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              IDENTIFICAR / ALIAS
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              GRUPO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              OPC
                            </th>
                          </tr>
                        </thead>
                        <tbody style={{ marginTop: "1em" }}>
                          {values.map((element, index) => (
                            <tr
                              className="main_row "
                              style={{ marginTop: "1em" }}>
                              <td className="extract_label ">
                                {element.csvName}
                              </td>
                              <td className="addUser_label">{element.phone}</td>
                              <td className="addUser_label">
                                {element.identifier}
                              </td>
                              <td className="addUser_label">
                                <img src={ic_layer} className="extractButton" />

                                {element.group}
                              </td>
                              <td className="addUser_label">
                                <input
                                  type="checkbox"
                                  className="text-start"
                                  value={index}
                                  // onChange={(e) => handleChange(index, e)}
                                  id={element.index}></input>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div style={{ display: !openMis ? "block" : "none" }}>
                    <div className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div">
                      <table class="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col-xs-auto" className="addUser_labels">
                              EXTRACTO TELEFÓNICO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              TELÉFONO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              IDENTIFICAR / ALIAS
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              GRUPO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              OPC
                            </th>
                          </tr>
                        </thead>
                        <tbody style={{ marginTop: "1em" }}>
                          {values.map((element, index) => (
                            <tr
                              className="main_row "
                              style={{ marginTop: "1em" }}>
                              <td className="extract_label ">
                                {element.csvName}
                              </td>
                              <td className="addUser_label">{element.phone}</td>
                              <td className="addUser_label">
                                {element.identifier}
                              </td>
                              <td className="addUser_label">
                                <img src={ic_layer} className="extractButton" />

                                {element.group}
                              </td>
                              <td className="addUser_label">
                                <input
                                  type="checkbox"
                                  className="text-start"
                                  value={index}
                                  // onChange={(e) => handleChange(index, e)}
                                  id={element.index}></input>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 ">
                <div>
                  <h3 className="roles-main-heading__extract ">
                    DETALLE DE EXTRACTOS TELEFÓNICOS SELECCIONADOS
                  </h3>
                  <p className="extract-phone-p">Total seleccionados 4</p>
                  <div className="row mx-0 px-0">
                    <div className="switch-example">
                      <div className=" float-end mt-2">
                        <button
                          className=" col-12 department-create-header__button"
                          onClick={() => setModalShow(true)}>
                          <img
                            src={ic_download}
                            className="switch-example__icAdd-download "
                          />
                        </button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                      <div className="px-3">
                        <div className="row m-0 pt-3">
                          <img
                            src={ic_pdf}
                            className="switch-example__icAdd-pdf col-sm-3 col-md-4 col-lg-4 col-xl-4"
                          />
                          <div className="switch-example__div col-8 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                            <p className="switch-example__div__fp">SÁBANA</p>
                            <p className="switch-example__div__sp">
                              sabana_telcel_12232321.xlsx
                            </p>
                            <p className="switch-example__div__tp">
                              {" "}
                              TAMAÑO: 18 MB.
                            </p>
                          </div>
                        </div>

                        <div className="row mx-0 px-0">
                          <div className="col-12 text-end">
                            <button
                              className="switch-example__buttonOk col-sm-10 col-md-8 col-lg-8 col-xl-8 col-xxl-7"
                              onClick={handleActualBtn}>
                              ACTUALIZAR
                              <img
                                src={edit_white}
                                className="switch-example__buttonOk__btnimg"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            IDENTIFICADOR / ALIAS
                          </div>
                          <div className="col-6  card-table__sc">UIS-343</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            PROPIETARIO
                          </div>
                          <div className="col-6 card-table__sc">
                            Luis Cornejo
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">DIRECCIÓN</div>
                          <div className="col-6  card-table__sc">
                            Casa blanca 303
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">PROVEEDOR</div>
                          <div className="col-6  card-table__sc">Telcel</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">IMEI</div>
                          <div className="col-6 card-table__sc">
                            234234234242
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">IMSI</div>
                          <div className="col-6 card-table__sc">
                            23424242423423
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            GRUPOS AL QUE PERTENECE
                          </div>
                          <div className="col-6 card-table__sc">ASDL-#43</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">CASO</div>
                          <div className="col-6 text-end card-table__sc">
                            <button
                              className="department-create-header__button__switchUnderlined card-table__btnC"
                              onClick={() => setModalSee(true)}>
                              SIN CASO / AGREGAR CASO
                            </button>
                            <AddImageModal
                              show={modalSee}
                              onHide={() => setModalSee(false)}
                            />
                          </div>
                        </div>

                        <div className="btn-row ">
                          <button className="btn-row__btns ">
                            <img src={ic_map} className="btn-row__svg" />
                            VISUALIZAR MAPA &nbsp;
                          </button>
                          <div class="vr w-10"></div>
                          <button
                            className="btn-row__btns"
                            // onClick={handleActualBtn}
                          >
                            <img src={ic_table} className="btn-row__svg" />
                            VER REGISTROS
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="switch-example">
                      <div className=" float-end mt-2">
                        <button
                          className=" col-12 department-create-header__button"
                          onClick={() => setModalShow(true)}>
                          <img
                            src={ic_download}
                            className="switch-example__icAdd-download "
                          />
                        </button>
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                      <div className="px-3">
                        <div className="row m-0 pt-3">
                          <img
                            src={ic_pdf}
                            className="switch-example__icAdd-pdf col-sm-3 col-md-4 col-lg-4 col-xl-4"
                          />
                          <div className="switch-example__div col-8 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                            <p className="switch-example__div__fp">SÁBANA</p>
                            <p className="switch-example__div__sp">
                              sabana_telcel_12232321.xlsx
                            </p>
                            <p className="switch-example__div__tp">
                              {" "}
                              TAMAÑO: 18 MB.
                            </p>
                          </div>
                        </div>

                        <div className="row mx-0 px-0">
                          <div className="col-12 text-end">
                            <button
                              className="switch-example__buttonOk col-sm-10 col-md-8 col-lg-8 col-xl-8 col-xxl-7"
                              onClick={handleActualBtn}>
                              ACTUALIZAR
                              <img
                                src={edit_white}
                                className="switch-example__buttonOk__btnimg"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            IDENTIFICADOR / ALIAS
                          </div>
                          <div className="col-6  card-table__sc">UIS-343</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            PROPIETARIO
                          </div>
                          <div className="col-6 card-table__sc">
                            Luis Cornejo
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">DIRECCIÓN</div>
                          <div className="col-6  card-table__sc">
                            Casa blanca 303
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">PROVEEDOR</div>
                          <div className="col-6  card-table__sc">Telcel</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">IMEI</div>
                          <div className="col-6 card-table__sc">
                            234234234242
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">IMSI</div>
                          <div className="col-6 card-table__sc">
                            23424242423423
                          </div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">
                            GRUPOS AL QUE PERTENECE
                          </div>
                          <div className="col-6 card-table__sc">ASDL-#43</div>
                        </div>
                        <div className="row card-table">
                          <div className="col-6 card-table__fc">CASO</div>
                          <div className="col-6 text-end card-table__sc">
                            <button
                              className="department-create-header__button__switchUnderlined card-table__btnC"
                              onClick={() => setModalSee(true)}>
                              SIN CASO / AGREGAR CASO
                            </button>
                            <AddImageModal
                              show={modalSee}
                              onHide={() => setModalSee(false)}
                            />
                          </div>
                        </div>

                        <div className="btn-row ">
                          <button className="btn-row__btns ">
                            <img src={ic_map} className="btn-row__svg" />
                            VISUALIZAR MAPA &nbsp;
                          </button>
                          <div class="vr w-10"></div>
                          <button
                            className="btn-row__btns"
                            // onClick={handleActualBtn}
                          >
                            <img src={ic_table} className="btn-row__svg" />
                            VER REGISTROS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: groupModal ? "block" : "none" }}>
            <div className="row">
              <div className="col-12 col-lg-8 vl-report">
                <div className="row">
                  <div className="department-main-heading col-4">
                    <div className="row">
                      <button
                        className="department-main-heading__exdept text-start col-7 px-0"
                        onClick={() => setOperMis(false)}
                        style={{
                          borderBottom: !openMis ? "2px solid #00506A" : "none",
                          color: !openMis ? "#00506A" : "#707070",
                          fontWeight: !openMis ? "bold " : "normal",
                        }}>
                        MIS EXTRACTOS <br /> TELEFÓNICOS
                      </button>
                      <button
                        className="department-main-heading__extodos text-start text-start col-5 "
                        onClick={() => setOperMis(true)}
                        style={{
                          borderBottom: openMis ? "2px solid #00506A" : "none",
                          color: openMis ? "#00506A" : "#707070",
                          fontWeight: openMis ? "bold " : "normal",
                        }}>
                        <br />
                        TODOS
                      </button>
                    </div>
                  </div>
                  <div className="department-main-heading col-8 ">
                    <div className="row">
                      <div className="col-sm-8 col-lg-8 py-auto ms-auto">
                        <button
                          className="extract_button_delete w-100 px-0"
                          onClick={removeValue}>
                          ELIMINAR EXTRACTO TELEFÓICO(S)
                          <img src={ic_trash} className="extractButton" />
                          {/* <i class='fa-solid fa-trash-can homeAddButton'></i> */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: openMis ? "block" : "none" }}>
                    <div className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div">
                      <table class="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col-xs-auto" className="addUser_labels">
                              ID
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              GRUPO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              EXTRACTOS TELEFÓNICOS
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              CASO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              OPC
                            </th>
                          </tr>
                        </thead>
                        <tbody style={{ marginTop: "1em" }}>
                          {groupValues.map((element, index) => (
                            <tr
                              className="main_row "
                              style={{ marginTop: "1em" }}>
                              <td className="addUser_label ">{element.id}</td>
                              <td className="addUser_label">
                                {element.groupValue}
                              </td>
                              <td className="addUser_label">{element.phone}</td>
                              <td className="addUser_label">
                                <img src={ic_layer} className="extractButton" />

                                {element.caseValue}
                              </td>
                              <td className="addUser_label">
                                <input
                                  type="checkbox"
                                  className="text-start"

                                  // onChange={(e) => handleChange(index, e)}
                                ></input>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div style={{ display: !openMis ? "block" : "none" }}>
                    <div className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div">
                      <table class="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col-xs-auto" className="addUser_labels">
                              ID
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              GRUPO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              EXTRACTOS TELEFÓNICOS
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              CASO
                            </th>
                            <th scope="col-xs-auto" className="addUser_labels">
                              OPC
                            </th>
                          </tr>
                        </thead>
                        <tbody style={{ marginTop: "1em" }}>
                          {groupValues.map((element, index) => (
                            <tr
                              className="main_row "
                              style={{ marginTop: "1em" }}>
                              <td className="addUser_label ">{element.id}</td>
                              <td className="addUser_label">
                                {element.groupValue}
                              </td>
                              <td className="addUser_label">{element.phone}</td>
                              <td className="addUser_label">
                                <img src={ic_layer} className="extractButton" />

                                {element.caseValue}
                              </td>
                              <td className="addUser_label">
                                <input
                                  type="checkbox"
                                  className="text-start"

                                  // onChange={(e) => handleChange(index, e)}
                                ></input>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 ">
                <div>
                  <h3 className="roles-main-heading__extract ">
                    DETALLES DE GRUPOS SELECCIONADOS
                  </h3>
                  <p className="extract-phone-p">Total seleccionados 4</p>
                  <div className="row mx-0 px-0">
                    <div className="switch-example ">
                      <div className="px-3">
                        <div className="row float-end mr-2 ">
                          <button
                            className=" col-12 department-create-header__button"
                            onClick={() => setModalShow(true)}>
                            <img
                              src={ic_edit_outline}
                              className="switch-example__icAdd-download  "
                            />
                          </button>
                          <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                        </div>
                        <div className="row mt-2 pt-3">
                          <img
                            src={ic_layer}
                            className="switch-example__icAdd-pdf col-sm-3 col-md-4 col-lg-4 col-xl-4"
                          />
                          <div className="switch-example__div col-8 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                            <p className="switch-example__div__fp">GRUPO</p>
                            <p className="switch-example__div__sp">
                              Caso María Juarez
                            </p>
                            <p className="switch-example__div__ep">
                              {" "}
                              Extractos telefónicos 4.
                            </p>
                          </div>
                        </div>

                        <div className="row mx-0 px-0">
                          <div className="col-6 switch-example__div__rowp">
                            ID
                          </div>
                          <div className="col-6 switch-example__div__rowp text-end d-flex justify-content-end">
                            UIS-343
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 switch-example__div__rowp">
                            GRUPO
                          </div>
                          <div className="col-6 switch-example__div__rowp text-end d-flex justify-content-end">
                            Luis Cornejo
                          </div>
                        </div>
                        <div className="btn-row ">
                          <button className="btn-row__btns ">
                            <img src={ic_map} className="btn-row__svg" />
                            VISUALIZAR MAPA &nbsp;
                          </button>
                          <div class="vr"></div>
                          <button
                            className="btn-row__btns"
                            // onClick={handleActualBtn}
                          >
                            <img src={ic_table} className="btn-row__svg" />
                            VER REGISTROS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtractPhoneMain;
function MyVerticallyCenteredModal(props) {
  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="images-model-top">
            DESCARGAR EXTRACTO TELEFÓNICO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__settingheading">
            ¿Para descargar la extracto telefónico 4422232493_telcer.csv por
            favor confirma la acción?
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            CANCELAR
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            CONFIRMAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
function AddImageModal(props) {
  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="images-model-top ">
            CREAR GRUPO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="images-model-body">
          <form>
            <div className="input-group-report ">
              <label className="input-group-report__label">
                ALIAS DEL GRUPO
              </label>
              <input className="input-group-report__text user-info__name"></input>
            </div>
            <div className="input-group-report form-group-report">
              <label className="input-group-report__label">
                SELECCIONAR CASO
              </label>
              {/* <input className='input-group-report__text user-info__name'></input> */}
              <select class="input-group-report__text user-info__name form-control classic ">
                <option style={{ display: "none" }}></option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
              </select>
              {/* <i class='fa fa-caret-down' style={{ marginTop: '-1.3em' }}></i> */}
            </div>
          </form>
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              <span> 4422232493_telcer.csv </span> <p> | C1 </p>
            </li>
            <li className="role-model-body__ul__li">
              <span> 4422232493_telcer.csv </span> <p> | C1 </p>
            </li>
            <li className="role-model-body__ul__li">
              <span> 4422232493_telcer.csv </span> <p>| C1 </p>
            </li>
            <li className="role-model-body__ul__li">
              <span> 4422232493_telcer.csv </span> <p> | C1 </p>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            CANCELAR
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            CONFIRMAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
