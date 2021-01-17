import React from 'react';
import './Home.css';

const Home = ({ title, subtitle, text, text2, image }) => {
	return (
		<div className='Hero-banner section background-animated' id='top'>
			<div id='about'>
				<div className='about-text'>
					<h1>{title}</h1>
					<p>{subtitle}</p>
					<p>{text}</p>
					<p>{text2}</p>
				</div>
				<div className='about-image'>
					<img src={process.env.PUBLIC_URL + '/makiyo.png'} alt={image} />
				</div>
			</div>
		</div>
	);
};

Home.defaultProps = {
	selfie: 'image',
	title: 'Hello, my name is Makiyo.',
	subtitle: "I'm a junior web developer.",
	text:
		'In 2019, I made a decision to change my career and become a software developer.',
	text2:
		'Born in Japan living in Finland. Former international sales and marketing professional who enjoys learning and developing programming skills.',
};

export default Home;
