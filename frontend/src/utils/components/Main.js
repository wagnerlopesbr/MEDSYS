import '../../App.css';
import Header from './Header';
import SideBar from './SideBar';
import GlobalContext from '../context/GlobalContext';
import { useContext } from 'react';

function Main() {
  useContext(GlobalContext);
  return (
    <>
      <Header />
      <SideBar />
    </>
  );
};

export default Main;