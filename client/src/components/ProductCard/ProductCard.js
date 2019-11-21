import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
import { addProductToCart, getCartFromLS } from '../../store/cart/actions';
import { BagIcon } from '../Icons/Icons';

import { useStyles } from './style';
import { AddToWishListButton } from '../AddToWishListButton/AddToWishListButton';
import AddToCompareButton from '../AddToCompareButton/AddToCompareButton';

const mapStateToProps = (store) => ({
  user: store.auth.user,
  cart: store.cartReducer.cart,
});

const ProductCard = ({
  obj, name, itemImg, price, url, rating, key, itemNo, id, distance, maxSpeed, chargingTime, ...props
}) => {
  const [state, setState] = useState({
    openButtons: false,
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

  const filterCart = (arr, objParams) => arr.some((el) => el.itemNo === objParams);

  const viewedItemListener = () => {
    onmouseover = false;
    const product = JSON.parse(localStorage.getItem('product'));
    if (product) {
      const item = itemNo;
      if (!filterCart(product, item)) {
        localStorage.setItem('product', JSON.stringify(product.concat([{
          name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime,
        }])));
      }
    } else {
      const newProduct = [].concat([{
        name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime,
      }]);
      localStorage.setItem('product', JSON.stringify(newProduct));
    }
  };

  useEffect(() => {
    axios.get(url)
      .then((data) => {
        setItem({
          ...item,
          product: data.data,
        });
      });
  }, [url]);

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Link to={url || '#'} className={classes.link}>
        <Card
          className={classes.card}
          onClick={viewedItemListener}
          onMouseOver={showButtonsPanel}
          onMouseOut={hideButtonsPanel}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`${itemImg}`}
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
                {price}
              </Typography>
              <Typography
                className={classes.oldPrice}
                gutterBottom
                variant="h5"
                display="inline"
                component="h2"
              >
                $4,010
              </Typography>
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
            className={classes.buttonStyle}
            user={props.user}
            wishlist={props.wishlist}
            addProductToWishlist={props.addProductToWishlist}
            iconStyle={{
              fill: '#AAA',
            }}
            iconStyleChosen={{
              fill: '#6686FF',
            }}
          />
          <AddToCompareButton
            className={classes.buttonStyle}
            allProps={props}
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
            onClick={(e) => {
              props.user
                ? props.addProductToCart(`/cart/${id}`)
                : handlerLocalStorage('cart', initialProductsCart, itemNo, item, props.getCartFromLS);
            }}
            className={classes.buttonStyle}
            style={{
              borderLeft: '1px solid #bdbdbd'
            }}
          >
            <BagIcon
              className="icon"
              style={{
                width: 30,
                height: 23,
              }}
              color="action"
            />
          </Button>
        </ButtonGroup>
      </CardActions>
    </Box>
  );
};

export default connect(mapStateToProps, { addProductToCart, getCartFromLS })(ProductCard);