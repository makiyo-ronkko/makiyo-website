import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import Card from './Components/Card/Card';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
  /* Scroll top button */

  // scroll = () => {
  //   const pagetop = '#page_top';
  //   pagetop.hide();
  //   window.scroll(function () {
  //     if (scrollTop() > 100) {
  //       //appear after 100px scroll down
  //       pagetop.fadeIn();
  //     } else {
  //       pagetop.fadeOut();
  //     }
  //   });
  // };

  render() {
    return (
      <div className='wrapper'>
        <div id='page_top'>
          <a href='#top'></a>
        </div>
        {/* <!-- Menu & navigation bar --> */}
        <Nav />

        {/* <!-- Hero banner --> */}
        <Home />

        {/* <!-- Feature cards --> */}
        <Card />

        {/* <!-- Project --> */}
        <Project username='makiyo-ronkko' />

        {/* <!-- Contact form --> */}

        <Contact />

        {/* <!-- Footer --> */}
        <Footer />
      </div>
    );
  }
}

export default App;
