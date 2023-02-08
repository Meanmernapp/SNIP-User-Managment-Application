import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import ic_check from "../../../../images/ic-check.svg";
import * as Yup from "yup";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import { AppContext } from "../../../../App";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Modal } from "react-bootstrap";
import ResponseOk from "../../../UserDashBoard/pages/ResponseOk";
import moment from "moment";
import ResponseError from "../../../UserDashBoard/pages/ResponseError";
import {
  responseOkFunc,
  responseErrorFunc,
  updateErrorFunc,
  updateOkFunc,
} from "../../../../features/userSlice";
import { getRoleById } from "../../../../features/roleSlice";
import { getByIdData } from "../../../../features/userSlice";
const UpdateUser = () => {
  let navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [status, setStatus] = useState();
  const [prevDate, setPrevDate] = useState("2019-05-01");
  const dispatch = useDispatch();
  const { getIdData, passResetId } = useSelector((state) => state.user);
  const { responseOkMessage } = useSelector((state) => state.user);
  const { responseErrorMessage } = useSelector((state) => state.user);
  const { getRoleIdValue } = useSelector((state) => state.role);
  const { val1 } = useContext(AppContext);
  const { id } = useParams();
  const [updatedAt, setUpdatedAt] = useState();
  const { updateRespOk } = useSelector((state) => state.user);
  const { updateRespError } = useSelector((state) => state.user);
  const { allRolesValues } = useSelector((state) => state.role);
  const { allStatusValues } = useSelector((state) => state.status);
  const { userIdData } = useSelector((state) => state.user);
  const { allDeptValue } = useSelector((state) => state.dept);
  const formRef = useRef();
  const [create, setCreate] = useState(false);
  const [createData, setCreateData] = useState({
    dob: "1995-12-03",
    genderId: 1,
    name: "saneea",
    email: "saneea@gmail.com",
    phoneNumber: "+521234567892",
    password: "123",
    statusId: 1,
  });
  console.log("Kainat");
  console.log(getIdData.dob);
  console.log(allStatusValues);
  console.log(id);
  useEffect(() => {
    const getRoleByIdFunc = async () => {
      const getRoleId = await axios.get(
        `http://38.65.139.14:8081/corporate-citras-v1/role-service/get-by-id/${userIdData.roleId}`
      );
      console.log(getRoleId.data.data);
      dispatch(getRoleById(getRoleId.data.data));
    };
    const prevDateFunct = () => {
      console.log("aminah-1");
      console.log(userIdData.startDate);
      const strToInt = parseInt(userIdData.startDate);
      console.log(typeof strToInt);
      console.log("aminah-2");
      const dateAvail = (strToInt / 1000).toString();
      console.log(dateAvail);
      console.log(moment.unix(dateAvail).format("YYYY/MM/DD"));
      setPrevDate(moment.unix(dateAvail).format("YYYY/MM/DD"));
    };
    prevDateFunct();
    getRoleByIdFunc();
  }, []);
  const handleClick = () => {
    navigate("/users");
  };
  const phoneRegex = /^\+?\d{12}$/;
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const createNewData = async () => {
    console.log(formRef.current.values);
    const res = await axios
      .put("http://38.65.139.14:8081/corporate-citras-v1/user-service/update", {
        dob: formRef.current.values.dob,
        name: formRef.current.values.name,
        email: formRef.current.values.email,
        phoneNumber: formRef.current.values.phone,
        id: `${id}`,
      })
      .then(async (response) => {
        console.log("eee");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        dispatch(updateErrorFunc(true));
        dispatch(responseErrorFunc(err.response.data.message));
        console.log(err.response.data.message);
        return err.response.data.message;
      });
    await axios
      .put(
        "http://38.65.139.14:8081/corporate-citras-v1/user-company-service/create",
        {
          companyId: "050081bd-1c81-45e8-b707-e6178a46be0f",
          departmentId: formRef.current.values.departmentValue,

          employeeId: formRef.current.values.empID,
          endDate: formRef.current.values.expiryDate,
          genderId: 1,
          roleId: formRef.current.values.roleValue,
          startDate: formRef.current.values.expiryDate,
          statusId: formRef.current.values.statusCheckBox[0],
          userId: userIdData.userId,
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
    dispatch(getByIdData(""));
  };
  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails do not match")
      .required("Confirm email is required"),
    phone: Yup.string()
      .matches(phoneRegex, "Phone number is not valid")
      .required("Phone number is not required"),
    // email: Yup.string().email('invalid email address').required('Required'),
  });
  const length = 10;
  let x = new Array(5);
  let y = new Array(5);
  const [checkedStateX, setCheckedStateX] = useState(
    (x = new Array(x.length).fill(false))
  );
  const [checkedStateY, setCheckedStateY] = useState(
    (y = new Array(x.length).fill(false))
  );
  const handleClearButton = () => {
    Form.clear();
  };
  const handleSubmit = () => {
    navigate("/users");
  };

  const handleChangeX = (position) => {
    const updatedCheckedStateX = checkedStateX.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedStateX(updatedCheckedStateX);
    console.log(position + "  " + !checkedStateX[position]);
  };
  const handleChangeY = (position) => {
    const updatedCheckedStateY = checkedStateY.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedStateY(updatedCheckedStateY);
    console.log(position + "  " + !checkedStateY[position]);
  };
  const handleBackButton = () => {
    navigate("/users");
  };

  console.log(prevDate);
  console.log("----------");

  console.log(userIdData);
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
              ACTUALIZAR USUARIO
            </h1>
          </div>
          <Formik
            enableReinitialize
            initialValues={{
              name: getIdData?.name,
              email: getIdData?.email,
              phone: getIdData?.phoneNumber,
              dob: getIdData?.dob,
              empID: userIdData.employeeId,
              expiryDate: prevDate,
              statusCheckBox: userIdData.statusId,
              roleValue: getRoleIdValue.name,
              // value={}
              // confirmEmail: "",
              // gender: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              // alert(values);
              setCreateData(values);
              // setCreateData({
              //   ...create,
              //   dob: "1998-02-28",
              //   genderId: 2,
              //   name: values.name,
              //   email: values.email,
              //   phone: values.phone,
              //   password: "123",
              //   statusId: 4,
              // }); //object being sent
              console.log("values", values);
            }}
            innerRef={formRef}>
            {({
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              values,
            }) => (
              <Form class="user-info" onSubmit={handleSubmit}>
                <div className="user-info">
                  <div className="user-info__top">
                    <div className="user-info--img-container">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-wq5bwwbn0cFhs2F4nWn1ZGgOrsNG3JKbQ&usqp=CAU"
                        className="display_image"
                        alt="user image"
                      />
                      <div class="avatar-edit">
                        <input
                          type="file"
                          id="imageUpload"
                          accept=".png, .jpg, .jpeg"
                        />
                        <label for="imageUpload"></label>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="user-info__detail">
                    <div className="input-group single-group ">
                      <label className="input-group__label">
                        NOMBRE COMPLETO
                      </label>
                      <input
                        className="input-group__text user-info__name"
                        name="name"
                        placeholder="Luis Enrique Cornejo Arreola"
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}></input>
                      {errors.name && touched.name ? (
                        <div className="errors">{errors.name}</div>
                      ) : null}
                    </div>

                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">CORREO</label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="lcornejo@ibl.mx"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                        {errors.email && touched.email ? (
                          <div className="errors">{errors.email}</div>
                        ) : null}
                      </div>

                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          CONFIRMAR CORREO
                        </label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="lcornejo@ibl.mx"
                          name="confirmEmail"
                          // value={userEdit.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="email"></input>
                        {errors.confirmEmail && touched.confirmEmail ? (
                          <div className="errors">{errors.confirmEmail}</div>
                        ) : null}
                      </div>
                    </div>

                    {/* <input className='input-group-report__text user-info__name'></input> */}
                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          SELECCIONAR ROL
                        </label>

                        <select
                          name="roleValue"
                          // value={values.roleValue} in update user we donot need value attribute for select
                          onChange={handleChange}
                          class="input-group__text user-info__name classic">
                          <option style={{ display: "none" }}></option>
                          {allRolesValues.length > 0 &&
                            allRolesValues.map((item) => (
                              <option
                                selected={item?.name === values.roleValue}
                                value={item?.id}
                                className="input-group__selectOption">
                                {item?.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="input-group single-group ">
                        <label className="input-group__label">TELÉFONO</label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="+52 442 - 245 -3434"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                        {errors.phone && touched.phone ? (
                          <div className="errors">{errors.phone}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="user-info__contact">
                      <div className="input-group single-group">
                        <label className="input-group__label">
                          DATE OF BIRTH
                        </label>
                        <input
                          type="date"
                          name="dob"
                          value={values.dob}
                          onChange={handleChange}
                          className="input-group__text user-info__field user-date-picker"
                          placeholder="28-05-2023"></input>
                      </div>
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          Employer Id
                        </label>
                        <input
                          className="input-group__text user-info__name"
                          name="empID"
                          value={values.empID}
                          placeholder="Luis Enrique Cornejo Arreola"
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                        {/* {errors.name && touched.name ? (
                          <div className="errors">{errors.name}</div>
                        ) : null} */}
                      </div>
                    </div>

                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          SELECCIONAR DEPARTAMENTO
                        </label>

                        <select
                          name="departmentValue"
                          value={values.departmentValue}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          class="input-group__text user-info__name classic">
                          <option style={{ display: "none" }}></option>
                          {allDeptValue.length > 0 &&
                            allDeptValue.map((item) => (
                              <option
                                value={item?.id}
                                className="input-group__selectOption">
                                {item?.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="input-group single-group">
                        <label className="input-group__label">
                          FECHA DE EXPIRACIÓN
                        </label>
                        <input
                          type="date"
                          name="expiryDate"
                          value={values.expiryDate}
                          onChange={handleChange}
                          className="input-group__text user-info__field user-date-picker"
                        />
                      </div>
                    </div>

                    <div className="agreement-div">
                      <label className="agreement-div-lab">ESTADO</label>
                      {allStatusValues.length > 0 &&
                        allStatusValues.map((item) => (
                          <label class="checkBox-container ms-4">
                            {item.status.name}
                            <input
                              type="checkbox"
                              id={item.status.name}
                              name="statusCheckBox"
                              value={item.status.id}
                              checked={
                                status === item.status.name ||
                                item.status.id === values.statusCheckBox
                              }
                              onChange={(e) => {
                                handleChange(e);
                                setStatus(item?.status.name);
                              }}
                            />
                            <span class="checkmark"></span>
                          </label>
                        ))}
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <button
                      className="actual_b_button_one col-6"
                      onClick={handleClearButton}>
                      LIMPIAR CAMPOS
                    </button>
                    <button
                      type="submit"
                      className="actual_b_button_two col-6"
                      onClick={createNewData}>
                      ACTUALIZAR
                    </button>
                    <ResponseOk
                      userValue={responseOkMessage}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                    <ResponseError
                      userValue={responseErrorMessage}
                      show={errorModal}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                </div>
                {/* <Field name='firstname' />
            {errors.firstname && touched.firstname ? (
              <div>{errors.firstname}</div>
            ) : null}
            <Field name='lastname' />
            {errors.lastname && touched.lastname ? (
              <div>{errors.lastname}</div>
            ) : null}
            <Field name='email' validate={validateEmail} />
            {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
              </Form>
            )}
          </Formik>
          {/* <Formik
            initialValues={{
              name: "",
              email: "",
              confirmEmail: "",
              gender: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              alert(values);
              console.log("values", values);
            }}>
            {({ errors, touched, handleChange, handleBlur }) => (
              <Form class="user-info">
                <div className="user-info">
                  <div className="user-info__top">
                    <div className="user-info--img-container">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-wq5bwwbn0cFhs2F4nWn1ZGgOrsNG3JKbQ&usqp=CAU"
                        className="display_image"
                        alt="user image"
                      />
                      <div class="avatar-edit">
                        <input
                          type="file"
                          id="imageUpload"
                          accept=".png, .jpg, .jpeg"
                        />
                        <label for="imageUpload"></label>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="user-info__detail">
                    <div className="input-group single-group ">
                      <label className="input-group__label">
                        NOMBRE COMPLETO
                      </label>
                      <input
                        className="input-group__text user-info__name"
                        name="name"
                        placeholder="Luis Enrique Cornejo Arreola"
                        onChange={handleChange}
                        onBlur={handleBlur}></input>
                      {errors.name && touched.name ? (
                        <div className="errors">{errors.name}</div>
                      ) : null}
                    </div>

                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">CORREO</label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="lcornejo@ibl.mx"
                          name="email"
                          type="email"
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                        {errors.email && touched.email ? (
                          <div className="errors">{errors.email}</div>
                        ) : null}
                      </div>

                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          CONFIRMAR CORREO
                        </label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="lcornejo@ibl.mx"
                          name="confirmEmail"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="email"></input>
                        {errors.confirmEmail && touched.confirmEmail ? (
                          <div className="errors">{errors.confirmEmail}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          SELECCIONAR ROL
                        </label>
                        <select class="input-group__text user-info__name classic">
                          <option style={{ display: "none" }}></option>
                          <option className="input-group__selectOption">
                            BIL-2091 | Encargado: Luis Cornejo
                          </option>
                          <option className="input-group__selectOption">
                            BIL-2091 | Encargado: Luis Cornejo
                          </option>
                          <option className="input-group__selectOption">
                            BIL-2091 | Encargado: Luis Cornejo
                          </option>
                          <option className="input-group__selectOption">
                            BIL-2091 | Encargado: Luis Cornejo
                          </option>
                        </select>
                      </div>

                      <div className="input-group single-group ">
                        <label className="input-group__label">TELÉFONO</label>
                        <input
                          className="input-group__text user-info__field"
                          placeholder="+52 442 - 245 -3434"
                          name="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                        {errors.phone && touched.phone ? (
                          <div className="errors">{errors.phone}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="user-info__contact">
                      <div className="input-group single-group ">
                        <label className="input-group__label">
                          SELECCIONAR DEPARTAMENTO
                        </label>
                        <input
                          className="input-group__text user-info__field"
                          name="selectDepartment"
                          onChange={handleChange}
                          onBlur={handleBlur}></input>
                      </div>
                      {errors.firstname && touched.firstname ? (
                        <div>{errors.firstname}</div>
                      ) : null}

                      <div className="input-group single-group">
                        <label className="input-group__label">
                          FECHA DE EXPIRACIÓN
                        </label>
                        <input
                          type="date"
                          className="input-group__text user-info__field user-date-picker"
                          placeholder="28-05-2023"></input>
                      </div>
                    </div>
                    <div className="agreement-div">
                      <label className="agreement-div-lab">ESTADO</label>
                      <label class="checkBox-container ms-4">
                        Activa
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="checkBox-container ms-4">
                        InActive
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <h3 className="actual_h3">ASIGNAR CASOS</h3>

                    <div className="d-flex justify-content-center">
                      <ul className="w-50 p-0 ">
                        {x.map((currElement, index) => (
                          <li key={index} className="d-flex p-0">
                            <label className="actual_li p-0 w-75 ">
                              Asesinato Colosio
                            </label>
                            <div className=" w-25">
                              <input
                                className="actual_cb"
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name="Kainat"
                                value="Asesinato Colosio"
                                checked={checkedStateX[index]}
                                onChange={() => handleChangeX(index)}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                      <ul className="w-50 p-0">
                        {y.map((currElement, index) => (
                          <li key={index} className="d-flex p-0">
                            <label className="actual_li p-0 w-75 ">
                              Asesinato Colosio
                            </label>
                            <div className="w-25 justify-content-end">
                              <input
                                className="actual_cb"
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name="Kainat"
                                value="Asesinato Colosio"
                                checked={checkedStateX[index]}
                                onChange={() => handleChangeX(index)}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <hr></hr>
                  <div className="row">
                    <button
                      className="actual_b_button_one col-6"
                      onClick={handleClearButton}>
                      LIMPIAR CAMPOS
                    </button>
                    <button
                      type="submit"
                      className="actual_b_button_two col-6"
                      
                    >
                      ACTUALIZAR
                    </button>
                  </div>
                </div>
                
              </Form>
            )}
          </Formik> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;

// // <div className='home_top_buttons'>
// <Image src={img1} className='home_svgs' />
{
  /* <button
  className='home_button_add'
  onClick={() => addFormFieldsForValue()}
>
  AGREGAR USUARIO <i class='fa-solid fa-plus homeAddButton'></i>
</button>
<button className='home_button_delete' onClick={() => removeFormFieldsForValues(deleteValue)}>
  ELIMINAR USUARIO(S)
  <i class='fa-solid fa-trash-can homeAddButton'></i>
</button> */
}
// </div>

{
  /* <Field name='firstname' />
            {errors.firstname && touched.firstname ? (
              <div>{errors.firstname}</div>
            ) : null}
            <Field name='lastname' />
            {errors.lastname && touched.lastname ? (
              <div>{errors.lastname}</div>
            ) : null}
            <Field name='email' validate={validateEmail} />
            {errors.email && touched.email ? <div>{errors.email}</div> : null} */
}
