import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import img4 from "../../../images/NavBar/ic-search.svg";
import { Image } from "react-bootstrap";
import ic_add from "../../../images/ic-add.svg";
import ic_search from "../../../images/ic-search.svg";
import { AppContext } from "../../../App";

const RoleManagementMain = () => {
  const [open, setOpen] = useState(true);
  const [openA, setOpenA] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalSee, setModalSee] = useState(false);
  const { val1 } = useContext(AppContext);

  const roles_heading = {
    rol: "ROL",
    addSheets: "SUBIR SABANAS",
    removeSheets: "ELIMINAR SABANAS",
    exportSheets: "EXPORTAR SABANAS",
    admin: "ADMINISTRAR",
    createUser: "CREAR USUARIOS",
    updateUser: "ACTUALIZAR USUARIOS",
    deleteUser: "ELIMINAR USUARIO",
  };
  const roles_examples = [
    {
      rolType: "checkbox",
      addSheetsType: "checkbox",
      removeSheetsType: "checkbox",
      exportSheetsType: "checkbox",
      adminType: "checkbox",
      createUserType: "checkbox",
      updateUserType: "checkbox",
      deleteUserType: "checkbox",
    },
    {
      rolType: "checkbox",
      addSheetsType: "checkbox",
      removeSheetsType: "checkbox",
      exportSheetsType: "checkbox",
      adminType: "checkbox",
      createUserType: "checkbox",
      updateUserType: "checkbox",
      deleteUserType: "checkbox",
    },
    {
      rolType: "checkbox",
      addSheetsType: "checkbox",
      removeSheetsType: "checkbox",
      exportSheetsType: "checkbox",
      adminType: "checkbox",
      createUserType: "checkbox",
      updateUserType: "checkbox",
      deleteUserType: "checkbox",
    },
    {
      rolType: "checkbox",
      addSheetsType: "checkbox",
      removeSheetsType: "checkbox",
      exportSheetsType: "checkbox",
      adminType: "checkbox",
      createUserType: "checkbox",
      updateUserType: "checkbox",
      deleteUserType: "checkbox",
    },
    {
      rolType: "checkbox",
      addSheetsType: "checkbox",
      removeSheetsType: "checkbox",
      exportSheetsType: "checkbox",
      adminType: "checkbox",
      createUserType: "checkbox",
      updateUserType: "checkbox",
      deleteUserType: "checkbox",
    },
  ];
  const permission_headings = {
    users: "USUARIO",
    root: "ROOT",
    admin: "ADMINISTRADOR",
  };
  const permission_examples = [
    {
      name: "Luis Enrique Cornejo",
      rootType: "checkbox",
      adminType: "checkbox",
    },
    {
      name: "Luis Enrique Cornejo",
      rootType: "checkbox",
      adminType: "checkbox",
    },
    {
      name: "Luis Enrique Cornejo",
      rootType: "checkbox",
      adminType: "checkbox",
    },
    {
      name: "Luis Enrique Cornejo",
      rootType: "checkbox",
      adminType: "checkbox",
    },
    {
      name: "Luis Enrique Cornejo",
      rootType: "checkbox",
      adminType: "checkbox",
    },
  ];

  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "145px" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className=" Actual_h1 row">
            <div className="col-sm-8 float-sm-right float-md-right float-lg-right float-xl-right  col-md-8">
              <div className="images-header-row">
                <h1 className="images-header__h1">ADMINISTRACIÓN DE ROLES</h1>
              </div>
            </div>

            <div className="col-sm-4 col-md-3">
              <button
                className="roles-header__addButton w-100 h-100"
                onClick={() => setModalShow(true)}>
                AGREGAR NUEVO ROL &nbsp;
                <img src={ic_add} className="roles-header__icAdd" />
              </button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
          <div className="roles-main-heading row ">
            <button
              className="roles-main-heading__roles col"
              onClick={() => {
                setOpen(false);
                setOpenA(true);
              }}
              style={{
                color: open === false && openA === true && "#63B3CE",
                borderBottom:
                  open == false && openA === true && "2px solid #63B3CE",
              }}>
              ROLES
            </button>
            <button
              className="roles-main-heading__permission col"
              onClick={() => {
                setOpen(true);
                setOpenA(false);
              }}
              style={{
                color: open === true && openA === false && "#63B3CE",
                borderBottom:
                  open === true && openA == false && "2px solid #63B3CE",
              }}>
              ASIGNAR ROLES
            </button>
          </div>
          <div style={{ display: !open ? "block" : "none" }}>
            <div className="roles-delete">
              <button
                className="roles-delete__button col-md-3"
                onClick={() => setModalSee(true)}>
                ELIMINAR ROL(ES) &nbsp;
                <i class="fa-solid fa-trash-can "></i>
              </button>

              <DeleteRole show={modalSee} onHide={() => setModalSee(false)} />
            </div>
            <div className="mt-2 row">
              <div className="col-sm-6 col-md-5 ms-auto">
                <button className="roles-extra__buttonLightBlue w-100"></button>
              </div>
              <div className="col-sm-6 col-md-5 ">
                <button className="roles-extra__buttonDarkBlue w-100">
                  MODULO DE USUARIOS
                </button>
              </div>
            </div>
            <div className="roles-main-table">
              <div className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.rol}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.addSheets}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.removeSheets}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.exportSheets}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.admin}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.createUser}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.updateUser}
                      </th>
                      <th scope="col" className="roles-main-table__h6">
                        {roles_heading.deleteUser}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles_examples.map((item) => (
                      <tr>
                        <th scope="row" className="roles-main-table__root">
                          <input type={item.rolType} />
                          <label className="roles-main-table__root__label">
                            &nbsp; Root
                          </label>
                        </th>
                        <td className="roles-main-table__DataRow">
                          <input type={item.addSheetsType} />
                        </td>
                        <td className="roles-main-table__DataRow">
                          <input type={item.removeSheetsType} />{" "}
                        </td>
                        <td className="roles-main-table__DataRow">
                          <input type={item.exportSheetsType} />{" "}
                        </td>
                        <td className="roles-main-table__DataRow">
                          <input type={item.adminType} />
                        </td>
                        <td className="roles-main-table__DataRow">
                          <input type={item.createUserType} />{" "}
                        </td>
                        <td className="roles-main-table__DataRow">
                          <input type={item.updateUserType} />
                        </td>
                        <td className="roles-main-table__DataRow">
                          <input type={item.deleteUserType} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            {/* className='search_box_main' */}
            <div style={{ display: open ? "block" : "none" }}>
              <div className="container-fluid search_box_main my-2">
                <div className="row">
                  <div className="col-10">
                    <input
                      type="text"
                      name=""
                      placeholder="Escribe el nombre a buscar ..."
                      className="input_text "
                      id=""
                    />
                  </div>
                  <div className="col-2">
                    <button className="home_search_button w-100">
                      <Image src={img4} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="roles-main-table">
                <div className="roles-main-table__headingRow row ">
                  <div className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div">
                    <table class="table">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="col-9 roles-main-table__h6">
                            {permission_headings.users}
                          </th>

                          <th
                            scope="col"
                            className="col-1 text-center roles-main-table__h6">
                            {permission_headings.root}
                          </th>
                          <th
                            scope="col"
                            className="col-2 text-center roles-main-table__h6">
                            {permission_headings.admin}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {permission_examples.map((item) => (
                          <tr className="roles-main-table__DataRows mb-4">
                            <th
                              scope="row"
                              className="roles-main-table__firstCol col-9">
                              <label>{item.name}</label>
                            </th>
                            <td className="col-1 text-center">
                              <input type={item.rootType} />
                            </td>
                            <td className=" text-center col-2">
                              <input type={item.adminType} />
                            </td>
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
    </div>
  );
};

export default RoleManagementMain;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ margin: "0 auto" }}>
      <Modal.Header closeButton className="btn-close-red">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="role-model-top">
          CREAR NUEVO ROL
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="role-model-body"
        style={{ padding: "0em 1rem !important" }}>
        {/* <h4 className='role-model-body__heading'>Departamentos seleccionados:</h4> */}
        {/* <form>
          <div className='form-group' style={{
    width: '20em !important',

          }}>
            <label>NOMBRE</label>
            <input
              type='text'
              placeholder='EMPLEADO GENERAL'
              className='form-control input-lg form-control-border'
            />
          </div>
        </form> */}
        <div className="role-modal__contact">
          <div className="input-group-role single-group">
            <label className="input-group-role__label">NOMBRE</label>
            <input
              className="input-group__text user-info-role__fieldModal"
              // placeholder="EMPLEADO GENERAL"
              type="email"></input>
          </div>
        </div>
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
  );
}

function DeleteRole(props) {
  return (
    <div className="role-delete-modal">
      <Modal
        dialogClassName="modal-90w"
        className="modalCenter"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="role-model-top">
            ELIMINAR ROLES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <h4 className="role-model-body__heading">Roles a eliminar</h4>
          <p className="role-model-body__p"> Total 4 </p>
          <ul className="role-model-body__ul">
            <li className="role-model-body__ul__li">
              <span> Root </span>{" "}
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Administrator </span>{" "}
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Empleado general </span>{" "}
            </li>
            <li className="role-model-body__ul__li">
              {" "}
              <span> Teniente </span>{" "}
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
