import React from "react";

function Formulario() {
  return (
    <div>
      <form action="submit">
        <label htmlFor="">Usuario</label>
        <input type="text" placeholder="Nombre de usuario" />
        <label htmlFor="">Contraseña</label>
        <input type="text" placeholder="Ingrese la contraseña" />;
        <button>Ingresar</button>
      </form>
    </div>
  );
}

export default Formulario;
