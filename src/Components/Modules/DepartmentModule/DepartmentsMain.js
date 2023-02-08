import React, { useState, useContext, useEffect } from "react";
import ic_add from "../../../images/ic-add.svg";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../App";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { allDepartments } from "../../../features/departmentSlice";
import axios from "axios";
import { getByIdData } from "../../../features/departmentSlice";

const DepartmentsMain = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [deleteId, setDeleteId] = useState();
  const [deleteData, setDeleteData] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [openk, setOpenk] = useState(false);
  const { val1 } = useContext(AppContext);
  const { allDeptValue } = useSelector((state) => state.dept);
  const { getIdData } = useSelector((state) => state.dept);

  const dptAccHeader = [
    {
      murder: "ASESINATOS",
      mname: "Luis Cornejo",
      name: "NOMBRE",
      inCharge: "USUARIO A CARGO",
      adminDept: "ADMINISTRAR DEPARTAMENTO",
    },
    {
      murder: "ASESINATOS",
      mname: "Luis Cornejo",
      name: "NOMBRE",
      inCharge: "USUARIO A CARGO",
    },
  ];
  const deptAccBody = {
    bodyHeading: "Usuarios en el departamento",
    total: "TOTAL 42.",
    name: "Luis Enrique Cornejo Arreola",
  };
  const handleAddButton = () => {
    navigate("/create-department");
  };
  const handleInputOnClick = (e) => {
    e.stopPropagation();
    console.log(e.target.value);
    const { value, checked } = e.target;
    if (checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      const index = checkedValues.indexOf(value);
      setCheckedValues([
        ...checkedValues.slice(0, index),
        ...checkedValues.slice(index + 1),
      ]);
    }
  };
  const handleOnAdmin = () => {
    navigate("/update-dept");
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://38.65.139.14:8081/corporate-citras-v1/department-service/get-all`
      );
      console.log(result.data);
      dispatch(allDepartments(result.data.data));
    };
    fetchData();
  }, []);
  const handleChange = (e, item) => {
    e.stopPropagation();
    // console.log(item?.id);
    // setDeleteId(item?.id);
    // setDeleteData(item);
  };
  const handleMoreInfo = async ({ item }) => {
    const requestData = await axios.get(
      `http://38.65.139.14:8081/corporate-citras-v1/department-service/get-by-id/${item.id}`
    );
    console.log(requestData);
    dispatch(getByIdData(requestData.data.data));
  };
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className=" Actual_h1 row">
            <div className="col-sm-6 float-sm-right float-md-right float-lg-right float-xl-right  col-md-6 col-lg-6 col-xl-6">
              <div className="images-header-row">
                <h1 className="images-header__h1">DEPARTAMENTOS</h1>
              </div>
              <p className="images-header__p">Total: 4 Departamentos.</p>
            </div>
            <div className="department-header__buttons col-sm-6 col-md-6 col-lg-6 col-xl-4 ms-auto">
              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-10 float-end">
                <button
                  className="department-header__buttons__addButton w-100"
                  onClick={handleAddButton}>
                  AGREGAR NUEVO DEPARTAMENTO &nbsp;
                  <img
                    src={ic_add}
                    className="department-header__buttons__icAdd"
                  />
                </button>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-8 col-xl-10 float-end">
                <button
                  className="department-header__buttons__deleteButton w-100"
                  onClick={() => setModalShow(true)}>
                  ELIMINAR DEPARTAMENTO(S) &nbsp;
                  <img
                    src={ic_add}
                    className="department-header__buttons__icAdd"
                  />
                </button>
                <ConfirmDeleteModal
                  deletedata={checkedValues}
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
                fontWeight: !open ? "bold " : "normal",
              }}>
              MIS DEPARTAMENTOS
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

            <Accordion defaultActiveKey="0">
              {allDeptValue.length > 0 &&
                allDeptValue?.map((item, index) => (
                  <Accordion.Item
                    eventKey={item}
                    className="department-accordion  ">
                    <Accordion.Header className="">
                      <div className="row">
                        <div className="col-1">
                          <input
                            onClick={(e) => handleInputOnClick(e, item)}
                            type="checkbox"
                            value={item.id}
                          />
                        </div>
                        <div className="col-3 ">
                          <p className="dept-accordion-header__heading ">
                            {item?.name}
                          </p>
                          <p className="dept-accordion-header__data">NOMBRE</p>
                        </div>
                        <div className="col-3">
                          <p className="dept-accordion-header__heading">
                            Luis Cornejo
                          </p>
                          <p className="dept-accordion-header__data">
                            USUARIO A CARGO
                          </p>
                        </div>
                        <div className="col-5 text-end">
                          <Link
                            to={`/update-dept/${item.id}`}
                            className="dept-accordion-header__link__btn"
                            onClick={() => handleMoreInfo({ item })}>
                            ADMINISTRAR DEPARTAMENTO
                          </Link>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <h3 className="dept-acc-body-one__heading">
                          {deptAccBody.bodyHeading}
                        </h3>
                        <p className="dept-acc-body-one__p">
                          {deptAccBody.total}
                        </p>
                      </div>
                      <div className="dept-acc-body-two">
                        <ul className="dept-acc-body-two__ul">
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                        </ul>
                        <ul className="dept-acc-body-two__ul">
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                        </ul>
                        <ul className="dept-acc-body-two__ul">
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                        </ul>
                        <ul className="dept-acc-body-two__ul">
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                          <li>{deptAccBody.name}</li>
                        </ul>
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

export default DepartmentsMain;
function ConfirmDeleteModal(props) {
  console.log(props.deletedata);
  const data = props.deletedata;
  console.log(props.deletedata.length);
  const confirmDelete = async () => {
    console.log("kainat");
    console.log(props.deletedata);
    if (data.length === 1) {
      console.log("fooooo");
      await axios.delete(
        `http://38.65.139.14:8081/corporate-citras-v1/department-service/delete-by-id/${data[0]}`
      );
      console.log("fooooo");
    } else {
      console.log(props.deletedata);
      await axios.post(
        `http://38.65.139.14:8081/corporate-citras-v1/department-service/delete-all/by-ids`,
        {
          ids: `${props.deletedata}`,
        }
      );
    }

    props.onHide();
    // window.location.reload(false);
  };
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
          <button onClick={confirmDelete} className="role-model-confirm-btn">
            CONFIRMAR
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
