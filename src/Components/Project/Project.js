import React, { Component } from 'react';
import project from '../../img/project.png';
import './Project.css';

class Project extends Component {
	static defaultProps = {
		appName: 'https://dailyartsharing.herokuapp.com/ ',
		githubLink: 'https://github.com/makiyo-ronkko/fullstack-app',
		about1: 'I have built various apps for my own projects and school.',
		about2: 'Below is the latest fullstack project I would like to present.',
		about3: 'Please also visit my github page for more information.',
		title: '♢ Daily Art Sharing ♢',
		appDesc:
			"'Daily Art Sharing' is a social media app where people can share arts and pictures daily and get ideas and inspiration from peer artists.",
		appDesc2:
			'App is created with Backend: Mongo DB, Express and Frontend: React, Redux. Design with CSS. Visual assets with Adobe Spark.',
		appDesc3: 'Main functionalities: ',
		appDesc4: 'CRUD (Registration, Login, Logout, Post, Comment)',
	};
	render() {
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
				<h4>{this.props.about1}</h4>
				<h4>{this.props.about2}</h4>
				<h4>{this.props.about3}</h4>
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
							{this.props.appName}
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
							{this.props.githubLink}
						</a>
					</h4>
					<p style={{ margin: '0.2rem', padding: '0.2rem' }}>
						{this.props.title}
					</p>
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
					<p>{this.props.appDesc} </p>
					<p>{this.props.appDesc2}</p>
					<p>
						{this.props.appDesc3}
						{this.props.appDesc4}
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
	}
}

export default Project;
