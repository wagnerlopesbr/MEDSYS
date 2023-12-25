import './App.css';
import useHandles from "./utils/useHandles";
import Table from "./utils/components/Table";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './utils/components/Header';

function App() {
  useHandles();
  const [patientsTable, setPatientsTable] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001").then((response) => {
      setPatientsTable(response.data);
    });
  }, []);

  return (
    <body>
      <Header />
      <div className="table-container">
        <Table
          patientsList={ patientsTable }
        />
      </div>
    </body>
  );
}

export default App;
