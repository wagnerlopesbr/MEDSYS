import React, { useState } from "react";
import pillImg from "../images/medsys-pill.png";
import addIcon from "../images/add-icon.png";
import logoutIcon from "../images/logout-icon.png";
import GlobalContext from '../context/GlobalContext';
import { useContext } from "react";
import "../../App.css";

export default function Header() {
  const { hooks } = useContext(GlobalContext);

  const {
    handleMain,
    registerPopup,
    showRegisterPopup,
    handleLogout,
    setLogged,
  } = hooks;

    return (<div
      style={{
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,2)",
        width: "100%",
      }}>
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
          onClick={ () => {
            showRegisterPopup(!registerPopup);
          }}
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
  </div>)
};