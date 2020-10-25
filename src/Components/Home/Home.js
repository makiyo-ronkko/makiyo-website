import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  static defaultProps = {
    selfie: 'selfie',
    title: 'Hello, my name is Makiyo.',
    subtitle: "I'm a junior web developer.",
    text:
      'In 2019, I made a decision to change my career and commitment to be a software developer.',
    text2:
      'Born in Japan living in Finland. Former international sales and marketing professional enoys learning and developing programming skills.',
  };
  render() {
    return (
      <div className='Hero-banner section background-animated' id='top'>
        <div id='about'>
          <div className='about-text'>
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
            <p>{this.props.text}</p>
            <p>{this.props.text2}</p>
          </div>
          <div className='about-image'>
            <img
              src={process.env.PUBLIC_URL + '/makiyo.png'}
              alt={this.props.selfie}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
