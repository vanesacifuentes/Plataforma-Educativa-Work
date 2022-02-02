import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography, Menu, MenuItem } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  tittle: {
    flexGrow: 1
  },
  header: {
    backgroundColor: 'transparent',
    color: '#089ca4',
  }
}));


function MenuBar_Instructor() {
  const classes = useStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (

    <div className={classes.root} >

      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" className={classes.titte}>
            Bienvenido ""Nombre usuario" usted ha ingresado como "instructor"
          </Typography>
          <IconButton>
            <AccountCircleIcon></AccountCircleIcon>
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuBar_Instructor;
