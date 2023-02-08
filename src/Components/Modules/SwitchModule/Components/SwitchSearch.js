import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../App";
import Modal from "react-bootstrap/Modal";
import ic_search from "../../../../images/ic-search.svg";
import ic_pdf from "../../../../images/pdf-img.svg";
import edit_white from "../../../../images/ic-edit-outline-white.svg";
import ic_download from "../../../../images/ic-download-file.svg";
import ic_table from "../../../../images/ic-table-solid.svg";
import ic_map from "../../../../images/ic-map.svg";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import cloud from "../../../../images/cloud.svg";
import upload_img from "../../../../images/upload.png";

const SwitchSearch = () => {
  const { val1 } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);
  const [modalSee, setModalSee] = useState(false);

  let navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/switch");
  };

  const handleActualBtn = () => {
    navigate("/data-in-load-update");
  };
  const handleClick = () => {
    navigate("/switch");
  };
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className="Actual_h1 row">
            <div className="col-sm-6 col-lg-8">
              <button
                onClick={handleClick}
                className="department-create-header__button">
                <img src={ic_left_arrow} className="back-arrow" />
              </button>
              RESULTADOS ENCONTRADOS
            </div>
            <div className="col-sm-6 col-lg-3 ms-auto">
              <button
                className="department-header__buttons__downloadButton w-100 px-0 mx-0  "
                onClick={handleClick}>
                VOLVER A BUSCAR &nbsp; &nbsp;
                <img src={ic_search} className="roles-header__icAdd-search" />
              </button>
            </div>
          </div>

          <div className="roles-subheader row">
            <h3 className="roles-subheader__h3 col-12 ">
              1 - 10 de 36 Sábanas encontradas
            </h3>
          </div>

          <div className="card-class mr-3">
            <div className="switch-example  mb-3 pt-3">
              <div className="px-3">
                <div className="row float-end mr-2 ">
                  <button
                    className=" col-12 department-create-header__button"
                    onClick={() => setModalShow(true)}>
                    <img
                      src={ic_download}
                      className="switch-example__icAdd-download  "
                    />
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
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
                    <p className="switch-example__div__tp"> TAMAÑO: 18 MB.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-end">
                    <button
                      className="switch-example__buttonOk col-sm-10 col-md-6"
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
                  <div className="col-6 card-table__fc">PROPIETARIO</div>
                  <div className="col-6 card-table__sc">Luis Cornejo</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">DIRECCIÓN</div>
                  <div className="col-6  card-table__sc">Casa blanca 303</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">PROVEEDOR</div>
                  <div className="col-6  card-table__sc">Telcel</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMEI</div>
                  <div className="col-6 card-table__sc">234234234242</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMSI</div>
                  <div className="col-6 card-table__sc">23424242423423</div>
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

                <div className="btn-row">
                  <button className="btn-row__btns">
                    <img src={ic_map} className="btn-row__svg" />
                    VISUALIZAR MAPA
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
            <div className="switch-example mr-3 mb-3 pt-3">
              <div className="px-3">
                <div className="row float-end mr-2 ">
                  <button
                    className=" col-12 department-create-header__button"
                    onClick={() => setModalShow(true)}>
                    <img
                      src={ic_download}
                      className="switch-example__icAdd-download  "
                    />
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
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
                    <p className="switch-example__div__tp"> TAMAÑO: 18 MB.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-end">
                    <button className="switch-example__buttonOk col-sm-10 col-md-6">
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
                  <div className="col-6 card-table__fc">PROPIETARIO</div>
                  <div className="col-6 card-table__sc">Luis Cornejo</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">DIRECCIÓN</div>
                  <div className="col-6  card-table__sc">Casa blanca 303</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">PROVEEDOR</div>
                  <div className="col-6  card-table__sc">Telcel</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMEI</div>
                  <div className="col-6 card-table__sc">234234234242</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMSI</div>
                  <div className="col-6 card-table__sc">23424242423423</div>
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
                    <button className="department-create-header__button__switchUnderlined card-table__btnC">
                      SIN CASO / AGREGAR CASO
                    </button>
                  </div>
                </div>

                <div className="btn-row ">
                  <button className="btn-row__btns ">
                    <img src={ic_map} className="btn-row__svg" />
                    VISUALIZAR MAPA
                  </button>
                  <div class="vr "></div>

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
            <div className="switch-example mr-3 mb-3 pt-3">
              <div className="px-3">
                <div className="row float-end mr-2 ">
                  <button
                    className=" col-10 department-create-header__button"
                    onClick={() => setModalShow(true)}>
                    <img
                      src={ic_download}
                      className="switch-example__icAdd-download  "
                    />
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
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
                    <p className="switch-example__div__tp"> TAMAÑO: 18 MB.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-end">
                    <button className="switch-example__buttonOk col-sm-10 col-md-6">
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
                  <div className="col-6 card-table__fc">PROPIETARIO</div>
                  <div className="col-6 card-table__sc">Luis Cornejo</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">DIRECCIÓN</div>
                  <div className="col-6  card-table__sc">Casa blanca 303</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">PROVEEDOR</div>
                  <div className="col-6  card-table__sc">Telcel</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMEI</div>
                  <div className="col-6 card-table__sc">234234234242</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMSI</div>
                  <div className="col-6 card-table__sc">23424242423423</div>
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
                    <button className="department-create-header__button__switchUnderlined card-table__btnC">
                      SIN CASO / AGREGAR CASO
                    </button>
                  </div>
                </div>

                <div className="btn-row ">
                  <button className="btn-row__btns ">
                    <img src={ic_map} className="btn-row__svg" />
                    VISUALIZAR MAPA
                  </button>
                  <div class="vr"></div>

                  <button
                    className="btn-row__btns "
                    // onClick={handleActualBtn}
                  >
                    <img src={ic_table} className="btn-row__svg" />
                    VER REGISTROS
                  </button>
                </div>
              </div>
            </div>
            <div className="switch-example mr-3 mb-3 pt-3">
              <div className="px-3">
                <div className="row float-end mr-2 ">
                  <button
                    className=" col-12 department-create-header__button"
                    onClick={() => setModalShow(true)}>
                    <img
                      src={ic_download}
                      className="switch-example__icAdd-download  "
                    />
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
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
                    <p className="switch-example__div__tp"> TAMAÑO: 18 MB.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-end">
                    <button className="switch-example__buttonOk col-sm-10 col-md-6">
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
                  <div className="col-6 card-table__fc">PROPIETARIO</div>
                  <div className="col-6 card-table__sc">Luis Cornejo</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">DIRECCIÓN</div>
                  <div className="col-6  card-table__sc">Casa blanca 303</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">PROVEEDOR</div>
                  <div className="col-6  card-table__sc">Telcel</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMEI</div>
                  <div className="col-6 card-table__sc">234234234242</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMSI</div>
                  <div className="col-6 card-table__sc">23424242423423</div>
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
                    <button className="department-create-header__button__switchUnderlined card-table__btnC">
                      SIN CASO / AGREGAR CASO
                    </button>
                  </div>
                </div>

                <div className="btn-row ">
                  <button className="btn-row__btns ">
                    <img src={ic_map} className="btn-row__svg" />
                    VISUALIZAR MAPA
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
            <div className="switch-example mr-3 mb-3 pt-3">
              <div className="px-3">
                <div className="row float-end mr-2 ">
                  <button
                    className=" col-12 department-create-header__button"
                    onClick={() => setModalShow(true)}>
                    <img
                      src={ic_download}
                      className="switch-example__icAdd-download  "
                    />
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
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
                    <p className="switch-example__div__tp"> TAMAÑO: 18 MB.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-end">
                    <button className="switch-example__buttonOk col-sm-10 col-md-6">
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
                  <div className="col-6 card-table__fc">PROPIETARIO</div>
                  <div className="col-6 card-table__sc">Luis Cornejo</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">DIRECCIÓN</div>
                  <div className="col-6  card-table__sc">Casa blanca 303</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">PROVEEDOR</div>
                  <div className="col-6  card-table__sc">Telcel</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMEI</div>
                  <div className="col-6 card-table__sc">234234234242</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMSI</div>
                  <div className="col-6 card-table__sc">23424242423423</div>
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
                    <button className="department-create-header__button__switchUnderlined card-table__btnC">
                      SIN CASO / AGREGAR CASO
                    </button>
                  </div>
                </div>

                <div className="btn-row ">
                  <button className="btn-row__btns ">
                    <img src={ic_map} className="btn-row__svg" />
                    VISUALIZAR MAPA
                  </button>
                  <div class="vr w-10"></div>

                  <button
                    className="btn-row__btns "
                    // onClick={handleActualBtn}
                  >
                    <img src={ic_table} className="btn-row__svg" />
                    VER REGISTROS
                  </button>
                </div>
              </div>
            </div>
            <div className="switch-example mr-3 mb-3 pt-3">
              <div className="px-3">
                <div className="row float-end mr-2 ">
                  <button
                    className=" col-12 department-create-header__button"
                    onClick={() => setModalShow(true)}>
                    <img
                      src={ic_download}
                      className="switch-example__icAdd-download  "
                    />
                  </button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
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
                    <p className="switch-example__div__tp"> TAMAÑO: 18 MB.</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-end">
                    <button className="switch-example__buttonOk col-sm-10 col-md-6">
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
                  <div className="col-6 card-table__fc">PROPIETARIO</div>
                  <div className="col-6 card-table__sc">Luis Cornejo</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">DIRECCIÓN</div>
                  <div className="col-6  card-table__sc">Casa blanca 303</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">PROVEEDOR</div>
                  <div className="col-6  card-table__sc">Telcel</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMEI</div>
                  <div className="col-6 card-table__sc">234234234242</div>
                </div>
                <div className="row card-table">
                  <div className="col-6 card-table__fc">IMSI</div>
                  <div className="col-6 card-table__sc">23424242423423</div>
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
                    <button className="department-create-header__button__switchUnderlined card-table__btnC">
                      SIN CASO / AGREGAR CASO
                    </button>
                  </div>
                </div>

                <div className="btn-row">
                  <button className="btn-row__btns ">
                    <img src={ic_map} className="btn-row__svg" />
                    VISUALIZAR MAPA
                  </button>
                  <div class="vr "></div>

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
  );
};

export default SwitchSearch;

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
            DESCARGAR <br /> EXTRACTO TELEFÓNICO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__settingheading mx-5">
            ¿Para descargar la extracto telefónico
            <b> 4422232493_telcer.csv </b>
            por favor confirma la acción?
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
            AGREGAR A CASO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="images-model-body">
          <p className="role-model-body__p2">
            Seleccione el caso al que desea asociar el extracto telefónico:
          </p>
          <form>
            <div className="report-info__detail col-12">
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
            </div>
          </form>
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
