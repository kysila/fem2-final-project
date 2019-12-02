import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Typography, ButtonGroup, Box, MenuItem,
} from '@material-ui/core';

import Rating from '@material-ui/lab/Rating';
import AddToCompareButton from '../../AddToCompareButton/AddToCompareButton';
import { AddToWishListButton } from '../../AddToWishListButton/AddToWishListButton';
import { AddToCartButton } from '../../AddToCartButton/AddToCartButton';
import { addProductToCart, getCartFromLS } from '../../../store/cart/actions';

import { useStyles } from './style';

const mapStateToProps = (store) => ({
  user: store.auth.user,
  cart: store.cartReducer.cart,
});

const ProductDetailsCard = (props) => {
  const [state, setState] = useState({
    disabled: false,
    text: 'ADD TO CART',
  });
  const { addProductToWishlist, user } = props;
  const obj = props.data.obj;
  const colors = props.data.colors.data;
  // eslint-disable-next-line
  const [color, setColor] = useState(obj.color);

  // eslint-disable-next-line
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const checkProduct = () => {
    setState({
      ...state,
      disabled: true,
      text: 'UNAVALIABLE',
    });
  };

  let links;
  if (colors) {
    links = colors.map((el, i) => (
      <Link
        style={obj.itemNo === el.itemNo
          ? {
            color: '#444',
            backgroundColor: '#FFF',
            border: '1px solid #444',
          }
          : null}
        key={i}
        to={`/products/${el.itemNo}`}
      >
        {el.color}
      </Link>
    ));
  }
  // eslint-disable-next-line
  let options;
  if (colors) {
    // eslint-disable-next-line
    options = colors.map((el, i) => (
      <MenuItem value={`/products/${el.itemNo}`} key={i}>
        {el.color}
      </MenuItem>
    ));
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        className={classes.categories}
        variant="body1"
      >
        {obj.categories}
      </Typography>
      <Typography
        className={classes.name}
        variant="h2"
      >
        {obj.name}
      </Typography>
      <Rating
        name="half-rating"
        size="large"
        precision={0.5}
        value={obj.rating}
        readOnly
      />
      <Box className={classes.otherColors}>
        {links}
      </Box>
      <Box className={classes.price}>
        <Typography>
          {`${obj.currentPrice}`}
        </Typography>
        <Typography className="oldPrice">
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
          user={user}
          addToCartFunc={props.addProductToCart}
          actions={props.getCartFromLS}
          checkProduct={checkProduct}
          style={{
            width: '60%', borderRadius: '4px',
          }}
          iconStyle={{
            width: 21,
            height: 20,
            fill: '#fff',
            marginRight: 8,
          }}
        />
        <AddToWishListButton
          obj={obj}
          user={user}
          className="otherBtn"
          addProductToWishlist={addProductToWishlist}
          iconStyle={{
            fill: '#AAA',
          }}
          iconStyleChosen={{
            fill: '#6686FF',
          }}
        />
        <AddToCompareButton
          className="otherBtn"
          iconStyle={{
            fill: '#AAA',
            width: '30px',
            height: '23px',
          }}
          name={obj.name}
          itemImg={obj.itemImg}
          price={obj.currentPrice}
          url={obj.url}
          rating={obj.rating}
          key={obj.key}
          itemNo={obj.itemNo}
          distance={obj.distance}
          maxSpeed={obj.maxSpeed}
          chargingTime={obj.chargingTime}
          obj={obj}
        />
      </ButtonGroup>
    </div>
  );
};

export default connect(mapStateToProps, { addProductToCart, getCartFromLS })(ProductDetailsCard);
