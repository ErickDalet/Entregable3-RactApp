import React, { Component,Fragment } from 'react';
import Header from "../Componentes/header";
import Menu from "../Componentes/menu";
import { Fab, TextField } from "@material-ui/core";
import Axios from 'axios';
import Footer from "../Componentes/footer";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import CheckIcon from '@material-ui/icons/Check';
import '../Styles/App.css'

import {
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";

  class AccionesCartaView extends Component {
    constructor(props){
        super(props);
        this.state={
                
                edit:false,
                idCarta:0,
                carta: []
        }
    }
        state ={

        }

        frmNombreCarta= React.createRef();
        frmIngredientes = React.createRef();
        frmAlergenos = React.createRef();
        frmTiempoPrep = React.createRef();
        frmFoto = React.createRef();
        frmPrecio = React.createRef();
        frmExtra = React.createRef();
        frmTipo = React.createRef();

        addCarta = event =>{
            event.preventDefault();
            if(!this.frmNombreCarta.value =="")
                {
    
                        if(!this.state.edit){
                            //const url='http://localhost:4000/api/cartas';
                            const url='https://lecarte-api1.us-south.cf.appdomain.cloud/api/cartas';
                            const data={nombre:this.frmNombreCarta.value,
                                ingredientes:this.frmIngredientes.value,
                                alergenos:this.frmAlergenos.value,
                                tiempoPrep:this.frmTiempoPrep.value,
                                foto:this.frmFoto.value,
                                precio:this.frmPrecio.value,
                                extra:this.frmExtra.value,
                                tipo:this.frmTipo.value,
                                };   
                        
                            Axios.post(url,data)
                            .then(res=>console.log(res.data));
                        }
                        else{
                            //const url='http://localhost:4000/api/cartas/'+this.state.id;
                            const url='https://lecarte-api1.us-south.cf.appdomain.cloud/api/cartas/'+this.state.id;
                            const data={nombre:this.frmNombreCarta.value,
                                ingredientes:this.frmIngredientes.value,
                                alergenos:this.frmAlergenos.value,
                                tiempoPrep:this.frmTiempoPrep.value,
                                foto:this.frmFoto.value,
                                precio:this.frmPrecio.value,
                                extra:this.frmExtra.value,
                                tipo:this.frmTipo.value,
                                };   
    
                                Axios.put(url,data)
                                .then(res=>console.log(res.data));
                        }
                        this.limpiarControl();
                        this.focoControl();
                        this.loadCarta();
                }
            else{
                alert("El Nombre No Puede estar Vacio");
                this.frmNombreCarta.focus();
            }
        }


        focoControl(){
            this.frmNombreCarta.focus();
            this.frmIngredientes.focus();
            this.frmAlergenos.focus();
            this.frmTiempoPrep.focus();
            this.frmFoto.focus();
            this.frmPrecio.focus();
            this.frmExtra.focus();
            this.frmTipo.focus();
        }
        limpiarControl(){
            this.frmNombreCarta.value="";
            this.frmIngredientes.value="";
            this.frmAlergenos.value="";
            this.frmTiempoPrep.value="";
            this.frmFoto.value="";
            this.frmPrecio.value="";
            this.frmExtra.value="";
            this.frmTipo.value="";
        }

        viewCarta = (id) => event=> {
            event.preventDefault();
            this.limpiarControl();
            this.focoControl();
            debugger;
            this.frmNombreCarta.value=this.state.carta[id].nombre;
            this.frmIngredientes.value=this.state.carta[id].ingredientes;
            this.frmAlergenos.value=this.state.carta[id].alergenos;
            this.frmTiempoPrep.value=this.state.carta[id].tiempoPrep;
            this.frmFoto.value=this.state.carta[id].foto;
            this.frmPrecio.value=this.state.carta[id].precio;
            this.frmExtra.value=this.state.carta[id].extra;
            this.frmTipo.value=this.state.carta[id].tipo;
        }

        editCarta =(id,row)=>event=>{
            event.preventDefault();
             var newState = this.state;
             newState.edit = true;
             newState.id = id;
             this.setState(newState);
            
             this.limpiarControl();
             this.frmNombreCarta.value=this.state.carta[row].nombre;
            this.frmIngredientes.value=this.state.carta[row].ingredientes;
            this.frmAlergenos.value=this.state.carta[row].alergenos;
            this.frmTiempoPrep.value=this.state.carta[row].tiempoPrep;
            this.frmFoto.value=this.state.carta[row].foto;
            this.frmPrecio.value=this.state.carta[row].precio;
            this.frmExtra.value=this.state.carta[row].extra;
            this.frmTipo.value=this.state.carta[row].tipo;
             
             this.focoControl();
             
         }

         deleteCarta = (id)=>event=>{
            event.preventDefault();
            console.log(id);
            //const url=`http://localhost:4000/api/cartas/${id}`;
            const url=`https://lecarte-api1.us-south.cf.appdomain.cloud/api/cartas/${id}`;
            console.log(url);

            Axios.delete(url)
            .then(res=>console.log(res.data));
     
            this.loadCarta();
        }

        loadCarta(){
            //Axios.get('http://localhost:4000/api/cartas')
            Axios.get('https://lecarte-api1.us-south.cf.appdomain.cloud/api/cartas')
            .then(res=>{
                this.setState({carta: res.data});
                console.log(res.data);
            })
        }

        componentDidMount(){
            this.loadCarta();
        }

        render(){
            return ( 
                
                <Fragment>
              
                <Header/>
                <div className="row">
                    <div className="col-md-2">
                        <Menu/>
                    </div>
                    <div className="col-md-9">
                        <div class="card">
                            <div class="card-header bg-info text-white">
                                Acciones a la Carta
                            </div>
                            <div class="card-body bg-light">
                                <form autoComplete="off" onSubmit={this.addCarta} >
                                <div class="cajaAcciones1">    
                                    <TextField
                                            size="small"
                                            className="cajaTamaño"
                                            label="Nombre"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmNombreCarta = e)}
                                            InputLabelProps={{shrink:true}}
                                        />
                                    
                                        <TextField
                                                size="small"
                                                className="cajaTamaño"
                                                label="Ingredientes"
                                                type="text"
                                                margin="normal"
                                                variant="outlined"
                                                inputRef={e => (this.frmIngredientes = e)}
                                                InputLabelProps={{shrink:true}}
                                            />
                                    
                                    <TextField
                                            size="small"
                                            className="cajaTamaño"
                                            label="Alergenos"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmAlergenos = e)}
                                            InputLabelProps={{shrink:true}}
                                        />
                                   
                                    <TextField
                                            size="small"
                                            className="cajaTamaño"
                                            label="Tiempo de Preparación"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmTiempoPrep = e)}
                                            InputLabelProps={{shrink:true}}
                                        />
                                   
                                    <TextField
                                            size="small"
                                            className="cajaTamaño"
                                            label="Foto"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmFoto = e)}
                                            InputLabelProps={{shrink:true}}
                                        />
                                    
                                    <TextField
                                            size="small"
                                            className="cajaTamaño"
                                            label="Precio $"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmPrecio = e)}
                                            InputLabelProps={{shrink:true}}
                                        />
                                    
                                    <TextField
                                            size="small"
                                            className="cajaTamaño"
                                            label="Extras o Guarnición"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmExtra = e)}
                                            InputLabelProps={{shrink:true}}
                                        />
                                    
                                    <TextField
                                            size="small"
                                            className="cajaTamaño"
                                            label="Tipo"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmTipo = e)}
                                            InputLabelProps={{shrink:true}}
                                        />
                                    
                                    
                                </div>
                                <div className="cajaAcciones2">
                                <List
                                    component="nav"
                                    subheader = {<ListSubheader component="div">Listado de Platillos</ListSubheader>}
                                >
                                        {console.log(this.state.carta+"este si es")}
                                        {this.state.carta.map((rest, index) => (
                                        <ListItem button key={index}>
                                            <ListItemIcon onClick={this.viewCarta(index)}>
                                                <PersonIcon />
                                            </ListItemIcon>
                                            <ListItemText className="lambda" inset primary={rest.nombre} />
                                            <ListItemIcon onClick={this.editCarta(rest.id,index) }>
                                                <EditIcon />
                                            </ListItemIcon>
                                            <ListItemIcon onClick={this.deleteCarta(rest.id)}>
                                                <DeleteIcon />
                                            </ListItemIcon>
                                        </ListItem>
                                    ))}  
                                
                                </List>
                                </div>
                                <div className="cajaDerecha">
                                    <Fab
                                        color="primary"
                                        size="medium"
                                        //className="dish-form-icon"
                                        onClick={this.addCarta}
                                        >
                                        <CheckIcon />
                                    </Fab>
                                </div>    
                            </form>
                            </div>
                        </div>   
                    </div>  
                                
                </div>
                <Footer/>
            </Fragment>
             );
         }
        } 
        export default AccionesCartaView;