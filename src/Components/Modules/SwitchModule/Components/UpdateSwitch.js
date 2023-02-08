import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../App";
import ic_add from "../../../../images/ic-add.svg";
import Modal from "react-bootstrap/Modal";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";

const UpdateSwitch = () => {
  const { val1 } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/switch-searches");
  };
  const handleBackButton = () => {
    navigate("/switch-searches");
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
              ACTUALIZAR EXTRACTO TELEFÓNICO
            </h1>
          </div>
          <div className="create-report-mainDiv col-sm-12 col-md-10 col-lg-10 col-xl-4 mx-auto">
            <div className="report-info__detail col-12">
              <div className="input-group-report">
                <label className="input-group-report__label">
                  IDENTIFICADOR / ALIAS
                </label>
                <input
                  className="input-group-report__text user-info__name"
                  placeholder="IBL-1232"></input>
              </div>
              <div className="input-group-report form-group-report">
                <label className="input-group-report__label">CASOS</label>
                <select class="input-group-report__text user-info__name form-control classic">
                  <option style={{ display: "none" }}></option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                  <option>BIL-2091 | Encargado: Luis Cornejo</option>
                </select>
              </div>
              <div className="input-group-report form-group-report">
                <label className="input-group-report__label">GROUPO</label>
                <select class="input-group-report__text user-info__name form-control ">
                  <option style={{ display: "none" }}></option>
                  <option>Asesinato María</option>
                  <option>Asesinato Celeste</option>
                  <option>Secuestro Pablo</option>
                  <option>Secuestro Ismael</option>
                </select>
                <i class="fa fa-caret-down" style={{ marginTop: "-1.7em" }}></i>
              </div>
            </div>
            <div className="create-report-btns">
              <button
                className="report-model-close-btn  col-5"
                onClick={handleClick}>
                CANCELAR
              </button>
              <button
                className="report-model-confirm-btn  col-5"
                onClick={handleClick}>
                ACTUALIZAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateSwitch;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ margin: "0 auto" }}>
      <Modal.Header closeButton className="btn-close-red">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="role-model-top">
          CREAR NUEVO ROL
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="role-model-body"
        style={{ padding: "0em 1rem !important" }}>
        <div className="role-modal__contact">
          <div className="input-group-role single-group">
            <label className="input-group-role__label">NOMBRE</label>
            <input
              className="input-group__text user-info-role__field"
              placeholder="EMPLEADO GENERAL"
              type="email"></input>
          </div>
        </div>
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
  );
}
