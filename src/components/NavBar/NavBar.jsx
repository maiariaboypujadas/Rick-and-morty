import SearchBar  from "../SearchBar/SearchBar";
import style from '../NavBar/NavBar.module.css';
import { Link, NavLink } from "react-router-dom";
 
const NavBar = (props) => {
    return (
        <div className={style.nav}>
        <SearchBar onSearch={props.onSearch}/>
        <div>
        <button type="button" className={style.button}>
       <a href="/about" className='button a'>About</a>
        </button>
        <button type="button" className={style.button}>
        <a href="/home">Home</a>
        </button>
        </div>
        </div>
    )
}
export default NavBar;