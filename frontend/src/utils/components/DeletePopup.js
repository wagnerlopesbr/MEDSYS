import React from 'react';
import confirmIcon from "../images/confirm.png";
import cancelIcon from "../images/cancel.png";
import '../../App.css';
import useHandles from '../useHandles';

export default function DeletePopup({ currentPatient, toggle }) {
  const { handleDelete } = useHandles();
  
  return <div className="showPopup">
    <button
      onClick={ () => {
        handleDelete(currentPatient.id);
        toggle(false);
        }
      }
    >
      <img src={ confirmIcon } width="24px" alt="logo" />
    </button>
    <button
      onClick={ ()=> toggle(false) }
    >
      <img src={ cancelIcon } width="24px" alt="logo" />
    </button>
  </div>
};