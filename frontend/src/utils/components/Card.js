import React, { useContext } from 'react';
import '../../App.css';
import unknownPerson from "../images/unknown-person.jpg";
import GlobalContext from '../context/GlobalContext';


export default function Card({ person }) {
  const { hooks } = useContext(GlobalContext);
  
  const {
    role,
    showDeletePopup,
    showEditPopup,
    setCurrentPerson,
  } = hooks;
  
  return (
    <div
        key={ person.id }
        id={ person.id }
        className={ role === "doctors" ? "doctors-card" : "card" }
      >
        <div>
          <div className="person-photo-container">
            <img
              className="person-photo"
              src={ unknownPerson }
              alt="person-photo"
            />
          </div>
          <h3>{ person.first_name } { person.last_name }</h3>
          <p>Age: {person.age}</p>
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
      </div>
  )
};