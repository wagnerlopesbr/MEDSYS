import useHandles from "../useHandles";
import GlobalContext from "./GlobalContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Provider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const getApiData = () => {
    axios.get("http://localhost:3001/lists").then((response) => {
      setApiData(response.data);
    }).catch((error) => {
      console.log("axios deu ruim", error);
    });
  };

  useEffect(() => {
    getApiData();
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
      apiData: {
        patients: apiData.patients,
        doctors: apiData.doctors,
      },
      setApiData,
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