import '../../App.css';
import Header from './Header';
import Table from './Table';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function Main() {
  const { api } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <div className="table-container">
        <Table list={ api.apiData.patients }/>
        <Table list={ api.apiData.doctors }/>
      </div>
    </>
  );
};

export default Main;