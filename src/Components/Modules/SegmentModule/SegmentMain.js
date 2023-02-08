import React, { useState, useContext } from "react";
import ic_add from "../../../images/ic-add.svg";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../App";
import TablePagination from "@mui/material/TablePagination";
import ic_edit_outline from "../../../images/ic-edit-outline.svg";
import ic_trash from "../../../images/NavBar/ic-trash-outline.svg";

const SegmentMain = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [openk, setOpenk] = useState(false);
  const [page, setPage] = useState(0);
  const [editInfoShow, setEditInfoShow] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentValues, setCurrentValues] = useState();
  const { val1 } = useContext(AppContext);
  const reportHeadings = {
    name: "NOMBRE",
    evidence: "EVIDENCIAS",
    notes: "NOTAS",
    pDate: "FECHA PRESENTACIÓN",
    pTime: "HORA PRESENTACIÓN",
    pPlace: "LUGAR PRESENTACIÓN",
    consult: "CONSULTAR",
    opc: "OPC",
  };
  const reporToDoValues = [
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
  ];

  const reportMisoValues = [
    {
      nameValue: "Caso 1",
      evidenceValue: "14",
      notesValue: "LOG",
      fetchValue: "22 Abril",
      timeValue: "11:21",
      placeValue: "-",
      consultValue: "-",
      opcValue: "checkbox",
    },
  ];
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
    setCurrentValues(reporToDoValues.splice(indexOfFirstValue, rowsPerPage));

    console.log(currentValues);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    // const indexOfLastValue = currentPage * postsPerPage
    // const indexOfFirstValue = indexOfLastValue - postsPerPage
    setCurrentValues(reporToDoValues.slice(0, event.target.value));
    // console.log(indexOfFirstValue + ' ' + indexOfLastValue)
  };
  const totalPages = Math.ceil(reporToDoValues.length / rowsPerPage);

  const handleAddButton = () => {
    navigate("/follow-create");
  };
  const handleOnAdmin = () => {
    navigate("/");
  };
  const handleEditClick = () => {
    navigate("/follow-view");
  };
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className=" Actual_h1 row">
            <div className="col-sm-6 float-sm-right float-md-right float-lg-right float-xl-right  col-md-6 col-lg-6 col-xl-6">
              <div className="images-header-row">
                <h1 className="images-header__h1">SEGUIMIENTOS</h1>
              </div>
              <p className="images-header__p">Total: 4 Seguimientos.</p>
            </div>
            <div className="department-header__buttons col-sm-6 col-md-6 col-lg-6 col-xl-4 ms-auto">
              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-9 float-end">
                <button
                  className="department-header__buttons__addButton w-100"
                  onClick={handleAddButton}>
                  CREAR SEGUIMIENTO &nbsp;
                  <img
                    src={ic_add}
                    className="department-header__buttons__icAdd"
                  />
                </button>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-9 float-end">
                <button
                  className="department-header__buttons__deleteButton w-100"
                  onClick={() => setModalShow(true)}>
                  ELIMINAR SEGUIMIENTO(S) &nbsp;
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
          <div className="">
            <button
              className="department-main-heading__dept"
              onClick={() => setOpen(false)}
              style={{
                borderBottom: !open ? "2px solid #00506A" : "none",
                color: !open ? "#00506A" : "#707070",
                fontWeight: !open ? "bold " : "normal",
              }}>
              MIS SEGUIMIENTOS
            </button>
            <button
              className="department-main-heading__todos"
              onClick={() => setOpen(true)}
              style={{
                borderBottom: open ? "2px solid #00506A" : "none",
                color: open ? "#00506A" : "#707070",
                fontWeight: open ? "bold " : "normal",
              }}>
              TODOS
            </button>
          </div>
          <div
            className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div w-100"
            style={{ display: open ? "none" : "block" }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.name}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.evidence}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.notes}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.pDate}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.pTime}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.pPlace}
                  </th>

                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.consult}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.opc}
                  </th>
                </tr>
              </thead>
              <tbody>
                {reportMisoValues.map((item) => (
                  <tr className="images-table-full">
                    <th scope="row">{item.nameValue}</th>
                    <td className="images-table-data__column text-center">
                      {item.evidenceValue}
                    </td>
                    <td className="images-table-data__column text-center">
                      {item.notesValue}
                    </td>
                    <td className="images-table-data__column text-center">
                      {item.fetchValue}
                    </td>
                    <td className="images-table-data__column text-center">
                      {item.timeValue}
                    </td>
                    <td className="images-table-data__column text-center">
                      {item.placeValue}
                    </td>
                    <td className="text-center">
                      <button
                        className="department-create-header__button"
                        onClick={handleEditClick}>
                        <img
                          src={ic_edit_outline}
                          // style={{ color: '#00506A', fontSize: '1.5em' }}
                        />
                      </button>
                    </td>
                    <td className="images-table-data__column text-center">
                      <input type={item.opcValue} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div w-100"
            style={{ display: !open ? "none" : "block" }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.name}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.evidence}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.notes}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.pDate}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.pTime}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.pPlace}
                  </th>

                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.consult}
                  </th>
                  <th scope="col" className="images-table-heading__headings">
                    {reportHeadings.opc}
                  </th>
                </tr>
              </thead>
              <tbody>
                {reporToDoValues.map((item) => (
                  <tr className="images-table-full">
                    <th scope="row">{item.nameValue}</th>
                    <td className="images-table-data__column text-center">
                      {item.evidenceValue}
                    </td>
                    <td className="images-table-data__column text-center">
                      {item.notesValue}
                    </td>
                    <td className="images-table-data__column text-center">
                      {item.fetchValue}
                    </td>
                    <td className="images-table-data__column text-center">
                      {item.timeValue}
                    </td>
                    <td className="images-table-data__column text-center">
                      {item.placeValue}
                    </td>
                    <td className="text-center">
                      <button
                        className="department-create-header__button"
                        onClick={handleEditClick}>
                        <img
                          src={ic_edit_outline}
                          // style={{ color: '#00506A', fontSize: '1.5em' }}
                        />
                      </button>
                    </td>
                    <td className="images-table-data__column text-center">
                      <input type={item.opcValue} />
                    </td>
                  </tr>
                ))}
              </tbody>

              <div className="pages">
                <TablePagination
                  component="div"
                  rowsPerPageOptions={[5, 10, 20, 50, 100, 200, 500]}
                  count={reporToDoValues.length}
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
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentMain;
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
            ELIMINAR DEPARTAMENTOS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__heading">
            Departamentos seleccionados:
          </h4>
          <p className="role-model-body__p"> Total 4 </p>
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span> | <p> Encargado: Luis Cornejo </p>{" "}
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span> | <p> Encargado: Luis Cornejo </p>{" "}
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span> | <p> Encargado: Luis Cornejo </p>{" "}
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Asesinatos </span> | <p> Encargado: Luis Cornejo </p>{" "}
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
