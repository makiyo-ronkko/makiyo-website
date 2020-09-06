import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Modal from './Components/Modal/Modal';
//import Footer from './Components/Footer/Footer';

class App extends Component {
  static defaultProps = {
    intro: 'Hello, my name is Makiyo.',
  };

  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      show: false,
    };

    //this.toggleNav = this.toggleNav.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

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

  /* Nav bar */
  // toggleNav() {
  //   const burger = this.refs.burgeri;
  //   const nav = document.querySelector('.nav');

  //   // Defining a function
  //   burger.classList.toggle('fa-bars');
  //   burger.classList.toggle('fa-times');
  //   nav.classList.toggle('nav-active');
  // }

  /* CV to download */

  openCV() {
    window.open('cv.html', '_blank');
  }

  render() {
    return (
      <div className='wrapper'>
        <div id='page_top'>
          <a href='#'></a>
        </div>
        <header>
          {/* <!-- Menu & navigation bar --> */}
          <ul className='nav'>
            <li className='navlink'>
              <a href='#page_top'>Home</a>
            </li>
            <li className='navlink'>
              <a href='#about'>About</a>
            </li>
            <li className='navlink'>
              <a href='#skills'>Skills</a>
            </li>
            <li className='navlink'>
              <a href='#project'>Projects</a>
            </li>
            <li className='navlink'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
          <div className='burger'>
            <i className='fas fa-bars'></i>
            {/* <i onClick={this.toggleNav()} className='fas fa-bars'></i> */}
          </div>
        </header>

        {/* <!-- Hero banner --> */}
        <div className='section hero-banner background-animated'>
          <div id='about'>
            <div className='about-text'>
              <h1>{this.props.intro}</h1>
              <p>I'm a junior web developer.</p>
            </div>
            <div className='about-image'>
              <img src='/makiyo.png' />
            </div>
          </div>
        </div>

        {/* <!-- Contact form --> */}
        <div className='section contact' id='contact'>
          <div id='mycv-container'>
            <div id='mycv'>
              <h2>My CV here!</h2>
              <div id='pdf-btn'>
                <button onClick={() => this.openCV()}>
                  {' '}
                  <i className='fas fa-download fa-2x'></i>
                </button>
              </div>
            </div>
          </div>
          <div id='mycontact-container'>
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

        {/* <!-- Feature cards --> */}
        <div className='section feature-1'>
          <div className='box' id='skills'>
            <div className='feature-container'>
              <button
                id='skillsBtn'
                className='featureBtn'
                onClick={this.showModal}
              >
                Skills
              </button>
            </div>
          </div>
          <Modal show={this.state.show} handleClose={this.hideModal} />
        </div>

        <div className='section feature-2'>
          <div className='box' id='workexperience'>
            <div className='feature-container'>
              <button
                id='workBtn'
                className='featureBtn'
                onClick={this.showModal}
              >
                Work Experience
              </button>
            </div>
          </div>
          <Modal show={this.state.show} handleClose={this.hideModal} />
        </div>

        <div className='section feature-3'>
          <div className='box' id='education'>
            <div className='feature-container'>
              <button
                id='educationBtn'
                className='featureBtn'
                onClick={this.showModal}
              >
                Education
              </button>
            </div>
          </div>
          <Modal show={this.state.show} handleClose={this.hideModal} />
        </div>

        <div className='section feature-4'>
          <div className='box' id='project'>
            <div className='feature-container'>
              <button
                id='projectBtn'
                className='featureBtn'
                onClick={this.showModal}
              >
                Project
              </button>
            </div>
          </div>
          <Modal show={this.state.show} handleClose={this.hideModal} />
        </div>
        {/* <!-- Footer --> */}
        <div className='section footer'>
          <div className='socialicons'>
            <a href='//linkedin.com/in/makiyoronkko ' target='_blank'>
              <i className=' fab fa-linkedin fa-2x'></i>
            </a>
            <a href='//github.com/makiyo-ronkko' target='_blank'>
              <i className='fab fa-github fa-2x'></i>
            </a>
          </div>
        </div>
        {/* <BrowserRouter>
          <header>
            <Nav />
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
          </Switch>
          <div>
            {/* <Footer /> */}
        {/* </div> */}

        {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
