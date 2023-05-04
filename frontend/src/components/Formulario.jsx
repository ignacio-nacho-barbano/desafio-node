import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formulario() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    /*     myHeaders.append("Access-Control-Allow-Credentials", true); */

    const raw = JSON.stringify({
      usuario: user,
      contraseña: pass,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:3001/api/login",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        localStorage.setItem("token", respuesta.token);
        /*  alert(respuesta.message); */
        navigate("/home");
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <form action="submit" onSubmit={login}>
        <label htmlFor="">Usuario</label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          onChange={(e) => {
            setUser(e.target.value);
          }}
          value={user}
        />
        <label htmlFor="">Contraseña</label>
        <input
          type="text"
          placeholder="Ingrese la contraseña"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          value={pass}
        />
        <button type="submit">Ingresar</button>
      </form>
      <div>
        <p>El usuario ingresado es: {user} y será redirigido al home</p>
      </div>
    </div>
  );
}

export default Formulario;
