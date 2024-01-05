import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useHandles = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState();
  const [deletePopup, setDeletePopup] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [registerPopup, setRegisterPopup] = useState(false);
  const [currentPerson, setCurrentPerson] = useState();
  const [logged, setLogged] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState("");
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  
  const handleMain = () => {
    navigate("/main");
    setSelectedOption();
  };

  const handleLogin = async (user) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/lists`);
      const { data } = response;
      const userIndex = data.users.find(
        userData => userData.user === user.user && userData.password === user.password
      );
      if (userIndex) {
        console.log("Usuário encontrado no índice: ", userIndex);
        setLogged(true);
        console.log(logged);
        navigate("/main");
      } else {
        console.log(logged);
        console.log("Usuário não encontrado");
        window.alert("Invalid user or password");

      }
    } catch (error) {
      console.log("Login error: ", error);
    }
  };

  const handleLogout = () => {
    navigate("/");
    setSelectedOption();
    setLogged(false);
  };

  const handleMenuOption = (option) => {
    setSelectedOption(option);
  };

  const showRegisterPopup = (boolean) => {
    setRegisterPopup(boolean);
  }

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

  const handleSendPatient = () => {
    axios.post("http://localhost:3001/api/patients", {
      first_name: values.firstName,
      last_name: values.lastName,
      age: values.age,
      gender: values.gender,
    }).then((response) => {
      console.log(response);
    });
  };

  const handleSendDoctor = () => {
    axios.post("http://localhost:3001/api/doctors", {
      first_name: values.firstName,
      last_name: values.lastName,
      age: values.age,
      gender: values.gender,
    }).then((response) => {
      console.log(response);
    });
  };

  const handleEdit = (id, editedPatient, entityType) => {
    const entity = entityType === "patients" ? "patients" : "doctors";

    axios.put(`http://localhost:3001/api/${entity}/edit/${id}`, editedPatient)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id, entityType) => {
    const entity = entityType === "patients" ? "patients" : "doctors";

    axios.delete(`http://localhost:3001/api/${entity}/delete/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
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
    handleLogin,
    handleLogout,
    logged,
    setLogged,
    values,
    deletePopup,
    setDeletePopup,
    showDeletePopup,
    editPopup,
    setEditPopup,
    showEditPopup,
    registerPopup,
    setRegisterPopup,
    showRegisterPopup,
    handleRegister,
    handleSendPatient,
    handleSendDoctor,
    handleEdit,
    handleDelete,
    currentPerson,
    setCurrentPerson,
  };
};

export default useHandles;
