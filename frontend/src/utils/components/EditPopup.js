import React from 'react';
import confirmIcon from "../images/confirm.png";
import cancelIcon from "../images/cancel.png";
import '../../App.css';
import useHandles from '../useHandles';

export default function EditPopup({ currentPatient, toggle }) {
  const { handleRegister, handleEdit } = useHandles();
  return <div className="showPopup">
    { currentPatient &&
      <div key={ currentPatient.id }>
        <input
          type="text"
          onChange={ handleRegister }
          placeholder={ currentPatient.first_name }
        />
        <input
          type="text"
          onChange={ handleRegister }
          placeholder={ currentPatient.last_name }
        />
        <input
          type="number"
          onChange={ handleRegister }
          placeholder={ currentPatient.age }
        />
        <select
          type="text"
          onChange={ handleRegister }
          placeholder={ currentPatient.gender }
        >
          <option value="Male" style={{
              textAlign: 'center',
              color: 'blue',
            }}
          >
            Male
          </option>
          <option value="Male" style={{
              textAlign: 'center',
              color: 'rgb(255, 0, 255)',
            }}
          >
            Female
          </option>
        </select>       
        <button
          className="confirm-btn"
          onClick={ ()=> {
              handleEdit(currentPatient.id);
              toggle(false);
            }
          }
        >
          <img src={ confirmIcon } width="24px" alt="logo" />
        </button>
        <button
          className="cancel-btn"
          onClick={ ()=> toggle(false) }
        >
          <img src={ cancelIcon } width="24px" alt="logo" />
        </button>
      </div>
    }
  </div>
};