import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Card_inicio from './Card_inicio';

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1
    }
}));


function Layout() {
    const classes= useStyles();    
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <Navbar/>
            </Grid>

            <Grid item xs={12}>
                <Card_inicio/>
            </Grid>
        </Grid>
    </div>
        
    );
}

export default Layout;