import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { useStyles } from './style';
import {
  getCartFromLS,
  addProductToCart,
  decreaseQuantityOfProducts,
} from '../../../store/cart/actions';

const mapStateToProps = (state) => ({
  user: state.auth.user,
  cart: state.cartReducer.cart.products,
});

const Counter = (props) => {
  const classes = useStyles();
  let cartFromLS;

  const addCount = (cartQuantity, quantity, id) => {
    if (cartQuantity < quantity) {
      if (props.user) {
        const url = `/cart/${id}`;
        props.addProductToCart(url);
      } else {
        cartFromLS = JSON.parse(localStorage.getItem('cart'));
        cartFromLS.products.map((el) => {
          if (el.product.itemNo === props.itemNo) {
            el.cartQuantity += 1;
          }
        });
        props.getCartFromLS(cartFromLS);
        const serialCart = JSON.stringify(cartFromLS);
        localStorage.setItem('cart', serialCart);
      }
    }
  };

  const subtractCount = (cartQuantity, id) => {
    if (cartQuantity > 1) {
      if (props.user) {
        const url = `/cart/product/${id}`;
        props.decreaseQuantityOfProducts(url);
      } else {
        cartFromLS = JSON.parse(localStorage.getItem('cart'));
        cartFromLS.products.map((el) => {
          if (el.product.itemNo === props.itemNo) {
            el.cartQuantity -= 1;
          }
        });
        props.getCartFromLS(cartFromLS);
        const serialCart = JSON.stringify(cartFromLS);
        localStorage.setItem('cart', serialCart);
      }
    }
  };
  return (
    <ButtonGroup className={classes.buttons} variant="contained" size="small">
      <Button
        disabled={props.count <= 1}
        onClick={() => subtractCount(props.count, props.id)}
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <Button variant="text">
        <Input
          value={props.count}
          classes={{
            underline: classes.underline,
            root: classes.input,
            input: classes.input }}
        />
      </Button>
      <Button
        disabled={props.count >= props.quantity}
        onClick={() => addCount(props.count, props.quantity, props.id)}
      >
        <AddIcon fontSize="small" />
      </Button>
    </ButtonGroup>
  );
};

export default connect(mapStateToProps, {
  getCartFromLS,
  addProductToCart,
  decreaseQuantityOfProducts,
})(Counter);
