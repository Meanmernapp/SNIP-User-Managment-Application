import React, { useState, useContext } from "react";
import ic_add from "../../../images/ic-add.svg";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../App";
import ic_trash from "../../../images/NavBar/ic-trash-outline.svg";
import { Link } from "react-router-dom";

const RolesDeCasoMain = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [openk, setOpenk] = useState(false);
  const { val1 } = useContext(AppContext);

  const dptAccHeader = [
    {
      dutyMan: "ENCARGADO",
      mname: "Luis Cornejo",
      name: "NOMBRE",
      inCharge: "USUARIO A CARGO",
      adminDept: "ADMINISTRAR DEPARTAMENTO",
    },
    {
      dutyMan: "ENCARGADO",
      mname: "Luis Cornejo",
      name: "NOMBRE",
      inCharge: "USUARIO A CARGO",
      adminDept: "ADMINISTRAR DEPARTAMENTO",
    },
  ];
  const deptAccBody = {
    report: "REPORTES 1/4",
    ulAlta: "Alta",
    case: "CASO 1/1",
    caseUpdate: "Actualizaciones",
    delCase: "INTEGRANTES DEL CASO (USUARIOS) 2/2",
    dCliOne: "Agregar",
    dCliTwo: "Eliminar",
  };
  const handleAddButton = () => {
    navigate("/roles-caso-create");
  };
  const handleOnAdmin = () => {
    // navigate('/update-dept')
  };
  const handleInputOnClick = (e) => {
    e.stopPropagation();

    // console.log('buxxxxxxxxxxxxxxxxx')
  };

  return (
    <div
      style={{
        marginLeft: val1.state.inputMargin === true && "145px",
      }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className="department-header row">
            <div className="col-sm-6 col-md-6 col-lg-5 col-xl-4 float-start">
              <h1 className="department-header__h1">ROLES DE CASO</h1>
              <p className="department-header__p">Total: 4 Casos de uso.</p>
            </div>
            <div className="department-header__buttons col-sm-6 col-md-6 col-lg-8 col-xl-4 float-end">
              <div className=" col-sm-12 col-md-12 col-lg-8 col-xl-10">
                <button
                  className="w-100 department-header__buttons__addButton"
                  onClick={handleAddButton}>
                  CREAR NUEVO ROL DE CASO &nbsp;
                  <img
                    src={ic_add}
                    className="department-header__buttons__icAdd"
                  />
                </button>
              </div>
              <div className=" col-sm-12 col-md-12 col-lg-8 col-xl-10 ">
                <button
                  className=" w-100 department-header__buttons__deleteButton"
                  onClick={() => setModalShow(true)}>
                  ELIMINAR ROL(ES) DE CASO &nbsp;
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
              MIS DEPARTAMENTOS
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
              TODOS
            </button>

            <Accordion defaultActiveKey="0">
              {dptAccHeader.map((item) => (
                <Accordion.Item
                  eventKey={item}
                  className="department-accordion  ">
                  <Accordion.Header className="">
                    <div className="row">
                      <div className="col-1">
                        <input
                          type="checkbox"
                          onClick={(e) => handleInputOnClick(e)}
                        />
                      </div>
                      <div className="col-3 ">
                        <p className="dept-accordion-header__heading ">
                          {item.dutyMan}
                        </p>
                        <p className="dept-accordion-header__data">
                          {item.name}
                        </p>
                      </div>
                      {/* <div className='col-3'>
                    <p className='dept-accordion-header__heading'>
                      {item.mname}
                    </p>
                    <p className='dept-accordion-header__data'>
                      {item.inCharge}
                    </p>
                  </div> */}
                      {/* <div className='col-2'></div> */}
                      <div className="col-8 float-end text-end ">
                        <button
                          className="dept-acc-header__link__btn"
                          onClick={handleOnAdmin}>
                          ADMINISTRAR ROL DE CASO
                        </button>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="roles-acc-body-one">
                      <div>
                        <p className="roles-acc-body-one__rolesP">
                          {deptAccBody.report}
                        </p>
                        <ul>
                          <li className="roles-acc-body-one__rolesLiP">
                            {deptAccBody.ulAlta}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="roles-acc-body-one__rolesP">
                          {deptAccBody.case}
                        </p>
                        <ul>
                          <li className="roles-acc-body-one__rolesLiP">
                            {deptAccBody.caseUpdate}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="roles-acc-body-one__rolesP">
                          {deptAccBody.delCase}
                        </p>
                        <ul>
                          <li className="roles-acc-body-one__rolesLiP">
                            {deptAccBody.dCliOne}
                          </li>
                          <li className="roles-acc-body-one__rolesLiP">
                            {deptAccBody.dCliTwo}
                          </li>
                        </ul>
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

export default RolesDeCasoMain;
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
            ELIMINAR ROLES DE CASO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__heading">
            Roles de caso seleccionados:
          </h4>
          <p className="role-model-body__p"> Total 4 </p>
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span>
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span>
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span>
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span>
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
