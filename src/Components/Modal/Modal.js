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
        <div>
          <h2>Here are programming languages I am focusing on:</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
          </ul>
        </div>
        <div>
          <h2>Udemy Courses I am studying: </h2>
          <ul>
            <li>The Modern Javascript Bootcamp Course(2020)</li>
            <li>Modern React with Redux [2020 update]</li>
            <li>The Modern React Bootcamp (Hooks, Context, NExtJS, Router)</li>
            <li>The Complete Node.js DEveloper Course (3rd Edition)</li>
            <li>MERN Stack Front to Back: Full Stack React, Redux & Node.js</li>
            <li>The Complete Javascript Course 2020: Build Real Projects!</li>
          </ul>
        </div>
        <a href='//github.com/makiyo-ronkko' target='_blank'>
          <i className='fab fa-github fa-2x'></i>Makiyo's Github Page
        </a>
      </div>
    </div>
  );
};

export default Modal;
