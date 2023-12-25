import React from 'react';
import useHandles from '../useHandles';
import '../../App.css';
import DeletePopup from './DeletePopup';
import EditPopup from './EditPopup';

export default function Table({ patientsList }) {
  const {
    deletePopup,
    setDeletePopup,
    showDeletePopup,
    editPopup,
    setEditPopup,
    showEditPopup,
    currentPatient,
    setCurrentPatient,
  } = useHandles();

  return <table border="2">
    <thead>
      <tr>
        <th>FIRST NAME</th>
        <th>LAST NAME</th>
        <th>AGE</th>
        <th>GENDER</th>
        <th>MANAGE</th>
      </tr>
    </thead>
    <tbody>
      { typeof patientsList !== "undefined" &&
        patientsList.map((patient) => (
          <tr
            key={ patient.id }
            id={ patient.id }
          >
            <td>{ patient.first_name }</td>
            <td>{ patient.last_name }</td>
            <td style={{ textAlign: 'center' }}>{ patient.age }</td>
            <td style={{
              textAlign: 'center',
              color: patient.gender === 'Male' ? 'blue' : 'rgb(255, 0, 255)',
              }}
            >
              { patient.gender }
            </td>
            <td>
              <button
                className="edit-btn"
                onClick={ ()=> {
                    setCurrentPatient(patient.id);
                    showEditPopup(true);
                  }
                }
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={ ()=> showDeletePopup(true) }
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      }
    </tbody>
    { deletePopup && <DeletePopup toggle={ setDeletePopup } /> }
    { editPopup && <EditPopup toggle={ setEditPopup } currentPatient={ currentPatient } /> }
  </table>
};