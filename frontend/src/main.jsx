import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Formulario from "./components/formulario.jsx";
import Home from "./components/Home.jsx";
import AgregarInmueble from "./components/AgregarInmueble.jsx";
import ListadoInmuebles from "./components/ListadoInmuebles.jsx";
import BorrarPropiedad from "./components/BorrarPropiedad.jsx";
import ModificarPrecio from "./components/ModificarPrecio.jsx";
import Registro from "./components/Registro.jsx";

const Router = createBrowserRouter([
  { path: "/login", element: <Formulario /> },
  { path: "/home", element: <Home /> },
  { path: "/agregarInmueble", element: <AgregarInmueble /> },
  { path: "/mostrarInmueble", element: <ListadoInmuebles /> },
  { path: "/cambiarPrecio", element: <ModificarPrecio /> },
  { path: "/borrarInmueble", element: <BorrarPropiedad /> },
  { path: "/registro", element: <Registro /> },
  { path: "/", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
