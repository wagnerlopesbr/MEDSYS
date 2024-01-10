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
    birthDate: "",
    gender: "",
    statusActive: "",
    document: "",
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
    const radioBtn = document.getElementsByName("userType");
    radioBtn.forEach((btn) => btn.checked = false);
  };

  const validation = values.firstName.length > 0
    && values.lastName.length > 0
    && values.birthDate.length > 0
    && values.gender !== "Gender"
    && values.document.length === 9
    && values.statusActive !== "Status";
  
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
                value="patient"
                onClick={ () => setRole("patient") }
              />
                Patient
            </label>
            <label className="register-label">
              <input
                type="radio"
                name="userType"
                value="doctor"
                onClick={ () => setRole("doctor") }
              />
                Doctor
            </label>
          </div>
            <input
              type="text"
              name="firstName"
              style={{ width: "130px", paddingLeft: "2px" }}
              placeholder="First Name"
              value={ values.firstName }
              className="register-input"
              onChange={ handleRegister }
            />
            <input
              type="date"
              style={{ width: "105px", height: "15px", paddingLeft: "2px" }}
              name="birthDate"
              value={ values.birthDate }
              className="register-input"
              onChange={ handleRegister }
            />
            <input
              type="number"
              inputMode="numeric"
              name="document"
              placeholder="Document"
              style={{ width: "100px", height: "15px", paddingLeft: "2px" }}
              value={ values.document }
              className="register-input"
              onChange={ handleRegister }
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              style={{ width: "130px", paddingLeft: "2px" }}
              placeholder="Last Name"
              value={ values.lastName }
              className="register-input"
              onChange={ handleRegister }
            />
            <select
              className="register-input"
              style={{ width: "116px", height: "29px", paddingLeft: "2px" }}
              placeholder="Gender"
              value={ values.gender }
              name="gender"
              onChange={ handleRegister }
            >
              <option value="" disabled selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select
              className="register-input"
              style={{ width: "111px", height: "29px", paddingLeft: "2px" }}
              placeholder="Active?"
              value={ values.statusActive }
              name="statusActive"
              onChange={ handleRegister }
            >
              <option value="" disabled selected>Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
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
              if (role === "doctor" && validation) {
                handleSendDoctor();
              } else if (role === "patient" && validation) {
                handleSendPatient();
              } else {
                alert("Please, fill correctly all the fields.");
              }
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