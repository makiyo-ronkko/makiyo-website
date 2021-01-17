import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import Card from './Components/Card/Card';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = (): JSX.Element => {
	return (
		<div className='wrapper'>
			<div id='page_top'>
				<a href='#top'>{''}</a>
			</div>
			<Nav />
			<Home />
			<Card />
			<Project />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
