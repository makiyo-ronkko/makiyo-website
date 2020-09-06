import React from 'react';

const Modal = ({ handleClose, show }) => {
  if (!show) {
    return null;
  }
  //   const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const showHideClassName = show ? 'block' : 'none';

  return (
    <div id='skills-pop-up' className='modal' style={{ display: 'block' }}>
      <div className='modal-content' id='skill-modal'>
        <span className='close' onClick={handleClose}>
          &times;
        </span>
        <h2>Please visit my Github page to see my project.</h2>
        <a href='//github.com/makiyo-ronkko' target='_blank'>
          <i className='fab fa-github fa-2x'></i>Makiyo's Github Page
        </a>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;

{
  {
    /* <div id='work-pop-up' className='modal'>
      <div className='modal-content'>
        <span
          className='close'
          onClick={handleClose}
          style={{ display: { showHideClassName } }}
        >
          &times;
        </span>
        <h2>01/2016-01/2020: Samuji Oy, Helsinki, Finland</h2>
        <p>Sales Executive and Wholesale Logistics and Distribution Manager</p>
        <h2>02/2015-12/2015: Toiminimi, Helsinki, Finland</h2>
        <p>Self-employed, Helsinki based online design store for Japan</p>
        <h2>10/2012-01/2015: Rovio Entertainment Ltd., Espoo, Finland</h2>
        <p>
          Communications Specialist, Japan in the Marketing and Communications
          Business Unit
        </p>
        <h2>
          06/2011-02/2012: Industrial News Service, INS Oy, Helsinki, Finland
        </h2>
        <p>
          Part-time Media Consultant, Media Department & Intern as Media
          Developer, Media Department
        </p>
        <h2>For the rest of experiences, please see my CV.</h2>
      </div>
    </div> */
  }
}

{
  /* <div
id='education-pop-up'
className='modal'
className={this.showHideClassname}
>
<div className='modal-content'>
  <span className='close' onClick={this.handleClose}>
    &times;
  </span>
  <h2>01/2020- present: Business College Helsinki Oy</h2>
  <p>
    Full Stack Web Developer program, Information and Communications
    Technology
  </p>
  <h2>
    08/2010- 12/2014: Helsinki Metropolia University of Applied
    Sciences
  </h2>
  <p>Metropolia Business School, Vantaa, Finland</p>
  <p>
    International Business and Logistics, Bachelor of Business
    Administration (BBA)
  </p>
  <h2>
    01/2003- 12/2005: Los Angeles City College, Los Angeles, U.S.A.
  </h2>
  <p>Associate of Art in Music (AA)</p>
</div>
</div> */
}

{
  /* <div
id='project-pop-up'
className='modal'
className={this.showHideClassname}
>
<div className='modal-content'>
  <span className='close' onClick={this.handleClose}>
    &times;
  </span>
  <h2>Please click below link to see my project!</h2>
  <a href='//github.com/makiyo-ronkko' target='_blank'>
    <i className='fab fa-github fa-2x'></i>Makiyo's Github
  </a>
</div>
</div> */
}
