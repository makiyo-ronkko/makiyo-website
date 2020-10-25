import React from 'react';
import project from '../../img/project.png';

const Project = () => {
  return (
    <div
      className='section Project box'
      id='project'
      style={{ flexDirection: 'column', marginTop: '32px', background: 'none' }}
    >
      <div className='Proejct-title'>
        <h1
          style={{
            margin: '20px',
            textTransform: 'uppercase',
            textDecoration: 'underline',
          }}
        >
          Project
        </h1>
      </div>
      <button className='cardBtn' style={{ margin: '16px 0' }}>
        <a
          style={{
            textDecoration: 'none',
            color: '#000000',
          }}
          href='//github.com/makiyo-ronkko'
          target='_blank'
        >
          My Github Page
        </a>
      </button>
      <p>♢ Coming soon! ♢</p>
      <h3>Full Stack Social Media App</h3>
      <h3>Daily Art Sharing</h3>
      <img src={project} alt='makiyo-ronkko' style={{ width: '30%' }} />
    </div>
  );
};

export default Project;
