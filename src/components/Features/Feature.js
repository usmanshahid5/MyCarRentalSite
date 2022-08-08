import React            from "react"
import './Feature.css'
import { Carousel }     from 'react-responsive-carousel';
import Catalog          from '../carCatalog/Catalog';
import FeauturesCatalog from '../FeaturesCatalog/FeauturesCatalog';
import Footer           from '../Footer/Footer';
// import img              from "./Images/5.jpg";
import img1             from "./Images/6.jpg";
import img2             from "./Images/7.jpg"
import ResponsiveAppBar from '../navbar/navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Feature=(props)=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return(<>
    <div>
      <div>
        <ResponsiveAppBar/>
      </div>
      <div className="FeauturesHeader1">
        <img src={props.image6} className="featureImg1"/>

        <div className="FeauturesHeaderCenter"></div>
        <div style={{position:"absolute"}}>
          <h1 className= "HeaderText1">{props.description}</h1>
          <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>


        </div>



      </div>
      {/*<div style={{textAlign:"center", margin:"auto"}}></div>*/}

      {/*After Header*/}
      <div style={{textAlign:"center"}}>
        <h2 style={{color:"#a48111", marginTop:"4%"}}>{ props.heading}</h2><hr/>
        <div style={{fontSize:"20px", width:"80%", marginLeft:"10%", opacity:".8"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
          cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc kckjwkjw iudwnkncjqlkdjq qkkjwnjcewjknbckjw kdwjwndwefwe kwhdkwkjdkjfd kwndkjnwkjwcjwfdkjw
          wbwjbkwbkjd wlkdjw kwbjd jdkjw wkjqdkjew dwdqnqd </div>
      </div>
      {/*carousel*/}

      <div style={ { marginTop: "4%" } }>
        <Carousel className="slider-container1">
          <div>
            <img src={ props.image5 } className="slider-container2"/>
          </div>
          <div>
            <img src={ props.image2 } className="slider-container2"/>
          </div>
        </Carousel>
      </div>
      {/*cards*/}
      <div className="feautureCard">
        <div className="feautureCardLeft"><img className="feautureCardLeftImg" src={props.image5} alt="Photo"/></div>
        <div className="feautureCardRight"><h1 style={{width:"80%", marginTop:"20%", color:'#A48111'}}>Hello World</h1>
          <div style={{width:"80%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
            cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div></div>
      </div>

      {/*/////////////////////*/}
      <div className="feautureCard1">

        <div className="feautureCardRight1"><h1 style={{width:"80%", marginTop:"15%", color:'#A48111'}}>Hello World</h1>
          <div style={{width:"80%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
            cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div></div>
        <div className="feautureCardLeft1"><img className="feautureCardLeftImg1" src={props.image6} alt="Photo"/></div>
      </div>
      {/*////////////////////////*/}

      {/*////////////////////////////*/}
      <div className="feautureCard">
        <div className="feautureCardLeft"><img className="feautureCardLeftImg" src={props.image3} alt="Photo"/></div>
        <div className="feautureCardRight"><h1 style={{width:"80%", marginTop:"20%", color:'#A48111'}}>Hello World</h1>
          <div style={{width:"80%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
            cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div></div>
      </div>
      {/*/////////////*/}
    <div style={{marginTop:"10%"}}>
      <h2 style={{marginLeft:"10%", color:"#A48111"}}>Other Feautures</h2>
      <div style={{opacity:".7", marginLeft:"10%", width:"70%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
        cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div><hr/>
      <FeauturesCatalog/>
    </div>

      {/*////////////////////*/}

      <div style={{marginTop:"10%"}}>
        <h2 style={{marginLeft:"10%", color:"#A48111"}}>Our Cars</h2>
        <div style={{opacity:".7", marginLeft:"10%", width:"70%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
          cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div><hr/>
        <Catalog/>
      </div>
      {/*/////////////////////////*/}
      <div className="feautureCard1">

        <div className="feautureCardRight1"><h1 style={{width:"80%", marginTop:"15%", color:'#A48111'}}>Hello World</h1>
          <div style={{width:"80%"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
            cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div></div>
        <div className="feautureCardLeft1"><img className="feautureCardLeftImg1" src={props.image5} alt="Photo"/></div>
      </div>
      <Footer/>
    </div></>)
}

export default Feature