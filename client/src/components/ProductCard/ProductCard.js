import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { handlerLocalStorage } from '../AddToCartButton/script';
import { addProductToCart, getCartFromLS, cartSnackbar } from '../../store/cart/actions';
import { BagIcon } from '../Icons/Icons';

import { useStyles } from './style';
import { AddToWishListButton } from '../AddToWishListButton/AddToWishListButton';
import AddToCompareButton from '../AddToCompareButton/AddToCompareButton';

const mapStateToProps = (store) => ({
  user: store.auth.user,
  cart: store.cartReducer.cart,
});

const ProductCard = ({
  obj, name, itemImg, price, url, rating, key, itemNo, id, distance,
  // eslint-disable-next-line no-shadow,max-len
  user, maxSpeed, chargingTime, wishlist, addProductToWishlist, addProductToCart, getCartFromLS, cartSnackbar, quantity,
}) => {
  const [state, setState] = useState({
    openButtons: false,
  });
  const [buttonState, setButtonState] = useState({
    disabled: false,
  });
  const [item, setItem] = useState({
    cartQuantity: 1,
    product: {},
  });

  const initialProductsCart = {
    products: [
      item,
    ],
  };

  const showButtonsPanel = () => {
    setState(() => ({
      openButtons: true,
    }));
  };

  const hideButtonsPanel = () => {
    setState({
      openButtons: false,
    });
  };

  const checkProduct = () => {
    setButtonState({
      disabled: true,
    });
  };

  const filterCart = (arr, objParams) => arr.some((el) => el.itemNo === objParams);

  const viewedItemListener = () => {
    onmouseover = false;
    const product = JSON.parse(localStorage.getItem('product'));
    if (product) {
      const itemNumb = itemNo;
      if (!filterCart(product, itemNumb)) {
        localStorage.setItem('product', JSON.stringify(product.concat([{
          name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime, obj, id,
        }])));
      }
    } else {
      const newProduct = [].concat([{
        name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime, id,
      }]);
      localStorage.setItem('product', JSON.stringify(newProduct));
    }
  };

  useEffect(() => {
    setItem(() => ({
      ...item,
      product: obj,
    }));
  }, [obj]);

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Link to={`/shop/${itemNo}` || '#'} className={classes.link}>
        <Card
          className={classes.card}
          onClick={viewedItemListener}
          onMouseOver={showButtonsPanel}
          onMouseOut={hideButtonsPanel}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={itemImg}
            />
            <CardContent
              className={classes.cardContent}
            >
              <Typography
                className={classes.newPrice}
                gutterBottom
                variant="h5"
                display="inline"
                component="h2"
              >
                {`$${price}`}
              </Typography>
              {/*<Typography*/}
              {/*  className={classes.oldPrice}*/}
              {/*  gutterBottom*/}
              {/*  variant="h5"*/}
              {/*  display="inline"*/}
              {/*  component="h2"*/}
              {/*>*/}
              {/*  {obj.previousPrice ? `$${obj.previousPrice}` : null}*/}
              {/*</Typography>*/}
              <Typography
                className={classes.fontDesc}
                variant="body2"
                component="p"
              >
                {name}
              </Typography>
              <Rating
                name="half-rating"
                precision={0.5}
                value={rating}
                readOnly
              />
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <CardActions
        onMouseOver={showButtonsPanel}
        onMouseOut={hideButtonsPanel}
        className={classes.buttonField}
        style={state.openButtons ? { bottom: '-49px', opacity: 1, boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.25)' } : null}
      >
        <ButtonGroup
          className={classes.buttonGroup}
          variant="contained"
          aria-label="full-width contained primary button group"
        >
          <AddToWishListButton
            obj={obj}
            id={id}
            className={classes.buttonStyle}
            user={user}
            wishlist={wishlist}
            addProductToWishlist={addProductToWishlist}
            iconStyle={{
              fill: '#7D7D7D',
            }}
            iconStyleChosen={{
              fill: '#6686FF',
            }}
          />
          <AddToCompareButton
            className={classes.buttonStyle}
            iconStyle={{
              width: '30px',
              height: '23px',
            }}
            name={name}
            itemNo={itemNo}
            itemImg={itemImg}
            price={price}
            url={url}
            rating={rating}
            key={key}
            distance={distance}
            maxSpeed={maxSpeed}
            chargingTime={chargingTime}
          />
          <Button
            disabled={buttonState.disabled}
            onClick={(e) => {
              // eslint-disable-next-line no-unused-expressions
              if (user) {
                addProductToCart(`/cart/${id}`);
              } else {
                handlerLocalStorage('cart', initialProductsCart, itemNo, item, getCartFromLS, quantity, checkProduct);
                cartSnackbar();
              }
            }}
            className={classes.buttonStyle}
            style={{
              borderLeft: '1px solid #bdbdbd',
            }}
          >
            <BagIcon
              className="icon"
              style={{
                width: 30,
                height: 23,
              }}
            />
          </Button>
        </ButtonGroup>
      </CardActions>
    </Box>
  );
};

export default connect(mapStateToProps, { addProductToCart, getCartFromLS, cartSnackbar })(ProductCard);
