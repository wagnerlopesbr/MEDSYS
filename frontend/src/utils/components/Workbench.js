import '../../App.css';
import Grid from './Grid';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function Workbench() {
  const { hooks, api } = useContext(GlobalContext);
  const { selectedOption } = hooks;

  return (
    <>
      { selectedOption === "patients" && <Grid list={ api.apiData.patients }/> }
      { selectedOption === "doctors" && <Grid list={ api.apiData.doctors }/> }
    </>
  );
};

export default Workbench;