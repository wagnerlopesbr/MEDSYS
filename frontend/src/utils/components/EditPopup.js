import React, { useState, useContext } from 'react';
import confirmIcon from "../images/confirm.png";
import cancelIcon from "../images/cancel.png";
import '../../App.css';
import GlobalContext from '../context/GlobalContext';


export default function EditPopup({ currentPerson, toggle }) {
  const { hooks } = useContext(GlobalContext);
  const { handleEdit } = hooks;
  const [editedPerson, setEditedPerson] = useState({
    first_name: currentPerson.first_name,
    last_name: currentPerson.last_name,
    age: currentPerson.age,
    gender: currentPerson.gender,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPerson((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return <div className="showPopup">
    { currentPerson && (
      <div key={ currentPerson.id }>
        <input
          type="text"
          name="first_name"
          onChange={ handleInputChange }
          placeholder={ editedPerson.first_name }
        />
        <input
          type="text"
          name="last_name"
          onChange={ handleInputChange }
          placeholder={ editedPerson.last_name }
        />
        <input
          type="number"
          name="age"
          onChange={ handleInputChange }
          placeholder={ editedPerson.age }
        />
        <select
          type="text"
          name="gender"
          onChange={ handleInputChange }
          placeholder={ editedPerson.gender }
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
              handleEdit(currentPerson.id, editedPerson);
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