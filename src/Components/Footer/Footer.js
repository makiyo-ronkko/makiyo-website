import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
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
  );
};

export default Footer;
