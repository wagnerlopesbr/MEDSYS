import React, { useContext } from 'react';
import '../../App.css';
import unknownPerson from "../images/unknown-person.jpg";
import GlobalContext from '../context/GlobalContext';


export default function Card({ person }) {
  const { hooks } = useContext(GlobalContext);
  
  const {
    handleAge,
    handleDate,
    role,
    showDeletePopup,
    showEditPopup,
    setCurrentPerson,
  } = hooks;
  
  let cardClassName;

  switch (role) {
    case "doctors":
      cardClassName = "doctors-card";
      break;
    case "patients":
      cardClassName = "patients-card";
      break;
    default:
      cardClassName = "doctors-card";
  };

  return (
    <div
        key={ person.id }
        id={ person.id }
        className={ cardClassName }
      >
          <div className="person-photo-container">
            <img
              className="person-photo"
              src={ unknownPerson }
              alt={ `Photo of ${person.first_name} ${person.last_name}`}
            />
          </div>
          <h3>{ person.first_name } { person.last_name }</h3>
          <p>Age: { handleAge(person.birth_date) }</p>
          <p style={ { color: person.gender === 'Male' ? 'blue' : 'rgb(255, 0, 255)' } }>
            Gender: <strong>{person.gender}</strong>
          </p>
          <div className="card-buttons">
            <button
              className="edit-btn"
              onClick={() => {
                setCurrentPerson(person);
                showEditPopup(true);
              }}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                setCurrentPerson(person);
                showDeletePopup(true);
              }}
            >
              Delete
            </button>
          </div>
        </div>
  )
};