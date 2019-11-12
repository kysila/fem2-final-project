import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import queryString from 'query-string';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ProductCard } from '../../ProductCard/ProductCard';
import { Footer, Header } from '../../../commons';
import AllBreadcrumbs from '../AllBreadcrumbs/AllBreadcrumbs';
import { Title } from '../../Title/Title';
import StayInTouch from '../../../commons/Footer/StayInTouch/StayInTouch';
import Filters from '../Filters/Filters';
import Preloader from '../../Preloader/Preloader';
import { useStyles } from './style';

import { getProducts } from '../../../store/products/actions';
import { recentlySelectFilters } from '../../../store/selectedFilters/actions';


// let displayedProductsArray = [];
// let arrays = [];
const Products = (props) => {
  const classes = useStyles();
  let products;
  let queryOptions = queryString.parse(props.location.search);
  console.log('queryOptions', queryOptions);
  const startPerPage = +queryOptions.perPage;
  const [perPage, setPerPage] = useState(startPerPage);
  // const queryStringParse = () => queryString.parse(props.location.search, { arrayFormat: 'comma' });
  // queryString.parse(this.props.location.search)
  // props.location.search) // "?filter=top&origin=im"
  useEffect(() => {
    props.getProducts(`/products/filter${props.location.search}`);
    console.log('props.location.search', props.location.search);
    if (!props.selectedFilters.length) {
      const recentlySelected = queryString.parse(props.location.search);
      delete recentlySelected.perPage;
      delete recentlySelected.startPage;
      props.recentlySelectFilters({ ...recentlySelected });
    }
  }, [props.location.search]);

  useEffect(() => {
    queryOptions.perPage = perPage;
    const newQuery = queryString.stringify(queryOptions, { arrayFormat: 'comma' });
    props.history.push(`/products/filter?${newQuery}`);
  }, [ perPage ]);

  const loadMoreAction = () => {
    queryOptions = queryString.parse(props.location.search);
    setPerPage(perPage + 8);
  };

  if (props.allProducts && !props.isProductsFetching) {
    products = props.allProducts.map((el) => (
      <Grid item xs={12} sm={4} md={3} key={el.itemNo}>
        <ProductCard
          className={classes.card}
          name={el.name}
          itemImg={el.itemImg}
          price={el.currentPrice}
          url={el.url}
          rating={el.rating}
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
          && <Button onClick={() => { loadMoreAction(); }}>Load More ...</Button>}
        </main>
      </Container>
      <StayInTouch />
      <Footer />
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  ...state,
  isProductsFetching: state.productsReducer.isProductsFetching,
  allProducts: state.productsReducer.allProducts,
  selectedFilters: state.selectFilterReducer.selectedFilters,
});

export default withRouter(connect(mapStateToProps, { getProducts, recentlySelectFilters })(Products));
