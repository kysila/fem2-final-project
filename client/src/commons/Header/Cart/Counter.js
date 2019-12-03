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
  const {
    user,
    // eslint-disable-next-line no-shadow
    addProductToCart,
    // eslint-disable-next-line no-shadow
    getCartFromLS,
    // eslint-disable-next-line no-shadow
    decreaseQuantityOfProducts,
    quantity,
    itemNo,
    count,
    id,
  } = props;
  const classes = useStyles();
  let cartFromLS;

  const addCount = (cartQuantity, quant, itemId) => {
    if (cartQuantity < quant) {
      if (user) {
        const url = `/cart/${itemId}`;
        addProductToCart(url);
      } else {
        cartFromLS = JSON.parse(localStorage.getItem('cart'));
        cartFromLS.products.map((el) => {
          if (el.product.itemNo === itemNo) {
            el.cartQuantity += 1;
          }
          return el;
        });
        getCartFromLS(cartFromLS);
        const serialCart = JSON.stringify(cartFromLS);
        localStorage.setItem('cart', serialCart);
      }
    }
  };

  const subtractCount = (cartQuantity, itemId) => {
    if (cartQuantity > 1) {
      if (user) {
        const url = `/cart/product/${itemId}`;
        decreaseQuantityOfProducts(url);
      } else {
        cartFromLS = JSON.parse(localStorage.getItem('cart'));
        cartFromLS.products.map((el) => {
          if (el.product.itemNo === props.itemNo) {
            el.cartQuantity -= 1;
          }
          return el;
        });
        getCartFromLS(cartFromLS);
        const serialCart = JSON.stringify(cartFromLS);
        localStorage.setItem('cart', serialCart);
      }
    }
  };
  return (
    <ButtonGroup className={classes.buttons} variant="contained" size="small">
      <Button
        disabled={count <= 1}
        onClick={() => subtractCount(count, id)}
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <Button variant="text">
        <Input
          value={count}
          classes={{
            underline: classes.underline,
            root: classes.input,
            input: classes.input,
          }}
        />
      </Button>
      <Button
        disabled={props.count >= quantity}
        onClick={() => addCount(count, quantity, id)}
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
