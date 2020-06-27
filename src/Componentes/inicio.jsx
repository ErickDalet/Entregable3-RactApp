import React,{Fragment} from 'react';
import Header from "../Componentes/header";
import Menu from "../Componentes/menu";
import Container from "../Componentes/container"
import Footer from "../Componentes/footer";

const inicio = () => {
    return ( 
        <Fragment>
      
            <Header/>
            <div className="row">
                <div className="col-md-2">
                <Menu/>
                </div>
                <div className="col-md-10">
                <Container/>
                </div>              
            </div>
            <Footer/>
        </Fragment>

     );
}
 
export default inicio;