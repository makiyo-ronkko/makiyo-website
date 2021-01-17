import React, { FC } from 'react';
import project from '../../img/project.png';
import './Project.css';

interface ProjectProps {
	githubLink?: string;
	title?: string;
	about1?: string;
	about2?: string;
	appName?: string;
	appDesc?: string;
	appDesc2?: string;
	appDesc3?: string;
	appDesc4?: string;
}

const Project: FC<ProjectProps> = ({
	githubLink,
	title,
	about1,
	about2,
	appName,
	appDesc,
	appDesc2,
	appDesc3,
	appDesc4,
}): JSX.Element => {
	return (
		<div
			className='Project-section Project box'
			id='project'
			style={{ background: 'none' }}
		>
			<div
				className='Proejct-title'
				style={{ textDecoration: 'uppercase', margin: '20px' }}
			>
				<h1 style={{ textTransform: 'uppercase' }}>Projects</h1>
			</div>
			<h4>{about1}</h4>
			<h4>{about2}</h4>
			<br />
			{/* <div className='section'> */}
			<div className='Project-box'>
				<h4>
					Demo:{' '}
					<a
						href='https://dailyartsharing.herokuapp.com'
						target='_blank'
						rel='noopener noreferrer'
						style={{
							textDecoration: 'none',
							backgroundColor: '#f4d6db',
							color: 'black',
						}}
					>
						{appName}
					</a>
				</h4>
				<br />
				<h4>
					Code:{' '}
					<a
						href='https://github.com/makiyo-ronkko/fullstack-app'
						target='_blank'
						rel='noopener noreferrer'
						style={{
							textDecoration: 'none',
							backgroundColor: '#f4d6db',
							color: 'black',
						}}
					>
						{githubLink}
					</a>
				</h4>
				<p style={{ margin: '0.2rem', padding: '0.2rem' }}>{title}</p>
				<a
					href='https://github.com/makiyo-ronkko/fullstack-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src={project}
						alt='makiyo-ronkko'
						className='Project-img'
						style={{ width: '30%' }}
					/>
				</a>
				{/* </div> */}
			</div>

			<div className='description-box'>
				<p>{appDesc} </p>
				<p>{appDesc2}</p>
				<p>
					{appDesc3}
					{appDesc4}
				</p>
			</div>

			<button className='projectBtn' style={{ margin: '16px 0' }}>
				<a
					style={{
						textDecoration: 'none',
						color: '#000000',
					}}
					href='//github.com/makiyo-ronkko'
					target='_blank'
					rel='noopener noreferrer'
				>
					My Github Page
				</a>
			</button>
		</div>
	);
};

Project.defaultProps = {
	appName: 'https://dailyartsharing.herokuapp.com/ ',
	githubLink: 'https://github.com/makiyo-ronkko/fullstack-app',
	about1: 'I have built various apps for my own projects and school.',
	about2: 'Please also visit my github page for more information.',
	title: '♢ Daily Art Sharing ♢',
	appDesc:
		"'Daily Art Sharing' is a social media app where people can share arts and pictures daily and get ideas and inspiration from peer artists.",
	appDesc2:
		'App is created with Backend: Mongo DB, Express and Frontend: React, Redux. Design with CSS. Visual assets with Adobe Spark.',
	appDesc3: 'Main functionalities: ',
	appDesc4: 'CRUD (Registration, Login, Logout, Post, Comment)',
};

export default Project;
