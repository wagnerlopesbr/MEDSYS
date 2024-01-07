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

  const dynamicList = api.apiData[selectedOption];

  return (
    <div className="grid">
      { dynamicList && <Grid role={ role }list={ dynamicList }/> }
    </div>
  );
};

export default Workbench;