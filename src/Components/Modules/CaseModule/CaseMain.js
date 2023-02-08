import React, { useState, useContext } from "react";
import ic_add from "../../../images/ic-add.svg";
import jpg_image from "../../../images/jpg.png";
import png_image from "../../../images/png.png";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../App";
import ic_trash from "../../../images/NavBar/ic-trash-outline.svg";

import { Link } from "react-router-dom";

const Case = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [openk, setOpenk] = useState(false);
  const { val1 } = useContext(AppContext);

  const dptAccHeader = [
    {
      murder: "IBL-0921",
      mname: "Luis Cornejo",
      name: "CASO",
      inCharge: "CREADO POR",
      //   adminDept: 'ADMINISTRAR DEPARTAMENTO',
    },
    {
      murder: "IBL-0921",
      mname: "Luis Cornejo",
      name: "CASO",
      inCharge: "CREADO POR",
    },
  ];
  const deptAccBody = {
    bodyHeading: "Usuarios en el departamento",
    total: "TOTAL 42.",
    name: "Luis Enrique Cornejo Arreola",
  };
  const handleAddButton = () => {
    navigate("/create-case");
  };
  const handleOnAdmin = () => {
    navigate("/create-case");
  };
  const handleInputOnClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className="department-header row">
            <div className="col-sm-6 col-xl-4 ">
              <h1 className="department-header__h1">CASOS</h1>
              <p className="department-header__p">Total: 4 Casos.</p>
            </div>
            <div className="department-header__buttons col-sm-5 col-md-4 col-xl-3 ">
              <div className="w-85 ">
                <button
                  className="department-header__buttons__addButton w-100  "
                  onClick={handleAddButton}>
                  AGREGAR NUEVO CASO &nbsp;
                  <img
                    src={ic_add}
                    className="department-header__buttons__icAdd"
                  />
                </button>
              </div>
              <div className="w-85">
                <button
                  className="department-header__buttons__deleteButton w-100 "
                  onClick={() => setModalShow(true)}>
                  ELIMINAR CASO(S) &nbsp;
                  <img
                    src={ic_trash}
                    className="department-header__buttons__icAdd"
                  />
                </button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
          <div className="department-main-heading ">
            <button
              className="department-main-heading__dept"
              onClick={() => setOpen(false)}
              style={{
                borderBottom: !open ? "2px solid #00506A" : "none",
                color: !open ? "#00506A" : "#707070",
                font: !open
                  ? "normal normal bold 18px/22px Montserrat"
                  : "normal normal normal 18px/22px Montserrat",
              }}>
              MIS CASOS
            </button>
            <button
              className="department-main-heading__todos"
              onClick={() => setOpen(true)}
              style={{
                borderBottom: open ? "2px solid #00506A" : "none",
                color: open ? "#00506A" : "#707070",
                font: open
                  ? "normal normal bold 18px/22px Montserrat"
                  : "normal normal normal 18px/22px Montserrat",
              }}>
              OTROS CASO
            </button>

            <Accordion defaultActiveKey="0" className="w-100">
              {dptAccHeader.map((item) => (
                <Accordion.Item
                  eventKey={item}
                  className="department-accordion mb-4">
                  <Accordion.Header>
                    <div className="row">
                      <div className="col-1">
                        <input
                          onClick={(e) => handleInputOnClick(e)}
                          type="checkbox"
                        />
                      </div>
                      <div className="col-3">
                        <p className="dept-accordion-header__heading ">
                          {item.murder}
                        </p>
                        <p className="dept-accordion-header__data">
                          {item.name}
                        </p>
                      </div>
                      <div className="col-3">
                        <p className="dept-accordion-header__heading">
                          {item.mname}
                        </p>
                        <p className="dept-accordion-header__data">
                          {item.inCharge}
                        </p>
                      </div>
                      <div className="col-2">
                        <button
                          className="dept-acc-header__link__btn "
                          onClick={handleOnAdmin}>
                          ACTUALIZAR CASO
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="dept-acc-header__link__btn"
                          onClick={handleOnAdmin}>
                          DAR SEGUIMIENTO
                        </button>
                      </div>
                      <div className="col-1">
                        <i
                          class="fa-solid fa-sort-down department_arrow_down "
                          // onClick={() => setOpenk(!openk)}
                        ></i>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="row">
                      <div className="col-4">
                        <h3 className="case-acc__heading">
                          DATOS DE LA INVESTIFACIÓN
                        </h3>
                        <p className="case-acc__subHeading">
                          Carpeta de investifación
                        </p>
                        <p className="case-acc__p">Caso 2302 Sección A</p>
                      </div>
                      <div className="col-4">
                        <h3 className="case-acc__heading d-flex justify-content-center">
                          DATOS DEL OBJETIVO
                        </h3>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          Nombre
                        </p>
                        <p className="case-acc__p d-flex justify-content-center">
                          Juan Hernánder
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          Fecha de nacimiento
                        </p>
                        <p className="case-acc__p d-flex justify-content-center">
                          Marzo 24 1965
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          Domicilio
                        </p>
                        <p className="case-acc__p d-flex justify-content-center">
                          Rincón del marques 404,Col el Marques.
                        </p>
                      </div>
                      <div className="col-4 ">
                        <h3 className="case-acc__heading d-flex justify-content-end ">
                          DATOS DEL EVENTO
                        </h3>
                        <p className="case-acc__subHeading d-flex justify-content-end">
                          Fecha
                        </p>
                        <p className="case-acc__p d-flex justify-content-end">
                          Abril 08 2022
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-end">
                          Lugar
                        </p>
                        <p className="case-acc__p d-flex justify-content-end">
                          Plaza de las Américas, Querétaro, Qro.
                        </p>
                      </div>
                    </div>
                    <div className=" case-acc-row row">
                      <div className="col-4">
                        <h3 className="case-acc__heading">
                          DATOS DE LA INVESTIFACIÓN
                        </h3>
                        <p className="case-acc__invst-p">
                          <span>Encargado | </span>Luis Cornejo
                        </p>
                        <p className="case-acc__invst-p">
                          <span>Investigador de campo | </span>Luis Cornejo
                        </p>
                        <p className="case-acc__invst-p">
                          <span>Investigador de zona | </span>| Luis Cornejo
                        </p>
                      </div>
                      <div className="col-4">
                        <h3 className="case-acc__heading d-flex justify-content-center">
                          DATOS ESPECÍFICOS DEL CASO
                        </h3>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          Estatus
                        </p>
                        <p className="case-acc__active d-flex justify-content-center">
                          ACTIVO <span class="dot"></span>{" "}
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          Descripción
                        </p>
                        <p className="case-acc__p d-flex justify-content-center">
                          Sin descripción.
                        </p>
                        <p className="case-acc__subHeading d-flex justify-content-center">
                          Nota
                        </p>
                        <p className="case-acc__p d-flex justify-content-center ">
                          Sin notas.
                        </p>
                      </div>
                    </div>
                    <div className="case-acc-row row">
                      <div className="col-4">
                        <h3 className="case-acc__heading">EVIDENCIA(S)</h3>
                        <p className="case-acc__subHeading">
                          Imágenes / Documents
                        </p>
                        <div className="row">
                          <div className="col-3">
                            <img src={jpg_image} className="case-acc__img" />
                            <p className="case-acc__img-p">caso_1.jpg</p>
                            <p className="case-acc__img-p-two">
                              TAMAÑO: 18 MB.
                            </p>
                          </div>
                          <div className="col-3">
                            <img src={png_image} className="case-acc__img" />
                            <p className="case-acc__img-p">caso_1.jpg</p>
                            <p className="case-acc__img-p-two">
                              TAMAÑO: 18 MB.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
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
            className="role-model-top">
            ELIMINAR CASO(S)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__heading">
            De los casos seleccionados será eliminada la siguiente información:
          </h4>
          {/* <p className='role-model-body__p'> Total 4 </p> */}
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              <span> Reportes </span>
            </li>
            <li className="role-model-body__ul__li">
              <span> Imágenes </span>
            </li>
            <li className="role-model-body__ul__li">
              <span> Evidencias </span>
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
