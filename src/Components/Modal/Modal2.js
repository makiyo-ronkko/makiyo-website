import React from 'react';
import './Modal.css';

const Modal2 = ({ handleClose2, show2 }) => {
  if (!show2) {
    return null;
  }
  //   const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const showHideClassName = show2 ? 'block' : 'none';

  return (
    <div id='work-pop-up' className='modal' style={{ display: 'block' }}>
      <div className='modal-content' id='work-modal'>
        <span className='close' onClick={handleClose2}>
          &times;
        </span>
        <h2>01/2016-01/2020: Samuji Oy, Helsinki, Finland</h2>
        <p>Sales Executive and Wholesale Logistics and Distribution Manager</p>
        <h2>02/2015-12/2015: Toiminimi, Helsinki, Finland</h2>
        <p>
          Self-employed, Helsinki based e-commerce distrubuted for Japan and
          other markets
        </p>
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
    </div>
  );
};

export default Modal2;
