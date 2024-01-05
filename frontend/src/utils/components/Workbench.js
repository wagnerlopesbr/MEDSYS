import '../../App.css';
import Grid from './Grid';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function Workbench() {
  const { hooks, api } = useContext(GlobalContext);
  const {
    role,
    selectedOption,
  } = hooks;

  return (
    <div className="grid">
      { selectedOption === "patients" && <Grid role={ role }list={ api.apiData.patients }/> }
      { selectedOption === "doctors" && <Grid role={ role }list={ api.apiData.doctors }/> }
    </div>
  );
};

export default Workbench;