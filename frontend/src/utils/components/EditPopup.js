import React, { useState } from 'react';
import confirmIcon from "../images/confirm.png";
import cancelIcon from "../images/cancel.png";
import '../../App.css';
import useHandles from '../useHandles';

export default function EditPopup({ currentPatient, toggle }) {
  const { handleEdit } = useHandles();
  const [editedPatient, setEditedPatient] = useState({
    first_name: currentPatient.first_name,
    last_name: currentPatient.last_name,
    age: currentPatient.age,
    gender: currentPatient.gender,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPatient((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return <div className="showPopup">
    { currentPatient && (
      <div key={ currentPatient.id }>
        <input
          type="text"
          name="first_name"
          onChange={ handleInputChange }
          placeholder={ editedPatient.first_name }
        />
        <input
          type="text"
          name="last_name"
          onChange={ handleInputChange }
          placeholder={ editedPatient.last_name }
        />
        <input
          type="number"
          name="age"
          onChange={ handleInputChange }
          placeholder={ editedPatient.age }
        />
        <select
          type="text"
          name="gender"
          onChange={ handleInputChange }
          placeholder={ editedPatient.gender }
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
              handleEdit(currentPatient.id, editedPatient);
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
    )}
  </div>
};