import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ic_add from "../../../images/ic-add.svg";
import ic_trash from "../../../images/NavBar/ic-trash-outline.svg";
import ic_layer from "../../../images/ic-layer-group-solid.svg";
import { AppContext } from "../../../App";
import ic_edit_outline from "../../../images/ic-edit-outline.svg";
import ic_table from "../../../images/ic-table-solid.svg";
import ic_copy from "../../../images/ic-copy-solid.svg";
import { Modal } from "react-bootstrap";

import ic_map from "../../../images/ic-map.svg";

const TemplateMain = () => {
  const [open, setOpen] = useState(true);
  const [openMis, setOperMis] = useState(true);
  const { val1 } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);

  const [values, setValues] = useState([
    {
      name: "ASESINATOS",
      noOfActivities: "4",
    },
    {
      name: "ASESINATOS",
      noOfActivities: "4",
    },
    {
      name: "ASESINATOS",
      noOfActivities: "4",
    },
    {
      name: "ASESINATOS",
      noOfActivities: "4",
    },
  ]);
  let navigate = useNavigate();

  const handleManual = () => {
    navigate("/switch");
  };

  const handleExtractPhone = () => {
    navigate("/casos-de-uso-create");
  };
  const handleReplicate = () => {
    navigate("/casos-de-uso-copy");
  };
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className="images-header row">
            <div className="col-sm-5  float-sm-right float-md-right float-lg-right float-xl-right  col-md-8 col-lg-8 col-xl-8">
              <h1 className="images-header__h1 mb-0">CASOS DE USO</h1>
              <p className="images-header__p mt-0 pt-0">
                Total: 4 Casos de uso.
              </p>
            </div>

            <div className="images-header__buttons mx-0 col-sm-6 col-md-4 col-lg-4 col-xl-4 ms-auto">
              <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 ms-auto">
                  <button
                    className="images-header__buttons__addButton w-100"
                    onClick={handleExtractPhone}
                  >
                    AGREGAR CASO DE USO &nbsp;
                    <img
                      src={ic_add}
                      className="images-header__buttons__icAdd"
                    />
                  </button>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 ms-auto">
                  <button
                    onClick={() => setModalShow(true)}
                    className="images-header__buttons__deleteButton  w-100"
                  >
                    ELIMINAR CASO(S) DE USO &nbsp;
                    <img
                      src={ic_trash}
                      className="images-header__buttons__icAdd "
                    />
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="department-main-heading ">
            <button
              className="department-main-heading__dept"
              onClick={() => setOperMis(false)}
              style={{
                borderBottom: !openMis ? "2px solid #00506A" : "none",
                color: !openMis ? "#00506A" : "#707070",
                fontWeight: !openMis ? "bold " : "normal",
              }}
            >
              MIS CASOS DE USO
            </button>
            <button
              className="department-main-heading__todos"
              onClick={() => setOperMis(true)}
              style={{
                borderBottom: openMis ? "2px solid #00506A" : "none",
                color: openMis ? "#00506A" : "#707070",
                fontWeight: openMis ? "bold " : "normal",
              }}
            >
              TODOS
            </button>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8 vl-report ">
              <div className="row">
                <div style={{ display: openMis ? "block" : "none" }}>
                  <div className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div">
                    <table class="table">
                      <thead>
                        <tr>
                          <th
                            scope="col-xs-auto"
                            className="addUser_labels text-start"
                          >
                            NOMBRE
                          </th>
                          <th scope="col-xs-auto" className="addUser_labels">
                            NO DE ACTIVIDADES
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
                            style={{ marginTop: "1em" }}
                          >
                            <td className="addUser_label text-start">
                              {element.name}
                            </td>
                            <td className="addUser_label">
                              {element.noOfActivities}
                            </td>

                            <td className="addUser_label">
                              <input
                                type="checkbox"
                                className="text-start"
                                value={index}
                                // onChange={(e) => handleChange(index, e)}
                                id={element.index}
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
                    <table class="table">
                      <thead>
                        <tr>
                          <th
                            scope="col-xs-auto"
                            className="addUser_labels text-start"
                          >
                            NOMBRE
                          </th>
                          <th scope="col-xs-auto" className="addUser_labels">
                            NO DE ACTIVIDADES
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
                            style={{ marginTop: "1em" }}
                          >
                            <td className="addUser_label text-start">
                              {element.name}
                            </td>
                            <td className="addUser_label">
                              {element.noOfActivities}
                            </td>

                            <td className="addUser_label">
                              <input
                                type="checkbox"
                                className="text-start"
                                value={index}
                                // onChange={(e) => handleChange(index, e)}
                                id={element.index}
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
                  DETALLES DE CASOS DE USO SELECCIONADOS
                </h3>
                <p className="extract-phone-p">Total seleccionados 2</p>
                <div className="row">
                  <div className="switch-example ">
                    <div className="">
                      <div className="float-end ">
                        <button className="department-create-header__button">
                          <img
                            src={ic_edit_outline}
                            className="switch-example__icAdd-download  "
                          />
                        </button>
                      </div>
                      <div className="row mt-2 pt-3 mb-3">
                        <img
                          src={ic_layer}
                          className="switch-example__icAdd-layer col-sm-3 col-md-4 col-lg-4 col-xl-4"
                        />
                        <div className="switch-example__div col-8 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                          <p className="switch-example__div__fp">NOMBRE</p>
                          <p className="switch-example__div__sp">Asesinatos</p>
                        </div>
                      </div>

                      <div className="btn-row ">
                        <button
                          className="btn-row__btns"
                          onClick={handleReplicate}
                        >
                          <img src={ic_copy} className="btn-row__svg" />
                          REPLICAR CASO
                        </button>
                        <div class="vr"></div>
                        <button
                          className="btn-row__btns "
                          // onClick={handleActualBtn}
                        >
                          <img src={ic_table} className="btn-row__svg" />
                          APLICAR CASO
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="switch-example ">
                    <div className="">
                      <div className="float-end ">
                        <button className="department-create-header__button">
                          <img
                            src={ic_edit_outline}
                            className="switch-example__icAdd-download  "
                          />
                        </button>
                      </div>
                      <div className="row mt-2 pt-3 mb-3">
                        <img
                          src={ic_layer}
                          className="switch-example__icAdd-layer col-sm-3 col-md-4 col-lg-4 col-xl-4"
                        />
                        <div className="switch-example__div col-8 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                          <p className="switch-example__div__fp">NOMBRE</p>
                          <p className="switch-example__div__sp">Asesinatos</p>
                        </div>
                      </div>

                      <div className="btn-row ">
                        <button
                          className="btn-row__btns"
                          onClick={handleReplicate}
                        >
                          <img src={ic_copy} className="btn-row__svg" />
                          REPLICAR CASO
                        </button>
                        <div class="vr"></div>
                        <button
                          className="btn-row__btns "
                          // onClick={handleActualBtn}
                        >
                          <img src={ic_table} className="btn-row__svg" />
                          APLICAR CASO
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
  );
};

export default TemplateMain;

function MyVerticallyCenteredModal(props) {
  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}
      >
        <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="role-model-top"
          >
            ELIMINAR CASOS DE USO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__heading">
            Casos de uso seleccionados:
          </h4>
          <p className="role-model-body__p"> Total 4 </p>
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              <span> Asesinatos</span>
            </li>
            <li className="role-model-body__ul__li">
              <span> Asesinatos </span>
            </li>
            <li className="role-model-body__ul__li">
              <span> Asesinatos </span>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            CANCELAR
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            CONTINUAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
