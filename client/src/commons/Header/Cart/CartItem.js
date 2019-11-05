import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { setCountOfProducts } from '../../../store/cart/cartReducer';
import Counter from './Counter';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '2%',
  },
  image: {
    width: '99px',
    height: '74px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: '12px',
    textDecoration: 'underline',
    color: '#444444',
    paddingBottom: '7px',
  },
  main_block: {
    flexBasis: '50%',
    marginLeft: '2%',
    flexDirection: 'column',
  },
  button: {
    paddingLeft: '4px',
    paddingRight: '4px',
    fontSize: '12px',
    display: 'block',
    color: '#888888',
    textTransform: 'none',
  },
  price: {
    paddingLeft: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  buttons: {
    '& > button': {
      background: 'none',
      color: '#444444',
    }
  }
}));

const mapStateToProps = (state) => ({
  countOfProducts: state.cartReducer.countOfProducts,
});

const CartItem = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container justify="center" alignItems="center" alignContent="stretch" spacing={1}>

        <Grid item className={classes.image}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img className={classes.img} src="/img/products/e-hoverboards/1/001.jpg" alt="Image of Product" />
        </Grid>

        <Grid container className={classes.main_block}>
          <Grid item>
            {/* eslint-disable-next-line no-template-curly-in-string */}
            <Link to="/products/`{props.itemNo}`" className={classes.text}>
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
