import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TableCell } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import compareReducer from '../../store/compare/compareReducer';
import { deleteProductsFromCompare } from '../../store/compare/actions';
import { useStyles } from './style';
import { getCartFromLS, addProductToCart } from '../../store/cart/actions';


const mapStateToProps = (store) => ({
  products: store.compareReducer.products,
  user: store.auth.user,
  cart: store.cartReducer.cart,
});

const ProductForCompare = (
  {
    name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime, obj, ...props
  },
) => {
  const classes = useStyles();
  const productsArray = props.products;

  const comparableProducts = productsArray.map((el) => (
    <TableCell key={el.itemNo} align="center">
      <Card
        quantity={el.quantity}
        className={classes.card}
      >
        <IconButton
          aria-label="delete"
          className={classes.margin}
          onClick={(e) => {
            e.preventDefault();
            props.deleteProductsFromCompare(el);
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <Link to={`/shop/${el.itemNo}`} className={classes.link}>
          <CardMedia
            className={classes.media}
            image={el.itemImg}
          />
          <CardContent
            className={classes.cardContent}
          >
            <Typography
              className={classes.fontDesc}
              variant="body2"
              component="p"
            >
              {el.name}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </TableCell>
  ));

  return (
    <React.Fragment>
      {comparableProducts}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, {
  compareReducer, deleteProductsFromCompare, addProductToCart, getCartFromLS,
})(ProductForCompare);
