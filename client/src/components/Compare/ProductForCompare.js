import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { addProductToCart, getCartFromLS } from '../../store/cart/actions';
import { useStyles } from './style';

import { handlerLocalStorage } from '../AddToCartFunc/script';
import { BagIcon } from '../Icons/Icons';


export const ProductForCompare = (props) => {
  const classes = useStyles();
  const obj = props.data;

  // const productItem = {
  //   cartQuantity: 1,
  //   product: obj,
  // };
  //
  // const productsCart = {
  //   products: [
  //     productItem,
  //   ],
  // };


  return (
    <Link to={props.url} className={classes.link}>
      <Card
        className={classes.card}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${props.itemImg}`}
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
              {props.currentPrice}
            </Typography>
            <Typography
              className={classes.fontDesc}
              variant="body2"
              component="p"
            >
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button
        className="addToCardBtn"
        // onClick={() => {
        //   props.user
        //     ? props.addProductToCart(`/cart/${obj._id}`)
        //     : handlerLocalStorage('cart', productsCart, obj.itemNo, productItem, props.getCartFromLS);
        // }}
      >
        <BagIcon
          style={{
            width: 21,
            height: 20,
            fill: '#fff',
            marginRight: 8,
          }}
        />
          ADD TO CART
      </Button>
    </Link>
  );
};

// const mapStateToProps = (store) => ({
//   user: store.auth.user,
//   cart: store.cartReducer.cart,
// });
//
// export default connect(mapStateToProps, { addProductToCart, getCartFromLS })(ProductForCompare);
