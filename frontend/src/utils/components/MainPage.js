import '../../App.css';
import Header from './Header';
import SideBar from './SideBar';
import Workbench from './Workbench';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function MainPage() {
  useContext(GlobalContext);
  return (
    <>
      <Header />
      <div style={{
        display: "initial",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}>
        <>
          <SideBar />
          <Workbench />
        </>
      </div>
    </>
  );
};

export default MainPage;