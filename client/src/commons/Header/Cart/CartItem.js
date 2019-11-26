import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { deleteProductOfCart, getCartFromLS } from '../../../store/cart/actions';
import Counter from './Counter';
import { useStyles } from './style';
import { SaveForLaterBtn } from './SaveForLaterBtn';

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const CartItem = (props) => {
  window.scrollTo(0, 0);
  const classes = useStyles();
  const deleteProduct = (id) => {
    if (props.user) {
      const url = `/cart/${id}`;
      props.deleteProductOfCart(url);
    } else {
      const cartFromLS = JSON.parse(localStorage.getItem('cart'));
      const index = cartFromLS.products.findIndex((el) => el.product.itemNo === props.itemNo);
      cartFromLS.products.splice(index, 1);
      props.getCartFromLS(cartFromLS);
      const serialCart = JSON.stringify(cartFromLS);
      localStorage.setItem('cart', serialCart);
    }
  };
  const {
    user, wishlist, id, addProductToWishlist,
  } = props;
  return (
    <Paper className={classes.root}>

      <Grid container className={classes.base_container} spacing={1}>

        <Grid item className={classes.image}>
          <img className={classes.img} src={props.imgUrl} alt="Product" />
        </Grid>

        <Grid item className={classes.main_block}>

          <Grid container className={classes.main_block_text}>

            <Grid item>
              <Link to={`/products/${props.itemNo}`} className={classes.text}>
                <p>
                  {props.name}
                  {' '}
                </p>
                <p>
                  (
                  {props.color}
                  )
                </p>
              </Link>
            </Grid>

            <Grid item>
              <ButtonGroup
                className={classes.buttons}
                variant="text"
                size="small"
                aria-label="small contained button group"
              >
                <Button onClick={() => deleteProduct(props.id)}>
                  <span className={classes.button}> Delete </span>
                </Button>
                <SaveForLaterBtn
                  user={user}
                  id={id}
                  wishlist={wishlist}
                  addProductToWishlist={addProductToWishlist}
                />
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.counter_price_box}>

          <Grid container className={classes.counter_price}>

            <Grid item className={classes.counter}>
              <Counter
                count={props.count}
                quantity={props.quantity}
                id={props.id}
                itemNo={props.itemNo}
                currentPrice={props.currentPrice}
              />
            </Grid>

            <Grid item className={classes.price}>
              <p>
                $
                {props.currentPrice}
              </p>
            </Grid>

          </Grid>
        </Grid>

      </Grid>

    </Paper>
  );
};

export default connect(mapStateToProps, {
  deleteProductOfCart,
  getCartFromLS,
})(CartItem);
