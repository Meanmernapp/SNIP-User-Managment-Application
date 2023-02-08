import { Modal } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import ic_check from "../../../images/ic-check.svg";
import { useDispatch, useSelector } from "react-redux";

export default function ResponseOk(props) {
  const { responseOkMessage } = useSelector((state) => state.user);

  return (
    <div className="dept-modal">
      <Modal
        dialogClassName="modal-90w"
        {...props}
        // size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ margin: "0 auto" }}>
        <Modal.Header closeButton className="btn-close-red">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="images-model-top">
            INFORMACIÓN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="images-model-body mx-4">
          <div className="mx-5">
            <div className="d-flex flex-column justify-content-center">
              <img src={ic_check} className="images-model-body__img mx-auto" />
              <h4 className="images-model-body__heading">
                {responseOkMessage}
              </h4>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link
            to={props.to}
            onClick={props.onHide}
            className="images-model-confirm-btn ">
            Ok
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
