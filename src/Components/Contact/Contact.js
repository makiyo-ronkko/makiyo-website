import React from 'react';

const Contact = () => {
  return (
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
  );
};

export default Contact;
