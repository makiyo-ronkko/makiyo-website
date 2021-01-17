import React, { FC, Fragment } from 'react';
import './Modal.css';

interface Modal2Props {
	handleClose2: () => void;
	show2: boolean;
}

const Modal2: FC<Modal2Props> = ({ handleClose2, show2 }): JSX.Element => {
	if (!show2) {
		return <Fragment></Fragment>;
	}

	return (
		<div id='work-pop-up' className='Modal' style={{ display: 'block' }}>
			<div className='Modal-content' id='work-modal'>
				<span className='close' onClick={handleClose2}>
					&times;
				</span>
				<h2>
					01/2021-Present: Haltian Empathic Building Oy, Helsinki, Finland
				</h2>
				<p>Web Developer Intern</p>
				<h2>01/2016-01/2020: Samuji Oy, Helsinki, Finland</h2>
				<p>Sales Executive and Wholesale Logistics and Distribution Manager</p>
				<h2>02/2015-12/2015: Toiminimi, Helsinki, Finland</h2>
				<p>
					Self-employed, Helsinki based e-commerce distrubuted for Japan and
					other markets
				</p>
				<h2>10/2012-01/2015: Rovio Entertainment Ltd., Espoo, Finland</h2>
				<p>
					Communications Specialist, Japan in the Marketing and Communications
					Business Unit
				</p>
				<h2>
					06/2011-02/2012: Industrial News Service, INS Oy, Helsinki, Finland
				</h2>
				<p>
					Part-time Media Consultant, Media Department & Intern as Media
					Developer, Media Department
				</p>
				<div>
					<h2>For the rest of experiences, please visit my Linkedin page.</h2>
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

export default Modal2;
