import React, { Component,Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from "../Componentes/header";
import Menu from "../Componentes/menu";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Footer from "../Componentes/footer";
import Generador from '../TypeScript/Generador';

/*
  var restaurantesList=[
                {
                    nombre: "El Pirata de Chaguas",
                    direccion: "Carretera Sahuayo Jiquilpan S/N",
                    localidad: "Sahuayo",
                    municipio:"Sahuayo",
                    estado:"Michoacan",
                    cp: "59000",
                    sucursal:"Unica",
                    razonSocial:"Servicio",
                    rfc:"EPC96584SDF",
                    email:"no",
                    facebook:"No",
                    whatsapp:"3531256965",
                    servicioDom:"Si"
                },
                {
                    nombre: "La Cabaña",
                    direccion: "Carretera Sahuayo Cojumatlan S/N",
                    localidad: "Sahuayo",
                    municipio:"Sahuayo",
                    estado:"Michoacan",
                    cp: "59000",
                    sucursal:"Unica",
                    razonSocial:"Servicio",
                    rfc:"EPC96584SDF",
                    email:"no",
                    facebook:"No",
                    whatsapp:"3531256965",
                    servicioDom:"Si"
                },
                {
                    nombre: "Puerto Don Pedro",
                    direccion: "Independencia 365",
                    localidad: "Sahuayo",
                    municipio:"Sahuayo",
                    estado:"Michoacan",
                    cp: "59000",
                    sucursal:"Unica",
                    razonSocial:"Servicio",
                    rfc:"EPC96584SDF",
                    email:"no",
                    facebook:"No",
                    whatsapp:"3531256965",
                    servicioDom:"Si"
                }
  ];*/
class AgregarResView extends Component {
    constructor(props){
        super(props);
        this.state={
                restaurant: [],
                edit:false,
                idRestaurant:0
        }
    }
        state ={

        }
        frmNombreRestaurant = React.createRef();
        frmDireccion = React.createRef();
        frmLocalidad = React.createRef();
        frmMunicipio = React.createRef();
        frmEstado = React.createRef();
        frmCp = React.createRef();
        frmRazonSocial = React.createRef();
        frmRFC = React.createRef();
        frmEmail = React.createRef();
        frmFacebook = React.createRef();
        frmWhatsapp = React.createRef();
        frmServicioDom = React.createRef();
        


        onImageChange = (event) => {
            var imagen =0 ;
            if (event.target.files && event.target.files[0]) {
                imagen=URL.createObjectURL(event.target.files[0]); 
                console.log(imagen); 
              this.setState({
                image: URL.createObjectURL(event.target.files[0])
                   
              }
              );
            }
        
           }

    /*   
    //}
    addRestaurant = event =>{
        

        event.preventDefault();
        var newRestaurant = this.state;
        
        
       

        if(!this.frmNombreRestaurant.value === "")
            {
                
                    if(!this.state.edit){
                        console.log("En el If");
                        newRestaurant.restaurant.nombre.push(this.frmNombreRestaurant.value);
                        newRestaurant.restaurant.direccion.push(this.frmDireccion.value)
                        newRestaurant.restaurant.sort();
                    }
                    else{
                        console.log("El nombre Existe");
                        
                    }
                    this.frmNombreRestaurant.value="";
                    this.setState({newRestaurant});
            }
        else{
            alert("El Nombre No Puede estar Vacio");
            this.frmNombreRestaurant.focus();
        }
       
    }*/

    addRestaurant = event =>{
        
        
        event.preventDefault();
        //var newRestaurant = this.state;
        
        
       

        if(!this.frmNombreRestaurant.value =="")
            {
                //const url='http://localhost:4000/api/restaurants';
                const url = 'https://lecarte-api1.us-south.cf.appdomain.cloud/api/restaurants';
                const data={nombre:this.frmNombreRestaurant.value,
                    direccion:this.frmDireccion.value,
                    localidad:this.frmLocalidad.value,
                    municipio:this.frmMunicipio.value,
                    estado:this.frmEstado.value,
                    cp:this.frmCp.value,
                    rasonSocial:this.frmRazonSocial.value,
                    rfc:this.frmRFC.value,
                    email:this.frmEmail.value,
                    facebook:this.frmFacebook.value,
                    whastapp:this.frmWhatsapp.value,
                    servicioDom:this.frmServicioDom.value};

                
                
                    if(!this.state.edit){
                        console.log("En el If");
                        fetch(url, { method: 'POST', 
                            body: JSON.stringify(data), 
                            headers:{ 'Content-Type': 'application/json' } })
                            .then(res => res.json())
                            .catch(error => console.error('Error:', error))
                            .then(response => console.log('Success:', response));  

                        /*
                        newRestaurant.restaurant.nombre.push(this.frmNombreRestaurant.value);
                        newRestaurant.restaurant.direccion.push(this.frmDireccion.value);
                        newRestaurant.restaurant.localidad.push(this.frmLocalidad.value);
                        newRestaurant.restaurant.municipio.push(this.frmMunicipio.value);
                        newRestaurant.restaurant.estado.push(this.frmEstado.value);
                        newRestaurant.restaurant.cp.push(this.frmCp.value);
                        newRestaurant.restaurant.razonSocial.push(this.frmRazonSocial.value);
                        newRestaurant.restaurant.rfc.push(this.frmRFC.value);
                        newRestaurant.restaurant.email.push(this.frmEmail.value);
                        newRestaurant.restaurant.facebook.push(this.frmFacebook.value);
                        newRestaurant.restaurant.whatsapp.push(this.frmWhatsapp.value);
                        newRestaurant.restaurant.servicioDom.push(this.frmServicioDom.value);

                        newRestaurant.restaurant.sort();*/
                    }
                    else{
                        console.log("En el else");
                        /*newRestaurant.restaurant[this.state.id].nombre=this.frmNombreRestaurant.value;
                        newRestaurant.restaurant[this.state.id].direccion=this.frmDireccion.value;
                        newRestaurant.restaurant[this.state.id].localidad=this.frmLocalidad.value;
                        newRestaurant.restaurant[this.state.id].municipio=this.frmMunicipio.value;
                        newRestaurant.restaurant[this.state.id].estado=this.frmEstado.value;
                        newRestaurant.restaurant[this.state.id].cp=this.frmCp.value;
                        newRestaurant.restaurant[this.state.id].razonSocial=this.frmRazonSocial.value;
                        newRestaurant.restaurant[this.state.id].rfc=this.frmRFC.value;
                        newRestaurant.restaurant[this.state.id].email=this.frmEmail.value;
                        newRestaurant.restaurant[this.state.id].facebook=this.frmFacebook.value;
                        newRestaurant.restaurant[this.state.id].whatsapp=this.frmWhatsapp.value;
                        newRestaurant.restaurant[this.state.id].servicioDom=this.frmServicioDom.value;
                        newRestaurant.edit = false;
                        newRestaurant.id = 0;*/
                    }
                    this.limpiarControl();
                    this.focoControl();

                    
                    
                    //this.setState({newRestaurant});
                    this.loadRestaurant();
            }
        else{
            alert("El Nombre No Puede estar Vacio");
            this.frmNombreRestaurant.focus();
        }

       
    }

    focoControl(){
        this.frmDireccion.focus();
        this.frmLocalidad.focus();
        this.frmMunicipio.focus();
        this.frmEstado.focus();
        this.frmCp.focus();
        this.frmRazonSocial.focus();
        this.frmRFC.focus();
        this.frmEmail.focus();
        this.frmFacebook.focus();
        this.frmWhatsapp.focus();
        this.frmServicioDom.focus();

        this.frmNombreRestaurant.focus();
    }
    limpiarControl(){
        this.frmNombreRestaurant.value="";
        this.frmDireccion.value=""
        this.frmLocalidad.value="";
        this.frmMunicipio.value="";
        this.frmEstado.value="";
        this.frmCp.value="";
        this.frmRazonSocial.value="";
        this.frmRFC.value="";
        this.frmEmail.value="";
        this.frmFacebook.value="";
        this.frmWhatsapp.value="";
        this.frmServicioDom.value="";
    }
    loadRestaurant(){
        //fetch("http://localhost:4000/api/restaurants")
        fetch('https://lecarte-api1.us-south.cf.appdomain.cloud/api/restaurants')
        .then((response)=>response.json())
        .then((json)=>this.setState({restaurant:json}))
        .catch(error=>console.log(error));
    }

    componentDidMount(){
        this.loadRestaurant();
    }

    render(){
    return ( 
        
        <Fragment>
      
        <Header/>
        <div className="row">
            <div className="col-md-2">
                <Menu/>
            </div>
            <div className="col-md-9 ">
                <div class="card center-block">
                    <div class="card-header bg-info text-white">
                        Agregar Restaurant. 
                    </div>
                    <div class="card-body fondo">
                        <h5 class="card-title">Datos del Restaurant</h5>
                        <form autoComplete="off" onSubmit={this.addRestaurant} >
                            <Grid container spacing={3}>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="Nombre"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmNombreRestaurant = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                        className="cajaTamaño"
                                        label="Dirección"
                                        type="text"
                                        margin="normal"
                                        variant="outlined"
                                        inputRef={e => (this.frmDireccion = e)}
                                    />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="Localidad"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmLocalidad = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="Municipio"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmMunicipio = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="Estado"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmEstado = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="Código Postal"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmCp = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="Razon Social"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmRazonSocial = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="RFC"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmRFC = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="e-mail"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmEmail = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="Facebook"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmFacebook = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="Whatsapp"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmWhatsapp = e)}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                            <TextField
                                    className="cajaTamaño"
                                    label="Servicio a Domicilio"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmServicioDom = e)}
                                />
                            </Grid>
                            <Grid>
                            <div className="container">
                                            <div className="row">
                                                    <div id="div_file">
                                                    <p id="texto_file">Sube Tu Logotipo: </p>
                                                    <input 
                                                        type="file" 
                                                        id="imgPicker" 
                                                        onChange={this.onImageChange}
                                                        className="fileType"
                                                        accept="image/*"
                                                        
                                                        
                                                        /></div>
                                                        <div>
                                                            <img id="target" src={this.state.image} className="imgFile" alt=""/>
                                                        </div>    
                                            </div>
                                        </div> 
                            </Grid>
                            <Grid>
                                <Generador></Generador>
                            </Grid>
                        </Grid> 
                        <div className="cajaDerecha">
                            <Fab
                                color="primary"
                                size="medium"
                                //className="dish-form-icon"
                                onClick={this.addRestaurant}
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
export default AgregarResView;