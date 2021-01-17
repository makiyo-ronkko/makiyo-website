import React, { FC } from 'react';
import './Nav.css';

const Nav: FC = (): JSX.Element => {
	// const [toggle, setToggle] = useState(false);

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
};

export default Nav;
