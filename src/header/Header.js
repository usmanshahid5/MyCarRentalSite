import "./header.css"
import React, { useState } from 'react';
import Button              from '@mui/material/Button';
import Stack               from '@mui/material/Stack';
import FeauturesCatalog    from '../components/FeaturesCatalog/FeauturesCatalog';
import ResponsiveAppBar    from "../components/navbar/navbar"
import Catalog             from "../components/carCatalog/Catalog";
import CitiesCatalog       from "../components/citiesCatalog/CitiesCatalog";
import Footer              from "../components/Footer/Footer";
import Feedback            from "../feedback/Feedback";
import "aos";
import { connect }         from "react-redux";
import { GetCityData }     from "../components/action/action";
import { NavLink }         from "react-router-dom";
import DatePicker          from "../components/dataPicker/DatePicker";
import img from "./20.jpg"


const Header = ({ GetCityData, value }) => {

  return (
    <>
      <ResponsiveAppBar/>

          <div className="datePicker2">
            <div className="dateSetting">
              <DatePicker style={ { marginLeft: "25%" } }/>
            </div>
          </div>
      <div style={{display:"flex", width:"100%"}}>
        <div style={{flex:"65%"}}>
          <h2 className='leftcontent21'> The best <span style={{color:"#A48111", fontSize:"52px"}}>Car Rental Service</span> that you deserve, come to us</h2>
          <p className='smallpara'>Start your dream car journey with us, we will find best for you!</p>
        </div>
        <div className="rightimgdesign">
          <div><img src={img} style={{height:"90%", width:"100%",
            borderRadius:"300px 0px 0px 100px", boxShadow: "rgb(218,165,32, .6) 10px 0px 0px 10px"
          }}/></div>
        </div>
      </div>


            <Stack direction="row" spacing={ 2 }>
              <Button variant="contained" onClick={ () => GetCityData("") } className="contactButton"
                      style={ { margin: "auto", backgroundColor: "#A48111", color:"white", marginTop:"5vh" } }>
                <div> <NavLink
                  to='/allcars'
                  style={{color:"white"}}

                > Browse All Cars </NavLink></div>
              </Button>
            </Stack>

      <h1 data-aos="fade-up" className="belowHeading">This time to travel
        in your desired <strong><span style={ { color: "#A48111", fontSize: "40px" } }>Cars!</span></strong></h1>
      <div data-aos="fade-up" style={ { backgroundColor: "#FAFAFA", padding: "20px", marginTop:"3%" } }>
        <div className="subsec"><strong>Our <span
          style={ { color: "#A48111" } }>Feautured</span> Cars</strong></div>
        <div className="secondsubsec"> Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries
        </div>

        <div className="catalog1">
          <Catalog/></div>
      </div>
      <div data-aos="fade-up" style={ { display: "flex", height: "70vh", marginTop: "4%" } }>
        <div style={ { flex: "60%" } }>
          <div className="browse"></div>
        </div>

        <div className="righth"><h2 className="righthh"><strong style={ { color: "#A48111",fontFamily:"Inter" } }>Vacations?</strong> So, Let's Go!</h2>
          <div style={ { textAlign: "center" } }>
            <div className="rightcon">Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            </div>
          </div>
        </div>

      </div>
      <div data-aos="fade-up">
        <div style={ { backgroundColor: "#FAFAFA", padding: "20px" } }>
          <div className="con"><strong>Do you want to go on <span
            style={ { color: "#A48111" } }>VACATIONS!</span></strong></div>
          <div className="con1">Lorem
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries
          </div>
        </div>
        <div className="catalog2">
        <CitiesCatalog/></div>
      </div>
      <div data-aos="fade-up" style={ { display: "flex", height: "70vh", marginTop: "4%" } }>
        <div className="left2"><h2 className="con2"><strong style={ { color: "#A48111",fontFamily:"Inter", fontSize:"32px" } }>Our Clients</strong> Explore them</h2>
          <div style={ { textAlign: "center" } }>
            <div className="con3">Lorem
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
      <div className="FeatureCatalog">
         <h3 style={{marginLeft:"10%", color:"#A48111",fontFamily:"Inter", fontSize:"32px"}}>Our Features</h3>
        <div style={{marginLeft:"10%", width:"70%", opacity:".7",fontFamily:"Inter", fontSize:"18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
      <div className="feature-cat">
        <FeauturesCatalog/>
      </div>
      </div>
      <div data-aos="fade-up" style={ { backgroundColor: "#FAFAFA", padding: "20px" } }>
        <div className="head2"><strong>Our Happy <span
          style={ { color: "#A48111",fontFamily:"Inter" } }>Customers!</span></strong></div>
        <div className="head3">Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries
        </div>
        <div style={{marginTop:"7vh"}}>
          <Feedback/></div></div>
      <div style={ { marginTop: "5%" } }></div>
      <div data-aos="fade-up">
        <Footer/>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetCityData: data => dispatch(GetCityData(data))
  }

}

const mapStateToProps = (state) => {
  return {
    value: state.data.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
{/* <Navbar/> */
}