import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { setCountOfProducts } from '../../../store/cart/cartReducer';
import Counter from './Counter';
import { useStyles } from './style';

const mapStateToProps = (state) => ({
  countOfProducts: state.cartReducer.countOfProducts,
});

const CartItem = (props) => {
  console.log('Props from CartItem', props);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container justify="center" alignItems="center" alignContent="stretch" spacing={1}>

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
              <Button>
                <span className={classes.button}> Delete </span>
              </Button>
              <Button>
                <span className={classes.button}> Save for later </span>
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item>
          <Counter
            count={props.count}
            quantity={props.quantity}
            id={props.id}
            itemNo={props.itemNo}
          />
        </Grid>
        <Grid item>
          <p className={classes.price}>
            ${props.currentPrice}
          </p>
        </Grid>
      </Grid>


    </Paper>
  );
};

export default connect(mapStateToProps, { setCountOfProducts })(CartItem);
