import { CardActionArea } from '@mui/material';
import Card               from '@mui/material/Card';
import CardMedia          from '@mui/material/CardMedia';
import React              from "react"
import './Feature.css'
import Carousel from "nuka-carousel"
import Catalog            from '../carCatalog/Catalog';
import myImages           from '../citiesCatalog/images';
import FeauturesCatalog   from '../FeaturesCatalog/FeauturesCatalog';
import Footer             from '../Footer/Footer';
import img                from "./Images/5.jpg";
import img1               from "./Images/6.jpg";
import img2               from "./Images/7.jpg"
import ResponsiveAppBar   from '../navbar/navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Feature=(props)=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return(<>
    <div>
      <div>
        <ResponsiveAppBar/>
      </div>

      <div className="main1">
        <div className="child1">
          <div>
            <img src={props.image6} className="FeautureImg" />
          </div>
        </div>
        <div className="child2">
          <h1 className="child3">
          {props.description}<span style={{color:"#A48111"}}> {props.bold}</span>
          </h1>
          <p style={{width: "70%", marginLeft:"15%", marginTop:"3%", opacity:".7", fontSize:"22px", fontFamily:"Inter"}}>
            We are providing the asasaanm   cndsjckjdsjc dsckjdsahjcds cwchjbd   sjcjdwbc sjdcwnjuewhifc cwecjwcwkjc  jwnjcwcwwjc wchwncw
          </p>
        </div>
      </div>

      {/*After Header*/}
      <div style={{backgroundColor:"#F1EBC5", padding:"20px", paddingBottom:"50px", marginTop:"10%"}}>
      <div style={{marginLeft:"10%", marginTop:"2%"}}>
        <h1 style={{color:"#a48111", marginTop:"4%", fontFamily:"Inter", fontSize:"36px"}}>{ props.heading}</h1>
        <div style={{marginTop:"4vh" ,fontFamily:"Inter",  fontSize:"18px", width:"80%", opacity:".8"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
          cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc kckjwkjw iudwnkncjqlkdjq qkkjwnjcewjknbckjw kd</div>
      </div>
      {/*cards*/}

      <div data-aos="fade-up" style={ { display: "flex", height: "70vh", marginTop: "2%" } }>
        <div style={ { flex: "60%" } }>
          <div className="browse"></div>
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
      </div>

      {/*carousel*/}

      <div style={ { marginTop: "4%", width:"80%", margin:"auto" } }>
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
      </div>

      {/*////////////////////////////*/}
      <div className="feautureCard">
        <div className="feautureCardLeft"><img className="feautureCardLeftImg" src={props.image3} alt="Photo"/></div>
        <div className="feautureCardRight"><h1 style={{width:"80%", marginTop:"20%",fontFamily:"Inter", color:'#A48111'}}>Hello World</h1>
          <div style={{width:"80%" , fontSize:"18px"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
            cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div></div>
      </div>
      {/*/////////////*/}
    <div style={{marginTop:"10%"}}>
      <h1 style={{marginLeft:"10%", color:"#A48111", fontFamily:"Inter"}}>Other Feautures</h1>
      <div style={{opacity:".7", marginLeft:"10%", width:"70%", fontFamily:"Inter" , fontSize:"18px"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
        cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div><hr style={{width:"80%", margin:"auto", padding:"20px",marginTop:"20px"}}/>
      <FeauturesCatalog/>
    </div>

      {/*////////////////////*/}

      <div style={{marginTop:"5%"}}>
        <h2 style={{marginLeft:"10%", color:"#A48111", fontFamily:"Inter"}}>Our Cars</h2>
        <div style={{opacity:".7", marginLeft:"10%", width:"70%", fontFamily:"Inter", fontSize:"18px"}}>We are providing the asasaanmcndsjckjdsjc dsckjdsahjcds cwchjbdsjcjdwbc sjdcwnjuewhifc cwecjwcwkjcjwnjcwcwwjc wchwncw
          cwwcjwcbnwhjbcw cwwbhjbwkjnkjcnbc</div><hr style={{width:"80%", margin:"auto",marginTop:"20px", padding:"20px"}}/>
        <Catalog/>
      </div>
      <div style={{marginTop:"5vh"}}>
      <Footer/>
      </div>
    </div></>)
}

export default Feature