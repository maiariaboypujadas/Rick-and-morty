import SearchBar  from "../SearchBar/SearchBar";
import style from '../NavBar/NavBar.module.css';
 
const NavBar = (props) => {
    return (
        <div className={style.nav}>
        <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}
export default NavBar;