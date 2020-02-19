import React from "react";

const MyModal = ({ handleClose, show, children }) => {
  return (
    <div className='modal' style={{ display: show ? 'block' : 'none'}}>
      <section className="modal-main">
        {children}
        <button className='close-icon' onClick={handleClose}>x</button>
      </section>
    </div>
  );
};

export default MyModal;