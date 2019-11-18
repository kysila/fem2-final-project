import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchBar from 'material-ui-search-bar';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

import { useStyles } from './style';
import { setSearchValue, setSearchProducts } from '../../../store/search/action';

const mapStateToProps = (state) => ({
  searchValue: state.searchReducer.searchValue,
  searchProducts: state.searchReducer.searchProducts,

});

const Searches = (props) => {
  const classes = useStyles();
  const clear = '';
  const clearArray = [];

  const onRequestHandler = () => {
    props.history.push('/search');
    props.setSearchProducts(props.searchValue);
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

// eslint-disable-next-line max-len
export default withRouter(connect(mapStateToProps, { setSearchValue, setSearchProducts })(Searches));
