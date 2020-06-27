import React, { Component,Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from "../Componentes/header";
import Menu from "../Componentes/menu";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Footer from "../Componentes/footer";

class AgregarCartaView extends Component {
    constructor(props){
        super(props);
        this.state={
                carta: [],
                edit:false,
                idCarta:0
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
                    const url='http://localhost:4000/api/cartas';
                    const data={nombre:this.frmNombreCarta.value,
                        ingredientes:this.frmIngredientes.value,
                        alergenos:this.frmAlergenos.value,
                        tiempoPrep:this.frmTiempoPrep.value,
                        foto:this.frmFoto.value,
                        precio:this.frmPrecio.value,
                        extra:this.frmExtra.value,
                        tipo:this.frmTipo.value,
                        };    
                        if(!this.state.edit){
                            fetch(url, { method: 'POST', 
                                body: JSON.stringify(data), 
                                headers:{ 'Content-Type': 'application/json' } })
                                .then(res => res.json())
                                .catch(error => console.error('Error:', error))
                                .then(response => console.log('Success:', response));  
                        }
                        else{
                            console.log("En el else");
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
        loadCarta(){
            fetch("http://localhost:4000/api/cartas")
            .then((response)=>response.json())
            .then((json)=>this.setState({restaurant:json}))
            .catch(error=>console.log(error));
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
                                Agregar Carta. 
                            </div>
                            <div class="card-body bg-light">
                                <h5 class="card-title">Datos del Platillo</h5>
                                <form autoComplete="off" onSubmit={this.addCarta} >
                                    <Grid container spacing={3}>
                                    <Grid item xs={6} sm={6}>
                                    <TextField
                                            className="cajaTamaño"
                                            label="Nombre"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmNombreCarta = e)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <TextField
                                                className="cajaTamaño"
                                                label="Ingredientes"
                                                type="text"
                                                margin="normal"
                                                variant="outlined"
                                                inputRef={e => (this.frmIngredientes = e)}
                                            />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                    <TextField
                                            className="cajaTamaño"
                                            label="Alergenos"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmAlergenos = e)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                    <TextField
                                            className="cajaTamaño"
                                            label="Tiempo de Preparación"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmTiempoPrep = e)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                    <TextField
                                            className="cajaTamaño"
                                            label="Foto"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmFoto = e)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                    <TextField
                                            className="cajaTamaño"
                                            label="Precio $"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmPrecio= e)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                    <TextField
                                            className="cajaTamaño"
                                            label="Extras o Guarnición"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmExtra = e)}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                    <TextField
                                            className="cajaTamaño"
                                            label="Tipo"
                                            type="text"
                                            margin="normal"
                                            variant="outlined"
                                            inputRef={e => (this.frmTipo = e)}
                                        />
                                    </Grid>
                                </Grid> 
                                <div className="cajaDerecha">
                                    <Fab
                                        color="primary"
                                        size="medium"
                                        //className="dish-form-icon"
                                        onClick={this.addCarta}
                                        >
                                        <AddIcon />
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

    export default AgregarCartaView;