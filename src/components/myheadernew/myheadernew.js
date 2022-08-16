import React                from  'react'
import "./MyHeaderNew.css"
import FeauturesCatalog     from '../FeaturesCatalog/FeauturesCatalog';
import ResponsiveAppBar     from '../navbar/navbar';
import img                  from "./5.jpg"
import {BiSupport}          from "react-icons/bi";
import { RiNavigationFill } from "react-icons/ri";
import { RiTimerFill }      from "react-icons/ri";
import { AiFillFlag }       from "react-icons/ai";
import { GiStarFlag }       from "react-icons/gi";
import img1                 from "./8.svg"
import Footer               from "../Footer/Footer"
import Catalog              from "../carCatalog/Catalog"


const MyHeaderNew=()=>{
  return(
    <>
    <div>
      <ResponsiveAppBar/>
      <div className="A1">
        <img src={img} className="A2"/>
        <div className="A3">
          <div className="A5"></div>
          <div className="A4"></div>
          <div className="A6">
            <h1 className="A7"><span style={{color:"black"}}>ExtraVagonForeigns</span> are providing best cars of your hometown</h1>
            <h5 className="A8">We are providing you the best cars of your hometown, so come to us and enjoy your journey</h5>
          </div>
          <div className="A9">
            <div style={{ marginTop:"5%"}}>
            <h4 style={{color:"white", width:"70%", margin:"auto"}}>Experience us!</h4>
            <p style={{color:"white", width:"80%", margin:"auto", marginTop:"2%"}}>We are providing you the best cars of your hometown</p>
            <button className="wbutton">Contact us!</button>
            </div>
          </div>

        </div>
      </div>
      {/*//////////////////////////////////////////////////////////////////*/}
      <div>
        <div className="B1">
          <div className="B2">
            <div style={{marginLeft:"6%"}}>
              <h4 style={{fontWeight:"800"}}>About us</h4>
              <h2 style={{width:"90%", fontWeight:"800", fontSize:"40px"}}>We are working in different countries to entertain over great clients</h2>
              <h5 style={{width:"90%", marginTop:"2%", opacity:".9"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ma</h5>
              <p style={{width:"90%", marginTop:"2%", opacity:".9"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1</p>
            </div>
            <div className="B4">
              <div className="B5">
                <div style={{textAlign:"center", }}>
                  <RiNavigationFill style={{height:"40px", width:"40px", marginTop:"5%"}}/>
                  <div style={{fontWeight:"600", fontSize:"26px"}}>Full Navigation</div>
                  <div style={{ fontSize:"18px", width:"70%", margin:"auto", marginTop:"5px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever </div>
                </div>
              </div>
              <div className="B6">
                <div style={{textAlign:"center", }}>
                  <BiSupport style={{height:"40px", width:"40px", marginTop:"5%"}}/>
                  <div style={{fontWeight:"600", fontSize:"26px"}}>24/7 Support</div>
                  <div style={{ fontSize:"18px", width:"70%", margin:"auto", marginTop:"5px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever </div>
                </div>
              </div>
            </div>
          </div>
          <div className="B3">
            <div className="B7"></div>
          </div>
        </div>
      </div>
      {/*/////////////////////////////////////////////////*/}

<div className="C1">
  <div className="C4">
  <div className="C2">
    <div style={{marginLeft:"10%"}}>
<h4 style={{fontWeight:"600", marginTop:"7%", color:"#A48111"}}>Our Services</h4>
    <h2 style={{fontWeight:"600", width:"80%"}}>We are providing cars for different purposes</h2>
    <div style={{fontSize:"17px", width:"80%", opacity:".8", marginTop:"2%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
      ever</div>
    <button className="wbutton">About us!</button>
  </div>
  </div>
  <div className="C3">
    <img src={img1} style={{height:"230px", width:"230px", marginTop:"4%"}} />
    <h1 style={{fontSize:"52px"}}>24/7 <span style={{fontSize:"26px"}}>Support</span></h1>
  </div>
  </div>
</div>
{/*////////////////////////////////////////////*/}
      <div style={{marginTop:"10%", backgroundColor:"#f6f6f6", padding:"50px"}}>
        <h2 style={{marginLeft:"10%", color:"#A48111"}}>Our Services</h2>
        <div style={{marginLeft:"10%", fontSize:"18px", opacity:".8", width:"70%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          Lorem Ipsum has been the industry's standard dummy</div>
      <FeauturesCatalog/>
      </div>

      {/*//////////////////////////////////////*/}

      <div style={{marginTop:"5%"}}>
        <div className="B8">
          <div className="B5">
            <div style={{textAlign:"center", }}>
              <RiTimerFill style={{height:"40px", width:"40px", marginTop:"8%", color:"#A48111"}}/>
              <div style={{fontWeight:"600", fontSize:"26px", color:"white"}}>10 Years of Experience</div>
              <div style={{ fontSize:"16px", width:"70%", margin:"auto", marginTop:"5px", color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever </div>
            </div>
          </div>
          <div className="B6">
            <div style={{textAlign:"center", }}>
              <AiFillFlag style={{height:"40px", width:"40px", marginTop:"8%", color:"#A48111"}}/>
              <div style={{fontWeight:"600", fontSize:"26px", color:"white"}}>7+ Countries</div>
              <div style={{ fontSize:"16px", width:"70%", margin:"auto", marginTop:"5px", color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever </div>
            </div>
          </div>
          <div className="B6">
            <div style={{textAlign:"center", }}>
              <GiStarFlag style={{height:"40px", width:"40px", marginTop:"8%", color:"#A48111"}}/>
              <div style={{fontWeight:"600", fontSize:"26px", color:"white"}}>20+ Cities</div>
              <div style={{ fontSize:"16px", width:"70%", margin:"auto", marginTop:"5px", color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever </div>
            </div>
          </div>
        </div>
      </div>
      {/*////////////////////////////////////////////*/}

      <div style={{marginTop:"5%", backgroundColor:"#f6f6f6", padding:"50px"}}>
        <h2 style={{marginLeft:"10%", color:"#A48111"}}>Our Cars</h2>
        <div style={{marginLeft:"10%", fontSize:"18px", opacity:".8", width:"70%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          Lorem Ipsum has been the industry's standard dummy</div>
        <Catalog/>
      </div>
      <Footer/>
    </div>
    </>
      )
}
export default MyHeaderNew