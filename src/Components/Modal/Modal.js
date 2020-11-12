import React from 'react';
import './Modal.css';

const Modal = ({ handleClose1, show1 }) => {
  if (!show1) {
    return null;
  }

  return (
    <div id='skills-pop-up' className='Modal' style={{ display: 'block' }}>
      <div className='Modal-content' id='skill-modal'>
        <span className='close' onClick={handleClose1}>
          &times;
        </span>
        <div>
          <h2>My current programming skills and knowledge:</h2>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>React, Redux, Nodejs</li>
            <li>REST API, MERN Stack</li>
            <li>MongoDB, MariaDB</li>
          </ul>
        </div>
        <div>
          <h2>Udemy Courses I have studied: </h2>
          <ul>
            <li>The Modern Javascript Bootcamp Course(2020)</li>
            <li>MERN Stack Front to Back: Full Stack React, Redux & Node.js</li>
            <li>Modern React with Redux [2020 update]</li>
            <li>The Modern React Bootcamp (Hooks, Context, NExtJS, Router)</li>
            <li>The Complete Node.js DEveloper Course (3rd Edition)</li>
            <li>The Complete Javascript Course 2020: Build Real Projects!</li>
          </ul>
        </div>
        <a
          href='//github.com/makiyo-ronkko'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github fa-2x'></i>Makiyo's Github Page
        </a>
      </div>
    </div>
  );
};

export default Modal;
