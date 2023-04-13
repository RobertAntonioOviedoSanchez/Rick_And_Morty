import { useState } from "react";
import Style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
   
   const [ id, setId ] = useState("");

   const handleChange = (event) => { //funcion que guarda en el state lo que se escriba en el input
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/> {/* value={id} para que el input y el state tengan el mismo valor */}
         <button onClick={() =>{ onSearch(id); setId("")}}>Agregar</button> {/* en el callback. onSearch(id) ejecuta funcion, y el setId("") deja el state en un string vacio para que el input cuando se haga click en el boton se elimine el texto y el state */}
      </div>
   );
}
