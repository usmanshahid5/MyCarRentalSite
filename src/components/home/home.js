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
    
    <Card sx={{  width: 3/4, height:230, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt="Car Picture"
          height="160"
          style={{paddingTop:"20px",borderRadius:"100%", padding:"10px", width:"80%",
            boxShadow: "rgb(218,165,32, .8) 2px 5px 5px 2px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div" className='label' style={{fontWeight:"600", textAlign:"center"}}>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button> */}
      {/* </CardActions> */}
    </Card>
    </>
  )
}
export default Home;
