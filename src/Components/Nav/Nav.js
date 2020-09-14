import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  render() {
    return (
      <header>
        <ul className='nav'>
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
        {/* <div className='burger'>
          <i className='fas fa-bars'></i>
          <i onClick={this.toggleNav()} className='fas fa-bars'></i> 
        </div> */}
      </header>
    );
  }
}

export default Nav;
