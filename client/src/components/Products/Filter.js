import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({


}));
const Filter = () => {
  const classes = useStyles();
  const [filterList, setFilterList] = useState({});

  let filters;

  useEffect(() => {
    async function getFilters() {
      await axios.get('/filters').then((data) => {
        setFilterList(data);
      })
        .catch((err) => { console.log(err); });
    }
    getFilters();
  }, []);
  if (filterList.data) {
    filters = filterList.data.map((el) => <div>{el.type}</div>);
  }

  return (
    <React.Fragment>

      {filters}
    </React.Fragment>
  );
};

export default Filter;
