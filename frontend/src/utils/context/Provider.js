import useHandles from "../useHandles";
import GlobalContext from "./GlobalContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Provider = ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const getApiData = () => {
    axios.get("http://localhost:3001/api/lists").then((response) => {
      setApiData(response.data);
    }).catch((error) => {
      console.log("axios deu ruim", error);
    });
  };

  useEffect(() => {
    getApiData();
  }, []);

  const {
    handlePhotoSelect,
    role,
    setRole,
    currentPage,
    setCurrentPage,
    handleNextPage,
    handlePrevPage,
    handleMain,
    handleLogin,
    handleLogout,
    logged,
    setLogged,
    testandoContext,
    values,
    setValues,
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
    currentPerson,
    setCurrentPerson,
    registerPopup,
    setRegisterPopup,
    showRegisterPopup,
    handleMenuOption,
    selectedOption,
    setSelectedOption,
  } = useHandles();

  const value = {
    api: {
      apiData: {
        patients: apiData.patients,
        doctors: apiData.doctors,
        // sectors: apiData.sectors,
      },
      setApiData,
    },
    hooks: {
      handlePhotoSelect,
      role,
      setRole,
      currentPage,
      setCurrentPage,
      handleNextPage,
      handlePrevPage,
      handleMenuOption,
      selectedOption,
      setSelectedOption,
      handleMain,
      logged,
      setLogged,
      handleLogin,
      handleLogout,
      testandoContext,
      values,
      setValues,
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
      currentPerson,
      setCurrentPerson,
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