import SearchBar  from "../SearchBar/SearchBar";
import style from '../NavBar/NavBar.module.css';

 
const NavBar = ({onSearch, random}) => {
    return (
        <div className={style.nav}>
        <SearchBar onSearch={onSearch}/>
        <div>
        <button type="button" className={style.button}>
       <a href="/about">About</a>
        </button>
        <button type="button" className={style.button}>
        <a href="/home">Home</a>
        </button>
        <button type="button" className={style.button}>
        <a href="/favorites">Favorites</a>
        </button>
        <button className={style.button} onClick={random}>
            ADD RANDOM
        </button>
        </div>
        </div>
    )
}
export default NavBar;