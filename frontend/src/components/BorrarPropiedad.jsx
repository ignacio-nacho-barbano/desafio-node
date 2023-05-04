import React from "react";

function BorrarPropiedad() {
    const [id, setId] = useState();

    const borrarPropiedad = async (event) => {
        event.preventDefault();


    }


  return (
    <div>
      <form action="submit" onSubmit={}>
        <label htmlFor="">
          Ingrese el id de la propiedad que quiere borrar
        </label>
        <input type="text" placeholder="Ingrese el id" onChange={(e) => {
            setId(e.target.value);
          }}
          value={id}/>
        <button type="submit">Borrar propiedad</button>
      </form>
    </div>
  );
}

export default BorrarPropiedad;
