import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    static defaultProps = {
        title: "Hello, my name is Makiyo.",
        subtitle: "I'm a junior web developer.",
        text: "In January 2020, I made a decision to change my career and commitment to be a software developer. Born in Japan living in Finland. With international sales and marketing background, "
    }
    render() {
        return (
            <>
                <div className="section hero-banner" className="background-animated">
                    <div className="about-text" id="about">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.subtitle}</p>
                        <p>{this.props.text}</p>
                    </div>
                    <div className="about-image">
                        <img src='/makiyo.png' className='Home-image' alt='makiyo' />
                    </div>
                </div>

                <h1>PROJECTS</h1>
                <div className="section feature-1">
                    <div className="box" id="skills">
                        <div className="feature-container">
                            <button id="skillsBtn" className="featureBtn">Skills</button>
                        </div>
                    </div>
                </div>
                <div className="section feature-2">
                    <div className="box" id="skills">
                        <div className="feature-container">
                            <button id="skillsBtn" className="featureBtn">Skills</button>
                        </div>
                    </div>
                </div>
                <div className="section feature-3">
                    <div className="box" id="skills">
                        <div className="feature-container">
                            <button id="skillsBtn" className="featureBtn">Skills</button>
                        </div>
                    </div>
                </div>

                <div className='section' id='contact'>
                    <div id='mycontact'>
                        <h1>
                            {' '}
                            <a href='mailto:makiyo.ronkko@bc.edu.fi'>
                                <i className='mail outline icon'></i>
                            </a>
            Feel free to contact me
          </h1>
                    </div>
                </div>

            </>
        );
    }

};

export default Home;
