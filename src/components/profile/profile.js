import React                 from 'react'
import "./profile.css"
import img                   from "../Images/cardImages/12.jpg"
import {AiFillHome}          from 'react-icons/ai'
import {CgProfile}           from 'react-icons/cg'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail}             from 'react-icons/md'
import {FaFacebookF}         from 'react-icons/fa'
import {AiFillInstagram}     from 'react-icons/ai'
import {Button}              from "@mui/material"
import ResponsiveAppBar      from '../navbar/navbar';

const Profile=()=>{
  return(
    <>
      <ResponsiveAppBar/>
    <div style={{textAlign:"center", backgroundColor:"black", padding:"30px"}}>
        <img src={img} className="circle"/>
        <h4 style={{color:"#A48111", marginTop:"10px"}}>Usman Shahid</h4>
        <h7 style={{color:"white"}}>Member since 2018</h7>
    </div>
      <div style={{backgroundColor:"#E8E8E8", padding:"30px"}} >
      <div className="profileback" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",backgroundColor:"white",margin:"auto",  padding:"50px", borderRadius:"20px", paddingBottom:"70px", paddingTop:"20px"}}>
        <h3 style={{textAlign:"center", color:"#A48111"}}>About me</h3>
        <div className="topLift"><CgProfile/>     Fullname : <span className="profiles" >Usman Shahid</span></div>
        <div className="topLift"><AiFillHome/>     Address : <span className="profiles" >Lahore, Pakistan</span></div>
        <div className="topLift"><BsFillTelephoneFill/>     Phone : <span className="profiles" >+92-317-0432258</span></div>
        <div className="topLift"><MdEmail/>     Email : <span className="profiles" >memuhammadusman5@gmail.com</span></div>
        <div className="topLift"><FaFacebookF/>     Facebook : <span className="profiles">usmanshahid171</span></div>
        <div className="topLift"><AiFillInstagram/>     Instagram : <span className="profiles">usmanshahid1</span></div>
        <div>
        <Button variant="contained" style={{float:"right", backgroundColor:"#A48111"}}>Edit</Button>
      </div>
      </div></div>


    </>
  )
}
export default  Profile