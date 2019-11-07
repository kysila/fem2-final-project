import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import { connect } from 'react-redux';
import { useStyles } from './style';

const mapStateToProps = (state) => ({
  productsToBuy: state.cartReducer.productsToBuy,
  countOfProducts: state.cartReducer.countOfProducts,
  user: state.auth.user,
});


const Counter = (props) => {
  const [disabledStatusSub, setDisabledStatusSub] = useState(false);
  const [disabledStatusAdd, setDisabledStatusAdd] = useState(false);
  const [counterStatus, setCounterStatus] = useState(props.count);
  const classes = useStyles();
  console.log('Props From Counter =====>', props);
  let cartFromLS;

  const addCount = (a, b, id) => {
    if (a < b) {
      setDisabledStatusAdd(false);
      setDisabledStatusSub(false);
      if (props.user) {
        setCounterStatus(counterStatus + 1)
        axios
          .put(`/cart/${id}`)
          .then((updatedCart) => {
            console.log('Updated cart after increase', updatedCart);
          })
          .catch((err) => {
            console.log("Can't  add new product", err.response.data);
          });
      } else {
        cartFromLS = JSON.parse(localStorage.getItem('cart'));
        cartFromLS.map((el) => {
          if (el.itemNo === props.itemNo) {
            el.cartQuantity += 1;
          }
        });
        // console.log(cartFromLS);
        const serialCart = JSON.stringify(cartFromLS);
        localStorage.setItem('cart', serialCart);
        setCounterStatus(counterStatus + 1);
      }
    } else {
      console.log("Can't  add new product");
      setDisabledStatusAdd(true);
    }
  };

  const subtractCount = (a, id) => {
    setDisabledStatusAdd(false);
    setDisabledStatusSub(false);
    if (a > 0) {
      if (props.user) {
        setCounterStatus(counterStatus - 1);
        axios
          .delete(`/cart/${id}`)
          .then((updatedCart) => {
            // console.log('Updated cart after decrease', updatedCart);
          })
          .catch((err) => {
            console.log("Can't  add new product", err.response.data);
          });
      } else {
        cartFromLS = JSON.parse(localStorage.getItem('cart'));
        cartFromLS.map((el) => {
          if (el.itemNo === props.itemNo) {
            el.cartQuantity -= 1;
          }
        });
        console.log(cartFromLS);
        const serialCart = JSON.stringify(cartFromLS);
        localStorage.setItem('cart', serialCart);
        setCounterStatus(counterStatus - 1);
      }
    } else {
      console.log("Can't  subtract new product");
      setDisabledStatusSub(true);
    }
  };
  return (
    <ButtonGroup className={classes.buttons} variant="contained" size="small">
      {/* eslint-disable-next-line no-const-assign,max-len */}
      <Button disabled={disabledStatusSub}  onClick={() => subtractCount(counterStatus, props.id)}> - </Button>
      <Button variant="text">
        {/* eslint-disable-next-line max-len */}
        <Input value={counterStatus} classes={{ underline: classes.underline, root: classes.input, input: classes.input }} />
      </Button>
      {/* eslint-disable-next-line max-len */}
      <Button disabled={disabledStatusAdd} onClick={() => addCount(counterStatus, props.quantity, props.id)}> + </Button>
    </ButtonGroup>
  );
};

export default connect(mapStateToProps)(Counter);
