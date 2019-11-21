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

  let id = props.match.params.id;

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
          <ProductDetailsCard
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
