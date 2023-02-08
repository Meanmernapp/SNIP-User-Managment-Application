import React, { useState, useContext, useRef } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import ic_check from "../../../../images/ic-check.svg";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { ErrorMessage, Formik, Form, useField, Field, useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import ic_left_arrow from "../../../../images/ic-left-arrow.svg";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ic_employee from "../../../../images/ic-employee.png";
import Typography from "@material-ui/core/Typography";
import ic_calender from "../../../../images/ic-calendar.svg";
import cloud from "../../../../images/cloud.svg";
import ic_trash_outline from "../../../../images/ic-trash-outline.png";
import ic_excel from "../../../../images/ic-excel.svg";
import { AppContext } from "../../../../App";
import * as Yup from "yup";
import ic_pdf from "../../../../images/pdf-img.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ResponseOk from "../../../UserDashBoard/pages/ResponseOk";
import ResponseError from "../../../UserDashBoard/pages/ResponseError";
import {
  responseOkFunc,
  responseErrorFunc,
  updateErrorFunc,
  updateOkFunc,
} from "../../../../features/caseSlice";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "60%",
      float: "right",
    },

    button: {
      "& .MuiStepLabel-active": {
        color: "#63B3CE",
        fontSize: "28px/34px",
        fontFamily: "Montserrat",
        fontWeight: "bold",
      },
      "& .MuiStepLabel-completed": {
        color: "#707070",
        fontFamily: "Montserrat",
      },
      "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" },
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    stepIcon: {
      color: "#0C4523",
    },
    text: {
      display: "none",
    },
    active: {
      fill: "#63B3CE",
    },
    completed: {
      fill: "#0C4523",
    },
  })
);

