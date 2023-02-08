import React, { useState, useContext, useEffect } from "react";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getPassIdData } from "../../../features/userSlice";

const PasswordChangeMain = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [password, setPassword] = useState();
  let navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { val1 } = useContext(AppContext);
  const { passResetId, passIdData } = useSelector((state) => state.user);

  const handleClick = () => {
    console.log("kainat");

    console.log(open);
    setOpen(!open);
    if (open === true) {
      generatePassword();
    }
  };

  const handleBackButton = () => {
    navigate("/users");
  };
  const generatePassword = async () => {
    console.log(passResetId);
    await axios
      .put(
        `http://38.65.139.14:8081/corporate-citras-v1/user-service/password-reset/by-id/${passResetId}`
      )
      .then((response) => {
        console.log("eee");
        console.log(response);
        dispatch(getPassIdData(response.data.data));
        console.log(passIdData);
      });

    // copy the password to the clipboard & fire toast message
  };
  const copyText = () => {
    if (navigator.clipboard.writeText(password)) {
      toast("Password copied to your clipboard");
      console.log();
    }
  };
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <h1 className="Actual_h1">
            <button className="actual_backbutton" onClick={handleBackButton}>
              <i class="fa-solid fa-arrow-left-long"></i>{" "}
            </button>
            RESTAURAR CONTRASEÑA
          </h1>
          <div style={{ marginTop: "4em" }}>
            <div className="container mt-4">
              <div className="row pt-10">
                <div className="mI_main_div col-sm-12 col-md-10">
                  <div className="mI_div_one col-sm-6 col-md-6 ">
                    <Image
                      variant="top"
                      className="mI_div_img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU"
                    />
                    <ul>
                      <li className="row">
                        <label htmlFor="" className="col mI_label">
                          Nombre
                        </label>
                        <label htmlFor="" className="col mI_label_two">
                          {user.name}
                        </label>
                      </li>
                      <li className="row">
                        <label htmlFor="" className="col mI_label">
                          Rol
                        </label>
                        <label htmlFor="" className="col mI_label_two">
                          Administrator
                        </label>
                      </li>
                      <li className="row">
                        <label htmlFor="" className="col mI_label">
                          Correro
                        </label>
                        <label htmlFor="" className=" col mI_label_two">
                          {user.email}
                        </label>
                      </li>
                      <li className="row">
                        <label htmlFor="" className="col mI_label">
                          Teléfono
                        </label>
                        <label htmlFor="" className="col mI_label_two">
                          {user.phoneNumber}
                        </label>
                      </li>
                      <li className="row">
                        <label htmlFor="" className="col mI_label">
                          Fecha de Expiración
                        </label>
                        <label htmlFor="" className="col mI_label_two">
                          20/02/2022
                        </label>
                      </li>
                      <li className="row">
                        <label htmlFor="" className="col mI_label">
                          Departamento
                        </label>
                        <label htmlFor="" className="col mI_label_two">
                          Asesinatos
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="mI_vertical_dotted"></div>
                  <div className="mI_div_two col-sm-6 col-md-6 ">
                    <button
                      className="mI_pwd_gen text-center col-sm-10 col-md-10"
                      onClick={handleClick}>
                      GENERAR NUEVA CONTRASEÑA
                    </button>
                    <ToastContainer />
                    <div
                      className="mI_otp col-10"
                      style={{ display: open ? "none" : "block" }}>
                      <div className="row ">
                        <p className="col-md-9 col-sm-8  text-center">
                          {passIdData}
                        </p>
                        <div className="mI_otp_paste  m-auto col-md-2 col-sm-2">
                          <i class="fa-solid fa-paste" onClick={copyText}></i>
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

export default PasswordChangeMain;

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
            ELIMINAR USUARIOS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__heading">Usuarios a eliminar</h4>
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
