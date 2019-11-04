import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles(() => ({
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
    boxShadow: 'none',
  },
  filterRow: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    '&.MuiGrid-spacing-xs-6': {
      width: '100%',
      margin: 'auto',
    },
    '&> .MuiGrid-item': {
      padding: 0,
    },
  },
  filterForm: {
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '53px',
    '&>.MuiGrid-spacing-xs-3>.MuiGrid-item': {
      paddingTop: '43px',
    },
  },
  formControl: {
    padding: '7px 10px',
    width: '100%',
    border: '1px solid #AAAAAA',
    borderRadius: '3px',
    '&>label': {
      color: '#888888',
      fontSize: '11px',
      lineHeight: '20px',
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      top: '-23px',
      transform: 'translate(0, -50%) scale(1)',
    },
    '&>.MuiInput-underline': {
      marginTop: '0',
    },
    '&>.MuiInput-underline:before': {
      borderBottom: '0',
    },
  },
  applyBtn: {
    marginTop: '50px',
    padding: '18px 26px',
    position: 'relative',
    '&:before': {
      content: "''",
      display: 'block',
      width: '1000px',
      height: '2px',
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      position: 'absolute',
      left: 'calc(100% + 30px)',
      top: '50%',
    },
    '&:after': {
      content: "''",
      display: 'block',
      width: '1000px',
      height: '2px',
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      position: 'absolute',
      right: 'calc(100% + 30px)',
      top: '50%',
    },
  },
  applyBtnContainer: {
    textAlign: 'center',
    overflow: 'hidden',
    width: '100%',
  },
}));


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
    // console.log(props);
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
              <CategoryFilter />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <MaxSpeedFilter />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <ChargingTimeFilter />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <DistanceFilter />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <ColorFilter />
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
  filters: state.filterReducer.colorFilters,
  categories: state.categoryReducer.categories,
  selectedFilters: state.filterReducer.otherFilters,
});

export default connect(mapStateToProps, { getFilters, getCategories })(Filters);
