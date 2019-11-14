import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import { Footer, Header } from '../../commons';

import { Title } from '../Title/Title';
import StayInTouch from '../../commons/Footer/StayInTouch/StayInTouch';
import { ProductCard } from '..';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: 0,
    maxWidth: 'auto',
  },
  space: {
    marginBottom: '40px',
  },
  paddingTop: {
    paddingTop: '20px',
  },

}));

const mapStateToProps = (state) => ({
  searchValue: state.searchReducer.searchValue,
  searchProducts: state.searchReducer.searchProducts,
});

export const Search = connect(mapStateToProps)((props) => {
  const classes = useStyles();
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
        />
      </Grid>
    ));
  } else {
    searchResult = [
      <Grid item xs={12} sm={12} md={12} justify="center">
        <Typography variant="h6" align="center" paragraph="true">
        No products were found based on search results
        </Typography>
      </Grid>];
  }
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
          <Grid container spacing={0}>
            {searchResult}
          </Grid>
        </main>
      </Container>
      <StayInTouch />
      <Footer />
    </React.Fragment>

  );
});
