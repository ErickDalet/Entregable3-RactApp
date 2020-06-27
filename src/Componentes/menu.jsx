import React from 'react'
import NavBar from '../Views/navbar.jsx';
import Adm from "../Assets/img/adm1.png"
import { Link} from 'react-router-dom';
const menu = () => {
    return ( 
        <div className="menu">
            Menu
            <Link to="/">
            <img src={Adm} className="imgMenu" alt="Administrador"></img>
            </Link>
            <NavBar/>
        </div>
     );
}
 
export default menu;