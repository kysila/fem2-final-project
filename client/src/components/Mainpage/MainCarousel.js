import React, {Component} from 'react';

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
      autoplay: true,

    };
    return (
      <div
      container

      >
        <Slider {...settings}>
          <div>
            <img
              src="img/slides/01.jpeg"
              alt="First slide"
              className="slick-image"
            />
            <div className="slick-caption">
              <p>
                Yellowstone National Park, United States
              </p>
            </div>
          </div>
          <div>
            <img
              src="img/slides/02.jpeg"
              alt="Second slide"
              className="slick-image"
            />
            <div className="slick-caption">
              <p>
                Somewhere Beyond, United States
              </p>
            </div>
          </div>
          <div>
            <img
              src="img/slides/03.jpeg"
              alt="Third slide"
              className="slick-image"
            />
            <div className="slick-caption">
              <p>
                Yellowstone National Park, United States
              </p>
            </div>
          </div>
          <div>
            <img
              src="img/slides/04.jpeg"
              alt="Third slide"
              className="slick-image"
            />
            <div className="slick-caption">
              <p>
                Yellowstone National Park, United States
              </p>
            </div>
          </div>
        </Slider>
      </div>

    );
  }
}
