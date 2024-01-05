import '../../App.css';
import Header from './Header';
import SideBar from './SideBar';
import Workbench from './Workbench';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function MainPage() {
  return (
    <div>
      <Header />
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}>
        <SideBar />
        <Workbench />
      </div>
    </div>
  );
};

export default MainPage;