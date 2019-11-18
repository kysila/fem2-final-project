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

import { getProducts, getMoreProducts } from '../../../store/products/actions';
import { recentlySelectFilters, deleteSelectedFilters } from '../../../store/selectedFilters/actions';

let displayedProductsArray = [];
const Products = (props) => {
  const classes = useStyles();
  let products;
  let newDisplayedProducts = [];
  let selectedFilterChips;
  let selectedFilterType;
  let queryOptions = queryString.parse(props.location.search, { arrayFormat: 'comma' });
  const startPerPage = +queryOptions.perPage;
  const [perPage, setPerPage] = useState(startPerPage);

  useEffect(() => {
    props.getProducts(`/products/filter${props.location.search}`);
    if (!Object.keys(props.selectedFilters).length) {
      const recentlySelected = queryString.parse(props.location.search, { arrayFormat: 'comma' });
      delete recentlySelected.perPage;
      delete recentlySelected.startPage;
      props.recentlySelectFilters({ ...recentlySelected });
    }
  }, [props.location.search]);

  useEffect(() => {
    return () => {
      props.recentlySelectFilters({});
    };
  }, [])

  useEffect(() => {
    if (+queryOptions.perPage !== +perPage) {
      queryOptions.perPage = +perPage;
      const newQuery = queryString.stringify(queryOptions, { arrayFormat: 'comma' });
      props.history.push(`/products/filter?${newQuery}`);
      const startPage = +queryOptions.perPage / 8;
      queryOptions.startPage = startPage + 1;
      queryOptions.perPage = 8;
      const newQueryLoad = queryString.stringify(queryOptions, { arrayFormat: 'comma' });
      newDisplayedProducts = props.getMoreProducts(`/products/filter?${newQueryLoad}`, [...displayedProductsArray]);
    }
  }, [perPage]);

  const loadMoreAction = () => {
    queryOptions = queryString.parse(props.location.search, { arrayFormat: 'comma' });
    setPerPage(perPage + 8);
  };

  const handleDelete = (event) => {
    queryOptions = queryString.parse(props.location.search, { arrayFormat: 'comma' });
    if (selectedFilterType === 'minPrice' || selectedFilterType === 'maxPrice') {
      props.deleteSelectedFilters(event, 'minPrice', props.selectedFilters);
      props.deleteSelectedFilters(event, 'maxPrice', props.selectedFilters);
      delete queryOptions.minPrice;
      delete queryOptions.maxPrice;
    } else {
      props.deleteSelectedFilters(event, selectedFilterType, props.selectedFilters);
      delete queryOptions[selectedFilterType];
    }
    const newQuery = queryString.stringify(queryOptions, { arrayFormat: 'comma' });
    props.history.push(`/products/filter?${newQuery}`);
  };

  if (props.allProducts && !props.isProductsFetching) {
    const selectedFiltersItems = Object.entries(props.selectedFilters);
    selectedFilterChips = selectedFiltersItems.map((filter) => {
      selectedFilterType = filter[0];
      let options;
      if (filter[1].isArray) {
        options = filter[1].map((selectedFilter) => (`${selectedFilter}`));
      } else {
        options = filter[1];
      }

      return (
        <Grid item key={filter[0]}>
          <Chip
            label={`${filter[0]}: ${options}`}
            onDelete={handleDelete}
            deleteIcon={<HighlightOffIcon />}
            variant="outlined"
          />
        </Grid>
      );
    });

    displayedProductsArray = [...props.allProducts];
    products = displayedProductsArray.map((el) => (
      <Grid item xs={12} sm={4} md={3} key={el.itemNo}>
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
        />
      </Grid>
    ));
  } else {
    return (
      <React.Fragment>
        <Header callCenter="1-855-324-5387" />
        <Container maxWidth="md" className={classes.paddingTop}>
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
          <main>
            <Preloader />
          </main>
        </Container>
        <RecentlyViewed />
        <StayInTouch />
        <Footer />
      </React.Fragment>
    );
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
          {selectedFilterChips}
        </Grid>
        <main className={classes.main}>
          <Grid container spacing={0}>
            {props.allProducts.length ? products : (
              <Typography
                variant="body1"
                gutterBottom
                align="center"
                className={classes.space}
              >
              Sorry, no products matching your request were found.
              </Typography>
            )}
          </Grid>
          {props.allProducts.length >= perPage
          && (
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
});

export default withRouter(connect(mapStateToProps,
  {
    getProducts, recentlySelectFilters, getMoreProducts, deleteSelectedFilters,
  })(Products));
