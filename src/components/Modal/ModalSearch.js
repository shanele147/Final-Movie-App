import React from "react";

function Modal(props) {
  const { isShow } = props;
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
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">This is pop up modal</div>
          {/* <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                  </div> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
