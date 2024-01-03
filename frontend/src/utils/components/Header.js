import React, { useState } from "react";
import imgIcon from "../images/hospital-icon.png";
import pillImg from "../images/medsys-pill.png";
import addIcon from "../images/add-icon.png";
import logoutIcon from "../images/logout-icon.png";
import useHandles from "../useHandles";
import "../../App.css";

export default function Header() {
  const [role, setRole] = useState("");
  const {
    handleMain,
    handleRegister,
    handleSendPatient,
    handleSendDoctor,
    registerPopup,
    showRegisterPopup,
    handleLogout,
    setLogged,
  } = useHandles();

    return (<div
      style={{
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,2)",
      }}
    >
    <nav
      className="nav-container"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >
        <button
          className="nav-main-btn"
          onClick={ handleMain }
        >
          <img
            src={ pillImg }
            alt="pill img"
            style={{
              maxHeight: "50px",
            }}
            className="App-logo"
          />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
        }}
      >
        <button
          className="nav-btn"
          onClick={ () => showRegisterPopup(!registerPopup)}
          style={{
            fontSize: "30px"
          }}
        >
          <img src= { addIcon } width="22px" alt="add icon" />
        </button>
        <button
          className="nav-btn"
          onClick={ () => handleLogout(!setLogged)}
          style={{
            fontSize: "30px"
          }}
        >
          <img src= { logoutIcon } width="22px" alt="logout icon" />
        </button>
      </div>
    </nav>
    <register
      className="header-container"
      style={{
        display: registerPopup ? "flex" : "none",
        }}
    >
      <div>
        <img src={ imgIcon } width="160px" alt="logo" />
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
            className="register-input"
            onChange={ handleRegister }
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="register-input"
            onChange={ handleRegister }
          />
          <select
            className="register-input"
            style={{ width: "75px", paddingLeft: "2px"}}
            placeholder="Gender"
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
                }
              }
            >
              Send
            </button>
      </div>
    </register>
  </div>)
};