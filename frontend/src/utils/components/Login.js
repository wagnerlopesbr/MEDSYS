import React, { useContext } from "react";
import "../../App.css";
import GlobalContext from "../context/GlobalContext";
import pillImg from "../images/medsys-pill.png";

export default function Login() {
  const { hooks } = useContext(GlobalContext);
  
  const {
    handleRegister,
    handleLogin,
    values,
  } = hooks;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleLogin(values);
  };

  return (
    <div
      className="login-body"
      style={{
        borderRadius: "4px",
        boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.4)",
      }}
    >
      <form onSubmit={ handleFormSubmit }>
        <div
          style={{
            textAlign: 'center',
            marginTop: '10%',
            paddingBottom: '5%',
          }}
        >
          <img
            src={pillImg}
            alt="pill img"
            style={{
              maxHeight: "120px",
            }}
            className="App-logo"
          />
        </div>
        <div className="register-container login-container">
          <input
            type="text"
            name="user"
            placeholder="User"
            className="register-input"
            onChange={ handleRegister }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="register-input"
            onChange={ handleRegister }
          />
          <button
            type="submit"
            style={{
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
