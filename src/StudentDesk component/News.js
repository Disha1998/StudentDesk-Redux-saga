import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="News">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="NewsH3">StudentDesk in the News </h3>
            
          <div className="main-line"></div>
            <Slider {...settings}>
              <div>
                <img
                  alt=""
                  src="http://www.studentdesk.in/img/home/knowstartup_160.png"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="http://www.studentdesk.in/img/home/sakaltimes_160.png"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="http://www.studentdesk.in/img/home/techstory_160.png"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="http://www.studentdesk.in/img/home/indiaspark_160.png"
                />
              </div>
              <div>
                <img
                  alt=""
                  src="http://www.studentdesk.in/img/home/nbw_160.png"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
