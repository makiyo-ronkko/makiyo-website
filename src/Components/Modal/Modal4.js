import React from 'react';
import './Modal.css';

const Modal4 = ({ handleClose4, show4 }) => {
  if (!show4) {
    return null;
  }
  //   const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const showHideClassName = show4 ? 'block' : 'none';

  return (
    <div id='project-pop-up' className='modal' style={{ display: 'block' }}>
      <div className='modal-content'>
        <span className='close' onClick={handleClose4}>
          &times;
        </span>
        <h2>Please click below link to see my project!</h2>
        <a href='//github.com/makiyo-ronkko' target='_blank'>
          <i className='fab fa-github fa-2x'></i>Makiyo's Github
        </a>
      </div>
    </div>
  );
};

export default Modal4;
