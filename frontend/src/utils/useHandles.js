import { useState } from "react";
import axios from "axios";

const useHandles = () => {
  const [values, setValues] = useState();
  const [popup, setPopup] = useState(false);

  const showDeletePopup = (boolean) => {
    setPopup(boolean);
  };
  
  const handleChangeValues = (value) => {
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

  return { values, popup, setPopup, showDeletePopup, handleChangeValues, handleSend };
};

export default useHandles;
