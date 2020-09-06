import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
//import Features from './Components/Features/Features';
import Modal from './Components/Modal/Modal';
import Modal2 from './Components/Modal/Modal2';
import Modal3 from './Components/Modal/Modal3';
import Footer from './Components/Footer/Footer';

class App extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      show1: false,
      show2: false,
      show3: false,
    };

    //this.toggleNav = this.toggleNav.bind(this);
    this.showModal1 = this.showModal1.bind(this);
    this.showModal2 = this.showModal2.bind(this);
    this.showModal3 = this.showModal3.bind(this);

    this.hideModal1 = this.hideModal1.bind(this);
    this.hideModal2 = this.hideModal2.bind(this);
    this.hideModal3 = this.hideModal3.bind(this);
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
        <Home />

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

        {/* <!-- Contact form --> */}
        <div className='section contact' id='contact'>
          <h1>Project</h1>
        </div>

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

        {/* <!-- Footer --> */}
        <Footer />

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
