import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Drawer from '@mui/material/Drawer';


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
          <Typography variant="h5" className={classes.titte}>
            Learning Now
          </Typography>

          <Drawer
        sx={{
          
          flexShrink: 0,
          '& .MuiDrawer-paper': {
           
            boxSizing: 'border-box',
          },
        }}
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
