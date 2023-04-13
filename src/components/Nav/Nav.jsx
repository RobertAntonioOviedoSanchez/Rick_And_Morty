import SearchBar from "../SearchBar/SearchBar.jsx";
import Style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {

    const handleLogOut = () => { //funcion para cerrar sesion
        setAccess(false)     
    }

    return (     //NOTA--CUANDO LE DE ESTILOS, PUEDO USAR SOLO LAS NAVLINK EN VEZ DE BOTONES
        <nav>
            <SearchBar onSearch={onSearch} />

            <button>
                <NavLink to={"/about"}>About</NavLink>
            </button>

            <button>
                <NavLink to={"/home"}>Home</NavLink>
            </button>

            <button>
                <NavLink to={"/favorites"} >Favorites</NavLink>
            </button>

            <button onClick={handleLogOut}>Log Out</button>
                       
        </nav>
    )
}

export default Nav