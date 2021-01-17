import React, { FC, Fragment } from 'react';
import './Modal.css';

interface ModalProps {
	handleClose1: () => void;
	show1: boolean;
}

const Modal: FC<ModalProps> = ({ handleClose1, show1 }): JSX.Element => {
	if (!show1) {
		return <Fragment></Fragment>;
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
						<li>React, Redux, Nodejs, Typescript</li>
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
