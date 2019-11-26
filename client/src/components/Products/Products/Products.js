/* eslint-disable no-shadow,react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import queryString from 'query-string';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import ProductCard from '../../ProductCard/ProductCard';
import { Footer, Header } from '../../../commons';
import AllBreadcrumbs from '../AllBreadcrumbs/AllBreadcrumbs';
import { Title } from '../../Title/Title';
import StayInTouch from '../../../commons/Footer/StayInTouch/StayInTouch';
import Filters from '../Filters/Filters';
import Preloader from '../../Preloader/Preloader';
import { RecentlyViewed } from '../../RecentlyViewed/RecentlyViewed';
import { useStyles } from './style';

import { getProducts, getMoreProducts, clearNewProducts } from '../../../store/products/actions';
import { recentlySelectFilters, deleteSelectedFilters } from '../../../store/selectedFilters/actions';
// import {
// dispatchGetWishlist,
// dispatchAddProductAndCreateWishlist
// } from '../../../store/wishlist/actions';

let displayedProductsArray = [];
let moreProductsArray = [];
let startPage = 1;
let perPage = 8;
let products = [];

const Products = (props) => {
  const classes = useStyles();
  let selectedFilterChips;
  let selectedFilterType;

  // let queryOptions = queryString.parse(props.location.search, { arrayFormat: 'comma' });
  // const startPerPage = +queryOptions.perPage;
  // const [perPage, setPerPage] = useState(startPerPage);

  useEffect(() => {
    props.getProducts(`/products/filter${props.location.search}`);
    if (!Object.keys(props.selectedFilters).length) {
      const recentlySelected = queryString.parse(props.location.search, { arrayFormat: 'comma' });
      delete recentlySelected.perPage;
      delete recentlySelected.startPage;
      props.recentlySelectFilters({ ...recentlySelected });
    }
  }, [props.location.search]);

  useEffect(() => () => {
    props.recentlySelectFilters({});
  }, []);

  // useEffect(() => {
  //   const { getWishlist } = props;
  //   getWishlist();
  // }, []);

  // useEffect(() => {
  //   if (+queryOptions.perPage !== +perPage) {
  //     queryOptions.perPage = +perPage;
  //     const newQuery = queryString.stringify(queryOptions, { arrayFormat: 'comma' });
  //     props.history.push(`/products/filter?${newQuery}`);
  //     const startPage = +queryOptions.perPage / 8;
  //     queryOptions.startPage = startPage + 1;
  //     queryOptions.perPage = 8;
  //     const newQueryLoad = queryString.stringify(queryOptions, { arrayFormat: 'comma' });
  //     props.getMoreProducts(`/products/filter?${newQueryLoad}`, [...displayedProductsArray]);
  //   }
  // }, [perPage]);


  const handleDelete = (event) => {
    displayedProductsArray = [];
    moreProductsArray = [];
    products = [];
    startPage = 1;
    perPage = 8;
    props.clearNewProducts();
    const queryOptions = queryString.parse(props.location.search, { arrayFormat: 'comma' });
    if (event.currentTarget.dataset.key === 'minPrice' || event.currentTarget.dataset.key === 'maxPrice') {
      props.deleteSelectedFilters(event, 'minPrice', props.selectedFilters);
      props.deleteSelectedFilters(event, 'maxPrice', props.selectedFilters);
      delete queryOptions.minPrice;
      delete queryOptions.maxPrice;
    } else {
      const type = event.currentTarget.dataset.key;
      props.deleteSelectedFilters(event, type, props.selectedFilters);
      delete queryOptions[type];
    }
    const newQuery = queryString.stringify(queryOptions, { arrayFormat: 'comma' });
    props.history.push(`/products/filter?${newQuery}`);

  };
  const handleSelectedFilters = (selected) => {
    console.log('handleSelectedFilters функция запущена');
    const selectedFiltersItems = Object.entries(selected);
    selectedFilterChips = selectedFiltersItems.map((filter) => {
      selectedFilterType = filter[0];
      let options;
      if (Array.isArray(filter[1])) {
        options = filter[1].map((selectedFilter) => (`${selectedFilter}`));
      } else {
        options = filter[1];
      }

      return (
        <Grid item key={filter[0]} data-key={filter[0]}>
          <Chip
            label={`${filter[0]}: ${options}`}
            onDelete={handleDelete}
            deleteIcon={<HighlightOffIcon data-key={filter[0]} />}
            variant="outlined"
          />
        </Grid>
      );
    });
  };
  const loadMoreAction = () => {
    const queryOptions = queryString.parse(props.location.search, { arrayFormat: 'comma' });
    perPage += 8;
    startPage += 1;
    queryOptions.startPage = startPage;
    const newQueryLoad = queryString.stringify(queryOptions, { arrayFormat: 'comma' });
    props.getMoreProducts(`/products/filter?${newQueryLoad}`);
  };

  if (props.allProducts && !props.isProductsFetching && startPage === 1) {
    window.scrollTo(0, 0);
    handleSelectedFilters(props.selectedFilters);
    displayedProductsArray = [...props.allProducts];
    products = displayedProductsArray.map((el) => (
      <Grid item xs={12} sm={6} md={3} key={el.itemNo}>
        <ProductCard
          className={classes.card}
          obj={el}
          name={el.name}
          itemImg={el.itemImg}
          price={el.price}
          url={el.url}
          rating={el.rating}
          itemNo={el.itemNo}
          id={el.id}
          distance={el.distance}
          maxSpeed={el.maxSpeed}
          chargingTime={el.chargingTime}
          // wishlist={props.wishlist}
          // addProductToWishlist={props.addProductToWishlist}
        />
      </Grid>
    ));
  }
  if (props.newProducts && props.newProducts.length && !props.isProductsFetching) {
    moreProductsArray = props.newProducts;
    products = [...products, ...moreProductsArray.map((el) => (
      <Grid item xs={12} sm={6} md={3} key={el.itemNo}>
        <ProductCard
          className={classes.card}
          obj={el}
          name={el.name}
          itemImg={el.itemImg}
          price={el.price}
          url={el.url}
          rating={el.rating}
          itemNo={el.itemNo}
          id={el.id}
          distance={el.distance}
          maxSpeed={el.maxSpeed}
          chargingTime={el.chargingTime}
          // wishlist={props.wishlist}
          // addProductToWishlist={props.addProductToWishlist}
        />
      </Grid>
    ))];
  }

  return (
    <React.Fragment>
      <Header callCenter="1-855-324-5387" />
      <Container maxWidth="md" className={classes.mainContainer}>
        <AllBreadcrumbs />
        <Title title="All products" />
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          className={classes.space}
        >
          Our full collection of electric devices
        </Typography>
        <Filters />
        <Grid container spacing={1} className={classes.chipsContainer}>
          {props.selectedFilters && (handleSelectedFilters(props.selectedFilters)) }
          {selectedFilterChips}
        </Grid>
        <main className={classes.main}>
          <Grid container spacing={0} alignItems="center" justify="center">
            {props.allProducts && products}

            {/*: (props.isProductsFetching || ( */}
            {/* <Typography */}
            {/*  variant="body1" */}
            {/*  gutterBottom */}
            {/*  align="center" */}
            {/*  className={classes.space} */}
            {/* > */}
            {/*  Sorry, no products matching your request were found. */}
            {/* </Typography> */}
            {/* ))} */}

            {props.isProductsFetching && <Preloader />}

          </Grid>

          {products.length >= perPage && (
            <Box className={classes.applyBtnContainer}>
              <Button
                className={classes.applyBtn}
                onClick={() => { loadMoreAction(); }}
              >
                Load More ...
              </Button>
            </Box>
          )}

        </main>
      </Container>
      <RecentlyViewed />
      <StayInTouch />
      <Footer />
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  isProductsFetching: state.productsReducer.isProductsFetching,
  allProducts: state.productsReducer.allProducts,
  selectedFilters: state.selectFilterReducer.selectedFilters,
  newProducts: state.productsReducer.newProducts,
  // wishlist: state.wishlist.wishlist,
});

export default withRouter(connect(mapStateToProps,
  {
    getProducts,
    recentlySelectFilters,
    getMoreProducts,
    deleteSelectedFilters,
    clearNewProducts,

    // getWishlist: () => (dispatchGetWishlist()),
    // addProductToWishlist: (url) => (dispatchAddProductAndCreateWishlist(url)),
  })(Products));
