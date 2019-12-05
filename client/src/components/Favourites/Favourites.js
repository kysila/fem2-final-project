/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import axios from 'axios';

import { Title } from '../Title/Title';
import ProductCard from '../ProductCard/ProductCard';
import Preloader from '../Preloader/Preloader';
import { getWishlistFromDB, addProductAndCreateWishlistInDB } from '../../store/wishlist/actions';
import 'slick-carousel/slick/slick.css';
import './FavouriteCarousel.css';

function Favorites({ user, getWishlist, addProductToWishlist }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  let favoritesProducts;

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    const loadData = () => {
      try {
        axios.get('/products/rates/4.5').then((products) => {
          setLoading(false);
          setList(products.data);
        });
      } catch (err) {
        if (axios.isCancel(err)) {
          // TODO: NOTIFICATION: 'cancelled'
        } else {
          throw err;
        }
      }
    };
    loadData();
    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    if (user) {
      getWishlist();
    }
    // eslint-disable-next-line
  }, [user]);

  if (list && !loading) {
    // eslint-disable-next-line
    favoritesProducts = list.map((el, i) => (
      <ProductCard
        name={el.name}
        itemImg={el.imageUrls[0]}
        price={el.currentPrice}
        obj={el}
        url={`products/${el.itemNo}`}
        rating={el.rating}
        itemNo={el.itemNo}
        id={el._id}
        quantity={el.quantity}
        key={i}
        distance={el.distance}
        maxSpeed={el.maxSpeed}
        chargingTime={el.chargingTime}
        addProductToWishlist={addProductToWishlist}
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
          autoplay: true,
          pauseOnHover: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          pauseOnHover: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          pauseOnHover: true,
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
}

function putStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export const Favourites = connect(putStateToProps, {
  addProductToWishlist: addProductAndCreateWishlistInDB,
  getWishlist: getWishlistFromDB,
})(Favorites);
