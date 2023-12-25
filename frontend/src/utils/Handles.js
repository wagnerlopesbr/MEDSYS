import { useState } from "react";
import axios from "axios";

const Handles = () => {
  const [values, setValues] = useState();
  
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

  return { values, handleChangeValues, handleSend };
};

export default Handles;
