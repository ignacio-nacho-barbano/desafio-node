import React, { useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [pass, setPass] = useState("");
  const [permisos, setPermisos] = useState("");

  const registro = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      usuario: nombre,
      contraseña: pass,
      permisos: permisos,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/registro",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        alert(
          "El usuario ha sido registrado. Vuelva a la página principal para ingresar y acceder al menú"
        );
      } else {
        const respuesta = await response.json();
        alert(respuesta.error);
      }
    } catch (error) {
      alert("Error!!!  ", error);
    }
  };
  return (
    <div>
      <form action="submit" onSubmit={registro}>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          value={nombre}
        />
        <label htmlFor="">Contraseña:</label>
        <input
          type="password"
          placeholder="Ingrese la contraseña"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          value={pass}
        />
        <label htmlFor="">Perfil:</label>
        <input
          type="text"
          placeholder="Ingrese su perfil (cliente, admin o gerente)"
          onChange={(e) => {
            setPermisos(e.target.value);
          }}
          value={permisos}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
