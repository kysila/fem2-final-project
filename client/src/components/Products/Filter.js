import React, { Component, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
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
