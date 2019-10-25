import React, { Component } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MainCarousel.css';

// class CustomSlide extends Component {
//   render() {
//     const { index, ...props } = this.props;
//     return (
//       <div {...props}>
//         <h3>{index}</h3>
//       </div>
//     );
//   }
// }


export default class MainCarousel extends Component {
  render() {
    const settings = {
      // adaptiveHeight: true,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,

    };
    return (
      <div className="main-Carousel">
        <Slider {...settings}>
          <div className="slide-container">
            <img
              src="img/slides/01.jpeg"
              alt="First slide"
              className="slick-image"
            />
            <div className="slide-information">
              <p className="slick-description">Show Summer Who’s Boss
            </p>
              <p className="slick-information__explanation">Say hello to the UBCO FRX1 free ride bike. Built for extreme off-road riding, whether you’re shredding the trail, climbing uphill, or taking on the local tracks.</p>
            </div>
          </div>
          <div className="slide-container">
            <img
              src="img/slides/02.jpeg"
              alt="Second slide"
              className="slick-image"
            />
            <div className="slide-information">
              <p className="slick-description">Show Summer Who’s Boss2
            </p>
              <p className="slick-information__explanation">Say hello to the UBCO FRX1 free ride bike. Built for extreme off-road riding, whether you’re shredding the trail, climbing uphill, or taking on the local tracks.</p>
            </div>
          </div>
        </Slider>
      </div>

    );
  }
}
