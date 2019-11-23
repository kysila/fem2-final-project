import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductToCart, getCartFromLS } from "../../../store/cart/actions";
import { HeartIcon, WeigherIcon } from "../../Icons/Icons";
import { AddToCartButton } from "../../AddToCartButton/AddToCartButton";
import { AddToWishListButton } from "../../AddToWishListButton/AddToWishListButton";
import AddToCompareButton from '../../AddToCompareButton/AddToCompareButton';

// import axios from 'axios';

import { Typography } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box";

import { useStyles } from "./style";

const mapStateToProps = (store) => ({
  user: store.auth.user,
  cart: store.cartReducer.cart,
});

const ProductDetailsCard = (props) => {
  const [state, setState] = useState({
    disabled: false,
    text: 'ADD TO CART',
  });

  const obj = props.data.obj;
  const colors = props.data.colors.data;

  const checkProduct = () => {
    setState({
      ...state,
      disabled: true,
      text: 'UNAVALIABLE',
    });
  };

  let links;
  if (colors) {
    links = colors.map((el, i) => {
      return (
        <Link
          style={obj.itemNo === el.itemNo
            ? {color: '#444',
              backgroundColor: '#FFF',
              border: '1px solid #444',
            }
            : null}
          key={i}
          to={`/products/${el.itemNo}`}
        >
          {el.color}
        </Link>
      );
    });
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        className={classes.categories}
        variant='body1'>
        {obj.categories}
      </Typography>
      <Typography
        className={classes.name}
        variant='h2'>
        {obj.name}
      </Typography>
      <Rating
        name="half-rating"
        size="large"
        precision={0.5}
        value={obj.rating}
        readOnly />
      <Box className={classes.otherColors}>
        {links}
      </Box>
      <Box className={classes.price}>
        <Typography>
          {`$${obj.currentPrice}`}
        </Typography>
        <Typography className='oldPrice'>
          $4000
        </Typography>
      </Box>
      <ButtonGroup
        variant="contained"
        color="primary"
        size="large"
        aria-label="large contained primary button group"
        className={classes.buttons}
      >
        <AddToCartButton
          disabled={state.disabled}
          text={state.text}
          obj={obj}
          user={props.user}
          addToCartFunc={props.addProductToCart}
          actions={props.getCartFromLS}
          checkProduct={checkProduct}
          style={{
            width: '250px', borderRadius: '4px'
          }}
          iconStyle={{
            width: 21,
            height: 20,
            fill: '#fff',
            marginRight: 8
          }}
        />
        <AddToWishListButton
          obj={obj}
          user={props.user}
          allProps={props}
          className={'otherBtn'}
          iconStyle={{
            fill: '#AAA',
          }}
        />
        <AddToCompareButton
          obj={obj}
          user={props.user}
          allProps={props}
          className={'otherBtn'}
          iconStyle={{
            fill: '#AAA',
            width: '30px',
            height: '23px',
          }}
          name={obj.name}
          itemImg={obj.itemImg}
          price={obj.price}
          url={obj.url}
          rating={obj.rating}
          key={obj.key}
          itemNo={obj.itemNo}
          distance={obj.distance}
          maxSpeed={obj.maxSpeed}
          chargingTime={obj.chargingTime}
        />
      </ButtonGroup>
    </div>
  )
};

export default connect(mapStateToProps, { addProductToCart, getCartFromLS })(ProductDetailsCard);
