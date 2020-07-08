/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import React, { Fragment, Component } from 'react';
import '../Styles/App.css';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { yellow } from '@material-ui/core/colors';

class headerView extends Component {
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }
    fecha(){
        var dian = this.state.date.getDay();
        var dia;
        var mesn = this.state.date.getMonth();
        var mes;
        var año= this.state.date.getFullYear();
        switch(dian){
                case 1:
                   dia = 'Lunes '+dian + ' de ';
                   break;
                case 2:
                   dia = 'Martes '+dian + ' de ';
                   break;
                case 3:
                   dia = 'Miercoles '+dian + ' de ';
                   break;
                case 4:
                   dia = 'Jueves '+dian + ' de ';
                   break;
                case 5:
                   dia = 'Viernes '+dian + ' de ';
                   break;
                case 6:
                   dia = 'Sabado '+dian + ' de ';
                   break;
                case 7:
                   dia = 'Domingo '+dian + ' de ';
                   break;       
        }
        switch(mesn+=1){
            case 1:
                mes = 'Enero de ';
                break;
            case 2:
                mes = 'Febrero de ';
                break;
            case 3:
                mes = 'Marzo de ';
                break;
            case 4:
                mes = 'Abril de ';
                break;
            case 5:
                mes = 'Mayo de ';
                break;
            case 6:
                mes = 'Junio de ';
                break;
            case 7:
                mes = 'Julio de ';
                break;
            case 8:
                mes = 'Agosto de ';
                break;
            case 9:
                mes = 'Septiembre de ';
                break;
            case 10:
                mes = 'Octubre de ';
                break;
            case 11:
                mes = 'Noviembre de ';
                break;
            case 12:
                mes = 'Diciembre de ';
                break;
        }

        var fecha = dia+mes+año;
        return(fecha)
    }
    

   render(){
    return (  
        <Fragment>

                <div  style={{paddingLeft:['15px']}}>
                    
                    <HowToRegIcon style={{color:yellow[500]}} fontSize="large"/><span style={{fontSize:['18px']}}>Ingreso como: .</span>
                    
                </div>
        
            <div className="cajaheader" style={{fontSize:['25px']}}>
                {this.fecha()}
            </div>


            
        </Fragment>
    );
}
}  
export default headerView;