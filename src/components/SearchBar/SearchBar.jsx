import { useState } from 'react';
import style from './SearchBar.module.css';
export default function SearchBar(props) { //props es {onSearch} un OBJETO!!
   //onSearch es una propiedad dentro de props 

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   };
   return (
      <div className={style.contenedor}>
         <input type="text" onChange={handleChange} value={id}/>
      <button onClick={() => {props.onSearch(id)}}>Agregar</button>
      </div>
   );
}
