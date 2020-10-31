import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className='Footer section'>
			<div className='socialicons'>
				<a
					href='//linkedin.com/in/makiyoronkko '
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className=' fab fa-linkedin fa-2x'></i>
				</a>
				<a
					href='//github.com/makiyo-ronkko'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className='fab fa-github fa-2x'></i>
				</a>
			</div>
			<div className='copyright'>
				<p>Copyright &copy; 2020 Makiyo Rönkkö</p>
			</div>
		</div>
	);
};

export default Footer;
