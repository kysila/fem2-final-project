import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';

import { Header, Footer } from '../../commons';
import { ProductGallery } from './ProductGallery/ProductGallery';
import { ProductDescription } from './ProductDescription/ProductDescription';
import ProductDetailsCard from './ProductDetailsCard/ProductDetailsCard';
import ProductBreadcrumbs from '../Products/ProductBreadcrumbs/ProductBreadcrumbs';
import StayInTouch from '../../commons/Footer/StayInTouch/StayInTouch';
import { RecentlyViewed } from '../RecentlyViewed/RecentlyViewed';

import { useStyles } from './style';
import { ProductCustomerReviews } from './ProductCustomerReviews/ProductCustomerReviews';

const mapStateToProps = (store) => ({
  user: store.auth.user,
});

const ProductDetails = (props) => {
  const [state, setState] = useState({
    obj: {},
    colors: {},
  });

  const { id } = props.match.params;

  const classes = useStyles();

  useEffect(() => {
    axios.get(`/products/${props.match.params.id}`)
      .then((data) => {
        setState(() => ({
          ...state,
          obj: data.data,
        }));
      });
    return () => {};
  }, [id]);

  useEffect(() => {
    axios.get(`/products/product/${state.obj.itemNo}`)
      .then((data) => {
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
            <ProductCustomerReviews user={props.user} />
          </div>
          <ProductDetailsCard data={state} />
        </div>
      </Container>
      <RecentlyViewed />
      <StayInTouch />
      <Footer />
    </div>
  );
};

export default connect(mapStateToProps)(ProductDetails);
