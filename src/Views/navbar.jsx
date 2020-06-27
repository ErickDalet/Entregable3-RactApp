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


const styles = theme => ({
    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
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
        <div className="caja">
            
            <Paper>
                <h3>Restaurant's.</h3>
            </Paper>
            <Paper>
            <MenuList>
                <MenuItem className={classes.menuItem}>
                    <ListItemIcon className={classes.icon}>
                        <AgregarIcon />
                    </ListItemIcon>
                    <Link to="/AgregarRestaurant">
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Agregar" />
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <ModificarIcon />
                </ListItemIcon>
                <Link to="/ModificarRestaurant">
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Acciones" />
                </Link>
                </MenuItem>
                
            </MenuList>
        </Paper>
        </div>
        <div className="caja">    
            <Paper>
                <h3>A la Carta.</h3>
            </Paper>
            <Paper>
            <MenuList>
                <MenuItem className={classes.menuItem}>
                    <ListItemIcon className={classes.icon}>
                        <AgregarIcon />
                    </ListItemIcon>
                    <Link to="/AgregarCarta">
                        <ListItemText classes={{ primary: classes.primary }} inset primary="Agregar" />
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                <ListItemIcon className={classes.icon}>
                    <ModificarIcon />
                </ListItemIcon>
                <Link to="/AccionesCarta">
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Acciones" />
                </Link>
                </MenuItem>
                
            </MenuList>
            </Paper>
            
        </div>
        </Fragment>
     );
}

navnar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
 
export default withStyles(styles)(navnar);