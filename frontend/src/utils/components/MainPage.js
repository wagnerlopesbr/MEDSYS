import '../../App.css';
import Header from './Header';
import SideBar from './SideBar';
import Workbench from './Workbench';
import Register from './Register';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function MainPage() {
  const { hooks } = useContext(GlobalContext);
  const { registerPopup, setRegisterPopup } = hooks;

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="register-div">
        <Register toggle={ setRegisterPopup }/>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: "100%",
        filter: registerPopup === true ? "blur(10px)" : "none",
      }}>
        <SideBar />
        <Workbench />
      </div>
    </div>
  );
};

export default MainPage;
