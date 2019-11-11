import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import axios from 'axios';

import { Title } from '../Title/Title';
import { ProductCard } from '../ProductCard/ProductCard';
import Preloader from '../Preloader/Preloader';

import 'slick-carousel/slick/slick.css';
import './FavouriteCarousel.css';

export const Favourites = (props) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  let favoritesProducts;

  useEffect(() => {
    axios.get('/products/rates/4.5').then((products) => {
      setLoading(false);
      setList(products.data);
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
    maxWidth: 920,
    margin: '50px auto',
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <section id="favourites" style={containerStyle}>

      <Title title="Choose from our Customer Favorites" />
      <div
        className="favor-slide-container"
      >
        <Slider
          {...settings}
          style={carouselStyle}
        >
          {favoritesProducts}
        </Slider>
      </div>
    </section>

  );
};
