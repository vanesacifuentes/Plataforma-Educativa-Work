import React from 'react';
import { Box, Container, Grid, Icon, IconButton, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles'
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1
    },
    titte: {
      flexGrow: 1
    },
    box: {
      backgroundColor: '#84CED2',
      color: 'white',
    }
  }));
  

function Footer() {
    const classes = useStyles();

    return (

        <div>
            <Box className={classes.box}>
                <Container>
                    <Grid>
                        <Typography variant="h5" >
                            Síguenos en nuestras redes sociales
                        </Typography>
                        <Icon>
                            <Twitter></Twitter>

                        </Icon>

                        <Icon>
                            <Facebook></Facebook>
                        </Icon>

                    </Grid>
                </Container>
            </Box>

        </div>
    );
}

export default Footer;