export default function CreateCaso() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  var formRef = useRef();
  const classes = useStyles();
  const [border, setBorder] = useState(true);
  const { val1 } = useContext(AppContext);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [place, setPlace] = useState();
  const [targetName, setTargetName] = useState();
  const [dob, setDob] = useState();
  const [home, setHome] = useState();
  const [eventPlace, setEventPlace] = useState();
  const [eventDate, setEventDate] = useState();
  const [description, setDescription] = useState();
  const [indications, setIndications] = useState();
  const [errorModal, setErrorModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const { responseOkMessage } = useSelector((state) => state.case);
  const { responseErrorMessage } = useSelector((state) => state.case);
  const { updateRespOk } = useSelector((state) => state.case);
  const { updateRespError } = useSelector((state) => state.case);

  function getSteps() {
    return [
      <b>DATOS DE LA INVESTIGACIÓN</b>,
      <b>DATOS DEL OBJETIVO</b>,
      <b>DATOS DEL EVENTO</b>,
      <b>INVESTIGADOR</b>,
      <b>DATOS ESPECÍFICOS DEL CASO</b>,
      <b>EVIDENCIAS</b>,
    ];
  }
  const handleSubmit = (e) => {
    console.log(place);
    console.log(e);
  };
  console.log(activeStep);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="form-crear-new-caso">
            <div className="input-group-report">
              <label className="input-group-report__label">LUGAR</label>
              <input
                className="input-group-report__text user-info__name"
                name={place}
                value={place}
                onChange={(e) => setPlace(e.target.value)}></input>
            </div>
          </form>
        );
      case 1:
        return (
          <form onSubmit={(e) => handleSubmit(e)} class="form-crear-new-caso">
            <div className="input-group-report">
              <label className="input-group-report__label">
                NOMBRE DEL OBJETIVO
              </label>
              <input
                className="input-group-report__text user-info__name"
                name={targetName}
                value={targetName}
                onChange={(e) => setTargetName(e.target.value)}></input>
            </div>
            <div className="input-group-report role-modal__contact">
              <label className="input-group__label">FECHA DE NACIMIENTO</label>
              <div className="input-group-report__text user-info-role__fieldModal w-100">
                <input
                  type="date"
                  name={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="input-group__dateText h-100  w-100 user-date-picker"
                  placeholder="28-05-2023"></input>
              </div>
            </div>
            <div className="input-group-report">
              <label className="input-group-report__label">DOMICILIO </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                name={home}
                value={home}
                onChange={(e) => setHome(e.target.value)}></textarea>
            </div>
          </form>
        );
      case 2:
        return (
          <form class="form-crear-new-caso">
            <div className="input-group-report">
              <label className="input-group-report__label">
                LUGAR DE EVENTO
              </label>
              <input
                className="input-group-report__text user-info__name"
                name={eventPlace}
                value={eventPlace}
                onChange={(e) => setEventPlace(e.target.value)}></input>
            </div>
            <div className="input-group-report role-modal__contact">
              <label className="input-group-report__label">
                FECHA DE EVENTO
              </label>
              <div className="input-group-report__text user-info-role__fieldModal w-100">
                <input
                  type="date"
                  name={eventDate}
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="input-group__dateText h-100  w-100 user-date-picker"
                  placeholder="2023-01-01"></input>
              </div>
            </div>
          </form>
        );
      case 3:
        return (
          <div className="mb-3">
            <div className="row pt-3 justify-content-center">
              <div className=" create-case-background pt-2 col-sm-6 mt-2 col-md-4 col-lg-2 ">
                <input type="checkbox" className="float-end mb-2" />
                <div className="row">
                  <img
                    src={ic_employee}
                    className=" col-5 mx-auto mt-2 img-size"
                  />
                </div>
                <div>
                  <p className="card-pbold">Nombre</p>
                  <p className="card-pNormal">Luis Enrique Cornejo Arreola</p>
                  <p className="card-pbold">Casos activos</p>
                  <p className="card-pNormal">4</p>
                </div>
                <div></div>
              </div>
              <div className=" create-case-background pt-2 col-sm-6 mt-2 col-md-4 col-lg-2 ">
                <input type="checkbox" className="float-end mb-2" />
                <div className="row">
                  <img
                    src={ic_employee}
                    className=" col-5 mx-auto mt-2 img-size"
                  />
                </div>
                <div>
                  <p className="card-pbold">Nombre</p>
                  <p className="card-pNormal">Luis Enrique Cornejo Arreola</p>
                  <p className="card-pbold">Casos activos</p>
                  <p className="card-pNormal">4</p>
                </div>
                <div></div>
              </div>
              <div className=" create-case-background pt-2 col-sm-6 col-md-4 mt-2 col-lg-2">
                <input type="checkbox" className="float-end mb-2" />
                <div className="row">
                  <img
                    src={ic_employee}
                    className=" col-5 mx-auto mt-2 img-size"
                  />
                </div>
                <div>
                  <p className="card-pbold">Nombre</p>
                  <p className="card-pNormal">Luis Enrique Cornejo Arreola</p>
                  <p className="card-pbold">Casos activos</p>
                  <p className="card-pNormal">4</p>
                </div>
                <div></div>
              </div>
              <div className=" create-case-background pt-2 col-sm-6 col-md-4 mt-2 col-lg-2">
                <input type="checkbox" className="float-end mb-2" />
                <div className="row">
                  <img
                    src={ic_employee}
                    className=" col-5 mx-auto mt-2 img-size"
                  />
                </div>
                <div>
                  <p className="card-pbold">Nombre</p>
                  <p className="card-pNormal">Luis Enrique Cornejo Arreola</p>
                  <p className="card-pbold">Casos activos</p>
                  <p className="card-pNormal">4</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <form class="form-crear-new-caso">
            <div className="input-group-report form-group-report">
              <label className="input-group-report__label c">ESTATUS</label>
              <select class="input-group-report__text user-info__name classic form-control ">
                <option style={{ display: "none" }}></option>
                <option>ACTIVO</option>
                <option>INACTIVO</option>
              </select>
            </div>
            <div className="input-group-report">
              <label className="input-group-report__label">DESCRIPCIÓN</label>
              <textarea
                name={description}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"></textarea>
            </div>
            <div className="input-group-report">
              <label className="input-group-report__label">INDICACIONES</label>
              <textarea
                name={indications}
                value={indications}
                onChange={(e) => setIndications(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"></textarea>
            </div>
          </form>
        );
      case 5:
        return (
          <form class="mb-4">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-4 vl-int">
                <div className="text-center level-end">REPORTES</div>
                <div className="images-model-body__addImage-upload-one mx-auto w-75">
                  <div className="images-model-row-one mx">
                    <img
                      src={cloud}
                      className="images-model-body__cloudImage "
                    />

                    <p className="images-model-body__p ">
                      ARRASTRA <br /> O <br /> SULETA TU ARCHIVO <br />
                      <span> 20 MB MAX. </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="grupos-card p-2 mt-3">
                  <div className="row">
                    <div className="col-2">
                      <img src={ic_pdf} className="loadPhone__images" />
                    </div>
                    <div className="p-2 col-8">
                      <p className="loadPhone__fp">
                        sabana_telcel_12232321.pdf
                      </p>
                      <p className="loadPhone__sp">TAMAÑO: 18 MB.</p>
                    </div>
                    <div className="col-2">
                      <img
                        src={ic_trash_outline}
                        className="loadPhone__image"
                      />
                    </div>
                  </div>
                </div>
                <div className="grupos-card p-2 mt-3">
                  <div className="row">
                    <div className="col-2">
                      <img src={ic_pdf} className="loadPhone__images" />
                    </div>
                    <div className="p-2 col-8">
                      <p className="loadPhone__fp">
                        sabana_telcel_12232321.pdf
                      </p>
                      <p className="loadPhone__sp">TAMAÑO: 18 MB.</p>
                    </div>
                    <div className="col-2">
                      <img
                        src={ic_trash_outline}
                        className="loadPhone__image"
                      />
                    </div>
                  </div>
                </div>
                <div className="grupos-card p-2 mt-3">
                  <div className="row">
                    <div className="col-2">
                      <img src={ic_pdf} className="loadPhone__images" />
                    </div>
                    <div className="p-2 col-8">
                      <p className="loadPhone__fp">
                        sabana_telcel_12232321.pdf
                      </p>
                      <p className="loadPhone__sp">TAMAÑO: 18 MB.</p>
                    </div>
                    <div className="col-2">
                      <img
                        src={ic_trash_outline}
                        className="loadPhone__image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-lg-4">
                <div className="text-center level-end">REPORTES</div>
                <div className="images-model-body__addImage-upload-one mx-auto w-75">
                  <div className="images-model-row-one ">
                    <img
                      src={cloud}
                      className="images-model-body__cloudImage "
                    />

                    <p className="images-model-body__p ">
                      ARRASTRA <br /> O <br /> SULETA TU ARCHIVO <br />
                      <span> 20 MB MAX. </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="pdf-row mt-3">
                  <div className="pdf-box  pb-2">
                    <div className="row">
                      <img
                        src={ic_trash_outline}
                        className="col-3 ms-auto img-size-case "
                      />
                    </div>
                    <div className="row">
                      <img
                        src={ic_pdf}
                        className="img-size-one justify-content-center"
                      />
                    </div>
                    <p className="card-pbold text-center mt-2">caso_1.jpg</p>
                    <p className="card-pNormal__p text-center ">
                      TAMAÑO: 18 MB.
                    </p>
                  </div>
                  <div className="pdf-box pb-2">
                    <div className="row">
                      <img
                        src={ic_trash_outline}
                        className="col-3 ms-auto img-size-case"
                      />
                    </div>
                    <div className="row">
                      <img
                        src={ic_pdf}
                        className="img-size-one justify-content-center"
                      />
                    </div>
                    <p className="card-pbold text-center mt-2">caso_1.jpg</p>
                    <p className="card-pNormal__p text-center ">
                      TAMAÑO: 18 MB.
                    </p>
                  </div>
                  <div className="pdf-box pb-2">
                    <div className="row">
                      <img
                        src={ic_trash_outline}
                        className="col-3 ms-auto img-size-case"
                      />
                    </div>
                    <div className="row">
                      <img
                        src={ic_pdf}
                        className="img-size-one justify-content-center"
                      />
                    </div>
                    <p className="card-pbold text-center mt-2">caso_1.jpg</p>
                    <p className="card-pNormal__p text-center ">
                      TAMAÑO: 18 MB.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        );

      default:
        return "Unknown step";
    }
  }
  const handleNext = async (activeSteps) => {
    console.log(steps.length - 1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const createNewData = () => {
      console.log("kkr");

      // const resCaseInvest = await axios
      //   .post(
      //     "http://38.65.139.14:8081/corporate-citras-v1/case-investigation-folder-service/create",
      //     {
      //       caseId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      //       investigationFolderId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      //     }
      //   )
      //   .then((response) => {
      //     console.log("rescaseinvest");
      //     console.log(response);
      //     dispatch(updateOkFunCase(true));
      //     dispatch(responseOkFunCase(response.data.message));
      //   })
      //   .catch((err) => {
      //     console.log(err.response.data.message);
      //     dispatch(updateErrorFunCase(true));
      //     dispatch(responseErrorFunCase(err.response.data.message));
      //     console.log(err.response.data.message);
      //     return err.response.data.message;
      //   });
      // const resTargetPerson = await axios
      //   .post(
      //     "http://38.65.139.14:8081/corporate-citras-v1/target-person-service/create",
      //     {
      //       address: home,
      //       dob: "2019-02-12",
      //       name: targetName,
      //     }
      //   )
      //   .then((response) => {
      //     console.log("resTarget");
      //     console.log(response);
      //     dispatch(updateOkFunCase(true));
      //     dispatch(responseOkFunCase(response.data.message));
      //   })
      //   .catch((err) => {
      //     console.log(err.response.data.message);
      //     dispatch(updateErrorFunCase(true));
      //     dispatch(responseErrorFunCase(err.response.data.message));
      //     console.log(err.response.data.message);
      //     return err.response.data.message;
      //   });
    };
    if (activeStep == steps.length - 1) {
      console.log("aminah");
      handleSubmitForm();
      setActiveStep(0);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleClick = () => {
    navigate("/case-main-owner");
  };
  const handleSubmitForm = async () => {
    const resCase = await axios
      .post(
        "http://38.65.139.14:8081/corporate-citras-v1/case-service/create",
        {
          description: description,
          eventAddress: eventPlace,
          eventDate: "2019-02-12",
          indication: indications,
        }
      )
      .then((response) => {
        console.log("eee");
        console.log(response.status);
        dispatch(responseOkFunc(response.data.message));
        console.log("-------------------");
        setModalShow(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        dispatch(responseErrorFunc(err.response.data.message));
        console.log("-------------------");
        setErrorModal(true);
      });
    const resCaseInvest = await axios
      .post(
        "http://38.65.139.14:8081/corporate-citras-v1/case-investigation-folder-service/create",
        {
          caseId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          investigationFolderId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        }
      )
      .then((response) => {
        console.log("eee");
        console.log(response.status);
        dispatch(responseOkFunc(response.data.message));
        console.log("-------------------");
        // setModalShow(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        dispatch(responseErrorFunc(err.response.data.message));
        console.log("-------------------");
        setErrorModal(true);
      });
    const resTargetPerson = await axios
      .post(
        "http://38.65.139.14:8081/corporate-citras-v1/target-person-service/create",
        {
          address: home,
          dob: "2019-02-12",
          name: targetName,
        }
      )
      .then((response) => {
        console.log("eee");
        console.log(response.status);
        dispatch(responseOkFunc(response.data.message));
        console.log("-------------------");
        // setModalShow(true);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        dispatch(responseErrorFunc(err.response.data.message));
        console.log("-------------------");
        setErrorModal(true);
      });
  };
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className=" container-fluid">
          <div className="row mb-0 pb-0">
            <h1 className="Actual_h1 col-12 pb-0 mb-0">
              <button
                onClick={handleClick}
                className="department-create-header__button">
                <img src={ic_left_arrow} className="back-arrow" />
              </button>
              ACTUALIZAR/NUEVO CASO
            </h1>
          </div>
          <div className="row mt-0">
            <div className="col-12">
              <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((label, index) => (
                    <Step key={index}>
                      <StepLabel
                        className={classes.button}
                        StepIconProps={{
                          classes: {
                            root: classes.stepIcon,
                            text: classes.text,
                            completed: classes.completed,
                            active: classes.active,
                          },
                        }}
                        icon="none">
                        {label}
                      </StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div>
                          <div className="row form-crear-new-caso mx-auto">
                            <div className="col-6">
                              <button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className="department-create--footer__buttonCancel w-100">
                                ANTERIOR
                              </button>
                            </div>
                            <div className="col-6">
                              <button
                                onClick={() => handleNext(activeStep)}
                                className="department-create--footer__buttonOk w-100">
                                {activeStep === steps.length - 1
                                  ? "CREAR CASO"
                                  : "SIGUIENTE"}
                              </button>
                              <ResponseOk
                                userValue={responseOkMessage}
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                              />
                              <ResponseError
                                userValue={responseErrorMessage}
                                show={errorModal}
                                onHide={() => setErrorModal(false)}
                              />
                            </div>
                          </div>

                          {/* <div className="create-case__subMainDiv"></div> */}
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {/* {activeStep === steps.length && (
                  <Paper
                    square
                    elevation={0}
                    className={classes.resetContainer}>
                    <Button
                      onClick={handleSubmitForm}
                      className={classes.button}>
                      Submit form
                    </Button>
                    <Button onClick={handleReset} className={classes.button}>
                      Reset
                    </Button>
                  </Paper>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
