import React, { useState, useContext } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import database from "../../../images/internet-connection/database.png";
import ram from "../../../images/internet-connection/ram.png";
import arrow_right from "../../../images/internet-connection/arrow-right.png";
import arrow_up from "../../../images/internet-connection/arrow-up.png";
import Modal from "react-bootstrap/Modal";
import global_network from "../../../images/internet-connection/global-network.png";
import { AppContext } from "../../../App";
import "react-circular-progressbar/dist/styles.css";
import { height } from "@mui/system";

const InternetConnectionMain = () => {
  const [modalSee, setModalSee] = useState(false);
  const { val1 } = useContext(AppContext);

  const percentage = 25;
  const ptoGb = (percentage / 100) * 4;
  const percentage2 = 58;
  const handleInfoClick = () => {
    console.log("Kainat");
  };

  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className=" Actual_h1 row">
            <div className="col-sm-12 float-sm-right float-md-right float-lg-right float-xl-right">
              <div className="images-header-row">
                <h1 className="images-header__h1">
                  ESPECIFICACIONES DEL SERVIDOR
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-5 col-lg-4">
              <div className="internet-maindiv__firstDiv h-100 ">
                <button
                  style={{
                    float: "right",
                    marginRight: "1em",
                    marginTop: ".2em",
                    background: "none",
                    border: "none",
                  }}
                  onClick={handleInfoClick}>
                  <div>
                    <button className="internet-info">
                      <i
                        class="fa-solid fa-info"
                        onClick={() => setModalSee(true)}></i>
                    </button>

                    <DeleteRole
                      show={modalSee}
                      onHide={() => setModalSee(false)}
                    />
                  </div>
                </button>
                <div className="maindiv">
                  <div className="internet-maindiv__firstDiv__internal">
                    <div className="internet-maindiv__firstDiv__internal__div">
                      <img
                        src={database}
                        className="internet-maindiv__firstDiv__internal__div__images"
                      />
                      <p className="internet-maindiv__firstDiv__internal__div__firstp">
                        {`${percentage}/100%`}
                      </p>
                      <p className="internet-maindiv__firstDiv__internal__div__secondp">
                        {`${ptoGb}/4 GB`}
                      </p>
                      <p className="internet-maindiv__firstDiv__internal__div__thirdp">
                        ALMAGENAMIENTO EN BASE DE DATOS
                      </p>
                    </div>
                    <div className="internet-maindiv__firstDiv__internal__css">
                      <CircularProgressbar
                        value={percentage}
                        // text={`${percentage}/100%`}
                        strokeWidth={2}
                        styles={buildStyles({
                          rotation: 0.5 + (1 - percentage / 100) / 2,
                          pathColor: "#0C4523",
                          textColor: "#006594",
                          textSize: "10px",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 col-lg-4">
              <div className="internet-maindiv__firstDiv h-100">
                <button
                  style={{
                    float: "right",
                    marginRight: "1em",
                    marginTop: ".2em",
                    background: "none",
                    border: "none",
                  }}>
                  <div>
                    <button className="internet-info">
                      <i
                        class="fa-solid fa-info"
                        onClick={() => setModalSee(true)}></i>
                    </button>
                    <DeleteRole
                      show={modalSee}
                      onHide={() => setModalSee(false)}
                    />
                  </div>
                </button>
                <div className="maindiv">
                  <div className="internet-maindiv__firstDiv__internal">
                    <div className="internet-maindiv__firstDiv__internal__div">
                      <img
                        src={ram}
                        className="internet-maindiv__firstDiv__internal__div__images"
                      />
                      <p className="internet-maindiv__firstDiv__internal__div__firstp">
                        {`${percentage}/100%`}
                      </p>
                      <p className="internet-maindiv__firstDiv__internal__div__secondp">
                        {`${ptoGb}/4 GB`}
                      </p>
                      <p className="internet-maindiv__firstDiv__internal__div__thirdp">
                        ESTADO DE MEMORIA RAM
                      </p>
                    </div>
                    <div className="internet-maindiv__firstDiv__internal__css">
                      <CircularProgressbar
                        value={percentage2}
                        // text={`${percentage2}/100%`}
                        strokeWidth={2}
                        styles={buildStyles({
                          rotation: 0.5 + (1 - percentage2 / 100) / 2,
                          pathColor: "#F2A100",
                          textColor: "#006594",
                          textSize: "10px",
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="internet-submaindiv col-sm-12 col-md-10 col-lg-8">
              <div className=" float-end">
                <button
                  className="internet-info"
                  style={{
                    float: "right",
                    marginRight: ".5em",
                    marginTop: "-1.2em",
                    background: "none",
                    border: "none",
                  }}>
                  <i
                    class="fa-solid fa-info"
                    onClick={() => setModalSee(true)}></i>
                </button>
                <DeleteRole show={modalSee} onHide={() => setModalSee(false)} />
              </div>

              <div className="internet-submaindiv__div">
                <div className="internet-submaindiv__div__firstImg">
                  <img
                    className="internet-submaindiv__div__firstImg__imgOne"
                    src={arrow_up}
                  />
                  <p className="internet-submaindiv__div__firstImg__pOne">
                    4.6 MB
                  </p>
                  <p className="internet-submaindiv__div__firstImg__pTwo">
                    VELOCIDAD DE BAJADA
                  </p>
                </div>
                <div className="internet-submaindiv__div__secondImg">
                  <img
                    className="internet-submaindiv__div__secondImg__imgOne"
                    src={global_network}
                  />
                  <p className="internet-submaindiv__div__secondImg__pOne">
                    VELOCIDAD DE INTERNET
                  </p>
                  {/* <p className='internet-submaindiv__secondImg__pTwo'>VELOCIDAD DE SUBIDA</p> */}
                </div>
                <div className="internet-submaindiv__div__firstImg">
                  <img
                    className="internet-submaindiv__div__firstImg__imgOne"
                    src={arrow_right}
                  />
                  <p className="internet-submaindiv__div__firstImg__pOne">
                    100 MB
                  </p>
                  <p className="internet-submaindiv__div__firstImg__pTwo">
                    VELOCIDAD DE SUBIDA
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.5 + (1 - percentage / 100) / 2,
          })}
        /> */}
        </div>
      </div>
    </div>
  );
};

export default InternetConnectionMain;

function DeleteRole(props) {
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
            id="contained-modal-title-vcenter"
            className="role-model-top-internet">
            SOLUCIONES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              Revisar el estado del router.
            </li>
            <li className="role-model-body__ul__li">
              Revisar el estado del router.
            </li>
            <li className="role-model-body__ul__li">
              Revisar el estado del router.
            </li>
            <li className="role-model-body__ul__li">
              Revisar el estado del router.
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          {/* <button onClick={props.onHide} className='role-model-close-btn'>
            Close
          </button> */}
          <button
            onClick={props.onHide}
            className="role-model-internet-confirm-btn">
            CONFIRMAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
