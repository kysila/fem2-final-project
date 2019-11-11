import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import queryString from 'query-string';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';

import { getFilters } from '../../../store/filter/actions';
import { getCategories } from '../../../store/categories/actions';
import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';
import MaxSpeedFilter from './MaxSpeedFilter';
import DistanceFilter from './DistanceFilter';
import ColorFilter from './ColorFilter';
import ChargingTimeFilter from './ChargingTimeFilter';
import { useStyles } from './style';


const Filters = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState({ open: false });

  const handleFiltersClick = () => {
    if (open.open) {
      setOpen({ open: false });
    } else {
      props.getFilters();
      props.getCategories();
      setOpen({ open: true });
    }
  };
  const HandleApplyFilters = () => {
    const query = queryString.stringify(props.selectedFilters, { arrayFormat: 'comma' });
    props.history.push(`/products/filter?${query}`);
    console.log('props.history', props.history);
  };


  return (
    <div>
      <Grid container spacing={6} className={classes.filterRow}>
        <Grid item xs={6} sm={2} md={2}>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            className={classes.filterBtn}
            onClick={handleFiltersClick}
          >
          Filter
          </Button>
        </Grid>
      </Grid>
      {open.open && (
      <form
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          setOpen({ open: false });
          HandleApplyFilters();
        }}
        className={classes.filterForm}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <PriceFilter />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <CategoryFilter categories={props.categories} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <MaxSpeedFilter maxSpeeds={props.maxSpeeds} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <ChargingTimeFilter chargingTimes={props.chargingTimes} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <DistanceFilter distances={props.distances} />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <ColorFilter colors={props.colors} />
            </FormControl>
          </Grid>
        </Grid>
        <Box className={classes.applyBtnContainer}>
          <Button
            type="submit"
            align="center"
            className={classes.applyBtn}
          >
            Apply Filters
          </Button>
        </Box>

      </form>
      )}

    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
  colors: state.filterReducer.colorFilters,
  distances: state.filterReducer.distanceFilters,
  maxSpeeds: state.filterReducer.maxSpeedFilters,
  chargingTimes: state.filterReducer.chargingTimeFilters,
  categories: state.categoryReducer.categories,
  selectedFilters: state.selectFilterReducer.selectedFilters,
});

export default withRouter(connect(mapStateToProps, { getFilters, getCategories })(Filters));
