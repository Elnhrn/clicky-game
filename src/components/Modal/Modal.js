import React from "react";
import "./Modal.css";

const Modal = props => (
    <div className="modal fade" style={(props.modal) ? { display: "block", opacity: 1 } : {}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{props.modalMsg}</h4>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeModal}>Close</button>
                </div>
            </div>
        </div>
    </div>
);

export default Modal;