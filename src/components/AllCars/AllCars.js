import { Box, Grid }                           from '@mui/material';
import CardContent                             from '@mui/material/CardContent';
import Typography                              from '@mui/material/Typography';
import React, { Component, useState }          from "react";
import Card                                    from '@mui/material/Card';
import AllCarPics from "./pic"
import CardMedia                               from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Carousel from "nuka-carousel"
import Feedback                                from '../../feedback/Feedback';
import data                                    from "../carCatalog/data";
import CarHosts                                from '../CarHost/CarHosts';
import CitiesCatalog                           from '../citiesCatalog/CitiesCatalog';
import DatePicker                              from '../dataPicker/DatePicker';
import FeauturesCatalog                        from '../FeaturesCatalog/FeauturesCatalog';
import Footer                         from '../Footer/Footer';
import Home                           from "../home/home";
import { NavLink, Link }              from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slicktheme2.css";
import InputLabel                     from '@mui/material/InputLabel';
import MenuItem                       from '@mui/material/MenuItem';
import FormControl                    from '@mui/material/FormControl';
import Select                         from '@mui/material/Select';
import ResponsiveAppBar               from '../navbar/navbar';
import "./AllCars.css"
import img1 from "./1.jpg"
import img2 from "./2.jpg"

const AllCars=()=> {

    const [make, setMake] = useState('All');
  const [year, setyear] = useState('All');
  const [city, setCity] = useState('All');

    const handleChange = (event) => {
      setMake(event.target.value);
    };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };



  const handleChangeYear = (event) => {
    setyear(event.target.value);
  };
    return (
      <>
      <div>
        <ResponsiveAppBar/>
        <div className="datePicker2">
          <div className="dateSetting">
            <DatePicker style={ { marginLeft: "25%" } }/>
          </div>
        </div>


        <div className="head7">
          <h2 className="head4">Don’t dream it just hire it</h2>
          <h1 className="head5">We make your drive nice and easy</h1>
          <h5 className="head6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h5>
        </div>

{/*Make*/}
        <div className="head8">
        <div className="myAllCarMain">
          <div className="myAllCarMainLeft">
        <Box  sx={{ width:"100%", margin:"10px"}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Make</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={make}
              label="Make"
              onChange={handleChange}
            >
              <MenuItem value={"Lamborghini"}>Lamborghini</MenuItem>
              <MenuItem value={"Range Rover"}>Range Rover</MenuItem>
              <MenuItem value={"Poarche"}>Poarche</MenuItem>
              <MenuItem value={"Audi"}>Audi</MenuItem>
              <MenuItem value={"BMW"}>BMW</MenuItem>
              <MenuItem value={"All"}>All</MenuItem>
            </Select>
          </FormControl>
        </Box>
          </div>
{/*Year*/}
          <div className="myAllCarMainCenter">
        <Box sx={{ width:"100%"}} className="myAllCarMainCenter">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="year"
              onChange={handleChangeYear}
            >
              <MenuItem value={"2016"}>2016</MenuItem>
              <MenuItem value={"2017"}>2017</MenuItem>
              <MenuItem value={"2018"}>2018</MenuItem>
              <MenuItem value={"2019"}>2019</MenuItem>
              <MenuItem value={"2020"}>2020</MenuItem>
              <MenuItem value={"2021"}>2021</MenuItem>
            </Select>
          </FormControl>
        </Box>
          </div>

        {/*//City*/}
        <div className="myAllCarMainRight">
        <Box sx={{ width:"100%", margin:"10px" }} >
          <FormControl fullWidth style={{width:"100%"}}>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="City"
              onChange={handleChangeCity}
            >
              <MenuItem value={"Dubai"}>Dubai</MenuItem>
              <MenuItem value={"Newyork"}>Newyork</MenuItem>
              <MenuItem value={"Boston"}>Boston</MenuItem>
              <MenuItem value={"Phoenix"}>Phoenix</MenuItem>
              <MenuItem value={"Miami"}>Miami</MenuItem>
              <MenuItem value={"Washigton"}>Washington</MenuItem>
            </Select>
          </FormControl>
        </Box>
        </div>
        </div>
        </div>

        <Box className='boxh' data-aos="fade-up">
          <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 2, sm: 12, md: 12 } }>
            {make == "All" && year=="All" && city=="All"?data.map(val=>(
                <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                  <NavLink
                    to={ `/carDescription/${ val.id }` }

                  >
                  <Home
                    image={ val.image1 }
                    title={ val.title }
                    description={ val.description }
                  /></NavLink>
                </Grid>
              ) ): make=="All" && !!year || !!city?data.filter(val=>val.year==year && val.city==city ).map((val)=>(
                <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                  <NavLink
                    to={ `/carDescription/${ val.id }` }

                  >
                  <Home
                    image={ val.image1 }
                    title={ val.title }
                    description={ val.description }
                  /></NavLink>
                </Grid>
              )):
              data.filter(val=>(val.title==make && val.year==year)).map((val) => (
              <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                <NavLink
                  to={ `/carDescription/${ val.id }` }

                >
                <Home
                  image={ val.image1 }
                  title={ val.title }
                  description={ val.description }
                /></NavLink>
              </Grid>)) }
          </Grid>

        </Box>
        <div className="fea">
          <div style={{marginLeft:"10%", marginTop:"10vh"}}>
          <h2 style={{color:"#A48111", fontFamily:"Inter", fontSize:"32px"}}>Our Features</h2>
          <div style={{width:"80%", opacity:".7", fontFamily:"Inter", fontSize:"18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
          </div><hr style={{width:"60%", margin:"auto", marginTop:"5vh"}}/>
          {/*/////////////////Catalog*/}
        <Carousel wrapAround={true}
        slidesToShow={1}
        >
          { AllCarPics.map((val)=>
          <Card sx={{  width: 3/4, height:400, margin:"auto", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={val.image}
                alt="Car Picture"
                height="400"
                style={{ backgroundSize:"cover", }}
              />
            </CardActionArea>
          </Card> )}
        </Carousel>
          <div style={{marginLeft:"10%", marginTop:"10vh"}}>
            <h2 style={{color:"#A48111", fontFamily:"Inter", fontSize:"32px"}}>These are the Features</h2>
            <h5 style={{width:"80%", opacity:".7", fontFamily:"Inter", fontSize:"18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h5>
          </div><hr style={{width:"60%", margin:"auto", marginTop:"5vh"}}/><div style={{marginTop:"10vh"}}>
          <FeauturesCatalog/>
          </div>
        </div>
        <div style={{marginLeft:"10%", marginTop:"10vh"}}>
          <h2 style={{color:"#A48111", fontFamily:"Inter", fontSize:"32px"}}>We are on these Cities also</h2>
          <h5 style={{width:"80%", opacity:".7", fontFamily:"Inter", fontSize:"18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h5>
        </div><hr style={{width:"60%", margin:"auto", marginTop:"5vh"}}/>
        <div style={{marginTop:"7vh"}}>
          <CitiesCatalog/>
        </div>
        <div className="foot">
          <Footer/>
        </div>
      </div>
      </>
    )
}
export default AllCars