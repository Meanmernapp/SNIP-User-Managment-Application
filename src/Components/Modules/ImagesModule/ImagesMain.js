import React, { useState, useContext } from "react";
import ic_add from "../../../images/ic-add.svg";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ic_check from "../../../images/ic-check.svg";
import pencil_solid from "../../../images/pencil-solid.svg";
import ic_edit_outline from "../../../images/ic-edit-outline.svg";
import cloud from "../../../images/cloud.svg";
import upload_img from "../../../images/upload.png";
import TablePagination from "@mui/material/TablePagination";
import { AppContext } from "../../../App";

const ImagesMain = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [eliminateModalShow, setEliminateModalShow] = useState(false);
  const [addImageShow, setAddImageShow] = useState(false);
  const [editInfoShow, setEditInfoShow] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentValues, setCurrentValues] = useState();
  const { val1 } = useContext(AppContext);

  let fetchDetail = `22 Abril 
  11:21`;
  console.log(ic_check);
  console.log(fetchDetail);
  const imagesHeading = {
    name: "NOMBRE",
    takenBy: "TOMADA POR",
    module: "MODULO",
    fetch: "FECHA",
    Opc: "OPC",
    edit: "",
  };

  const imagesValues = [
    {
      nameImage: ``,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: `<i class='fa-light fa-pencil'></i>`,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
    {
      nameImage: <i class="fa-solid fa-eye"></i>,
      nameText: "log_1.jpg",
      takenName: "Luis Cornejo",
      moduleName: "LOG",
      fetchDetail: fetchDetail,
      OPCtype: "checkbox",
      editType: <i class="fa-light fa-pencil"></i>,
    },
  ];
  const handleAddButton = () => {
    navigate("/createDepartment");
  };
  {
    imagesValues.map((item) => {
      console.log(item.nameImage);
      console.log(item.nameText);
    });
  }

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
    setCurrentValues(imagesValues.splice(indexOfFirstValue, rowsPerPage));

    console.log(currentValues);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    // const indexOfLastValue = currentPage * postsPerPage
    // const indexOfFirstValue = indexOfLastValue - postsPerPage
    setCurrentValues(imagesValues.slice(0, event.target.value));
    // console.log(indexOfFirstValue + ' ' + indexOfLastValue)
  };
  const totalPages = Math.ceil(imagesValues.length / rowsPerPage);

  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className="images-header row">
            <div className="col-sm-5  float-sm-right float-md-right float-lg-right float-xl-right  col-md-4 col-lg-4 col-xl-4">
              <h1 className="images-header__h1 ">IMÁGENES</h1>
            </div>
            <div className="images-header__buttons col-sm-6 col-md-8 col-lg-8 col-xl-8 float-end">
              <div className="row">
                <div className=" ms-auto col-sm-10 col-md-6 col-lg-4 col-xl-4">
                  <button
                    className="images-header__buttons__downloadButton w-100"
                    onClick={() => setModalShow(true)}>
                    DESCARGAR IMÁGEN(ES)
                    <img
                      src={ic_add}
                      className="images-header__buttons__icAdd"
                    />
                  </button>
                  <InformationModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
                <div className=" ms-auto col-sm-10 col-md-6 col-lg-4 col-xl-4">
                  <button
                    className="images-header__buttons__deleteButton w-100"
                    onClick={() => setEliminateModalShow(true)}>
                    ELIMINAR IMÁGEN(ES)
                    <img
                      src={ic_add}
                      className="images-header__buttons__icAdd"
                    />
                  </button>
                  <MyVerticallyCenteredModal
                    show={eliminateModalShow}
                    onHide={() => setEliminateModalShow(false)}
                  />
                </div>
                <div className="ms-auto col-sm-10  col-md-6 col-lg-4 col-xl-4 ">
                  <button
                    className="images-header__buttons__addButton w-100"
                    onClick={() => setAddImageShow(true)}>
                    AGREGAR IMAGEN
                    <img
                      src={ic_add}
                      className="images-header__buttons__icAdd"
                    />
                  </button>
                  <AddImageModal
                    show={addImageShow}
                    onHide={() => setAddImageShow(false)}
                  />
                </div>
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
                fontWeight: !open ? "bold" : "normal",
              }}>
              MIS CASOS DE USO
            </button>
            <button
              className="department-main-heading__todos"
              onClick={() => setOpen(true)}
              style={{
                borderBottom: open ? "2px solid #00506A" : "none",
                color: open ? "#00506A" : "#707070",
                fontWeight: open ? "bold" : "normal",
              }}>
              TODOS
            </button>
          </div>

          <div className="images-main-table">
            <div className="row ">
              <div className=" vl-update-report col-md-12 col-lg-6 col-xl-6">
                <h3 className="images-header__h1">IMAGEN SIN CASO</h3>
                <div className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div">
                  <table class="table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          NOMBRE
                        </th>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          TOMADA POR
                        </th>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          MODULO
                        </th>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          FECHA
                        </th>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          OPC
                        </th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {imagesValues.map((item) => (
                        <tr className="images-table-full spacer">
                          <th
                            scope="row"
                            className="images-table-data__columnOne">
                            <button className="bg-white btn p-0">
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            {item.nameText}
                          </th>
                          <td className="images-table-data__column">
                            {item.takenName}
                          </td>
                          <td className="images-table-data__column">
                            {item.moduleName}
                          </td>
                          <td className="images-table-data__column">
                            {item.fetchDetail}
                          </td>
                          <td className="images-table-data__column__checkbox images-table-data__column">
                            <input type={item.OPCtype} />
                          </td>

                          <td>
                            <button
                              className="department-create-header__button"
                              onClick={() => setEditInfoShow(true)}>
                              <img
                                src={ic_edit_outline}
                                className="loadPhone__image"
                                // style={{ color: '#00506A', fontSize: '1.5em' }}
                              />
                            </button>
                            <EditInfo
                              show={editInfoShow}
                              onHide={() => setEditInfoShow(false)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="pages">
                  <TablePagination
                    component="div"
                    rowsPerPageOptions={[5, 10, 20, 50, 100, 200, 500]}
                    count={imagesValues.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage={<span>Imagenes por página</span>}
                    labelDisplayedRows={({ page }) => {
                      return `Página: ${page}  de ${totalPages}`;
                    }}
                  />
                </div>
              </div>
              <div className=" col-md-12 col-lg-6 col-xl-6">
                <h3 className="images-header__h1 right-image-text">
                  IMAGEN SIN CASO
                </h3>
                <div className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div">
                  <table class="table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          NOMBRE
                        </th>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          TOMADA POR
                        </th>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          MODULO
                        </th>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          FECHA
                        </th>
                        <th
                          scope="col"
                          className="images-table-heading__headings">
                          OPC
                        </th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {imagesValues.map((item) => (
                        <tr className="images-table-full">
                          <th
                            scope="row"
                            className="images-table-data__columnOne">
                            <button className="bg-white btn p-0">
                              <i class="fa-solid fa-eye"></i>
                            </button>
                            {item.nameText}
                          </th>
                          <td className="images-table-data__column">
                            {item.takenName}
                          </td>
                          <td className="images-table-data__column">
                            {item.moduleName}
                          </td>
                          <td className="images-table-data__column">
                            {item.fetchDetail}
                          </td>

                          <td className="images-table-data__column__checkbox images-table-data__column">
                            <input type={item.OPCtype} />
                          </td>
                          <td>
                            <button
                              className="department-create-header__button"
                              onClick={() => setEditInfoShow(true)}>
                              <img
                                src={ic_edit_outline}
                                className="loadPhone__image "
                              />
                            </button>
                          </td>
                          <EditInfo
                            show={editInfoShow}
                            onHide={() => setEditInfoShow(false)}
                          />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesMain;
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
            ELIMINAR IMÁGENES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__heading">Imágenes seleccionados:</h4>
          <p className="role-model-body__p"> Total 4 </p>
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              <span> Log_1.png </span>
            </li>
            <li className="role-model-body__ul__li">
              <span> Log_1.png </span>
            </li>
            <li className="role-model-body__ul__li">
              <span> Log_1.png </span>
            </li>
            <li className="role-model-body__ul__li">
              <span> Log_1.png </span>
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

function InformationModal(props) {
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
            INFORMACIÓN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="images-model-body mx-4">
          <div className="mx-5">
            <div className="d-flex flex-column justify-content-center">
              <img src={ic_check} className="images-model-body__img mx-auto" />
              <h4 className="images-model-body__heading">
                Imágenes descargadas exitosamente
              </h4>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="images-model-confirm-btn">
            CERRAR
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
            className="images-model-top">
            CARGA DE IMAGEN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="images-model-body">
          <div className="report-info__detail col-12">
            <div className="input-group-report">
              <label className="input-group-report__label">NOMBRE</label>
              <input className="input-group-report__text user-info__name"></input>
            </div>
            <div className="input-group-report form-group-report">
              <label className="input-group-report__label">CASOS</label>
              {/* <input className='input-group-report__text user-  info__name'></input> */}
              <select class="input-group-report__text user-info__name form-control classic ">
                <option style={{ display: "none" }}></option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
              </select>
              <i class="fa fa-caret-down" style={{ marginTop: "-1.7em" }}></i>
            </div>
          </div>
          <p className="images-model-body__addImage-p"> IMAGEN </p>
          <div className="images-model-body__addImage-upload mx-5">
            <div className="images-model-row mx-4">
              <img src={cloud} className="images-model-body__cloudImage " />

              <p className="images-model-body__p ">
                ARRASTRA <br /> Ó <br /> SULETA TU ARCHIVO <br />{" "}
                <span> 20 MB MAX. </span>{" "}
              </p>
            </div>
          </div>
          <img src={upload_img} className="images-model-body__Image-upload" />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            CANCELAR
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            CARGAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function EditInfo(props) {
  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w"
        {...props}
        backdropClassName="newBackdrop"
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="images-model-top">
            ACTUALIZAR IMAGEN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="images-model-body">
          <div className="report-info__detail col-12">
            <div className="input-group-report">
              <label className="input-group-report__label">NOMBRE</label>
              <input className="input-group-report__text user-info__name"></input>
            </div>
            <div className="input-group-report form-group-report">
              <label className="input-group-report__label">CASOS</label>
              {/* <input className='input-group-report__text user-  info__name'></input> */}
              <select class="input-group-report__text user-info__name form-control ">
                <option style={{ display: "none" }}></option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
                <option>BIL-2091 | Encargado: Luis Cornejo</option>
              </select>
              <i class="fa fa-caret-down" style={{ marginTop: "-1.7em" }}></i>
            </div>
          </div>
          <p className="images-model-body__addImage-p"> IMAGEN </p>
          {/* <div className='images-model-body__addImage-upload'>
            <img src={cloud} className='images-model-body__cloudImage ' />

            <p className='images-model-body__p'>
              ARRASTRA <br /> Ó <br /> SULETA TU ARCHIVO <br />{' '}
              <span> 20 MB MAX. </span>{' '}
            </p>
          </div> */}
          {/* <img src={upload_img} className='images-model-body__Image-upload' /> */}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide} className="role-model-close-btn">
            CANCELAR
          </button>
          <button onClick={props.onHide} className="role-model-confirm-btn">
            ACTUALIZAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
