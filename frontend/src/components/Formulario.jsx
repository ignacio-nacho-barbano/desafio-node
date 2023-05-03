import React, { useState } from "react";

function Formulario() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    /*     myHeaders.append("Access-Control-Allow-Credentials", true); */

    const raw = JSON.stringify({
      usuario: "Francisco",
      contraseña: "uriel2022",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://localhost:3001/api/login", requestOptions)
      .then((response) => {
        response.json();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <form action="submit" onSubmit={onSubmit}>
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
    </div>
  );
}

export default Formulario;
