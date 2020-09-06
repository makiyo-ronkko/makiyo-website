import React from 'react';
import './Features.css';

const Features = ({}) => {
  return (
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
    </div>
  );
};

export default Features;
