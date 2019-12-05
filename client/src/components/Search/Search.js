import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import { Footer, Header } from '../../commons';

import { Title } from '../Title/Title';
import StayInTouch from '../../commons/Footer/StayInTouch/StayInTouch';
import ProductCard from '../ProductCard/ProductCard';
import Preloader from '../Preloader/Preloader';
import { addProductAndCreateWishlistInDB, getWishlistFromDB } from '../../store/wishlist/actions';
import { useStyles } from './style';

const mapStateToProps = (state) => ({
  searchValue: state.searchReducer.searchValue,
  searchProducts: state.searchReducer.searchProducts,
  isSearchFetching: state.searchReducer.isSearchFetching,
  user: state.auth.user,
});

const Search = (props) => {
  const classes = useStyles();
  const {
    addProductToWishlist, getWishlist, user,
  } = props;
  let searchResult = [];
  if (props.searchProducts.length) {
    searchResult = props.searchProducts.map((el) => (
      <Grid item xs={12} sm={4} md={3} key={el.itemNo}>
        <ProductCard
          className={classes.card}
          name={el.name}
          itemImg={el.imageUrls[0]}
          price={el.currentPrice}
          url={`products/${el.itemNo}`}
          rating={el.rating}
          // eslint-disable-next-line no-underscore-dangle
          id={el._id}
          addProductToWishlist={addProductToWishlist}
        />
      </Grid>
    ));
  } else {
    searchResult = [
      <Grid item xs={12} sm={12} md={12} key="noresult">
        <Typography variant="h6" align="center" paragraph>
          No products were found based on search results
        </Typography>
      </Grid>];
  }

  useEffect(() => {
    if (user) {
      getWishlist();
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="md" className={classes.paddingTop}>
        <Title title="Search results" />
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          className={classes.space}
        >
          Results of your searching:
        </Typography>
        <main>
          {props.isSearchFetching ? <Preloader />
            : (
              <Grid container spacing={0} alignItems="center">
                {searchResult}
              </Grid>
            )}
        </main>
      </Container>
      <StayInTouch />
      <Footer />
    </React.Fragment>

  );
};


export default connect(mapStateToProps, {
  addProductToWishlist: addProductAndCreateWishlistInDB,
  getWishlist: getWishlistFromDB,
})(Search);
