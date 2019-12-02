/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Material UI
import {
  Container, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Local imports
import { useStyles } from './style';
import { addProductAndCreateWishlistInDB } from '../../../store/wishlist/actions';
import ProductCard from '../../ProductCard/ProductCard';

const ViewedItems = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('');
  const [productsList, setProductsList] = useState([]);
  const [arrInfinity, setArrInfinity] = useState({ infinity: false });
  const { addProductToWishlist } = props;
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let products;
  let productsListInfo;
  const currentLocal = JSON.parse(localStorage.getItem('product'));

  useEffect(() => {
    setProductsList(currentLocal);
    if (currentLocal && currentLocal.length > 1) {
      setArrInfinity({ infinity: true });
    }
  }, []);

  const settings = {
    centerPadding: '0px',
    dots: true,
    infinite: arrInfinity.infinity,
    speed: 650,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1052,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 482,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  if (productsList) {
    products = productsList.map((el) => (
      <div
        key={el.itemNo}
      >
        <ProductCard
          obj={el.obj}
          className={classes.card}
          name={el.name}
          itemImg={el.itemImg}
          price={el.price}
          url={el.url}
          rating={el.rating}
          itemNo={el.itemNo}
          id={el.id}
          addProductToWishlist={addProductToWishlist}
        />
      </div>
    ));
  }

  if (productsList) {
    productsListInfo = (
      <Slider
        {...settings}
        className={classes.paddingTop}
      >
        {products}
      </Slider>
    );
  } else {
    productsListInfo = (
      <Typography
        align="center"
      >
        You have not seen any item yet.
      </Typography>
    );
  }

  return (
    <React.Fragment>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            className={classes.heading}
            style={{ color: '#6A86E8' }}
          >
            My Viewed Items
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          className={classes.expansionPanelDetails}
        >
          <Container
            className={classes.mainContainer}
          >
            {productsListInfo}
          </Container>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );
};

const ViewedItms = connect(null, {
  addProductToWishlist: addProductAndCreateWishlistInDB,
})(ViewedItems);
export { ViewedItms as ViewedItems };
