import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styles } from './styles';
import { Box } from '@mui/system';

export default function ItemDetail( { info } ) {
  return (
    <Card sx={styles.rootContainer}>
      <CardMedia
        component="img"
        height="500"
        image={info.imagen}
        alt="green iguana"
      />
      <CardContent sx={styles.boxContainer}>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {info.personaje}
          </Typography>
          <Typography>
            {info.casaDeHogwarts}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {info.apodo}
          </Typography>
          <Typography  sx={styles.liContainer}>
                Hijos: {info.hijos}
          </Typography>
          <Typography>
            Interpretado por: {info.interpretado_por}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

