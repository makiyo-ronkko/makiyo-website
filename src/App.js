import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Modal from './Components/Modal/Modal';
import Modal2 from './Components/Modal/Modal2';
import Modal3 from './Components/Modal/Modal3';
import Modal4 from './Components/Modal/Modal4';
//import Footer from './Components/Footer/Footer';

class App extends Component {
  static defaultProps = {
    intro: 'Hello, my name is Makiyo.',
  };

  constructor(props) {
    super(props);

    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
    };

    //this.toggleNav = this.toggleNav.bind(this);
    this.showModal1 = this.showModal1.bind(this);
    this.showModal2 = this.showModal2.bind(this);
    this.showModal3 = this.showModal3.bind(this);
    this.showModal4 = this.showModal4.bind(this);
    this.hideModal1 = this.hideModal1.bind(this);
    this.hideModal2 = this.hideModal2.bind(this);
    this.hideModal3 = this.hideModal3.bind(this);
    this.hideModal4 = this.hideModal4.bind(this);
  }

  showModal1 = () => {
    this.setState({
      show1: true,
    });
  };
  showModal2 = () => {
    this.setState({
      show2: true,
    });
  };
  showModal3 = () => {
    this.setState({
      show3: true,
    });
  };
  showModal4 = () => {
    this.setState({
      show4: true,
    });
  };

  hideModal1 = () => {
    this.setState({
      show1: false,
    });
  };
  hideModal2 = () => {
    this.setState({
      show2: false,
    });
  };
  hideModal3 = () => {
    this.setState({
      show3: false,
    });
  };
  hideModal4 = () => {
    this.setState({
      show4: false,
    });
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
        {/* <!-- Menu & navigation bar --> */}
        <Nav />

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
                onClick={this.showModal1}
              >
                Skills
              </button>
            </div>
          </div>
          <Modal show1={this.state.show1} handleClose1={this.hideModal1} />
        </div>

        <div className='section feature-2'>
          <div className='box' id='workexperience'>
            <div className='feature-container'>
              <button
                id='workBtn'
                className='featureBtn'
                onClick={this.showModal2}
              >
                Work Experience
              </button>
            </div>
          </div>
          <Modal2 show2={this.state.show2} handleClose2={this.hideModal2} />
        </div>

        <div className='section feature-3'>
          <div className='box' id='education'>
            <div className='feature-container'>
              <button
                id='educationBtn'
                className='featureBtn'
                onClick={this.showModal3}
              >
                Education
              </button>
            </div>
          </div>
          <Modal3 show3={this.state.show3} handleClose3={this.hideModal3} />
        </div>

        <div className='section feature-4'>
          <div className='box' id='project'>
            <div className='feature-container'>
              <button
                id='projectBtn'
                className='featureBtn'
                onClick={this.showModal4}
              >
                Project
              </button>
            </div>
          </div>
          <Modal4 show4={this.state.show4} handleClose4={this.hideModal4} />
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
