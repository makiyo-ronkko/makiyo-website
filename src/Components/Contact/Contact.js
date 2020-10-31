import React from 'react';

const Contact = () => {
	return (
		<div className='Contact section' id='contact' style={{ height: '100px' }}>
			<div className='mycontact-container'>
				<div id='mycontact'>
					<h2>Feel free to contact me :)</h2>
					<div className='email-btn'>
						<div className='icon'>
							<a href='mailto:makiyo.ronkko@bc.edu.fi'>
								<i className='far fa-envelope fa-2x'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
