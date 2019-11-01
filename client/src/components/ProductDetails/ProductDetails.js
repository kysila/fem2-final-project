import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Header } from '../../commons';
import StayInTouch from '../../commons/Footer/StayInTouch';

import { ProductGallery } from './ProductGallety';

import ProductBreadcrumbs from '../Products/ProductBreadcrumbs';

const useStyles = makeStyles(() => ({
  space: {
    marginBottom: '40px',
  },
  paddingTop: {
    paddingTop: '20px',
  },
  productPage: {
    display: 'flex',
  },
  productInfo: {
    maxWidth: 500,
  },
}));


export const ProductDetails = (props) => {
  const [state, setState] = useState({});

  const classes = useStyles();

  useEffect(() => {
    axios.get(`/products/${props.match.params.id}`)
      .then((data) => {
        setState(data.data);
      });
  }, [props.match.params.id]);


  return (
    <React.Fragment>
      <Header callCenter="1-855-324-5387" />
      <Container maxWidth="md" className={classes.paddingTop}>
        <ProductBreadcrumbs link={state.name} />
        <div className={classes.productPage}>
          <div className={classes.productInfo}>
            <ProductGallery image={state.imageUrls} />
          </div>
        </div>
      </Container>
      <StayInTouch />
    </React.Fragment>
  );
};
