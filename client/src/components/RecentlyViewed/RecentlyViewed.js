import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ProductCard } from '../ProductCard/ProductCard';
import { Title } from '../Title/Title';
import { useStyles } from './Style';

export const RecentlyViewed = () => {
  const classes = useStyles();
  const [productsList, setProductsList] = useState([]);
  let products;

  const getDuplicateProduct = (arr) => {
    const result = {};
    arr.forEach((el) => {
      if (result[el.url] !== undefined) {
        ++result[el.url];
      } else {
        result[el.url] = 1;
      }
    });
    const key = Object.keys(result).find((key) => result[key] !== 1);
    console.log('twince', key);
    arr.forEach((el) => {
      const duplicate = arr.indexOf((el.url === key));
      console.log('duplicate', duplicate);
      arr.splice(duplicate, 1);
    });
    console.log(arr);
  };

  const adjustingLength = (arr) => {
    while (arr.length > 4) {
      arr.shift();
      localStorage.setItem('product', JSON.stringify(arr));
    }
  };

  const viewedProducts = JSON.parse(localStorage.getItem('product'));
  // getDuplicateProduct(viewedProducts);
  if (viewedProducts) {
    adjustingLength(viewedProducts);
  }
  const currentLocal = JSON.parse(localStorage.getItem('product'));
  console.log('currentLocal', currentLocal);
  // const uniqueItems = [];
  // currentLocal.forEach((el) => {
  //   console.log(el.itemNo);
  //   if (!uniqueItems.includes(el.itemNo)) {
  //     uniqueItems.push(el.itemNo);
  //   }
  // });
  // console.log('uniqueItems', uniqueItems);

  useEffect(() => {
    setProductsList(currentLocal);
  }, []);


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
    const uniqueItems = [];
    products = productsList.map((el) => {
      if (!uniqueItems.includes(el.itemNo)) {
        uniqueItems.push(el.itemNo);
        return (
          <ProductCard
            key={el.itemNo}
            className={classes.card}
            name={el.name}
            itemImg={el.itemImg}
            price={el.price}
            url={el.url}
            rating={el.rating}
          />
        );
      }
    });
  } else {
    return (
      <Container maxWidth="md" className={classes.mainContainer} />
    );
  }


  return (
    <Container maxWidth="md" className={classes.mainContainer}>
      <Title title="You recently viewed" />
      <Slider className={classes.paddingTop} {...settings}>
        {products}
      </Slider>
    </Container>
  );
};
