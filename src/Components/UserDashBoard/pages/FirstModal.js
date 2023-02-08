import React from "react";
import { Button, Modal } from "react-bootstrap";

const FirstModal = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [secondModal, seSecondtModal] = React.useState(false);

  return (
    <>
      <h1 className='Actual_h1'><i class="fa-solid fa-arrow-left-long"></i>AGREGAR USUARIO</h1>
      
    <div className="modal_button">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    
        </div>
        
      </>
  );
};
function SecondModal(props) {
  return (
    <div className="primary-modal">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <button onClick={props.onHide} className="modal-close-btn">
          X
        </button>
        <span className="second-heading">ELIMINAR USUARIO</span>
        <div className="second-modal-body">
          <span className="second-heading-first">Usuarios a elimianar</span>
          <span className="count-tag">Total 4</span>
          <ul className="modal-list-style">
            <li className="modal-list-item">Coffee</li>
            <li className="modal-list-item">Tea</li>
            <li className="modal-list-item">Milk</li>
            <li className="modal-list-item">Coffe</li>
          </ul>
          <div className="btn-div">
            <button className="button-sec btn-cancel">CANCELAR</button>
            <button className="button-sec btn-confirm">CONFIRMAR</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <div className="primary-modal">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <button onClick={props.onHide} className="modal-close-btn">
          X
        </button>
        <span className="main-modal-heading">ELIMINAR USUARIO</span>
        <div className="primary-modal-table">
          <table>
            <tr>
              <th>Nombre</th>
              <td>Luis Enrique </td>
            </tr>
            <tr>
              <th>Rol</th>
              <td>Administrador</td>
            </tr>
            <tr>
              <th>Correo</th>
              <td>lcornejo@ibl.mx</td>
            </tr>
            <tr>
              <th>Teléfono</th>
              <td>4423222111</td>
            </tr>
            <tr>
              <th>Fecha de Expiración</th>
              <td>20/02/2022</td>
            </tr>
            <tr>
              <th>Departamento</th>
              <td>Asesinatos</td>
            </tr>
          </table>
          <div className="btn-div">
            <button className="button-sec btn-cancel">CANCELAR</button>
            <button className="button-sec btn-confirm">CONFIRMAR</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FirstModal;
