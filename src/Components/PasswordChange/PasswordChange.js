import React, { useState } from "react";
import img2 from "../../images/stock-photo-male-it-specialist-holds-laptop-and-discusses-work-with-female-server-technician-they-re-standing-1062915392.png";
import Image from "react-bootstrap/Image";
import img1 from "../../images/color_logo_citras.png";
import img3 from "../../images/ic-password.png";
import passwordValidator from "password-validator";
import ModalGen from "../Login/ModalGen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img4 from "../../images/eye-solid.svg";
import img5 from "../../images/eye-slash-solid.svg";

const PasswordChange = () => {
  var schema = new passwordValidator();
  const [prevPwd, setPrevPwd] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordType1, setPasswordType1] = useState("password");
  const [passwordType2, setPasswordType2] = useState("password");

  const [passwordInput, setPasswordInput] = useState("");

  const [pwdError, setPwdError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const togglePassword1 = () => {
    if (passwordType1 === "password") {
      setPasswordType1("text");
      return;
    }
    setPasswordType1("password");
  };
  const togglePassword2 = () => {
    if (passwordType2 === "password") {
      setPasswordType2("text");
      return;
    }
    setPasswordType2("password");
  };

  schema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(2) // Must have at least 2 digits
    .has()
    .not()
    .spaces(); // Should not have spaces

  const handlePrevPassChange = (e) => {
    e.preventDefault();
    setPwdError("");
    setPrevPwd(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (prevPwd !== "" && password !== "" && confirmPassword !== "") {
      schema.validate(password);
      console.log(schema.validate(password));
      if (password !== confirmPassword) {
        setPwdError("Password and confirm password do not match");
      }
    } else {
      setPwdError("All the fields required");
    }
  };
  return (
    <>
      <div className="container-fluid bg-img">
        {/* <Image src={img2} className='bg_image' alt='color_logo_citras' /> */}
        <div className="row pt-5">
          <div className="password_reset_bg mb-3 col-sm-8 col-lg-6 col-xl-5 ">
            <div className="d-flex justify-content-center">
              <img src={img1} className="pwd_top_img" alt="color_logo_citras" />
            </div>
            <div>
              <p className="pwd_para w-75 mx-auto">
                Antes de continuar, por seguridad necesitas cambiar tu
                contraseña generada automáticamente.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className="text_input_pwd pwd_input-detail  mx-auto mt-3">
                  <input
                    className="pwd_input"
                    type={passwordType}
                    placeholder="CONTRASEÑA ACTUAL"
                    name="prevPassword"
                    id=""
                    onChange={handlePrevPassChange}
                    value={prevPwd}
                  />
                  {passwordType === "password" ? (
                    <img
                      onClick={togglePassword}
                      className="icon_img"
                      src={img4}
                    ></img>
                  ) : (
                    <img
                      onClick={togglePassword}
                      className="icon_img"
                      src={img5}
                    ></img>
                  )}
                </div>
                <div className="text_input_pwd pwd_input-detail  mx-auto mt-3">
                  <input
                    className="pwd_input"
                    name="password"
                    type={passwordType1}
                    onChange={handlePassword}
                    value={password}
                    placeholder="NUEVA CONTRASEÑA"
                    id=""
                  />
                  {/* <button onClick={togglePassword} className='icon_img_btn'> */}

                  {passwordType1 === "password" ? (
                    <img
                      onClick={togglePassword1}
                      className="icon_img"
                      src={img4}
                    />
                  ) : (
                    <img
                      onClick={togglePassword1}
                      className="icon_img"
                      src={img5}
                    />
                  )}

                  {/* </button> */}
                </div>
                <div className="text_input_pwd pwd_input-detail mx-auto mt-3">
                  <input
                    className="pwd_input"
                    type={passwordType2}
                    placeholder="CONFIRMAR NUEVA CONTRASEÑA"
                    id=""
                    onChange={handleConfirmPassword}
                    value={confirmPassword}
                  />
                  {passwordType2 === "password" ? (
                    <img
                      onClick={togglePassword2}
                      className="icon_img"
                      src={img4}
                    ></img>
                  ) : (
                    <img
                      onClick={togglePassword2}
                      className="icon_img"
                      src={img5}
                    ></img>
                  )}
                </div>
                {pwdError && <ModalGen value={pwdError} />}

                <div className="my-3 d-flex justify-content-center">
                  <button type="submit" className="change_button py-2 px-3">
                    CAMBIAR Y ACCEDER
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordChange;
