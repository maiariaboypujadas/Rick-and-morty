import { useState } from 'react';
import style from './SearchBar.module.css';
export default function SearchBar(props) { //props es {onSearch} un OBJETO!!
   //onSearch es una propiedad dentro de props 
   const { onSearch } = props;
   const [id, setId] = useState('');

   const handleChange = (event) => {
      const {value} = event.target;
      setId(value);
      console.log("id: ", id);
   };
   return (
      <div className={style.group}>
         <input 
         className={style.input} 
         type="search"
          value={id}
          onChange={handleChange} 
          />
      <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
