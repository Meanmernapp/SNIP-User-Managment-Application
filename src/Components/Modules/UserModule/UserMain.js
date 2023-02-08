import React, { useEffect, useState, useContext, useRef, useMemo } from "react";
import { Image } from "react-bootstrap";
import img4 from "../../../images/NavBar/ic-search.svg";
import ic_list from "../../../images/ic-list-detail.svg";
import ic_menu from "../../../images/ic-menu.svg";
import ic_key from "../../../images/ic-key.svg";
import ic_trash_outline from "../../../images/ic-trash-outline.svg";
import ic_edit_outline from "../../../images/ic-edit-outline.svg";
import ic_trash_black from "../../../images/ic-trash-outline-black.svg";
import { Card, Button, Modal } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import TablePagination from "@mui/material/TablePagination";
import { AppContext } from "../../../App";
import ResponseOk from "../../UserDashBoard/pages/ResponseOk";
import axios from "axios";
import { allDepartments } from "../../../features/departmentSlice";
import { allStatuses } from "../../../features/statusSlice";
import ic_add from "../../../images/ic-add.svg";
import { allRoles } from "../../../features/roleSlice";
import {
  getByIdData,
  getByUserIdData,
  getPassResetId,
} from "../../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { allUsers } from "../../../features/userSlice";
import { responseOkFunc, responseErrorFunc } from "../../../features/userSlice";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const UserMain = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { userValue } = useSelector((state) => state.user);
  const { getIdData } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [deleteData, setDeleteData] = useState();
  const [value, setValue] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dense, setDense] = useState(false);
  const [openOptions, setOpenOptions] = useState(-1);
  const [iconState, setIconState] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [table, setTable] = useState(true);
  const [val, setVal] = useState(false);
  const [page, setPage] = useState(0);
  const { val1 } = useContext(AppContext);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalUser, setTotalUser] = useState(10);
  var ind;
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [fetchDataState, setFetchDataState] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const { allRolesValues } = useSelector((state) => state.role);
  const { responseOkMessage } = useSelector((state) => state.user);
  const { responseErrorMessage } = useSelector((state) => state.user);
  const [totalPages, setTotalPages] = useState();
  console.log("userValue");

  const companyIdd = "050081bd-1c81-45e8-b707-e6178a46be0f";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://38.65.139.14:8081/corporate-citras-v1/user-service/find-all`
      );
      console.log(result.data);
      dispatch(allUsers(result.data.data));
      const roleApi = await axios.get(
        "http://38.65.139.14:8081/corporate-citras-v1/role-service/get-all"
      );
      console.log(roleApi.data.data);
      dispatch(allRoles(roleApi.data.data));
      console.log(allRolesValues);
      const statusApi = await axios.get(
        "http://38.65.139.14:8081/corporate-citras-v1/status-company-service/get-all"
      );
      console.log("kkr");
      console.log(statusApi.data.data);
      dispatch(allStatuses(statusApi.data.data));
      console.log(
        "http://38.65.139.14:8081/corporate-citras-v1/department-service/get-all/by-company-id/050081bd-1c81-45e8-b707-e6178a46be0f"
      );
      console.log(
        `http://38.65.139.14:8081/corporate-citras-v1/department-service/get-all/by-company-id/${companyIdd}`
      );
      const departmentApi = await axios.get(
        `http://38.65.139.14:8081/corporate-citras-v1/department-service/get-all/by-company-id/${companyIdd}`
      );
      console.log("kkr");
      console.log(departmentApi.data.data);
      dispatch(allDepartments(departmentApi.data.data));
    };

    fetchData();
  }, []);
  // const userValue1 = useSelector((state) => state.user);

  // useEffect(() => {
  //   setCurrentValues(values.slice(page, rowsPerPage));
  // }, []);
  const [x, setX] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ]);

  const handleClick = () => {
    navigate("/add-user");
  };

  const handleMoreInfo = async ({ item }) => {
    console.log(item.id);
    const requestData = await axios.get(
      `http://38.65.139.14:8081/corporate-citras-v1/user-service/get-by-id/${item.id}`
    );
    console.log(requestData);
    console.log(
      `http://38.65.139.14:8081/corporate-citras-v1/user-company-service/get-by-user-id/${item.id}`
    );

    dispatch(getByIdData(requestData.data.data));
    console.log("save");
    const requestUserCompanyData = await axios.get(
      `http://38.65.139.14:8081/corporate-citras-v1/user-company-service/get-by-user-id/${item.id}`
    );
    console.log("request------");
    console.log(requestUserCompanyData);
    dispatch(getByUserIdData(requestUserCompanyData.data.data));
  };

  const handleListButton = () => {
    setTable(false);
  };
  const removeValue = () => {
    openModal();
  };
  const optionsOnClick = (id) => {
    setOpenOptions(openOptions === id ? -1 : id);
  };
  const handleOk = () => {
    if (value.length === 1) {
      const sampleUser = x.filter((user) => user.id !== value[0]);
      setX(sampleUser);
      // console.log(x)
      closeModal();
    } else {
      const filterArray = (arr1, arr2) => {
        const filtered = arr1.filter((el) => {
          return arr2.indexOf(el.id) === -1;
        });
        return filtered;
      };

      setX(filterArray(x, value));
      closeModal();
    }
  };
  const Demo = styled("div")(({ theme }) => ({
    // backgroundColor: theme.palette.background.paper,
  }));
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const handleMoreDetails = async ({ item }) => {
    dispatch(getPassResetId(item.id));
    console.log("save");
    navigate("/passwordChange");
  };
  const handleChange = (e, item) => {
    let isChecked = e.target.checked;
    console.log(item?.id);
    setDeleteId(item?.id);
    setDeleteData(item);
    if (isChecked) {
      // setValue((value) => [...value, index]);
      // console.log(value)
    }
  };
  const handleDetailButton = () => {
    setTable(true);
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);

  //   var p = newPage + 1;
  //   // console.log(p)
  //   const indexOfLastValue = p * rowsPerPage;
  //   // console.log(indexOfLastValue)
  //   // console.log('--------------')
  //   // console.log(rowsPerPage)
  //   const indexOfFirstValue = indexOfLastValue - rowsPerPage;
  //   // console.log(indexOfFirstValue)
  //   setCurrentValues(userValue.splice(indexOfFirstValue, rowsPerPage));
  //   // console.log(currentValues)
  // };
  const handleChangePage = (event, newPage) => {
    console.log("Page has been changed");
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    console.log("Page2 has been changed");
    console.log(event.target.value);
    setRowsPerPage(parseInt(event.target.value, 10));
    console.log(rowsPerPage);
    setPage(0);
  };
  const handleDeleteData = () => {
    console.log(deleteData.name);
    console.log(deleteData);
    console.log(deleteId);
    setModalShow(true);
  };

  const handleSearchClick = () => {
    console.log("kainat");
  };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value));
  //   setPage(0);
  //   // const indexOfLastValue = currentPage * postsPerPage
  //   // const indexOfFirstValue = indexOfLastValue - postsPerPage
  //   setCurrentValues(userValue.slice(0, event.target.value));
  //   // console.log(indexOfFirstValue + ' ' + indexOfLastValue)
  // };

  // console.log(page + '  ' + rowsPerPage)
  // console.log(currentValues)
  let pageNumbers = [];
  const usersData = useMemo(() => {
    let computedUsers = userValue;

    if (searchTerm) {
      computedUsers = computedUsers.filter(
        (val) =>
          val?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val?.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setTotalUser(computedUsers.length);
    const computedSlice = computedUsers.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );

    setTotalPages(Math.ceil(computedUsers.length / rowsPerPage));
    for (let i = 0; i <= Math.ceil(computedUsers.length / rowsPerPage); i++) {
      if (i == 0) {
        pageNumbers = [];
      }
      pageNumbers.push(i);
    }

    console.log(pageNumbers.length);
    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //Current Page slice
    return computedSlice;
  }, [userValue, page, searchTerm, totalPages, totalUser, pageNumbers.length]);

  console.log(pageNumbers.length);

  console.log(totalPages);
  console.log(usersData.length);
  return (
    <div style={{ marginLeft: val1.state.inputMargin === true && "12%" }}>
      <div className="container-size">
        <div className="container-fluid">
          <div className="row Actual_h1">
            <div className="col-sm-12 float-sm-right float-md-right float-lg-right float-xl-right  col-md-4 col-lg-4 col-xl-4">
              <div className="images-header-row ">
                <h1 className="images-header__h1 ">USUARIOS</h1>
                <p className="images-header__p px-2">
                  TOTAL {userValue.length}
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-8">
              <div className="row">
                <div className="col-sm-4 col-md-2">
                  <div className="name_nav">
                    <button
                      className="home_list_button"
                      style={{ backgroundColor: table && "#c2bebe" }}
                      onClick={handleDetailButton}>
                      <img
                        src={ic_list}
                        className="images-header__buttons__icAddHome"
                      />
                    </button>

                    <button
                      className="home_list_button"
                      onClick={handleListButton}
                      style={{ backgroundColor: !table && "#c2bebe" }}>
                      <img
                        src={ic_menu}
                        className="images-header__buttons__icAddHome"
                      />
                    </button>
                  </div>
                </div>
                <div className="col-sm-8 col-md-10">
                  <div className="row">
                    <div className="col-6">
                      <button
                        className="home_button_add w-100"
                        onClick={handleClick}>
                        AGREGAR USUARIO &nbsp; &nbsp;
                        <img
                          src={ic_add}
                          className="images-header__buttons__icAdd"
                        />
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="home_button_delete w-100"
                        onClick={handleDeleteData}>
                        ELIMINAR USUARIO(S)
                        <img
                          src={ic_trash_outline}
                          className="images-header__buttons__icAdd"
                        />
                      </button>
                      <ConfirmDeleteModal
                        deletedata={deleteData}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" search_box_main my-2">
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  name=""
                  placeholder="Escribe el nombre a buscar ..."
                  className="input_text "
                  id=""
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="col-2">
                <button
                  className="home_search_button w-100"
                  onClick={handleSearchClick}>
                  <Image src={img4} />
                </button>
              </div>
            </div>
          </div>
          <div
            className="card_main_div justify-content-center"
            style={{ display: !table ? "none" : "flex" }}>
            {usersData.length > 0 &&
              usersData.map((item, index) => (
                <>
                  <Card
                    key={item.id}
                    className="home_card justify-content-center"
                    style={{ width: "272px", height: "360px" }}>
                    <div className="home_cb_line">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="home_cb"
                        onChange={(e) => handleChange(e, item)}
                      />
                      <div className="home_cb_p">
                        <p>ACTIVO &nbsp; &nbsp; </p>
                        <i class="fa-solid fa-circle home_cb_circle "></i>
                      </div>
                    </div>
                    <Image
                      variant="top"
                      className="home_card_img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dAlfxEHeXNtUb2cbBqAIAvNJKqLsLsTGdw&usqp=CAU"
                    />
                    <Card.Body>
                      <div className="home_card_title_main">
                        <Link
                          className="btn text-end home_card_title"
                          to={`/update-user/${item.id}`}
                          ref={formRef}
                          onClick={() => handleMoreInfo({ item })}>
                          ACTUALIZAR DATOS
                        </Link>
                        <i class="fa-solid fa-angle-right home_card_title_icon"></i>
                      </div>
                      <div className="home_card_details">
                        <div className="home_card_values">
                          <span className="home_card_span_value">Nombre</span>
                          <p className="home_card_p_value">{item.name}</p>
                        </div>
                        <div className="home_card_values">
                          <span className="home_card_span_value">Apellido</span>
                          <p className="home_card_p_value">Apellido</p>
                        </div>
                        <div className="home_card_values">
                          <span className="home_card_span_value">Correo</span>
                          <p className="home_card_p_value">{item.email}</p>
                        </div>
                        <div className="home_card_values">
                          <span className="home_card_span_value">Teléfono</span>
                          <p className="home_card_p_value">
                            {item.phoneNumber}
                          </p>
                        </div>
                        <div className="home_card_values">
                          <span className="home_card_span_value">
                            Tipo de Usuario
                          </span>
                          <p className="home_card_p_value">Root</p>
                        </div>
                        <div className="home_card_values">
                          <span className="home_card_span_value">
                            Fecha de Expiración
                          </span>
                          <p className="home_card_p_value">20/02/2022</p>
                        </div>
                        <div className="home_card_values">
                          <span className="home_card_span_value">Equipo</span>
                          <p className="home_card_p_value">-</p>
                        </div>
                      </div>
                      <button
                        className="card_bottom_p"
                        onClick={() => handleMoreDetails({ item })}>
                        RESTABLECER CONTRASEÑA
                      </button>
                    </Card.Body>
                  </Card>
                </>
              ))}
          </div>
          <div
            className=" table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl table-responsive-xxl addUser_div"
            style={{ display: table ? "none" : "block" }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col-xs-auto" className="addUser_labels">
                    ID
                  </th>
                  <th scope="col-xs-auto" className="addUser_labels">
                    NOMBRE
                  </th>
                  <th scope="col-xs-auto" className="addUser_labels">
                    APELLIDO
                  </th>
                  <th scope="col-xs-auto" className="addUser_labels">
                    CORREO
                  </th>
                  <th scope="col-xs-auto" className="addUser_labels">
                    TELÉFONO
                  </th>
                  <th scope="col-xs-auto" className="addUser_labels">
                    TIPO <br /> USUARIO
                  </th>
                  <th scope="col-xs-auto" className="addUser_labels">
                    STATUS
                  </th>
                  <th scope="col-xs-auto" className="addUser_labels">
                    FECHA EXPIRACIÓN
                  </th>
                  <th scope="col-xs-auto" className="addUser_labels">
                    OPCIONES
                  </th>
                  <th scope="col-xs-auto" className="addUser_labels">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody style={{ marginTop: "1em" }}>
                {usersData.length > 0 &&
                  usersData.map((item, index) => (
                    <tr className="main_row " style={{ marginTop: "1em" }}>
                      <td className="addUser_label">{item.id}</td>
                      <td className="addUser_label">{item.name}</td>
                      <td className="addUser_label">{item.surName}</td>
                      <td className="addUser_label">{item.email}</td>
                      <td className="addUser_label">{item.phoneNumber}</td>
                      <td className="addUser_label">{item.userName}</td>
                      <td className="addUser_label">{item.status}</td>
                      <td className="addUser_label">{item.expireDate}</td>
                      <td className="addUser_label ">
                        <div class="dropdown">
                          <button
                            onClick={() => optionsOnClick(item.id)}
                            className="btn btn-outline-none bg-white">
                            <MoreHorizIcon />
                          </button>
                          <div
                            class="dropdown__dropdown-content"
                            style={{
                              display:
                                openOptions === item.id ? "block" : "none",
                            }}>
                            <Demo>
                              <List dense={dense}>
                                <ListItem>
                                  <Link
                                    to={`/update-user/${item.id}`}
                                    onClick={() => handleMoreInfo({ item })}
                                    className="text-decoration-none d-flex justify-content-between">
                                    <ListItemIcon>
                                      <img
                                        src={ic_edit_outline}
                                        className="dropdown__dropdown-icons"
                                      />
                                    </ListItemIcon>

                                    <ListItemText primary="ACTUALIZAR" />
                                  </Link>
                                </ListItem>
                                <ListItem>
                                  <Link
                                    to={`/update-dept/${item.id}`}
                                    className="text-decoration-none d-flex justify-content-between">
                                    <ListItemIcon>
                                      <img
                                        src={ic_trash_black}
                                        className="dropdown__dropdown-icons"
                                      />
                                    </ListItemIcon>
                                    <ListItemText primary="ELIMINAR" />
                                  </Link>
                                </ListItem>
                                <ListItem>
                                  <Link
                                    to="/passwordChange"
                                    className="text-decoration-none d-flex justify-content-between">
                                    <ListItemIcon>
                                      <img
                                        src={ic_key}
                                        className="dropdown__dropdown-icons"
                                      />
                                    </ListItemIcon>
                                    <ListItemText primary="RESTABLECER CONTRASEÑA" />
                                  </Link>
                                </ListItem>
                              </List>
                            </Demo>
                          </div>
                        </div>
                      </td>
                      <td className="addUser_label">
                        <input
                          type="checkbox"
                          className=""
                          value={index}
                          onChange={(e) => handleChange(index, e)}
                          id={item.index}></input>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="page">
            <TablePagination
              sx={{
                width: "100%",
                justifyContent: "center",
                margin: "auto",
                alignItems: "center",
              }}
              component="div"
              rowsPerPageOptions={[10, 20, 50, 100, 200, 500]}
              count={userValue.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage={<span>Usuarios por página</span>}
              labelDisplayedRows={({ page }) => {
                return `Página: ${page + 1}   de ${totalPages}`;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMain;

function ConfirmDeleteModal(props) {
  console.log(props.deletedata);
  const confirmDelete = async () => {
    await axios.delete(
      `http://38.65.139.14:8081/corporate-citras-v1/user-service/delete-by-id/${props.deletedata.id}`
    );

    await axios.delete(
      `http://38.65.139.14:8081/corporate-citras-v1/user-company-service/delete-by-user-id/${props.deletedata.id}`
    );

    props.onHide();
    window.location.reload(false);
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
        <Modal.Header closeButton className="btn-close-red ">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="role-model-top text-center mx-5 ">
            ELIMINAR USUARIOS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="role-model-body">
          <div className="mx-5">
            <h4 className="role-model-body__heading">Usuarios a eliminar</h4>
            <p className="role-model-body__p"> Total 4 </p>
            <ul className="role-model-body__ul">
              <li className="role-model-body__ul__li">
                <span>{props.deletedata?.name} </span>
              </li>
              <li className="role-model-body__ul__li">
                <span> {props.deletedata?.email} </span>
              </li>
              <li className="role-model-body__ul__li">
                <span> {props.deletedata?.phone} </span>
              </li>
              <li className="role-model-body__ul__li">
                <span> Luis Enrique Cornejo </span>
              </li>
            </ul>
          </div>
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
