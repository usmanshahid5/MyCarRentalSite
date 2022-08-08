import React, { Component } from "react";
import Slider  from "react-slick";
import Feature     from '../Features/Feature';
import FeatureData from './FeatureData';
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "../home/home"

export default class FeauturesCatalog extends Component {
  render() {
    var settings = {
      infinite: false,
      button: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="catalog">
        <Slider { ...settings }>
          { FeatureData.map((val) => (
            <NavLink
              to={ `/Feature/${ val.type }` }

            >
              <Home
                title={ val.type }
                image={ val.image1 }
                description={val.description}

              /></NavLink>
          )) }
        </Slider>
      </div>
    );
  }
}