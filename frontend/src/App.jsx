import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const registro = () => {
    navigate("/registro");
  };

  return (
    <div>
      <h1>Bienvenidos a Inmuebles SRL</h1>
      <button onClick={login}>Iniciar Sesión</button>
      <button onClick={registro}>Registrarse</button>
    </div>
  );
}

export default App;
