import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
		};
	}

	render() {
		return (
			<header>
				<ul className='Nav'>
					<li className='navlink'>
						<a href='#top'>Home</a>
					</li>
					<li className='navlink'>
						<a href='#project'>Projects</a>
					</li>
					<li className='navlink'>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</header>
		);
	}
}

export default Nav;
