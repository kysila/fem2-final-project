import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import ProductCard from '../ProductCard/ProductCard';
import { Title } from '../Title/Title';
import { useStyles } from './Style';
import { addProductAndCreateWishlistInDB } from '../../store/wishlist/actions';

const RecentlyViewed = (props) => {
  const classes = useStyles();
  const [productsList, setProductsList] = useState([]);
  let products;

  const adjustingLength = (arr) => {
    while (arr.length > 4) {
      arr.shift();
      localStorage.setItem('product', JSON.stringify(arr));
    }
  };

  const viewedProducts = JSON.parse(localStorage.getItem('product'));

  if (viewedProducts) {
    adjustingLength(viewedProducts);
  }
  const currentLocal = JSON.parse(localStorage.getItem('product'));

  useEffect(() => {
    setProductsList(currentLocal);
    // eslint-disable-next-line
  }, []);

  const { addProductToWishlist } = props;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  if (productsList) {
    // eslint-disable-next-line
    products = productsList.map((el) => (
      <div key={el.itemNo}>
        <ProductCard
          obj={el}
          className={classes.card}
          name={el.name}
          itemImg={el.itemImg}
          price={el.price}
          rating={el.rating}
          itemNo={el.itemNo}
          id={el.id}
          addProductToWishlist={addProductToWishlist}
        />
      </div>
    ));
  } else {
    return (
      <Container maxWidth="md" className={classes.mainContainer} />
    );
  }


  return (
    <div className={classes.sectionBackground}>
      <Container maxWidth="md" className={classes.mainContainer}>
        <Title title="You recently viewed" />
        <Slider className={classes.paddingTop} {...settings}>
          {products}
        </Slider>
      </Container>
    </div>
  );
};

const RecentlyVwd = connect(null, {
  addProductToWishlist: addProductAndCreateWishlistInDB,
})(RecentlyViewed);
export {
  RecentlyVwd as RecentlyViewed,
};
