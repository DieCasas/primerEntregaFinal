import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {styles}  from './stylesItem'

export default function MediaCard({ info }) {
  return (
    <Card sx={ {maxWidth: 359}}>
      <CardMedia
        component="img"
        height="220"
        image= {info.thumbnail_url}
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {info.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.description}
        </Typography>
      </CardContent>
        <CardActions sx={styles.buttonContainer}>
          <Button sx={styles.button} size="small">Mas Info</Button>
        </CardActions>
    </Card>
  );
}
