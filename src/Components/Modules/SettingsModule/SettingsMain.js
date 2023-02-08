import React, { useState, useContext } from "react";
import spain from "../../../images/spain.png";
import united_states from "../../../images/united-states.png";
import france from "../../../images/france.png";
import night_mode from "../../../images/night-mode.png";
import brightness from "../../../images/brightness.png";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../App";

const SettingsMain = () => {
  const [modalShow, setModalShow] = useState(false);
  const { val1 } = useContext(AppContext);

  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className="department-header">
            <div>
              <h1 className="department-header__h1">AJUSTES</h1>
            </div>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4 ">
              <p className="settings_mainHeading">SISTEMA</p>

              <div className="   settings_mainDiv">
                <div className="row">
                  <div className="col-sm-4 col-md-6 ">
                    <p className="settings-radio__mainp"> IDIOMA</p>
                  </div>
                </div>
                <div class="container">
                  <form className="">
                    <div class="form-check">
                      <label class="form-check-label" for="radio1">
                        <input
                          type="radio"
                          class="form-check-input"
                          id="radio1"
                          name="optradio"
                          value="option1"
                          checked
                          style={{ marginTop: "1em" }}
                        />
                        <div className="settings-radio ">
                          <img src={spain} className="settings-radio__img " />
                          <p className="settings-radio__p"> ESPAÑOL </p>
                        </div>
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label" for="radio2">
                        <input
                          type="radio"
                          class="form-check-input"
                          id="radio2"
                          name="optradio"
                          value="option2"
                          style={{ marginTop: "1em" }}
                        />
                        <div className="settings-radio ">
                          <img
                            src={united_states}
                            className="settings-radio__img "
                          />
                          <p className="settings-radio__p"> ENGLISH </p>
                        </div>
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label" for="radio3">
                        <input
                          type="radio"
                          class="form-check-input"
                          id="radio2"
                          name="optradio"
                          value="option3"
                          style={{ marginTop: "1em" }}
                        />
                        <div className="settings-radio ">
                          <img src={france} className="settings-radio__img " />
                          <p className="settings-radio__p"> FRANÇAIS </p>
                        </div>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4 ">
              <p className="settings_mainHeading">PANTALLA</p>
              <div className=" settings_mainDiv">
                <div className="row">
                  <div className="col-sm-4 col-md-4">
                    <p className="settings-radio__mainp">TEMA</p>
                  </div>
                </div>
                <div class="container">
                  <form className="">
                    <div class="form-check">
                      <label class="form-check-label" for="radio1">
                        <input
                          type="radio"
                          class="form-check-input"
                          id="radio1"
                          name="optradio"
                          value="option1"
                          checked
                          style={{ marginTop: "1em" }}
                        />
                        <div className="settings-radio ">
                          <img
                            src={brightness}
                            className="settings-radio__img "
                          />
                          <p className="settings-radio__p"> CLARO </p>
                        </div>
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label" for="radio2">
                        <input
                          type="radio"
                          class="form-check-input"
                          id="radio2"
                          name="optradio"
                          value="option2"
                          style={{ marginTop: "1em" }}
                        />
                        <div className="settings-radio ">
                          <img
                            src={night_mode}
                            className="settings-radio__img "
                          />
                          <p className="settings-radio__p"> OSCURO</p>
                        </div>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto">
              <button
                type="button"
                className="setting-btn__btn w-100"
                onClick={() => setModalShow(true)}>
                RESTALBECER CONFIGURACIONES PRE-ESTABLECIDAS
                <i class="fa-solid fa-gear setting-btn__icon "></i>
              </button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsMain;

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
        <Modal.Header closeButton className="btn-close-red ">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="images-model-top">
            RESTABLECER AJUSTES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__settingheading">
            Para aplicar los cambios, necesitas confirmas la acción.
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn ">
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
