import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
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
    borderRadius: '5%'
  }
}));

function Navbar() {

  const classes = useStyles();
  return (

    <div className={classes.root} >

      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton>
            <img src={require('../assets/img/logo png.png')} width='80px' height='80px' className={classes.imagen} />
          </IconButton>
          <Typography variant="h5" className={classes.titte}>
            Learning Now
          </Typography>
          <Button variant="text" color="default" className={classes.iniciosesion}>
            Inicio
          </Button>
          <Button variant="text" color="default" className={classes.iniciosesion}>
            ¿Qué ofrecemos?
          </Button>
          <Button variant="text" color="default" className={classes.iniciosesion}>
            Contáctenos
          </Button>
          <Button variant="contained" color="default" className={classes.iniciosesion}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar
