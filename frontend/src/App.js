import './App.css';
import Main from './utils/components/Main';
import Login from './utils/components/Login';
import GlobalContext from '../src/utils/context/GlobalContext';
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  useContext(GlobalContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
