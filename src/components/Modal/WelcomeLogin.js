import React from "react";
import "./Modal.css";

function Modal(props) {
  const { isShow, user } = props;
  console.log("Modal is: " + isShow);
  return (
    //   Modal
    <div
      className={isShow ? "modal fade show" : "modal fade"}
      id="loginModal"
      tabIndex={-1}
      aria-labelledby="loginModalLabel"
      aria-hidden={isShow ? "false" : "true"}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header" style={{ textAlign: "center" }}>
            <h5 className="modal-title" id="loginModalLabel">
              Welcome {user.username} !!
            </h5>
            {/* <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            /> */}
          </div>
          <div className="modal-body">
            Please wait a minute to continue your journey!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
