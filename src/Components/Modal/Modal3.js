import React from 'react';
import './Modal.css';

const Modal3 = ({ handleClose3, show3 }) => {
	if (!show3) {
		return null;
	}

	return (
		<div id='education-pop-up' className='Modal' style={{ display: 'block' }}>
			<div className='Modal-content' id='education-modal'>
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
				<div>
					<h2>For details, please visit my Linkedin page.</h2>
					<a
						href='//linkedin.com/in/makiyoronkko '
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-linkedin fa-2x'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Modal3;
