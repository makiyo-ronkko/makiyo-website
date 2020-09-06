import React from 'react';
import './Modal.css';

const Modal = ({ handleClose1, show1 }) => {
  if (!show1) {
    return null;
  }
  //   const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const showHideClassName = show1 ? 'block' : 'none';

  return (
    <div id='skills-pop-up' className='modal' style={{ display: 'block' }}>
      <div className='modal-content' id='skill-modal'>
        <span className='close' onClick={handleClose1}>
          &times;
        </span>
        <h2>Please visit my Github page to see my project.</h2>
        <a href='//github.com/makiyo-ronkko' target='_blank'>
          <i className='fab fa-github fa-2x'></i>Makiyo's Github Page
        </a>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
