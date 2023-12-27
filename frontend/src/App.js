import './App.css';
import Table from "./utils/components/Table";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './utils/components/Header';
import Provider from './utils/context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <div className="table-container">
        <Table />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
