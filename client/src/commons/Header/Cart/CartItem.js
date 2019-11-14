import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { setCountOfProducts } from '../../../store/cart/actions';
import Counter from './Counter';
import { useStyles } from './style';

const mapStateToProps = (state) => ({
  countOfProducts: state.cartReducer.countOfProducts,
  user: state.auth.user,
});


const CartItem = (props) => {
  const classes = useStyles();
  // console.log('Props from CartItem', props);

  const deleteProduct = () => {
    // if (props.user) {
    //   axios.delete(`/cart/${props.id}`)
    //     .then((result) => {
    //       // console.log('After delete ====> ', result);
    //       // needUpdate = !needUpdate;
    //     })
    //     .catch((err) => {
    //       console.log('axios failed', err.response.data);
    //     });
    // }
  };

  return (
    <Paper className={classes.root}>
      <Grid container className={classes.base_container} spacing={1}>

        <Grid item className={classes.image}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img className={classes.img} src={props.imgUrl} alt="Image of Product" />
        </Grid>

        <Grid container className={classes.main_block}>
          <Grid item>
            {/* eslint-disable-next-line no-template-curly-in-string */}
            <Link to={`/products/${props.itemNo}`} className={classes.text}>
              {props.name}
            </Link>
          </Grid>
          <Grid item>
            <ButtonGroup className={classes.buttons} variant="text" size="small" aria-label="small contained button group">
              <Button onClick={deleteProduct}>
                <span className={classes.button}> Delete </span>
              </Button>
              <Button>
                <span className={classes.button}> Save for later </span>
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item className={classes.counter}>
          <Counter
            count={props.count}
            quantity={props.quantity}
            id={props.id}
            itemNo={props.itemNo}
            currentPrice={props.currentPrice}
          />
        </Grid>
        <Grid item>
          <p className={classes.price}>
            $
            {props.currentPrice}
          </p>
        </Grid>
      </Grid>


    </Paper>
  );
};

export default connect(mapStateToProps, { setCountOfProducts })(CartItem);
