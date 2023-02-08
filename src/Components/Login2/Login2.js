import React, { useState, useRef } from "react";
import img1 from "../../images/color_logo_citras.png";
import img3 from "../../images/ic-password.png";
import { ErrorMessage, Formik, Form, useField, Field, useFormik } from "formik";
import img2 from "../../images/stock-photo-male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-they-re-standing-1062915392.png";
import * as Yup from "yup";
import ModalGen from "../Login/ModalGen";
import { useDispatch, useSelector } from "react-redux";
import ResponseError from "../../Components/UserDashBoard/pages/ResponseError";
import axios from "axios";

const Login2 = () => {
  const formRef = useRef();
  const { loginUsersData } = useSelector((state) => state.login);
  const [show, setShow] = useState(false);

  const SignUpSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
  });

  // const handleSubmit = ()
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-0 col-lg-6 mx-0 px-0">
          <img src={img2} className="w-100 left_image" />
        </div>

        <Formik
          initialValues={{
            password: "",
          }}
          validationSchema={SignUpSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={async (values) => {
            console.log(loginUsersData);
            console.log(values.password);
            await axios
              .post(
                "http://38.65.139.14:8081/corporate-citras-v1/login-service/user-login",
                {
                  id: loginUsersData,
                  password: values.password,
                }
              )
              .then((response) => {
                console.log(response);
              })
              .catch((err) => {
                console.log(err);
                // setShow(true);
              });
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
            <Form
              className="d-flex flex-column align-items-center"
              onSubmit={handleSubmit}>
              <div className="col-sm-12 col-lg-6 my-auto d-flex flex-column">
                <img
                  src={img1}
                  className="img-size-right"
                  alt="color_logo_citras"
                />
                <div className="d-flex flex-column align-items-center">
                  <p className="welcome_text">
                    !Bienvenido <span> lcornejo@ibl.mx! </span>
                  </p>
                  <div className="text_input">
                    <input
                      className="user_password"
                      type="password"
                      onChange={handleChange}
                      name="password"
                      id=""
                    />
                    <img src={img3} className="icon_img float-end" />
                  </div>
                  {errors.password ? (
                    <ModalGen value={errors.password} />
                  ) : undefined}
                  <p className="token_text">Token de seguridad ( 6 dígitos) </p>
                  {/* <div className="user_input">
                    <input
                      type="text"
                      className="otp_text"
                      placeholder="-"
                      maxLength="1"
                    />
                    <input
                      type="text"
                      className="otp_text"
                      placeholder="-"
                      maxLength="1"
                    />
                    <input
                      type="text"
                      className="otp_text"
                      placeholder="-"
                      maxLength="1"
                    />
                    <input
                      type="text"
                      className="otp_text"
                      placeholder="-"
                      maxLength="1"
                    />
                    <input
                      type="text"
                      className="otp_text"
                      placeholder="-"
                      maxLength="1"
                    />
                    <input
                      type="text"
                      className="otp_text"
                      placeholder="-"
                      maxLength="1"
                    />
                  </div> */}
                  <div className="submit-div mt-2">
                    <button className="submit_button p-2 " type="submit">
                      INICIAR SESIÓN
                    </button>
                  </div>{" "}
                  <div className="right_text">¿OLVIDASTE TU CONTRASEÑA?</div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <p className="bottom_right">© 2022. All rights reserved MySearch.</p>

        {/* <p className='KKR'> © 2022. All rights reserved MySearch. </p> */}
      </div>
    </div>

    // <div className='main'>
    //     <Image src={img2} fluid  className="left-image"/>

    //     </div>
  );
};

export default Login2;
