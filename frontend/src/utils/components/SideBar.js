import '../../App.css';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function SideBar() {
  const { api, hooks } = useContext(GlobalContext);
  const {
    setCurrentPage,
    setRole,
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
          setRole(key);
          setCurrentPage(1);
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
    </main>
  );
};

export default SideBar;