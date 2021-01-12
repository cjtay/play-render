import React from 'react';
import './styles.css';

const Modal = ({ item, handleClose }) => {
    return (
        <div className="modal" onClick={handleClose}>
            <div>{item}</div>
        </div>
    );
};

export default Modal;
