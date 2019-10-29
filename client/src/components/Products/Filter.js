import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = (store) => {
  console.log(store);
  return {
    filters: store.filters,
    selectedFilters: store.selectedFilters,
  };
};

const useStyles = makeStyles((theme) => ({
  filterBtn: {
    background: '#F5F5F5 !important',
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: '-0.02em',
    color: '#444444 !important',
    textTransform: 'capitalize',
    padding: '15px 20px',
    width: '94px',
    borderRadius: '0 !important',
  },
  filterRow: {
    backgroundColor: '#FAFAFA',
    width: '100%',
  },
  filterForm: {

    width: '100%',


  },
}));
const Filter = () => {
  const classes = useStyles();
  // useEffect(() => {
  //
  // }, []);
  const [open, setOpen] = useState({ open: false });
  console.log(open);


  return (
    <div>
      <Grid container spacing={3} className={classes.filterRow}>
        <Grid item xs={6} sm={2} md={2}>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            className={classes.filterBtn}
            // onClick={handleClick}
          >
          Filter
          </Button>
        </Grid>
      </Grid>
      <form
        autoComplete="off"
        // onSubmit={setOpen(false)}
        className={classes.filterForm}
      />

    </div>
  );
};

export default connect(mapStateToProps)(Filter);
