import React from 'react'
import NavBar from '../Views/navbar.jsx';
import Adm from "../Assets/img/adm1.png"
import { Link} from 'react-router-dom';
import { Divider } from '@material-ui/core';
const menu = () => {
    return ( 
        <div className="menu">
           <Divider/>
            <Link to="/">
            <img src={Adm} className="imgMenu" alt="Administrador"></img>
            </Link>
            <Divider/>
            <NavBar/>
        </div>
     );
}
 
export default menu;