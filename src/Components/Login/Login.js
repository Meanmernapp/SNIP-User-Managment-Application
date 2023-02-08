import React, { useState, useRef } from "react";
import img1 from "../../images/color_logo_citras.png";
import { ErrorMessage, Formik, Form, useField, Field, useFormik } from "formik";
import img3 from "../../images/ic-user.svg";
import img2 from "../../images/stock-photo-male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-they-re-standing-1062915392.png";
// import { Row, Col } from 'react-bootstrap'
import ModalGen from "./ModalGen";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import ResponseOk from "../../../UserDashBoard/pages/ResponseOk";
import ResponseError from "../../Components/UserDashBoard/pages/ResponseError";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { getloginUsersData } from "../../features/loginSlice";
import { responseErrorFunc } from "../../features/userSlice.js";

const Login = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const formRef = useRef();
  const [successmsg, setSuccessMessage] = useState("");

  const handleClick = async () => {
    console.log(
      `http://38.65.139.14:8081/corporate-citras-v1/login-service/check-user-email/${formRef.current.values.email}`
    );
    await axios
      .get(
        `http://38.65.139.14:8081/corporate-citras-v1/login-service/check-user-email/${formRef.current.values.email}`
      )
      .then((response) => {
        console.log(response);
        dispatch(getloginUsersData(response.data.data));
        console.log(formRef.current.values.email);
        navigate("/log-in-password-and-token");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        dispatch(responseErrorFunc(err.response.data.message));
        setShow(true);
      });
  };
  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
  });

  return (
    <div className="container-fluid mx-0 ">
      <div className="row">
        <div className="col-sm-0 col-lg-6 mx-0 px-0">
          <img src={img2} className="w-100 left_image" />
        </div>

        <ResponseError
          to="/log-in-username"
          show={show}
          onHide={() => setShow(false)}
        />

        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={SignUpSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => {
            console.log("values", values);
          }}
          innerRef={formRef}>
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
          }) => (
            <div className="col-sm-12 col-lg-6 my-auto d-flex flex-column">
              <img
                src={img1}
                className="img-size-right"
                alt="color_logo_citras"
              />
              {successmsg && <div className="success_msg">{successmsg}</div>}
              <br />

              <Form
                className="d-flex flex-column align-items-center"
                onSubmit={handleSubmit}>
                <div className="text_input">
                  <input
                    className="user_name"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}></input>
                  <img src={img3} className="icon_img" />
                </div>
                {errors.email ? <ModalGen value={errors.email} /> : undefined}
                <br />
                <div className="submit-div ">
                  <button
                    type="submit"
                    className="submit_button p-2"
                    onClick={handleClick}>
                    INICIAR SESIÓN
                  </button>
                  <div className="right_text">¿OLVIDASTE TU CONTRASEÑA?</div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
      <p className="bottom_right"> © 2022. All rights reserved MySearch. </p>
    </div>

    // <div className='main'>
    //     <Image src={img2} fluid  className="left-image"/>

    //     </div>
  );
};

export default Login;
