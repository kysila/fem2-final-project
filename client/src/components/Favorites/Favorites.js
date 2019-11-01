import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Slider from 'react-slick';
import { Title } from '../Title/Title';
import { ProductCard } from '../ProductCard/ProductCard';
// import { SampleNextArrow } from './CarouselArrows/SampleNextArrow';
// import { SamplePrevArrow } from './CarouselArrows/SamplePrevArrow';
import Preloader from '../Preloader/Preloader';

// import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../MainCarousel/MainCarousel.css';

export const Favorites = (props) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  let favoritesProducts;

  useEffect(() => {
    axios.get('./products').then((data) => {
      const products = data.data.filter((e) => e.rating >= 4.5);
      setLoading(false);
      setList(products);
    });
  }, []);

  if (list && !loading) {
    favoritesProducts = list.map((el) => (
      <ProductCard
        name={el.name}
        itemImg={el.imageUrls[0]}
        price={el.currentPrice}
        url={`products/${el.itemNo}`}
        rating={el.rating}
      />
    ));
  } else if (loading) {
    return <Preloader />;
  }

  const containerStyle = {
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingBottom: 30,
  };

  const carouselStyle = {
    maxWidth: 690,
    margin: '50px auto',
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <section style={containerStyle}>
      <Title title="Choose from our Customer Favorites" />
      <div className="favor-slide-container">

        <Slider
          {...settings}
          style={carouselStyle}
        >
          {favoritesProducts}
        </Slider>
      </div>
    </section>
  );
}
