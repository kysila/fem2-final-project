import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Container from '@material-ui/core/Container';

import { Header } from '../../commons';
import { ProductGallery } from "./ProductGallery/ProductGallery";
import { ProductDescription } from './ProductDescription/ProductDescription'
import ProductDetailsCard from "./ProductDetailsCard/ProductDetailsCard";
import ProductBreadcrumbs from '../Products/ProductBreadcrumbs';
import StayInTouch from '../../commons/Footer/StayInTouch/StayInTouch';
import { RecentlyViewed } from '../RecentlyViewed/RecentlyViewed';

import { useStyles } from "./style";

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
          colors: data,
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
            <ProductGallery image={state.obj.imageUrls} />
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
