import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  search: {
    fontSize: '12px',
    color: '#444444',
    width: '100%',
  },
});


export const Search = (props) => {
  const [value, setValue] = useState('');
  const classes = useStyles();
  return (
    <React.Fragment>
      <SearchBar
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onCancelSearch={() => setValue('')}
        className={classes.search}
        searchIcon={<SearchIcon style={{ color: ' #6686FF ' }} />}
        closeIcon={<ClearIcon style={{ color: ' #6686FF ' }} />}
      />
    </React.Fragment>
  );
};
