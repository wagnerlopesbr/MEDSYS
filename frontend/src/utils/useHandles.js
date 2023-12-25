import { useState } from "react";
import axios from "axios";

const useHandles = () => {
  const [values, setValues] = useState();
  const [deletePopup, setDeletePopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);

  const showDeletePopup = (boolean) => {
    setDeletePopup(boolean);
  };

  const showEditPopup = (boolean) => {
    setEditPopup(boolean);
  };
  
  const handleRegister = (value) => {
    setValues(previousValues => ({
      ...previousValues,
      [value.target.name]: value.target.value,
    }))
  };

  const handleSend = () => {
    axios.post("http://localhost:3001/api/patients", {
      first_name: values.firstName,
      last_name: values.lastName,
      age: values.age,
      gender: values.gender,
    }).then((response) => {
      console.log(response);
    });
  };

  const handleEdit = async (id) => {
    axios.put(`http://localhost:3001/api/edit/${id}`, {
      first_name: values.firstName,
      last_name: values.lastName,
      age: values.age,
      gender: values.gender,
    }).then((response) => {
      console.log(response);
    })
  };

  return {
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
    currentPatient,
    setCurrentPatient,
  };
};

export default useHandles;
