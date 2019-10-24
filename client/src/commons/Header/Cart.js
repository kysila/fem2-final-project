import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import { ProductCard } from '../../components';

const useStyles = makeStyles(() => createStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawer: {
  },
  paper: {
    paddingRight: '2%',
    paddingTop: '2%',
    background: '#f4efff',
    fontSize: '20px',
    color: '#9c80ff',
  },
  basket: {
    position: 'relative',
    borderRadius: '50%',
    border: '1px solid #6A86E8',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    paddingTop: '14px',
  },
  circle: {
    backgroundColor: ' #6A86E8 ',
    borderRadius: '50%',
    height: '15px',
    width: '15px',
    position: 'absolute',
    top: '0px',
    right: '0px',
    fontSize: '11px',
    color: ' #FFFFFF ',
  },
}));

export const Cart = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Box className={classes.basket} onClick={(cartIsOpen) => { setCartIsOpen(true); }}>
        <Link to="#">
          <img src="img/basket.svg" alt="Logo" />
          <div className={classes.circle}>{props.count}</div>
        </Link>
      </Box>
      <Drawer
        anchor="right"
        className={classes.drawer}
        classes={{
          paper: classes.paper,
        }}
        open={cartIsOpen}
        onClose={(cartIsOpen) => {
          setCartIsOpen(false);
        }}
      >
        <Box p={2}>
          <h3>Cart</h3>
          <ProductCard itemImg="img/products/image31.png" />
        </Box>
      </Drawer>

    </React.Fragment>
  );
};
