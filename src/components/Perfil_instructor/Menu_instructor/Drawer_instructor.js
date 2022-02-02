import React from 'react';
import { Drawer, 
  Button, 
  IconButton, 
  Toolbar, 
  Typography, 
  List, 
  Divider, 
  ListItem, 
  ListItemIcon,
  ListItemText } from '@material-ui/core'

import {InboxIcon, MailIcon} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  titte: {
    flexGrow: 1
  },
  header: {
    backgroundColor: '#089ca4',
    color: 'white',
  },
  imagen: {
    borderRadius: '10%'
  }, 
  iniciosesion:{
    borderRadius: '5%',
  },
  registro:{
    borderRadius: '5%',
  }
}));


function MenuBar_Instructor() {
  const classes = useStyles();
  return (

    <div className={classes.root} >

      <AppBar position="static" className={classes.header}>
        <Toolbar>

        <IconButton>
            <img src={require('../../../assets/img/logo png.png')} width='80px' height='80px' className={classes.imagen} />
          </IconButton>
          <Typography variant="h6" className={classes.titte}>
            Learning Now
          </Typography>
          
          <IconButton>
            <img src={require('../../../assets/img/logo png.png')} width='80px' height='80px' className={classes.imagen} />
          </IconButton>
          <Typography variant="h5" className={classes.titte}>
            Learning Now
          </Typography>

          <Drawer
            variant="permanent"
            anchor="left"
          >
            <Toolbar />
            <Divider />
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar_Instructor;
