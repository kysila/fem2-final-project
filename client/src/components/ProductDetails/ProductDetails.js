import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';

import { Header, Footer } from '../../commons';
import { ProductGallery } from './ProductGallery/ProductGallery';
import { ProductDescription } from './ProductDescription/ProductDescription';
import ProductDetailsCardSticky from './ProductDetailsCard/ProductDetailsCartSticky/ProductDetailsCardSticky';
import ProductDetailsCart from "./ProductDetailsCard/ProductDetailsCart";
import ProductBreadcrumbs from '../Products/ProductBreadcrumbs/ProductBreadcrumbs';
import StayInTouch from '../../commons/Footer/StayInTouch/StayInTouch';
import { RecentlyViewed } from '../RecentlyViewed/RecentlyViewed';

import { dispatchGetWishlist, dispatchAddProductAndCreateWishlist } from '../../store/wishlist/actions';

import { useStyles } from './style';
import { ProductCustomerReviews } from './ProductCustomerReviews/ProductCustomerReviews';

const mapStateToProps = (store) => ({
  user: store.auth.user,
  wishlist: store.wishlist.wishlist,
});

const ProductDetails = (props) => {
  window.scrollTo(0, 0);
  const [state, setState] = useState({
    obj: {},
    colors: {},
  });

  let id;

  if (props.match.params.id) {
    id = props.match.params.id;
  }

  const classes = useStyles();

  useEffect(() => {
    axios.get(`/products/${props.match.params.id}`)
      .then((data) => {
        setState(() => ({
          ...state,
          obj: data.data,
        }));
      });
    return () => { };
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

  const { user, getWishlist } = props;
  useEffect(() => {
    if (user) {
      getWishlist();
    }
  }, [user]);

  return (
    <div className={classes.mainWrapper}>
      <Header callCenter="1-855-324-5387" />
      <Container maxWidth="md" className={classes.paddingTop}>
        <ProductBreadcrumbs link={state.obj.name} />
        <div className={classes.productPage}>
          <div className={classes.productInfo}>
            <div className={classes.wrapper}>
              <ProductGallery image={state.obj.imageUrls} />
              <ProductDetailsCart
                data={state}
                wishlist={props.wishlist}
                addProductToWishlist={props.addProductToWishlist}
              />
            </div>
            <ProductDescription data={state.obj} />
            <ProductCustomerReviews user={props.user} obj={state.obj} />
          </div>
          <ProductDetailsCardSticky
            data={state}
            wishlist={props.wishlist}
            addProductToWishlist={props.addProductToWishlist}
          />
        </div>
      </Container>
      <RecentlyViewed />
      <StayInTouch />
      <Footer />
    </div>
  );
};

function putActionsToProps(dispatch) {
  return {
    getWishlist: () => dispatch(dispatchGetWishlist()),
    addProductToWishlist: (url) => dispatch(dispatchAddProductAndCreateWishlist(url)),
  };
}

export default connect(mapStateToProps, putActionsToProps)(ProductDetails);
