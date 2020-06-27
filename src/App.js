import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import './Styles/App.css';
//import Header from "./Componentes/header.jsx";
//import Menu from "./Componentes/menu.jsx";
/*import Container from "./Componentes/container.jsx";
import Footer from "./Componentes/footer.jsx";*/
import Inicio from "./Componentes/inicio.jsx";
import AgregarRestaurant from "./Componentes/AgregarRestaurant";
import ModificarRestaurant from "./Componentes/ModificarRestaurant";
import AgregarCarta from "./Componentes/AgregarCarta";
import AccionesCarta from "./Componentes/AccionesCarta";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio}/>
        <Route path="/AgregarRestaurant" exact component={AgregarRestaurant}/>
        <Route path="/ModificarRestaurant" exact component={ModificarRestaurant}/>
        <Route path="/AgregarCarta" exact component = {AgregarCarta}/>
        <Route path="/AccionesCarta" exact component ={AccionesCarta}/>
        <Route path="/mantenimiento" exact component={() => <h1>ESTAMOS EN MANTENIMIENTO</h1>} />
        <Route path="*" component={() => <h1>404 Not FOUND</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
