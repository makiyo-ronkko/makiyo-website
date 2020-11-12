import React, { Component } from 'react';
import './Card.css';

import Modal from '../Modal/Modal';
import Modal2 from '../Modal/Modal2';
import Modal3 from '../Modal/Modal3';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
      show3: false,
    };

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

  render() {
    return (
      <>
        <div className='Card-1 section'>
          <div className='box' id='skills'>
            <div className='Card-container'>
              <button
                id='skillsBtn'
                className='cardBtn'
                onClick={this.showModal1}
              >
                Skills
              </button>
            </div>
          </div>
          <Modal show1={this.state.show1} handleClose1={this.hideModal1} />
        </div>

        <div className='Card-2 section'>
          <div className='box' id='workexperience'>
            <div className='Card-container'>
              <button
                id='workBtn'
                className='cardBtn'
                onClick={this.showModal2}
              >
                Work Experience
              </button>
            </div>
          </div>
          <Modal2 show2={this.state.show2} handleClose2={this.hideModal2} />
        </div>

        <div className='Card-3 section'>
          <div className='box' id='education'>
            <div className='Card-container'>
              <button
                id='educationBtn'
                className='cardBtn'
                onClick={this.showModal3}
              >
                Education
              </button>
            </div>
          </div>
          <Modal3 show3={this.state.show3} handleClose3={this.hideModal3} />
        </div>
      </>
    );
  }
}

export default Card;
