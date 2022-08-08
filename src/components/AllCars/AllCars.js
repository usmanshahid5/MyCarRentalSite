import { Box, Grid }                  from '@mui/material';
import React, { Component, useState } from "react";
import Slider                         from "react-slick";
import Feedback                       from '../../feedback/Feedback';
import data                           from "../carCatalog/data";
import CarHosts                       from '../CarHost/CarHosts';
import CitiesCatalog                  from '../citiesCatalog/CitiesCatalog';
import FeauturesCatalog               from '../FeaturesCatalog/FeauturesCatalog';
import Footer                         from '../Footer/Footer';
import Home                           from "../home/home";
import { NavLink, Link }              from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InputLabel                     from '@mui/material/InputLabel';
import MenuItem                       from '@mui/material/MenuItem';
import FormControl                    from '@mui/material/FormControl';
import Select                         from '@mui/material/Select';
import ResponsiveAppBar               from '../navbar/navbar';
import "./AllCars.css"

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
        <div style={{marginTop:"10%", marginLeft:"10%"}}>
          <h2 style={{color:"#A48111"}}>Don’t dream it just hire it</h2>
          <h1>We make your drive nice and easy</h1>
          <h5 style={{width:"60%", opacity:".7"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h5>
        </div>
        <hr/>
        <div style={{display:"flex", marginLeft:"5%", marginTop:"5%"}}>
{/*Make*/}
        <Box sx={{ width:"20%", margin:"10px" }}>
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
{/*Year*/}
        <Box sx={{ width:"20%", margin:"10px" }}>
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

        {/*//City*/}

        <Box sx={{ width:"20%", margin:"10px" }}>
          <FormControl fullWidth>
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

        <Box className='boxh' data-aos="fade-up">
          <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 2, sm: 12, md: 12 } }>
            {make == "All" && year=="All" && city=="All"?data.map(val=>(
                <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                  <Home
                    image={ val.image1 }
                    title={ val.title }
                    description={ val.description }
                  />
                </Grid>
              ) ): make=="All" && !!year || !!city?data.filter(val=>val.year==year && val.city==city ).map((val)=>(
                <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                  <Home
                    image={ val.image1 }
                    title={ val.title }
                    description={ val.description }
                  />
                </Grid>
              )):
              data.filter(val=>(val.title==make && val.year==year)).map((val) => (
              <Grid item xs={ 12 } sm={ 6 } md={ 3 }>
                <Home
                  image={ val.image1 }
                  title={ val.title }
                  description={ val.description }
                />
              </Grid>)) }
          </Grid>

        </Box>
        <div className="fea">
          <div style={{marginLeft:"10%", marginTop:"5%"}}>
          <h2 style={{color:"#A48111"}}>Our Features</h2>
          <h5 style={{width:"70%", opacity:".7"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h5>
          </div><hr/>
          <div style={{marginTop:"3%"}}>
          <FeauturesCatalog/>
          </div>
        </div>
        <div style={{marginLeft:"10%", marginTop:"5%"}}>
          <h2 style={{color:"#A48111"}}>We are on these Cities also</h2>
          <h5 style={{width:"70%", opacity:".7"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h5>
        </div><hr/>
        <div style={{marginTop:"3%"}}>
          <CitiesCatalog/>
        </div>
        <div style={{marginTop:"3%"}}>
          <Footer/>
        </div>
      </div>
      </>
    )
}
export default AllCars