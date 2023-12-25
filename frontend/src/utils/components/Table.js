import React from 'react';
import '../../App.css';

export default function Table({ patientsList }) {
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
          <tr key={ patient.id }>
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
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
};