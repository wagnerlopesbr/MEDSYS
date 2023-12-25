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
      console.log(response.data);
      setPatientsTable(response.data
        .sort((a, b) => a.first_name.toUpperCase() > b.first_name.toUpperCase() ? 1 : -1)
      );
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
