import { useState } from "react";
import axios from "axios";

const useHandles = () => {
  const [values, setValues] = useState();
  const [deletePopup, setDeletePopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(1);

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

  const handleEdit = (id, editedPatient) => {
    axios.put(`http://localhost:3001/api/edit/${id}`, editedPatient)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    console.log("CURRENT 1: ", currentPatient);
    if (currentPatient && currentPatient.id) {
      console.log("CURRENT 2: ", currentPatient);
      axios.delete(`http://localhost:3001/api/delete/${currentPatient.id}`)
      .then((response) => {
        console.log("CURRENT 3: ", currentPatient);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("CURRENT 4: ", currentPatient);
        console.log(error);
      });
    } else {
      console.error("No patient selected");
    }
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
    handleDelete,
    currentPatient,
    setCurrentPatient,
  };
};

export default useHandles;
