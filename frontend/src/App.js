import './App.css';
import imgIcon from "./utils/images/hospital-icon.png";
import Handles from "./utils/handles";
import Table from "./utils/components/Table";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const { handleChangeValues, handleSend } = Handles();
  const [patientsTable, setPatientsTable] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001").then((response) => {
      setPatientsTable(response.data);
    })
  }, []);

  return (
    <body>
      <header className="header-container">
        <div>
          <img src={ imgIcon } width="160px" alt="logo" />
        </div>
        <div className="register-container">
          <h1>Hospital</h1>
          <h2 className="h2-header">patients register</h2>     
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="register-input"
            onChange={ handleChangeValues }
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="register-input"
            onChange={ handleChangeValues }
          />
          <div>
            <input
              type="number"
              min="0"
              style={{ width: "40px" }}
              name="age"
              placeholder="Age"
              className="register-input"
              onChange={ handleChangeValues }
              />
            <select
              className="register-input"
              placeholder="Gender"
              name="gender"
              onChange={ handleChangeValues }
              >
              <option value="" disabled selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>    
            <button
              className="send-btn"
              onClick={ () => handleSend() }
            >
              Send
            </button>
          </div>
        </div>
      </header>
      <div className="table-container">
        <Table
          patientsList={ patientsTable }
        />
      </div>
    </body>
  );
}

export default App;
