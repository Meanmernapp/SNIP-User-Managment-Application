import React, { useState, useContext, useRef, useEffect } from "react";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import ic_sort_up from "../../../../images/ic-sort-up.svg";
import ic_search from "../../../../images/NavBar/ic-search.svg";
import { ErrorMessage, Formik, Form, useField, Field, useFormik } from "formik";
import ic_employee from "../../../../images/ic-employee.png";
import ic_trash_outline from "../../../../images/ic-trash-outline.png";
import ic_cancel from "../../../../images/ic-cancel.svg";
import { useNavigate, Link } from "react-router-dom";
import ic_check from "../../../../images/ic-check.svg";
import { Modal } from "react-bootstrap";
import { AppContext } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import ic_add from "../../../../images/ic-add.svg";
import axios from "axios";
import * as Yup from "yup";
import ResponseOk from "../../../UserDashBoard/pages/ResponseOk";
import ResponseError from "../../../UserDashBoard/pages/ResponseError";
import {
  responseErrorFuncD,
  updateErrorFuncD,
  removeSelectedUser,
  addSelectedUserInTable,
  addSelectedUser,
  getDepartmentCompanyData,
} from "../../../../features/departmentSlice";
import {
  responseOkFunc,
  responseErrorFunc,
} from "../../../../features/userSlice";
const CreateDepartment = () => {
  let navigate = useNavigate();
  const [modalSee, setModalSee] = useState(false);
  const [deptData, setDeptData] = useState([]);
  const { val1 } = useContext(AppContext);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const formRef = useRef();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const DeptSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
  });
  const {
    departCompanyData,
    responseErrorMessageD,
    updateRespOkD,
    addSelectedUserInTableValue,
    addSelectedUserValue,
  } = useSelector((state) => state.dept);

  const employee_data = {
    Leftimg: ic_employee,
    nameVar: "NOMBRE",
    phoneVar: "TELÉFONO",
    emailVar: "CORREO",
    rightImg: ic_trash_outline,
  };
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          "http://38.65.139.14:8081/corporate-citras-v1/user-company-service/get-all/user-data/by-company-id/050081bd-1c81-45e8-b707-e6178a46be0f"
        )
        .then((res) => {
          console.log("kainat");
          console.log(res.data.data);
          dispatch(getDepartmentCompanyData(res.data.data));
          console.log(departCompanyData.length);
        });
      // departCompanyData.map(async (item) => {
      //   await axios
      //     .get(
      //       `http://38.65.139.14:8081/corporate-citras-v1/user-service/get-by-id/${item.userId}`
      //     )
      //     .then((response) => {
      //       console.log(response);
      //       if (departmentArray.length === 0) {
      //         console.log(departmentArray.length);
      //         dispatch(getDepartmentArray(response.data.data));
      //       }
      //     });
      // });
      console.log();
    }

    fetchData();
  }, []);
  // console.log(departmentArray);
  const handleClick = () => {
    console.log("Navigate");
    navigate("/departments");
  };
  const handleRemove = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));

    // Dispatch the action to remove the user from the global state
    dispatch(removeSelectedUser(user));
  };
  const handleClickC = () => {
    console.log("Navigate");
    navigate("/departments");
  };
  const createNewData = async () => {
    console.log("----javiers");
    console.log(formRef.current.values.name);
    console.log(formRef.current.values.inChargeID);
    const res = await axios
      .post(
        "http://38.65.139.14:8081/corporate-citras-v1/department-service/create",

        {
          name: formRef.current.values.name,
          companyId: "050081bd-1c81-45e8-b707-e6178a46be0f",
          userIds: addSelectedUserValue,
          userInChargeId: formRef.current.values.inChargeID,
        }
      )
      .then((response) => {
        console.log("eee");
        console.log(response);
        dispatch(responseOkFunc(response.data.message));
        setModalShow(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        dispatch(responseErrorFunc(err.response.data.message));
        console.log(err.response.data.message);
        setErrorModal(true);
      });
    console.log(updateRespOkD);
  };
  const handleOption = () => {
    console.log("Kainat");
  };
  const handleChangeOwn = (e) => {
    console.log("Kainat Kiran Rashid");
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
              CREAR DEPARTAMENTO
            </h1>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              // confirmEmail: "",
              // gender: "",
            }}
            validationSchema={DeptSchema}
            onSubmit={(values) => {
              console.log("values", values);
            }}
            innerRef={formRef}>
            {({ errors, handleChange, handleBlur, touched, values }) => (
              <div>
                <div className=" row">
                  <div className="department-create__left justify-content-center ml-5 pl-5 col-sm-12 col-md-12 col-lg-5 vl-update-report ">
                    <div className="department-create">
                      <h5> DATOS</h5>
                      <form>
                        <div className="form-width">
                          <div className="input-group-role single-group mt-2">
                            <label className="input-group-role__label">
                              NOMBRE
                            </label>
                            <input
                              className="input-group-department__text user-info-role__fieldModal"
                              // placeholder="EMPLEADO GENERAL"
                              name="name"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}></input>
                            {errors.name && touched.name ? (
                              <div className="errors">{errors.name}</div>
                            ) : null}
                          </div>
                          <div className="input-group-role single-group mt-4">
                            <label className="input-group-role__label">
                              ENCARGADO
                            </label>
                            <select
                              name="inChargeID"
                              value={values.inChargeID}
                              class="input-group-department__text user-info-role__fieldModal classic"
                              onChange={handleChange}>
                              <option style={{ display: "none" }}></option>
                              {departCompanyData.length > 0 &&
                                departCompanyData.map((item) => (
                                  <option value={item.id}>{item.name}</option>
                                ))}
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-10 col-lg-7 ">
                    <div className="department-create">
                      <div className="">
                        <h5 className="col-12 text-end department-create__right__mainHeading__h5">
                          AGREGAR USUARIOS AL DEPARTAMENTO
                        </h5>
                        <p className="col-12 text-end department-create__right__mainHeading__p">
                          Total usuarios 5
                        </p>
                      </div>
                      <div className="department-create__right__searchbox float-end">
                        <input
                          type="text"
                          name=""
                          placeholder="Escribe el nombre a buscar ..."
                          className="input_text"
                          id=""
                        />
                        <button className="department-create__right__searchbox__button">
                          <img src={ic_search} />
                        </button>
                      </div>
                      {addSelectedUserInTableValue.map((item) => (
                        <div className="department-create__right__mainDiv float-end">
                          <img
                            src={employee_data.Leftimg}
                            className="department-create__right__mainDiv__Rightimg"
                          />
                          <div className="department-create__right__mainDiv__insideDiv">
                            <p className="department-create__right__mainDiv__insideDiv__pOne">
                              {item.name}
                            </p>
                            <p className="department-create__right__mainDiv__insideDiv__pTwo">
                              {employee_data.nameVar}
                            </p>
                          </div>
                          <div className="department-create__right__mainDiv__insideDiv">
                            <p className="department-create__right__mainDiv__insideDiv__pOne">
                              {item.phoneNumber}
                            </p>
                            <p className="department-create__right__mainDiv__insideDiv__pTwo">
                              {employee_data.phoneVar}
                            </p>
                          </div>
                          <div className="department-create__right__mainDiv__insideDiv">
                            <p className="department-create__right__mainDiv__insideDiv__pOne">
                              {item.email}
                            </p>
                            <p className="department-create__right__mainDiv__insideDiv__pTwo">
                              {employee_data.emailVar}
                            </p>
                          </div>
                          <button
                            className="role-model-body__ul__li__btn"
                            type="button"
                            onClick={() => handleRemove(item)}>
                            <img
                              src={employee_data.rightImg}
                              className="department-create__right__mainDiv__Rightimg"
                            />
                          </button>
                        </div>
                      ))}
                      <button
                        className="department-create__right__addButton"
                        onClick={() => setModalSee(true)}>
                        AGREGAR USUARIO
                        <img src={ic_add} className="roles-header__icAdd" />
                      </button>
                      <DeleteRole
                        show={modalSee}
                        onHide={() => setModalSee(false)}
                      />
                    </div>
                  </div>
                </div>
                <div className="department-create--footer mt-2 row mx-auto justify-content-center">
                  <button className="department-create--footer__buttonCancel   col-sm-6  col-md-4 col-lg-3 role-model-close-btn">
                    CANCELAR
                  </button>
                  <button
                    className="department-create--footer__buttonOk col-sm-6 col-md-4 col-lg-3 "
                    onClick={createNewData}>
                    CREAR DEPARTAMENTO
                  </button>
                  <ResponseOk
                    to="/departments"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <ResponseError
                    userValue={responseErrorMessageD}
                    show={errorModal}
                    to="/departments"
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;

function DeleteRole(props) {
  const { departCompanyData, addSelectedUserValue } = useSelector(
    (state) => state.dept
  );

  const dispatch = useDispatch();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelect = (event, formik) => {
    const selectedOption = event.target.value;
    const selectedUser = departCompanyData.find(
      (user) => user.id === selectedOption
    );
    setSelectedUsers([...selectedUsers, selectedUser]);

    dispatch(addSelectedUser(selectedUser));
    console.log(addSelectedUserValue);
  };

  const handleRemove = (user) => {
    setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));

    // Dispatch the action to remove the user from the global state
    dispatch(removeSelectedUser(user));
  };
  const addUser = () => {
    dispatch(addSelectedUserInTable(addSelectedUserValue));
    props.onHide();
  };
  return (
    <Modal
      dialogClassName="modal-90w"
      className="create-dept"
      {...props}
      // size='lg'
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ margin: "0 auto" }}>
      <Formik
        initialValues={{
          deptValue: "",
        }}>
        {({ formik, values }) => (
          <Form>
            <Modal.Header closeButton className="btn-close-red">
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="role-model-top">
                AGREGAR USUARIOS
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="role-model-body">
              <h4 className="role-model-body__heading">
                Agregar usuarios al departamento
              </h4>

              <div class="form-group">
                <label>INVESTIGADOR</label>
                {/* <select
                  name="deptValue"
                  class="form-control classic"
                  onChange={(e) => handleSelect(e, formik)}> */}
                <Field
                  as="select"
                  name="deptValue"
                  class="form-control classic"
                  onChange={(e) => handleSelect(e, formik)}>
                  <option style={{ display: "none" }} value=""></option>
                  {departCompanyData.length > 0 &&
                    departCompanyData.map((user) => (
                      <option
                        key={user.id}
                        value={user.id}
                        disabled={selectedUsers.includes(user)}>
                        {user.name}
                      </option>
                    ))}
                </Field>
                {/* </select> */}
              </div>

              <hr className="department-hr" />
              <h4 className="role-model-body__heading">
                Usuarios seleccionados:
              </h4>
              <p className="role-model-body__p"> Total 4 </p>
              <ul className="role-model-body__ul">
                {addSelectedUserValue.length > 0 &&
                  addSelectedUserValue.map((user) => (
                    <li className="role-model-body__ul__li" key={user.id}>
                      {user.name}
                      <button
                        className="role-model-body__ul__li__btn"
                        type="button"
                        onClick={() => handleRemove(user)}>
                        <img src={ic_cancel} />
                      </button>
                    </li>
                  ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={props.onHide} className="role-model-close-btn">
                CANCELAR
              </button>
              <button onClick={addUser} className="role-model-confirm-btn">
                AGREGAR
              </button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

// function ResponseOk(props) {
//   console.log(props.userValue);
//   return (
//     <div className="dept-modal">
//       <Modal
//         dialogClassName="modal-90w"
//         {...props}
//         // size='lg'
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         style={{ margin: "0 auto" }}>
//         <Modal.Header closeButton className="btn-close-red">
//           <Modal.Title
//             id="contained-modal-title-vcenter"
//             className="images-model-top">
//             INFORMACIÓN
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="images-model-body mx-4">
//           <div className="mx-5">
//             <div className="d-flex flex-column justify-content-center">
//               <img src={ic_check} className="images-model-body__img mx-auto" />
//               <h4 className="images-model-body__heading">{props.userValue}</h4>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Link
//             to="/departments"
//             onClick={props.onHide}
//             className="images-model-confirm-btn ">
//             Ok
//           </Link>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
// function ResponseError(props) {
//   console.log(props.userValue);
//   return (
//     <div className="dept-modal">
//       <Modal
//         dialogClassName="modal-90w"
//         {...props}
//         // size='lg'
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         style={{ margin: "0 auto" }}>
//         <Modal.Header closeButton className="btn-close-red">
//           <Modal.Title
//             id="contained-modal-title-vcenter"
//             className="images-model-top">
//             INFORMACIÓN
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="images-model-body mx-4">
//           <div className="mx-5">
//             <div className="d-flex flex-column justify-content-center">
//               <img src={ic_check} className="images-model-body__img mx-auto" />
//               <h4 className="images-model-body__heading">{props.userValue}</h4>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Link
//             to="/departments"
//             onClick={props.onHide}
//             className="images-model-confirm-btn ">
//             Ok
//           </Link>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }
