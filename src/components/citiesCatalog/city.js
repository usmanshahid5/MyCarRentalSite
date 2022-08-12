import Button                  from '@mui/material/Button';
import Card                    from '@mui/material/Card';
import CardMedia               from '@mui/material/CardMedia';
import Stack                   from '@mui/material/Stack';
import Carousel                from 'nuka-carousel';
import { useState }            from 'react';
import React                   from 'react';
import { NavLink }             from 'react-router-dom';
import AllCarPics              from '../AllCars/pic';
import Catalog                 from '../carCatalog/Catalog';
import data                    from '../carCatalog/data';
import Home                    from '../home/home';
import Footer                  from '../Footer/Footer';
import { Box, CardActionArea } from '@mui/material';
import { Grid }                from '@mui/material';
import ResponsiveAppBar from '../navbar/navbar';
import InputLabel       from '@mui/material/InputLabel';
import MenuItem         from '@mui/material/MenuItem';
import FormControl      from '@mui/material/FormControl';
import Select           from '@mui/material/Select';
import Feedback         from '../../feedback/Feedback';
import { connect }      from 'react-redux';
import DatePicker       from '../dataPicker/DatePicker';
import './city.css';
import "aos";
import img              from "../Images/cardImages/2.jpg"
import myImages         from './images';

const City = (props) => {
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
        <div className='head' style={ { backgroundImage: `url(${ props.image })` } }>
          <div className='d1'>
          </div>
          <div className='d2'> We are now at<span
            style={ { fontSize: "60px", color: "#A48111", fontWeight: "600", width: "90%" } }> { props.city } </span> to
            provide you the best car service of the town
          </div>
          <div className='d3'>So, come to us to experience the best drives of the town</div>
          <div className="datePicker3">
            <div className="dateSetting3">
              <DatePicker style={ { marginLeft: "25%" } }/>
            </div>
          </div>
        </div>


        <h1 data-aos="fade-up"
             style={ { fontSize: "46px", marginTop: "3%", textAlign: "center", color: "#A48111", fontFamily:"Inter" } }>So, let's Explore
          our Cars!
        </h1>
        <hr style={ { width: "80%" } }/>
        <div data-aos="fade-up" style={ { backgroundColor: "#FAFAFA", padding: "20px" } }>
          <div style={ { fontSize: "32px", marginLeft: "6%", marginTop: "3%", fontFamily:"Inter" } }>The Best cars
            at <span style={{color:"#A48111"}}>{ props.city }</span></div>
          <div style={ { fontSize: "18px", marginLeft: "6%", marginTop: "1%", opacity: ".7", width: "70%" } }>Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries
          </div>
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
        </div>

        <div data-aos="fade-up" style={ { display: "flex", height: "70vh", marginTop: "4%" } }>
          <div style={ { flex: "60%" } }>
              <img src={props.image} className="browse" style={{marginLeft:"10%"}}/>
          </div>

          <div className="righth"><h2 style={{fontSize:"32px"}}><strong style={ { color: "#A48111",fontFamily:"Inter" } }>Vacations?</strong> So, Let's Go!</h2>
            <div style={ { textAlign: "center" } }>
              <div style={ { fontSize: "18px",fontFamily:"Inter", marginTop: "1%", opacity: ".7", margin: "auto", width:"80%" } }>Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
              </div>
            </div>
          </div>

        </div>
        {/*/////////////////Catalog*/}
        <Carousel wrapAround={true}
                  slidesToShow={1}
        >
          { myImages.map((val)=>
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

        <div style={ { textAlign: "center", marginTop: "70px", fontFamily:"Inter" } }>
          <h1 style={ { textAlign: "center", color: "#A48111" } }>Best Towns in { props.city }</h1>
          <h4 style={ { margin: "auto", opacity: ".7", fontWeight: "500", width: "80%", textAlign: "center" } }>Almost
            all the towns of Newyork are extremely great, but here is some we most love!</h4>
          <hr style={ { width: "80%" } }/>
          <div className="TownEdit">
            <div className="TownEdit-1">
              <h3>Town 1</h3>
              <div style={ { width: "70%", textAlign: "center", opacity: ".7", margin: "auto" } }>Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              </div>

            </div>
            <div className="TownEdit-2">
              <h3>Town 2</h3>
              <div style={ { width: "70%", textAlign: "center", opacity: ".7", margin: "auto" } }>Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              </div>

            </div>
            <div className="TownEdit-3">
              <h3>Town 3</h3>
              <div style={ { width: "70%", textAlign: "center", opacity: ".7", margin: "auto" } }>Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="CatalogStyle" data-aos="fade-up">
        <div style={ { marginLeft: "6%", paddingTop: "4%", paddingBottom: "3%", fontFamily:"Inter" } }>
          <div style={ { color: "#A48111", fontSize:"32px" } }>Our best hosts in { props.city }</div>
          <div style={ { opacity: ".7", fontSize:"18px", width:"70%" } }>Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</div>
          <hr style={ { width: "80%" } }/>
          <div style={{marginTop:"8vh"}}>
          <Catalog/>
          </div>
        </div>
      </div>

      {/*/////////////////////////*/}

      <div data-aos="fade-up" style={ { display: "flex", height: "70vh", marginTop: "2%" } }>
        <div className="left2"><h2><strong style={ { color: "#A48111",fontFamily:"Inter", fontSize:"32px" } }>Our Clients</strong> Explore them</h2>
          <div style={ { textAlign: "center" } }>
            <div style={ { fontSize: "18px",fontFamily:"Inter" , marginLeft: "6%", marginTop: "1%", opacity: ".7", margin: "auto", width:"70%" } }>Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to make a type
            </div>
          </div>
        </div>
        <div style={ { flex: "60%" } }>
          <div style={ { height: "70%", width: "80%" } } className="browse2"></div>
        </div>
      </div>

      <div style={ { marginTop: "70px", width: "100%", marginBottom: "5%", backgroundColor: "#F0F0F0" } }>
        <div style={ { marginLeft: "6%", paddingTop: "4%", paddingBottom: "3%", fontFamily:"Inter" } }>
          <h3 style={ { color: "#A48111" } }>Reviews and Feedbacks</h3>
          <div style={ { opacity: ".7", fontWeight: "500" } }>Lorem Ipsum is simply dummy text of the printing s,</div>
          <hr style={ { width: "80%" } }/>
          <Feedback data-aos="fade-up"/>
        </div>
      </div>
      <Footer data-aos="fade-up"/>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value: state.data.data
  }
}

export default connect(mapStateToProps, {})(City);