import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from 'material-ui-search-bar';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { setSearchValue, setSearchProducts } from '../../store/search/searchReducer';
import { ProductCard } from '../../components/ProductCard/ProductCard';

const useStyles = makeStyles({
  search: {
    fontSize: '12px',
    color: '#444444',
    width: '100%',
  },
});

const mapStateToProps = (state) => ({
  searchValue: state.searchReducer.searchValue,
  searchProducts: state.searchReducer.searchProducts,

});

const Search = (props) => {
  const classes = useStyles();
  const clear = '';
  const clearArray = [];
  let searchResult = [];

  const onRequestHandler = () => {
    const searchPhrases = {
      query: props.searchValue,
    };
    if (searchPhrases.query.length > 0) {
      axios.post('/products/search', searchPhrases)
        .then((result) => {
          console.log(result.data);
          searchResult = result.data.map((el) => (
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
          props.setSearchProducts(searchResult);
          props.history.push('/search');
        })
        .catch((err) => {
          console.log('Unsuccessful axios', err);
        });
    }
  };

  return (
    <React.Fragment>
      <SearchBar
        value={props.searchValue}
        onChange={(newValue) => props.setSearchValue(newValue)}
        onCancelSearch={() => {
          props.setSearchValue(clear);
          props.setSearchProducts(clearArray);
        }}
        onRequestSearch={onRequestHandler}
        className={classes.search}
        searchIcon={<SearchIcon style={{ color: ' #6686FF ' }} />}
        closeIcon={<ClearIcon style={{ color: ' #6686FF ' }} />}
      />
    </React.Fragment>
  );
};

export default withRouter(connect(mapStateToProps, { setSearchValue, setSearchProducts })(Search));
