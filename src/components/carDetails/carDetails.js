import Card                       from '@mui/material/Card';
import CardMedia                  from '@mui/material/CardMedia';
import Typography                 from '@mui/material/Typography';
import React                      from "react";
import Carousel from "nuka-carousel"
import AllCarPics                 from '../AllCars/pic';
import DatePicker                 from "../dataPicker/DatePicker";
import Maps                       from "../../maps/maps";
import Radio                      from '@mui/material/Radio';
import RadioGroup                 from '@mui/material/RadioGroup';
import FormControlLabel           from '@mui/material/FormControlLabel';
import FormControl                from '@mui/material/FormControl';
import FormLabel                  from '@mui/material/FormLabel';
import { Button, CardActionArea } from "@mui/material";
import CarHosts                   from "../CarHost/CarHosts";
import Catalog                    from "../carCatalog/Catalog";
import Footer                from "../Footer/Footer";
import MyRatingPanel         from "../Ratings/Rating";
import { AiFillCar }         from "react-icons/ai";
import { BiBluetooth }       from "react-icons/bi";
import { GiCarWheel }        from "react-icons/gi";
import { GiUsbKey }          from "react-icons/gi";
import { FaWifi }            from "react-icons/fa";
import { GrSoundcloud }      from "react-icons/gr";
import { BsApple }           from "react-icons/bs";
import { MdChildCare }       from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsFillSunFill }     from "react-icons/bs";
import Alert                 from '@mui/material/Alert';
import ResponsiveAppBar      from "../navbar/navbar";
import "aos";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carDetails.css"

const CarDetails = (props) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const myallimage = props.image
  console.log(myallimage, "22222222222")
  return (
    <>
      <ResponsiveAppBar/>
      <div>
        <div className='head-h'>
          <div className='left-l'>
            <div style={ { marginTop: "15vh" } }>
              <Carousel wrapAround={true}
                        slidesToShow={1}>

                  <Card sx={{  width: 3/4, height:400, margin:"auto", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={ props.image1}
                        image = {props.image2}
                        alt="Car Picture"
                        height="400"
                        style={{ backgroundSize:"cover", }}
                      />
                    </CardActionArea>
                  </Card>

                <Card sx={{  width: 3/4, height:400, margin:"auto", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={ props.image1}
                      alt="Car Picture"
                      height="400"
                      style={{ backgroundSize:"cover", }}
                    />
                    <Typography gutterBottom variant="h8" component="div" className='label' style={{fontWeight:"600", fontFamily:"Inter", textAlign:"center", marginTop:"20px"}}>
                      Wedding Cars
                    </Typography>
                  </CardActionArea>
                </Card>

                <Card sx={{  width: 3/4, height:400, margin:"auto", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={ props.image3}
                      alt="Car Picture"
                      height="400"
                      style={{ backgroundSize:"cover", }}
                    />
                    <Typography gutterBottom variant="h8" component="div" className='label' style={{fontWeight:"600", fontFamily:"Inter", textAlign:"center", marginTop:"20px"}}>
                      Wedding Cars
                    </Typography>
                  </CardActionArea>
                </Card>
              </Carousel>
            </div>

          </div>
          <div className='right-r'>
            <h2 style={ { width: "70%", marginTop: "15%" } } className="right-rr">$76<span
              style={ { fontSize: "15px" } }>/day</span></h2>
            <hr style={ { width: "90%", float: "left" } }/>
            <FormLabel id="demo-row-radio-buttons-group-label" style={ { marginTop: "5%" } }>Schedule your
              Car</FormLabel>
            <div><DatePicker className="datePicker" sx={ { width: "100%" } }/></div>
            <div style={ { marginTop: "3%" } }>

              <FormLabel id="demo-row-radio-buttons-group-label">Pickup and Return</FormLabel>
              <div>
                <Maps/>
              </div>
              <FormControl style={ { marginTop: "3%" } }>
                <FormLabel id="demo-row-radio-buttons-group-label">Select Payment Method</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={ <Radio/> } label="MasterCard"/>
                  <FormControlLabel value="male" control={ <Radio/> } label="Cash"/>
                </RadioGroup>
              </FormControl>

              <div></div>
            </div>
            <div style={ { marginTop: "10%" } }>
              <Button variant="contained" sx={ {
                width: "30%",
                marginTop: "30px",
                margin: "auto",
                backgroundColor: "#A48111"
              } }>Continue</Button>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div style={ { marginLeft: "10%" } } className="Description">
            <h2 style={ { width: "70%", marginTop: "9%", fontFamily:"Inter" } }>{props.briefHeading}</h2>
            <p className="content1" style={{fontFamily:"Inter",opacity:".7"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. </p>
          </div>
        </div>
        <div style={{backgroundColor:"#F1EBC5", padding:"20px", paddingBottom:"50px"}}>
        <div style={{marginLeft:"10%"}}>
          <h3 style={{ marginTop: "4%", fontFamily:"Inter" }}>About Car</h3>
          <p className="content1" style={{fontFamily:"Inter",opacity:".7"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. </p>
          <div className="feature-main" data-aos="fade-up">
            <div style={ { flex: "20%" } } className="feature-1">
              <div className="feature"><AiFillCar/> 4 Doors</div>
              <div className="feature"><BiBluetooth/> Bluetooth</div>
              <div className="feature"><GiCarWheel/> 4 Wheel Drive</div>
              <div className="feature"><GiUsbKey/> USB</div>
              <div className="feature"><FaWifi/> WIFI</div>
            </div>
            <div style={ { flex: "20%" } } className="feature-2">
              <div className="feature"><GrSoundcloud/> Music</div>
              <div className="feature"><BsApple/> Apple Store</div>
              <div className="feature"><MdChildCare/> Child Seat</div>
              <div className="feature"><BsCameraVideoFill/> Back Camera</div>
              <div className="feature"><BsFillSunFill/> Sunroof</div>
            </div>
          </div>
        </div></div>
        <div></div>
          <div style={ { marginLeft: "10%" } } data-aos="fade-up">
            <h3 className="host" style={{fontFamily:"Inter"}}> Host by: </h3>
            <p className="content1" style={{fontFamily:"Inter",opacity:".7"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
            <div style={ { marginTop: "2%" } }>
              <CarHosts/>
            </div>
          </div>
          <div className="myRatingPanel" data-aos="fade-up">
            <MyRatingPanel/>
          </div>
          <h3 data-aos="fade-up" className="Catalog">Other Cars</h3>
        <p className="content1" style={{fontFamily:"Inter",opacity:".7", marginLeft:"10%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
          <div data-aos="fade-up">
            <Catalog/>
          </div>
          <div data-aos="fade-up" style={ { marginTop: "6%" } }>
            <Footer/>
          </div>
        </div>
    </>
  );
}

export default CarDetails;
