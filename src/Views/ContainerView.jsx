import React, { Fragment } from 'react';
import imagen from '../Assets/img/inicio.jpg'

const ContinerView = () => {
    return (  
        <Fragment>
        <div className="conainer" style={{paddingTop:['100px']}}>
            <div className="row">
                <div className="col">
                    <img src={imagen} alt=""/>
                </div>
                <div className="col">
                    <div className="jumbotron">
                        <h1 class="display-4">LeCarte.</h1>
                        <p class="lead">Te da la bienvenida al panel de control donde podrás incluira cada uno de los platillos que maneja tu restaurant,
                        ademas de brindarte la posibilidad de personalizar el còdigo QR que lanzará tu carta con el logotipo de tu restaurant, tambien te permite
                        tipificar tus platillos en diferentes categorias (Entradas, Platos fuertes, Bebidas y Postres)</p>
                        <hr class="my-4"></hr>
                        <p>LeCarte te brinda el mejor soporte 24/7 para tu seguridad y que así brindes un servicio excelente y de banguardia.</p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div style={{width:['100%'],backgroundColor:['#00000088'],height:['10%'],paddingTop:['100px']}}>

        </div>
        </Fragment>
    );
}
 
export default ContinerView;