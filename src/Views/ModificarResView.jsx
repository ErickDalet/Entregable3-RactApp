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
  /*
  const restaurantesList=[
    {
        nombre: "El Pirata de Chaguas",
        direccion: "Carretera Sahuayo Jiquilpan S/N",
        localidad: "Sahuayo",
        municipio:"Sahuayo",
        estado:"Michoacan",
        cp: 59000,
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
class ModificarResView extends Component {
    constructor(props){
        super(props);
        this.state={
                
                edit:false,
                idRestaurant:0,
                restaurant: []
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

   
    addRestaurant = event =>{
        
        
        event.preventDefault();
        //var newRestaurant = this.state;
        
        
       

        if(!this.frmNombreRestaurant.value =="")
            {

                    if(!this.state.edit){
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
                    
                        Axios.post(url,data)
                        .then(res=>console.log(res.data));
                        
                        /*fetch(url, { method: 'POST', 
                            body: JSON.stringify(data), 
                            headers:{ 'Content-Type': 'application/json' } })
                            .then(res => res.json())
                            .catch(error => console.error('Error:', error))
                            .then(response => console.log('Success:', response));  

                        
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
                        
                        //const url='http://localhost:4000/api/restaurants/'+this.state.id;
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

                            Axios.put(url,data)
                            .then(res=>console.log(res.data));
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

    viewRestaurant = (id) => event=> {
        event.preventDefault();
        this.limpiarControl();
        this.focoControl();
        //Revisar funcionamiento
        this.frmNombreRestaurant.value=this.state.restaurant[id].nombre;
        this.frmDireccion.value=this.state.restaurant[id].direccion;
        this.frmLocalidad.value=this.state.restaurant[id].localidad;
        this.frmMunicipio.value=this.state.restaurant[id].municipio;
        this.frmEstado.value=this.state.restaurant[id].estado;
        this.frmCp.value=this.state.restaurant[id].cp;
        this.frmRazonSocial.value=this.state.restaurant[id].razonSocial;
        this.frmRFC.value=this.state.restaurant[id].rfc;
        this.frmEmail.value=this.state.restaurant[id].email;
        this.frmFacebook.value=this.state.restaurant[id].facebook;
        this.frmWhatsapp.value=this.state.restaurant[id].whatsapp;
        this.frmServicioDom.value=this.state.restaurant[id].servicioDom;
        
    }

    editRestaurant =(id,row)=>event=>{
       event.preventDefault();
        var newState = this.state;
        newState.edit = true;
        newState.id = id;
        this.setState(newState);
       
        this.limpiarControl();
        this.frmNombreRestaurant.value=this.state.restaurant[row].nombre;
        this.frmDireccion.value=this.state.restaurant[row].direccion;
        this.frmLocalidad.value=this.state.restaurant[row].localidad;
        this.frmMunicipio.value=this.state.restaurant[row].municipio;
        this.frmEstado.value=this.state.restaurant[row].estado;
        this.frmCp.value=this.state.restaurant[row].cp;
        this.frmRazonSocial.value=this.state.restaurant[row].razonSocial;
        this.frmRFC.value=this.state.restaurant[row].rfc;
        this.frmEmail.value=this.state.restaurant[row].email;
        this.frmFacebook.value=this.state.restaurant[row].facebook;
        this.frmWhatsapp.value=this.state.restaurant[row].whatsapp;
        this.frmServicioDom.value=this.state.restaurant[row].servicioDom;
        
        this.focoControl();
        
    }

    deleteRestaurant = (id)=>event=>{
        event.preventDefault();
        console.log(id);
        //const url=`http://localhost:4000/api/restaurants/${id}`;
        const url = `https://lecarte-api1.us-south.cf.appdomain.cloud/api/restaurants/${id}`;
        console.log(url);
        /*fetch(url, {
            method: 'DELETE'
          }).then(response =>
            response.json().then(json => {
              return json;
            })
          );*/

          //axios
        Axios.delete(url)
        .then(res=>console.log(res.data));

         
        this.loadRestaurant();
        window.location.reload();
        /*this.frmNombreRestaurant.value="";
        this.frmNombreRestaurant.focus();

        delete this.state.restaurant[id];

        var newRestaurant = this.state.restaurant;
        this.setState({restaurant:newRestaurant});*/
        
    }

    loadRestaurant(){
        /*
        fetch("http://localhost:4000/api/restaurants")
        .then((response)=>response.json())
        .then((json)=>this.setState({restaurant:json}))
        .catch(error=>console.log(error));*/
        //Axios.get('http://localhost:4000/api/restaurants')
        Axios.get('https://lecarte-api1.us-south.cf.appdomain.cloud/api/restaurants')
        .then(res=>{
            this.setState({restaurant: res.data});
            console.log(res.data);
        })
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
            <div className="col-md-9">
                <div class="card">
                    <div class="card-header bg-info text-white">
                        Acciones 
                    </div>
                    <div class="card-body bg-light">
                        <form autoComplete="off" onSubmit={this.addRestaurant} >
                        <div class="cajaAcciones1">    
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="Nombre"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmNombreRestaurant = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                            
                                <TextField
                                        size="small"
                                        className="cajaTamaño"
                                        label="Dirección"
                                        type="text"
                                        margin="normal"
                                        variant="outlined"
                                        inputRef={e => (this.frmDireccion = e)}
                                        InputLabelProps={{shrink:true}}
                                    />
                            
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="Localidad"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmLocalidad = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                           
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="Municipio"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmMunicipio = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                           
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="Estado"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmEstado = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                            
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="Código Postal"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmCp = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                            
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="Razon Social"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmRazonSocial = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                            
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="RFC"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmRFC = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                            
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="e-mail"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmEmail = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                            
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="Facebook"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmFacebook = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                            
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="Whatsapp"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmWhatsapp = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                           
                            <TextField
                                    size="small"
                                    className="cajaTamaño"
                                    label="Servicio a Domicilio"
                                    type="text"
                                    margin="normal"
                                    variant="outlined"
                                    inputRef={e => (this.frmServicioDom = e)}
                                    InputLabelProps={{shrink:true}}
                                />
                        </div>
                        <div className="cajaAcciones2">
                        <List
                            component="nav"
                            subheader = {<ListSubheader component="div">Consulta</ListSubheader>}
                        >
                                
                                {this.state.restaurant.map((rest, index) => (
                                <ListItem button key={index}>
                                    <ListItemIcon onClick={this.viewRestaurant(index)}>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <ListItemText className="lambda" inset primary={rest.nombre} />
                                    <ListItemIcon onClick={this.editRestaurant(rest.id,index) }>
                                        <EditIcon />
                                    </ListItemIcon>
                                    <ListItemIcon onClick={this.deleteRestaurant(rest.id)}>
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
                                onClick={this.addRestaurant}
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
export default ModificarResView;