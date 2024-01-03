import useHandles from "../useHandles";
import GlobalContext from "./GlobalContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Provider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const getApiData = () => {
    axios.get("http://localhost:3001/").then((response) => {
      setApiData(response.data);
    }).catch((error) => {
      console.log("axios deu ruim", error);
    });
  };

  useEffect(() => {
    getApiData();
  }, []);

  const {
    handleMain,
    handleLogin,
    handleLogout,
    logged,
    setLogged,
    testandoContext,
    values,
    deletePopup,
    setDeletePopup,
    showDeletePopup,
    editPopup,
    setEditPopup,
    showEditPopup,
    handleRegister,
    handleSendPatient,
    handleSendDoctor,
    handleEdit,
    handleDelete,
    currentPatient,
    setCurrentPatient,
    registerPopup,
    setRegisterPopup,
    showRegisterPopup,
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
      handleMain,
      logged,
      setLogged,
      handleLogin,
      handleLogout,
      testandoContext,
      values,
      deletePopup,
      setDeletePopup,
      showDeletePopup,
      editPopup,
      setEditPopup,
      showEditPopup,
      handleRegister,
      handleSendPatient,
      handleSendDoctor,
      handleEdit,
      handleDelete,
      currentPatient,
      setCurrentPatient,
      registerPopup,
      setRegisterPopup,
      showRegisterPopup,
    },
  }

  return (
    <GlobalContext.Provider value={ value }>
      {children}
    </GlobalContext.Provider>
  )
};

export default Provider;