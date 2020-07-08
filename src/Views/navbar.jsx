import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';




import ModificarIcon from '@material-ui/icons/Edit';

import AgregarIcon from '@material-ui/icons/PostAdd';
import { Divider } from '@material-ui/core';


const styles = theme => ({
    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon ,&:click': {
          color: theme.palette.common.white,
        },
      },
    },
    primary: {},
    icon: {},
    
  });

  

const navnar = (props) => {
    const { classes } = props;
    return (
        <Fragment>
        
            <Paper className="fondo">
                <h3>Restaurant's.</h3>
                <Divider/>
            <MenuList>
                <MenuItem>
                    <ListItemIcon/><ListItemText/>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <ListItemIcon className={classes.icon}>
                        <AgregarIcon />
                    </ListItemIcon>
                    <Link to="/AgregarRestaurant">
                        <ListItemText primary="Agregar" />
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <ModificarIcon />
                </ListItemIcon>
                <Link to="/ModificarRestaurant">
                    <ListItemText primary="Acciones" />
                </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon/><ListItemText/>
                </MenuItem>
            </MenuList>
            <Divider/>
            <h3>A la Carta.</h3>
            <MenuList>
                <Divider/>
                <MenuItem>
                    <ListItemIcon/><ListItemText/>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <ListItemIcon className={classes.icon}>
                        <AgregarIcon />
                    </ListItemIcon>
                    <Link to="/AgregarCarta">
                        <ListItemText primary="Agregar" />
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    
                <ListItemIcon className={classes.icon}>
                    <ModificarIcon />
                </ListItemIcon>
                <Link to="/AccionesCarta">
                    <ListItemText className="txt" primary="Acciones" />
                </Link>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon/><ListItemText/>
                </MenuItem>
            </MenuList>
            </Paper>
            
      
        
        </Fragment>
     );
     
}

navnar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
 
export default withStyles(styles)(navnar);
