import React from 'react';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function MainCarousel() {

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} >
      <div>
        <img src="img/slides/slide01.jpg" alt="Ride with us" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="img/slides/slide02.jpg" alt="Monster of e-bike" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="img/slides/slide03.jpg" alt="Ride it  of e-bike" />
        <p className="legend">Legend 1</p>
      </div>
    </Carousel>
  )
}