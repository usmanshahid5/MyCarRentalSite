import React, { Component } from "react";
import Slider               from "react-slick";
import Home                 from "../home/home";
import cities               from "./Cities";
import { NavLink }          from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme-try.css";

export default class CitiesCatalog extends Component {
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
            slidesToShow: 2,
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
          { cities.map((val) => (
            <NavLink
              to={ `/city/${ val.city }` }

            >
              <Home
                image={ val.image }
                title={ val.city }
                description={ val.description }
              /></NavLink>
          )) }
        </Slider>
      </div>
    );
  }
}