import React, { useState, useContext } from "react";
import ic_trash_outline from "../../../images/ic-trash-outline.svg";
import Modal from "react-bootstrap/Modal";
import { AppContext } from "../../../App";
import TablePagination from "@mui/material/TablePagination";

const AlertMain = () => {
  const [modalSee, setModalSee] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentValues, setCurrentValues] = useState();
  const { val1 } = useContext(AppContext);
  const [alertModal, setAlertModal] = useState(false);

  const alert_headings = {
    emptyString: "",
    informed: "INFORMADA POR",
    success: "SUCCESO",
    module: "MÓDULO",
    grades: "NOTAS",
    emptyStringTwo: "",
  };
  const alert_examples = [
    {
      id: "1",
      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__boldData",
    },
    {
      id: "2",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__normalData",
    },
    {
      id: "3",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__boldData",
    },
    {
      id: "4",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,

      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__normalData",
    },
    {
      id: "5",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__boldData",
    },
    {
      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,

      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__normalData",
    },
    {
      id: "6",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,

      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__boldData",
    },
    {
      id: "7",

      alertType: "checkBox",
      alertStart: <i class="fa-light fa-star"></i>,
      name: "Luis Cornejo",
      content: "Se cerro cuando...",
      alert: "Alertas",
      notes: "Sin notas.",
      time: "23:11",
      className: "roles-main-table__DataRow roles-main-table__normalData",
    },
  ];
  const handleInputOnClick = (e) => {
    handleInputOnClickEvent(e);
    setAlertModal(false);
    setModalSee(true);
    setAlertModal(false);
    // console.log('buxxxxxxxxxxxxxxxxx')
  };
  const handleHide = (e) => {
    e.stopPropagation();
    setModalSee(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);

    var p = newPage + 1;
    console.log(p);
    const indexOfLastValue = p * rowsPerPage;
    console.log(indexOfLastValue);
    console.log("--------------");
    console.log(rowsPerPage);
    const indexOfFirstValue = indexOfLastValue - rowsPerPage;
    console.log(indexOfFirstValue);
    setCurrentValues(alert_examples.splice(indexOfFirstValue, rowsPerPage));
    console.log(currentValues);
  };
  const handleInputOnClickEvent = (e) => {
    e.stopPropagation();

    // console.log('buxxxxxxxxxxxxxxxxx')
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    // const indexOfLastValue = currentPage * postsPerPage
    // const indexOfFirstValue = indexOfLastValue - postsPerPage
    setCurrentValues(alert_examples.slice(0, event.target.value));
    // console.log(indexOfFirstValue + ' ' + indexOfLastValue)
  };
  const totalPages = Math.ceil(alert_examples.length / rowsPerPage);

  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className=" Actual_h1 row">
            <div className="col-sm-8 float-sm-right float-md-right float-lg-right float-xl-right  col-md-7">
              <div className="images-header-row">
                <h1 className="images-header__h1">ALERTAS</h1>
              </div>
            </div>
            <div className="col-sm-4 col-md-5">
              <button
                className="alert-header__deleteButton w-100"
                onClick={() => setModalSee(true)}>
                ELIMINAR ALERTA(S) &nbsp; &nbsp;
                <img src={ic_trash_outline} className="alert-header__icAdd" />
              </button>
              &nbsp; &nbsp; &nbsp;
              <DeleteRole show={modalSee} onHide={() => setModalSee(false)} />
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="roles-main-table__h6">
                  {alert_headings.emptyString}
                </th>
                <th scope="col" className="roles-main-table__h6">
                  {alert_headings.informed}
                </th>
                <th scope="col" className="roles-main-table__h6">
                  {alert_headings.success}
                </th>
                <th scope="col" className="roles-main-table__h6">
                  {alert_headings.module}
                </th>
                <th scope="col" className="roles-main-table__h6">
                  {alert_headings.grades}
                </th>
                <th scope="col" className="roles-main-table__h6">
                  {alert_headings.emptyStringTwo}
                </th>
              </tr>
            </thead>
            <tbody>
              {alert_examples.map((item) => (
                <tr
                  className={item.className}
                  onClick={() => setAlertModal(true)}>
                  <th scope="row">
                    <input
                      type={item.alertType}
                      onClick={(e) => handleInputOnClickEvent(e)}
                      className=""
                    />
                    <input
                      type={item.alertType}
                      onClick={(e) => handleInputOnClickEvent(e)}
                      className="star"
                    />
                  </th>
                  <td>{item.name}</td>
                  <td>{item.content}</td>
                  <td>{item.alert}</td>
                  <td>{item.notes}</td>
                  <td className="d-flex">
                    <button
                      className="bg-white btn p-0"
                      onClick={(e) => handleInputOnClick(e)}>
                      <i class="fa-regular fa-trash-can alert_trash_can"></i>
                    </button>
                    <DeleteRole show={modalSee} onHide={(e) => handleHide(e)} />

                    {item.time}
                  </td>
                </tr>
              ))}
              <AlertDetailsModal
                show={alertModal}
                onHide={() => setAlertModal(false)}
              />
            </tbody>
          </table>

          <div className="page">
            <TablePagination
              component="div"
              rowsPerPageOptions={[5, 10, 20, 50, 100, 200, 500]}
              count={alert_examples.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage={<span>Usuarios por página</span>}
              labelDisplayedRows={({ page }) => {
                return `Página: ${page}  de ${totalPages}`;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertMain;

function DeleteRole(props) {
  const handleOnClickHide = (e, props) => {
    e.stopImmediatePropagation();
    props.onHide();
  };
  return (
    <div className="role-delete-modal">
      <Modal
        dialogClassName="modal-90w"
        className="modalCenter"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Modal.Header
          onClick={props.onHide}
          closeButton
          className="btn-close-red">
          <Modal.Title
            style={{ margin: "0 auto" }}
            id="contained-modal-title-vcenter"
            className="role-model-top">
            ELIMINAR ALERTA(S)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__alertheading">
            Para eliminar las alertas, necesitas confirmas la acción.
          </h4>
          {/* <p className='role-model-body__p'> Total 4 </p> */}
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

function AlertDetailsModal(props) {
  return (
    <div className="role-delete-modal">
      <Modal
        dialogClassName="modal-90w"
        className="modalCenter"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            style={{ margin: "0 auto" }}
            id="contained-modal-title-vcenter"
            className="role-model-top">
            DETALLES DE ALERTA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 ">
            Informada por
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            Luis Enrique Cornejo Arreola
          </p>
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 mt-2 ">
            Succeso
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            No se pueden crear alertas
          </p>
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 mt-2">
            Módulo
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            Alertas
          </p>
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 mt-2 ">
            Notas
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            Sin notas.
          </p>
          <h4 className="loadPhone-right__heading text-start mb-0 pb-0 mt-2">
            Fecha
          </h4>
          <p className="roles-acc-body-one__rolesLiP mt-0 pt-0 mx-2 pl-3">
            22:11 Jueves 9, Marzo 2021
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            NO LEÍDA
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            LEÍDA
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
