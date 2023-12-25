import React from 'react';
import confirmIcon from "../images/confirm.png";
import cancelIcon from "../images/cancel.png";
import '../../App.css';

export default function DeletePopup({ toggle }) {
  
  return <div className="showPopup">
    <button>
      <img src={ confirmIcon } width="24px" alt="logo" />
    </button>
    <button>
      <img src={ cancelIcon } width="24px" alt="logo" />
    </button>
  </div>
};