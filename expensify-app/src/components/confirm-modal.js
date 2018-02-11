import React from 'react';
import Modal from 'react-modal';

const ConfirmModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Are you sure?"
    onRequestClose={props.handleCancel}
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Delete expense?</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button button--secondary" onClick={props.handleRemoveOption}>Delete</button>
  </Modal>
);

export default ConfirmModal;