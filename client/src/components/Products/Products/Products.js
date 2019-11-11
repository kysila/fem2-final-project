import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import queryString from 'query-string';
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

let displayedProductsArray = [];
let arrays = [];
const Products = (props) => {
  const classes = useStyles();
  let products;
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  // const queryStringParse = () => queryString.parse(props.location.search, { arrayFormat: 'comma' });
  // queryString.parse(this.props.location.search)
  // props.location.search) // "?filter=top&origin=im"
  useEffect(() => {
    if (props.location.search) {
      props.getProducts(`/products/filter${props.location.search}`);
    } else {
      props.getProducts('/products');
    }
  }, [props.location.search]);

  useEffect(() => {
    arrays.shift();
    if (arrays.length) {
      displayedProductsArray = [...displayedProductsArray, ...arrays[0]];
    }
    if (props.allProductsArrays) {
      if (!arrays.length && count) {
        setActive(false);
      }
    }
  });

  const loadMoreAction = () => {
    setCount(count + 1);
  };


  if (props.allProductsArrays && !props.isProductsFetching && count === 0) {
    displayedProductsArray = [...props.allProductsArrays[0]];
    arrays = [...props.allProductsArrays];
    products = displayedProductsArray.flat().map((el) => {
      if (el) {
        return (
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
        );
      }
    });
  } else if (props.allProductsArrays && !props.isProductsFetching) {
    products = displayedProductsArray.flat().map((el) => {
      if (el) {
        return (
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
        );
      }
    });
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
        <Footer/>
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
            {products}
          </Grid>
          {active && <Button onClick={() => { loadMoreAction(); }}>Load More ...</Button> }
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
  allProductsArrays: state.productsReducer.allProductsArrays,
});

export default withRouter(connect(mapStateToProps, { getProducts })(Products));
