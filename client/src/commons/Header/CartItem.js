import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { setCountOfProducts } from '../../store/cart/cartReducer';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
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
    maxWidth: '100%',
    maxHeight: '100%',
  },
  text: {
    fontSize: '14px',
  },
}));

const mapStateToProps = (state) => ({
  countOfProducts: state.cartReducer.countOfProducts,
});

const CartItem = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>

      <Grid container justify="flex-start" alignItems="center" spacing={2}>
        <Grid className={classes.image}>
          <img className={classes.img} src="img/products/e-hoverboards/1/001.jpg" alt="Image of Product" />
        </Grid>
        <Grid item>
          {' '}
          <p className={classes.text}>Addmotor Hithot H1 Sport Mountain E-Hoverboard (green)</p>
        </Grid>
        <Grid item>
            <ButtonGroup variant="contained" size="small">
                <Button> - </Button>
                <Button disabled={'true'}>Two</Button>
                <Button> + </Button>
            </ButtonGroup>
        </Grid>
        <Grid item>
          {' '}
          <p className={classes.text}> $1,699.99</p>
          {' '}
        </Grid>
      </Grid>


    </Paper>
  );
};

export default connect(mapStateToProps, { setCountOfProducts })(CartItem);
