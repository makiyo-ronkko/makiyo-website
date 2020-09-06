import React from 'react';
import './Modal.css';

const Modal3 = ({ handleClose3, show3 }) => {
  if (!show3) {
    return null;
  }
  //   const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const showHideClassName = show3 ? 'block' : 'none';

  return (
    <div id='education-pop-up' className='modal' style={{ display: 'block' }}>
      <div className='modal-content'>
        <span className='close' onClick={handleClose3}>
          &times;
        </span>
        <h2>01/2020- present: Business College Helsinki Oy</h2>
        <p>
          Full Stack Web Developer program, Information and Communications
          Technology
        </p>
        <h2>
          08/2010- 12/2014: Helsinki Metropolia University of Applied Sciences
        </h2>
        <p>Metropolia Business School, Vantaa, Finland</p>
        <p>
          International Business and Logistics, Bachelor of Business
          Administration (BBA)
        </p>
        <h2>01/2003- 12/2005: Los Angeles City College, Los Angeles, U.S.A.</h2>
        <p>Associate of Art in Music (AA)</p>
      </div>
    </div>
  );
};

export default Modal3;

{
  /* <div
id='project-pop-up'
className='modal'
className={this.showHideClassname}
>
<div className='modal-content'>
  <span className='close' onClick={this.handleClose}>
    &times;
  </span>
  <h2>Please click below link to see my project!</h2>
  <a href='//github.com/makiyo-ronkko' target='_blank'>
    <i className='fab fa-github fa-2x'></i>Makiyo's Github
  </a>
</div>
</div> */
}
