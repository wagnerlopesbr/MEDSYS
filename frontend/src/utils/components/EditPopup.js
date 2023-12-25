import React from 'react';
import confirmIcon from "../images/confirm.png";
import cancelIcon from "../images/cancel.png";
import '../../App.css';

export default function EditPopup({ currentPatient }) {
  return <div>
    { typeof currentPatient !== "undefined" &&
      <div key={ currentPatient.id }>
        <p>{ currentPatient.first_name }</p>
        <p>{ currentPatient.last_name }</p>
        <p style={{ textAlign: 'center' }}>{ currentPatient.age }</p>
        <p style={{
          textAlign: 'center',
          color: currentPatient.gender === 'Male' ? 'blue' : 'rgb(255, 0, 255)',
          }}
        >
          { currentPatient.gender }
        </p>
        <button className="confirm-btn">
          <img src={ confirmIcon } width="24px" alt="logo" />
        </button>
        <button className="cancel-btn">
          <img src={ cancelIcon } width="24px" alt="logo" />
        </button>
      </div>
    }
  </div>
};