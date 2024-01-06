import React, { useState, useContext } from 'react';
import '../../App.css';
import GlobalContext from '../context/GlobalContext';
import photo from "../images/default-photo.jpg";
import cancelIcon from "../images/cancel.png";
import webcamIcon from "../images/webcam-icon.png";

function Register({ toggle }) {
  const [role, setRole] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(photo);
  const initialState = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
  };
  
  const { hooks } = useContext(GlobalContext);
  const {
    values,
    setValues,
    handleRegister,
    handleSendPatient,
    handleSendDoctor,
    registerPopup,
    handlePhotoSelect,
  } = hooks;

  const clearForm = () => {
    setRole("");
    setValues(initialState);
    setSelectedPhoto(photo);
  };
  
  console.log("values: ", values);
  return (
    <>
      <div
        className="register-box"
        style={{
          display: registerPopup ? "flex" : "none",
          }}
      >
        <div className="register-photo-div">
          <img id="avatar-photo" src={ selectedPhoto || photo } width="160px" alt="avatarPhoto" />
          <input
            type="file"
            accept="image/*"
            id="file-input"
            style={{ display: "none" }}
            onChange={ (e) => {
              handlePhotoSelect(e);
              setSelectedPhoto(URL.createObjectURL(e.target.files[0]));
            } }
          />
          <div className="register-photo-icons-div">
            <button
              onClick={ () => document.getElementById("file-input").click() }
            >
              Select Photo
            </button>
            <button>
              <img
                src={ webcamIcon }
                width="22px"
                style={{ marginTop: "5px"}}
                alt="webcamIcon"
              />
            </button>
          </div>
        </div>
        <div className="register-container">
          <h1>MEDSYS</h1>
          <div>
          <div
            className="radio-div"
          >
            <h2 className="h2-header">Register: </h2>
            <label className="register-label">
              <input
                type="radio"
                name="userType"
                value="doctor"
                onClick={ () => setRole("doctor") }
              />
                Doctor
            </label>
            <label className="register-label">
              <input
                type="radio"
                name="userType"
                value="patient"
                onClick={ () => setRole("patient") }
              />
                Patient
            </label>
          </div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={ values.firstName }
              className="register-input"
              onChange={ handleRegister }
            />
            <input
              type="number"
              min="0"
              max="150"
              style={{ width: "64px", paddingLeft: "2px" }}
              name="age"
              placeholder="Age"
              value={ values.age }
              className="register-input"
              onChange={ handleRegister }
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={ values.lastName }
              className="register-input"
              onChange={ handleRegister }
            />
            <select
              className="register-input"
              style={{ width: "75px", paddingLeft: "2px"}}
              placeholder="Gender"
              value={ values.gender }
              name="gender"
              onChange={ handleRegister }
            >
              <option value="" disabled selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
          </div>
          <button
            className="send-btn"
            onClick={ () => {
              role === "doctor" ? handleSendDoctor() : handleSendPatient();
              clearForm();
              }
            }
          >
            Send
          </button>
        </div>
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "transparent",
          }}
          onClick={ ()=> {
            toggle(false);
            clearForm();
            }
          }
        >
          <img src={ cancelIcon } width="24px" alt="logo" />
        </button>
      </div>
    </>
  );
};

export default Register;