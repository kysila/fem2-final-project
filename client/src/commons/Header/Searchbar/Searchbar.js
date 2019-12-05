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
  const {
    searchValue,
    history,
    // eslint-disable-next-line no-shadow
    setSearchProducts,
    // eslint-disable-next-line no-shadow
    setSearchValue,
  } = props;
  const classes = useStyles();
  const clear = '';
  const clearArray = [];

  const onRequestHandler = () => {
    history.push('/search');
    setSearchProducts(props.searchValue);
    setSearchValue('');
  };

  return (
    <React.Fragment>
      <SearchBar
        value={searchValue}
        cancelOnEscape
        placeholder="search"
        onChange={(newValue) => setSearchValue(newValue)}
        onCancelSearch={() => {
          setSearchValue(clear);
          setSearchProducts(clearArray);
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
