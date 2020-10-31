import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import Card from './Components/Card/Card';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div className='wrapper'>
				<div id='page_top'>
					<a href='#top'></a>
				</div>
				<Nav />
				<Home />
				<Card />
				<Project username='makiyo-ronkko' />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
