import '../../App.css';
import Table from './Table';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function SideBar({ list }) {
  const { api, hooks } = useContext(GlobalContext);
  const {
    selectedOption,
    setSelectedOption,
    handleMenuOption,
  } = hooks;

  const menuOptions = Object.keys(api.apiData)
    .map((key) => (
      <button
        key={ key }
        onClick={ () => {
          handleMenuOption(key);
          setSelectedOption(key);
        } }
      >
        { key.charAt(0).toUpperCase() + key.slice(1)}
      </button>
    ));

  return (
    <main className="sidebar">
      <div className="sidebar-menu" >
        <menu style={{color: "#fff"}}>
          { menuOptions }
        </menu>


      </div>
      <div className="table-container">
        { selectedOption === "patients" && <Table list={ api.apiData.patients }/> }
        { selectedOption === "doctors" && <Table list={ api.apiData.doctors }/> }
      </div>
    </main>
  );
};

export default SideBar;