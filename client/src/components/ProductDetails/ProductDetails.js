import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

import { Header } from '../../commons';
import { ProductGallery } from "./ProductGallery";
import { ProductDescription } from './ProductDescription'
import { ProductDetailsCard } from './ProductDetailsCard';
import ProductBreadcrumbs from '../Products/ProductBreadcrumbs';
import StayInTouch from '../../commons/Footer/StayInTouch';
import { RecentlyViewed } from '../RecentlyViewed/RecentlyViewed';

const useStyles = makeStyles(() => ({
  space: {
    marginBottom: '40px',
  },
  paddingTop: {
    paddingTop: '10px',
    paddingBottom: '56px',
  },
  productPage: {
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  productInfo: {
    maxWidth: 500,
  },
}));


export const ProductDetails = (props) => {
  const [state, setState] = useState({
    obj: {},
    colors: {},
  });

  let id = props.match.params.id;

  const classes = useStyles();

  useEffect(() => {
    axios.get(`/products/${props.match.params.id}`)
      .then(data => {
        setState(() => ({
          ...state,
          obj: data.data,
        }))
      });
    return () => {}
  }, [id]);

  useEffect(() => {
    axios.get(`/products/product/${state.obj.itemNo}`)
      .then(data => {
        setState({
          ...state,
          colors: data
        });
      });
  }, [state.obj]);


  return (
    <div>
      <Header callCenter="1-855-324-5387" />
      <Container maxWidth="md" className={classes.paddingTop}>
        <ProductBreadcrumbs link={state.obj.name} />
        <div className={classes.productPage}>
          <div className={classes.productInfo}>
            <ProductGallery image={state.obj.imageUrls}/>
            <ProductDescription data={state.obj} />
          </div>
          <ProductDetailsCard data={state} />
        </div>
      </Container>
      <RecentlyViewed />
      <StayInTouch />
    </div>
  );
};
