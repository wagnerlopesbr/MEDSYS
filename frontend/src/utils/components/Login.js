import React, { useContext } from "react";
import "../../App.css";
import GlobalContext from "../context/GlobalContext";

export default function Login() {
  const { hooks } = useContext(GlobalContext);
  
  const {
    handleRegister,
    handleLogin,
    values,
  } = hooks;

  return <div className="header-container">
    <div>
    </div>
    <div className="register-container">
      <h1>LOGIN</h1>
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
        onClick={ () => handleLogin(values)}
      >
        Login
      </button>
    </div>
</div>
};