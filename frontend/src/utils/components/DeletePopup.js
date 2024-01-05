import React, { useContext } from 'react';
import confirmIcon from "../images/confirm.png";
import cancelIcon from "../images/cancel.png";
import '../../App.css';
import GlobalContext from '../context/GlobalContext';

export default function DeletePopup({ currentPerson, toggle }) {
  const { hooks } = useContext(GlobalContext);
  const { handleDelete } = hooks;
  
  return <div className="showPopup">
    <button
      onClick={ () => {
        handleDelete(currentPerson.id);
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