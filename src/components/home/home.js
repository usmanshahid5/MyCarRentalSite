import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./style.css";

const Home=(props)=> {
  return (
    <>
    
    <Card sx={{  width: "160px", height:"210px", borderRadius:"15px"
    ,boxShadow: "rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt="Car Picture"
          sx={{borderRadius:"100%", bgcolor: 'background.paper',
            borderColor: 'text.primary',
            m: 1,
            border: 1,
            width: '8rem',
            height: '8rem',
          marginTop:"10px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div" className='label' style={{fontSize:"18px",fontWeight:"600", textAlign:"center"}}>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    </>
  )
}
export default Home;
