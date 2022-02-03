import React from 'react';
import { Drawer,  
  IconButton, 
  Toolbar, 
  Typography, 
  List, 
  Divider, 
  ListItem, 
  ListItemIcon,
  ListItemText } from '@material-ui/core'

import {Inbox, Mail} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  titte: {
    flexGrow: 1
  },
  drawer: {
    backgroundColor: 'black',
    color: 'white',
  }
}));


function Drawer_instructor() {
  const classes = useStyles();
  return (

    <div className={classes.root} >
        
          <Drawer
            variant="permanent"
            anchor="left"
            className={classes.drawer}
          >
            <Toolbar />
                   
          <IconButton>
            <img src={require('../../../assets/img/logo png.png')} width='80px' height='80px' className={classes.imagen} />
          </IconButton>
          <Typography variant="h5" className={classes.titte}>
            Learning Now
          </Typography>

            <Divider />
            <List>
              {['Inicio', 'Gestión cursos', 'Gestión usuarios'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>

    </div>
  );
}

export default Drawer_instructor;
