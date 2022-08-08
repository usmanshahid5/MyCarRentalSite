import React            from "react"
import './AboutUs.css'
import Footer           from '../Footer/Footer';
import img              from "../Images/cardImages/133.jpg"
import img1 from "../Images/cardImages/135.jpeg"
import img2 from "../Images/cardImages/2.jpg"
import img3 from "../Images/cardImages/4.jpg"

import ResponsiveAppBar from '../navbar/navbar';

const AboutUs=()=>{
  return(<>
  <div>
    <div>
    <ResponsiveAppBar/>
    </div>
    <div className="FeauturesHeader1">
      <img src={img} className="featureImg1"/>

      <div className="FeauturesHeaderCenter"></div>
      <div style={{position:"absolute"}}>
        <h1 className= "HeaderText1">ExtraVagantForeigns is providing the best car options to the world</h1>
        <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>


      </div>



    </div>
    <div style={{textAlign:"center", margin:"auto"}}></div>

    {/*After Header*/}
    <div style={{textAlign:"center"}}>
    <h2 style={{color:"#a48111", marginTop:"4%"}}>About us!</h2><hr/>
    <div style={{fontSize:"20px", width:"80%", marginLeft:"10%", opacity:".8"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
    cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc kckjwkjw iudwnkncjqlkdjq qkkjwnjcewjknbckjw kdwjwndwefwe kwhdkwkjdkjfd kwndkjnwkjwcjwfdkjw
    wbwjbkwbkjd wlkdjw kwbjd jdkjw wkjqdkjew dwdqnqd </div>
    </div>
    {/*cards*/}
    <div className="feautureCard">
      <div className="feautureCardLeft"><img className="feautureCardLeftImg" src={img} alt="Photo"/></div>
      <div className="feautureCardRight"><h1 style={{width:"80%", marginTop:"20%", color:'#A48111'}}>Hello World</h1>
      <div style={{width:"80%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
        cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div></div>
    </div>

{/*/////////////////////*/}
    <div className="feautureCard1">

      <div className="feautureCardRight1"><h1 style={{width:"80%", marginTop:"15%", color:'#A48111'}}>Hello World</h1>
        <div style={{width:"80%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
          cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div></div>
      <div className="feautureCardLeft1"><img className="feautureCardLeftImg1" src={img1} alt="Photo"/></div>
    </div>
{/*////////////////////////*/}

    <div className="feautureCard">
      <div className="feautureCardLeft"><img className="feautureCardLeftImg" src={img} alt="Photo"/></div>
      <div className="feautureCardRight"><h1 style={{width:"80%", marginTop:"20%", color:'#A48111'}}>Hello World</h1>
        <div style={{width:"80%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
          cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div></div>
    </div>
    {/*/////////////////////////*/}
    <div className="feautureCard1">

      <div className="feautureCardRight1"><h1 style={{width:"80%", marginTop:"15%", color:'#A48111'}}>Hello World</h1>
        <div style={{width:"80%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
          cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div></div>
      <div className="feautureCardLeft1"><img className="feautureCardLeftImg1" src={img3} alt="Photo"/></div>
    </div>
    <Footer/>
  </div></>)
}

export default AboutUs