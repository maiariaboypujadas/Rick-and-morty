import style from './SearchBar.module.css';
export default function SearchBar(props) { //props es {onSearch} un OBJETO!!
   //onSearch es una propiedad dentro de props 
   return (
      <div className={style.contenedor}>
         <input type="text"></input>
      <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
