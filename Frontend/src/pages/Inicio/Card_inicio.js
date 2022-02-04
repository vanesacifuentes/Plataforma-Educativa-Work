import React from 'react';
import { Card, Box, Button, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIosSharp } from '@material-ui/icons'


function Card_inicio() {
  return (
    <div>
      <Card title="image=" sx={{ display: 'flex' }}>
        <Box>
          <CardContent>
            <Typography component='div' variant='h5'>
              Convierte lo que sabes en una oportunidad y llega a millones de personas de todo el mundo.
            </Typography>

            <Typography component='div' variant='subtitle1'>
              Da el siguiente paso hacia tus metas personales y profesionales con nosotros
            </Typography>

          </CardContent>

          <Box>
            <CardMedia>
              <img src={require('../../assets/img/img_inicio1.jpg')} width='35%' height='35%' />
              <img src={require('../../assets/img/img_inicio3.jpg')} width='35%' height='35%' />
            </CardMedia>
          </Box>
        </Box>

        <Box>
          <IconButton>
            <ArrowBackIos></ArrowBackIos>
          </IconButton>

          <IconButton>
            <ArrowForwardIosSharp></ArrowForwardIosSharp>
          </IconButton>

          <Button variant="contained" color="default">
            Registrarme
          </Button>
        </Box>

      </Card>
    </div>
  );
}

export default Card_inicio;
