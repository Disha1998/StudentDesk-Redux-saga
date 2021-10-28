import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Container } from "react-bootstrap";

export default class Responsive extends Component {
  render() {
    const { booksData } = this.props;

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
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
      <div style={{ background: "#f3f3f3" }}>
        <div className="container detail-slider">
          <div
            className="slider"
            style={{ backgroundColor: "#f3f3f3", paddingBottom: "150px" }}
          >
            <div className="row">
              <div className="col">
                <h2 className="SliderH2"> {this.props.title} </h2>
                <div className="main-line"></div>
                <Slider {...settings}>
                  {booksData.map((book) => (
                    <div className="NewArrivel">
                      <img
                        style={{ height: "200px", width: "135px" }}
                        alt=""
                        src={book.photo}
                      />
                      <div className="caption">
                        <div>{book.name}</div>
                        <div>
                          {book.price === 0 ? <p> FOR FREE</p> : book.price}
                          <span>
                            <strike className="" style={{ color: "darkgrey" }}>
                              ₹{book.mrp}
                            </strike>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
