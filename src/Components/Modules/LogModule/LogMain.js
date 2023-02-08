import React, { useState, useContext } from "react";
import ic_excel from "../../../images/ic-excel.svg";
import ic_pdf from "../../../images/ic-pdf.svg";
import ic_employee from "../../../images/ic-employee.png";
import ic_meeting from "../../../images/ic-meeting.svg";
import TablePagination from "@mui/material/TablePagination";
import { AppContext } from "../../../App";

const LogMain = () => {
  const { val1 } = useContext(AppContext);

  const logValues = {
    module: "MODULO",
    users: "USUARIO",
    action: "ACCIÓN",
    fetch: "FECHA",
  };
  const logExamples = [
    {
      userImg: ic_employee,
      userHeading: "USUARIOS",
      userName: "Luis Cornejo Arreola",
      userAction: "Crear nuevo usuario.",
      userFetch: "Viernes 24 de Abril 2021 \n 10:22:63",
    },
    {
      userImg: ic_employee,
      userHeading: "CASOS",
      userName: "Javier Benítez",
      userAction: "Actualización de caso",
      userFetch: "Viernes 24 de Abril 2021 \n 10:22:63",
    },
    {
      userImg: ic_employee,
      userHeading: "SWITH",
      userName: "Ricardo Becerra",
      userAction: "Carga de sábana",
      userFetch: "Viernes 24 de Abril  2021 \n 10:22:63",
    },
    {
      userImg: ic_employee,
      userHeading: "USUARIOS",
      userName: "José Luis García",
      userAction: "Eliminar usuario.",
      userFetch: "Viernes 24 de Abril 2021 \n 10:22:63",
    },
    {
      userImg: ic_employee,
      userHeading: "USUARIOS",
      userName: "Luis Cornejo Arreola",
      userAction: "Crear nuevo usuario.",
      userFetch: "Viernes 24 de Abril 2021 \n 10:22:63",
    },
    {
      userImg: ic_employee,
      userHeading: "CASOS",
      userName: "Javier Benítez",
      userAction: "Actualización de caso",
      userFetch: "Viernes 24 de Abril 2021 \n 10:22:63",
    },
    {
      userImg: ic_employee,
      userHeading: "SWITH",
      userName: "Ricardo Becerra",
      userAction: "Carga de sábana",
      userFetch: "Viernes 24 de Abril 2021 \n 10:22:63",
    },
    {
      userImg: ic_employee,
      userHeading: "USUARIOS",
      userName: "José Luis García",
      userAction: "Eliminar usuario.",
      userFetch: "Viernes 24 de Abril 2021 \n 10:22:63",
    },
    {
      userImg: ic_employee,
      userHeading: "USUARIOS",
      userName: "Luis Cornejo Arreola",
      userAction: "Crear nuevo usuario.",
      userFetch: "Viernes 24 de Abril 2021 \n 10:22:63",
    },
    {
      userImg: ic_employee,
      userHeading: "CASOS",
      userName: "Javier Benítez",
      userAction: "Actualización de caso",
      userFetch: "Viernes 24 de Abril 2021 \n 10:22:63",
    },
  ];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentValues, setCurrentValues] = useState();
  const totalPages = Math.ceil(logExamples.length / rowsPerPage);

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
    setCurrentValues(logExamples.splice(indexOfFirstValue, rowsPerPage));

    console.log(currentValues);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    // const indexOfLastValue = currentPage * postsPerPage
    // const indexOfFirstValue = indexOfLastValue - postsPerPage
    setCurrentValues(logExamples.slice(0, event.target.value));
    // console.log(indexOfFirstValue + ' ' + indexOfLastValue)
  };

  return (
    <div
      className="home"
      style={{
        marginLeft: val1.state.inputMargin === true ? "235px" : "100px",
      }}>
      <div className="container-size">
        <div className="log">
          <div className="internet-create-header">
            {/* <button onClick={handleClick} className='department-create-header__button'> <img src={ic_left_arrow} /> </button> */}
            <h1 className="internet-create-header__h1">LOG</h1>
          </div>

          <div className="log-header-pTwo">
            <p className="log-header-pTwo__p">exportar a: </p>
            <div className="logo-imgs-set">
              <img className="logo-imgs-set__iOne" src={ic_pdf} />
              <img className="logo-imgs-set__iTwo" src={ic_excel} />
            </div>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="log-mainRow__col">
                  {logValues.module}
                </th>
                <th scope="col" className="log-mainRow__col">
                  {" "}
                  {logValues.users}
                </th>
                <th scope="col" className="log-mainRow__col">
                  {logValues.action}
                </th>
                <th scope="col" className="log-mainRow__col">
                  {" "}
                  {logValues.fetch}
                </th>
              </tr>
            </thead>
            <tbody>
              {logExamples.map((item) => (
                <tr className="log-hr ">
                  <th scope="row">
                    <div className="d-flex justify-content-center">
                      <img src={item.userImg} className="log-subRow__img " />
                      <label className="log-subRow__colHeading" name="name">
                        {item.userHeading}
                      </label>
                    </div>
                  </th>
                  <td className="log-subRow__colName">{item.userName}</td>
                  <td className="log-subRow__colAction"> {item.userAction}</td>
                  <td className="log-subRow__colFetch">{item.userFetch}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="page">
            <TablePagination
              component="div"
              rowsPerPageOptions={[5, 10, 20, 50, 100, 200, 500]}
              count={logExamples.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage={<span>Usuarios por página</span>}
              labelDisplayedRows={({ page }) => {
                return `Página: ${page}  de ${totalPages}`;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogMain;
