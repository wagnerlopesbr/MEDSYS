import '../../App.css';
import Table from './Table';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function SideBar() {
  const { api, hooks } = useContext(GlobalContext);

  return (
    <main className="sidebar">
      <div className="sidebar-menu" >
        <menu style={{color: "#fff"}}>
          asdasd
        </menu>


      </div>
      <div className="table-container">
        <Table list={ api.apiData.patients }/>
        <Table list={ api.apiData.doctors }/>
      </div>
    </main>
  );
};

export default SideBar;