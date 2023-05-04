import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const inmuebleNuevo = () => {
    navigate("/agregarInmueble");
  };

  const inmuebles = () => {
    navigate("/mostrarInmueble");
  };

  const precio = () => {
    navigate("/cambiarPrecio");
  };

  const borrarInmueble = () => {
    navigate("/borrarInmueble");
  };
  return (
    <div>
      <p>Bienvenido a Inmuebles SRL</p>
      <button onClick={inmuebleNuevo}>Agregar propiedad</button>
      <button onClick={inmuebles}>Ver inmuebles</button>
      <button onClick={precio}>Modificar precio</button>
      <button onClick={borrarInmueble}>Borrar propiedad</button>
    </div>
  );
}

export default Home;
