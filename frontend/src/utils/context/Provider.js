import useHandles from "../useHandles";
import GlobalContext from "./GlobalContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Provider = ({ children }) => {
  const [patientsTable, setPatientsTable] = useState([]);
  console.log(patientsTable);

  const getPatients = () => {
    axios.get("http://localhost:3001").then((response) => {
      setPatientsTable(response.data
        .sort((a, b) => a.first_name.toUpperCase() > b.first_name.toUpperCase() ? 1 : -1)
      );
    }).catch((error) => {
      console.log("axios deu ruim", error);
    });
  };

  useEffect(() => {
    getPatients();
  }, []);

  const {
    testandoContext,
    values,
    deletePopup,
    setDeletePopup,
    showDeletePopup,
    editPopup,
    setEditPopup,
    showEditPopup,
    handleRegister,
    handleSend,
    handleEdit,
    handleDelete,
    currentPatient,
    setCurrentPatient,
  } = useHandles();

  const value = {
    api: {
      patientsTable,
      setPatientsTable,
    },
    hooks: {
      testandoContext,
      values,
      deletePopup,
      setDeletePopup,
      showDeletePopup,
      editPopup,
      setEditPopup,
      showEditPopup,
      handleRegister,
      handleSend,
      handleEdit,
      handleDelete,
      currentPatient,
      setCurrentPatient,
    },
  }

  return (
    <GlobalContext.Provider value={ value }>
      {children}
    </GlobalContext.Provider>
  )
};

export default Provider;