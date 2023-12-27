import './App.css';
import Table from "./utils/components/Table";
import Header from './utils/components/Header';
import GlobalContext from '../src/utils/context/GlobalContext';
import { useContext } from 'react';

function App() {
  const { api } = useContext(GlobalContext);
  console.log(api);

  return (
    <>
      <Header />
      <div className="table-container">
        <Table list={ api.apiData.patients }/>
        <Table list={ api.apiData.doctors }/>
      </div>
    </>
  );
}

export default App;
