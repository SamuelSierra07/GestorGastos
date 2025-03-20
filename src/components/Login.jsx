import React from "react";
import "./Login.css";

const Login = () => (
  <div className="login-card">
    <h2 className="login-title">Iniciar Sesión</h2>
    <form className="login-form">
      <input className="input-field" type="email" placeholder="Email" required />
      <input className="input-field" type="password" placeholder="Contraseña" required />
      <button className="submit-button" type="submit">Ingresar</button>
    </form>
  </div>
);

export default Login;
