import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material';

export default function ItemDetail( { data } ) {

  const [alertCart, setAlertCart] = useState(0);

  const alert = () => {
    setAlertCart(Swal.fire({
      icon: 'success',
      title: 'Se agrego correctamente al carrito',
    }))   
  }


  const [counter, setCounter] = useState(0);


    const up = () => {
        if(counter <= 5){
            setCounter(counter + 1)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No hay stock',
                text: 'No poseemos stock suficiente para agregar al carrito'
              })
        }

        
      };

    const down = () => {
        if(counter >= 1){
            setCounter(counter - 1)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No se pueden mostrar numeros negativos',
              })
        }
        
    }

    /**if (alertCart) {
      
    }*/

  return (
    <Card>
      <CardMedia
        component="img"
        height="500"
        image={data.thumbnail_url}
        alt="green iguana"
      />
      <CardContent>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {data.personaje}
          </Typography>
          <Typography>
            {data.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.apodo}
          </Typography>
          <Typography >
                Hijos: {data.hijos}
          </Typography>
          <Typography>
            Interpretado por: {data.interpretado_por}
          </Typography>
        </Box>
        <CardActions>
        <div className='containerButton'>
            <button className='buttonMenos' onClick={down}>-</button>
            <div>
                <p>
                    {counter}
                </p>
            </div>
            <button className='buttonMas' onClick={up}>+</button>
        </div>
        <Button size="small" onClick={alert}> Agregar al carrito </Button>
        <Link to="/Cart">
          <Button size="small" >Ir al Carrito</Button>
        </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
}

