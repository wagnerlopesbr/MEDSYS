import './App.css';
import Table from "./utils/components/Table";
import Header from './utils/components/Header';
import Login from './utils/components/Login';
import GlobalContext from '../src/utils/context/GlobalContext';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { api } = useContext(GlobalContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={
        <>
          <Header />
          <div className="table-container">
            <Table list={ api.apiData.patients }/>
            <Table list={ api.apiData.doctors }/>
          </div>
        </>
      } />
    </Routes>
  );
}

export default App;
