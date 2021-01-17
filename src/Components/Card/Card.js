import React, { useState } from 'react';
import './Card.css';

import Modal from '../Modal/Modal';
import Modal2 from '../Modal/Modal2';
import Modal3 from '../Modal/Modal3';

const Card = () => {
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);

	const showModal1 = () => {
		setShow1(!show1);
	};

	const showModal2 = () => {
		setShow2(!show2);
	};

	const showModal3 = () => {
		setShow3(!show3);
	};

	const hideModal1 = () => {
		setShow1(!show1);
	};

	const hideModal2 = () => {
		setShow2(!show2);
	};

	const hideModal3 = () => {
		setShow3(!show3);
	};

	return (
		<>
			<div className='Card-1 section'>
				<div className='box' id='skills'>
					<div className='Card-container'>
						<button id='skillsBtn' className='cardBtn' onClick={showModal1}>
							Skills
						</button>
					</div>
				</div>
				<Modal show1={show1} handleClose1={hideModal1} />
			</div>

			<div className='Card-2 section'>
				<div className='box' id='workexperience'>
					<div className='Card-container'>
						<button id='workBtn' className='cardBtn' onClick={showModal2}>
							Work Experience
						</button>
					</div>
				</div>
				<Modal2 show2={show2} handleClose2={hideModal2} />
			</div>

			<div className='Card-3 section'>
				<div className='box' id='education'>
					<div className='Card-container'>
						<button id='educationBtn' className='cardBtn' onClick={showModal3}>
							Education
						</button>
					</div>
				</div>
				<Modal3 show3={show3} handleClose3={hideModal3} />
			</div>
		</>
	);
};

export default Card;
