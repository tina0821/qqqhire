import React from 'react';
import './AlertBox.scss';
const AlertBox = ({ message, type }) => {
  return (
    <div className={`alert-box ${type}`}>
      <p className="message">{message}</p>
      {/* <button className="close-button" onClick={handleClose}>
        X
      </button> */}
    </div>
  );
};

export default AlertBox;
