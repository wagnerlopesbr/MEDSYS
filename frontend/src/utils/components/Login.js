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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div
        className="login-body login-content"
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
    </div>
  );
}
