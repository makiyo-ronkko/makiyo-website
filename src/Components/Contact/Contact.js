import React from 'react';

const Contact = () => {
	return (
		<div className='Contact section' id='contact' style={{ height: '100px' }}>
			<div className='mycontact-container'>
				<div id='mycontact'>
					<h2>
						Feel free to contact me :)
						<a
							href='mailto:makiyo.ronkko@bc.edu.fi'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i
								className='far fa-envelope fa-2x'
								style={{ fontSize: '24px', padding: ' 20px 0 0 10px' }}
							></i>
						</a>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Contact;
