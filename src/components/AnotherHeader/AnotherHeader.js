import React                    from "react";
import "./AnotherHeader.css";
import Catalog                  from "../carCatalog/Catalog"
import CitiesCatalog            from '../citiesCatalog/CitiesCatalog';
import FeauturesCatalog         from '../FeaturesCatalog/FeauturesCatalog';
import { HiLocationMarker }     from "react-icons/hi";
import Footer                   from "../Footer/Footer"
import ResponsiveAppBar         from '../navbar/navbar';
import { AdapterDateFns }       from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker }     from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';


const AnotherHeader = () => {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  }
  return (
    <>
      <div>
        <ResponsiveAppBar/>

        <div className="q">
          <div className="q1"></div>
          <div className="q2"></div>
          <div className="q3">
            <h1 className="q5">We are providing the best car
              service in the world</h1>
            <p className="q4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
          <button className="q7"><span className="btn-name">Open Catalog</span></button>

          <div className="q6">
            <div className="q8"><HiLocationMarker/>{" "}
              Location
              <div style={{opacity:".7", marginTop:"3px"}}>Newyork, USA</div>
            </div>
            <div className="q8" ><HiLocationMarker/>{" "}
              Pickup Date
              <div style={{opacity:".7", marginTop:"3px"}}>08/12/2022</div>
            </div>
            <div className="q8"><HiLocationMarker/>{" "}
              Return Date
              <div style={{opacity:".7", marginTop:"3px"}}>12/12/2022</div>
            </div>
          </div>
        </div>
        {/*//////////////////////////////Header end/////////////////////////*/ }
        <div className="w">
          <div className="w4">
            <h3 className="w1"><span style={ { fontSize: "24px", color: "white" } }>Our</span> Best Cars</h3>
            <div className="w2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips
              um has been the industry's standard dummy text ever since the 1500s,
            </div>
          </div>
          <div className="w3">
            <div className="w5">
              <Catalog/>
            </div>
          </div>
        </div>

        {/*/////////////////////////////////2nd header done////////////////////////////*/ }
        <div className="x">
          <div className="x4">
            <h3 className="x1" style={ { fontSize: "24px", } }><span style={ { fontSize: "24px" } }>Our</span> <span
              style={ { color: "#C8A800" } }>Locations</span></h3>
            <div className="x2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips
              um has been the industry's standard dummy text ever since the 1500s,
            </div>
          </div>
          <div className="x3">
            <CitiesCatalog/>
          </div>
        </div>


        {/*////////////////////////Third header done////////////////////////////*/ }
        <div className="ww">
          <div className="w4">
            <h3 className="w11"><span style={ { fontSize: "24px", color: "white" } }>Our</span> Features</h3>
            <div className="w2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips
              um has been the industry's standard dummy text ever since the 1500s,
            </div>
          </div>
          <div className="w3">
            <div className="w5">
              <FeauturesCatalog/>
            </div>
          </div>

        </div>
        <Footer/>
      </div>
    </>
  )
}

export default AnotherHeader