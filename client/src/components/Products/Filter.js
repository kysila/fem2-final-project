import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { getFilters } from '../../store/filter/actions';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    filters: state.filters.colorFilters,
    selectedFilters: state.filters.otherFilters,
  };
};

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

  priceLabel: {
    color: '#888888',
    fontSize: '11px',
    lineHeight: '20px',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    marginTop: '-30px',
  },
  colorItem: {
    margin: '10px 15px',
    padding: '5px',
    display: 'inline-flex',
  },
  colorDiv: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  },


}));
const categories = [
  'e-bikes',
  'e-scooters',
  'e-skates',
];
const colors = [
  'red',
  'blue',
  'green',
];
const distances = [
  '15 miles',
  '10 miles',
  '20 miles',
];
const speeds = [
  '15mph',
  '10mph',
  '25mph',
];
const chargingTimes = [
  '2 hrs',
  '3-4 hrs',
  '2-5 hrs',
];
function pricetext(value) {
  return `$${value}`;
}
const Filter = () => {
  const classes = useStyles();

  const [open, setOpen] = useState({ open: false });
  const [category, setCategory] = useState([]);
  const [distance, setDistance] = useState([]);
  const [price, setPrice] = useState([100, 3000]);
  const [maxSpeed, setMaxSpeed] = useState([]);
  const [chargingTime, setChargingTime] = useState([]);
  const [color, setColor] = useState([]);

  const handleFiltersClick = () => {
    if (open.open) {
      setOpen({ open: false });
    } else {
      getFilters();
      setOpen({ open: true });
    }
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeDistance = (event) => {
    setDistance(event.target.value);
  };
  const handleChangeMaxSpeed = (event) => {
    setMaxSpeed(event.target.value);
  };
  const handleChangeChargingTime = (event) => {
    setChargingTime(event.target.value);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };
  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice);
  };


  const handleChangeMultipleCategory = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setCategory(value);
  };
  const handleChangeMultipleColor = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setColor(value);
  };
  const handleChangeMultipleDistance = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setDistance(value);
  };
  const handleChangeMultipleChargingTime = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setChargingTime(value);
  };
  const handleChangeMultipleMaxSpeed = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setMaxSpeed(value);
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
        }}
        className={classes.filterForm}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography id="range-slider" gutterBottom className={classes.priceLabel}>
              Price
            </Typography>
            <Slider

              value={price}
              max={3000}
              min={100}
              step={50}
              onChange={handleChangePrice}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              getAriaValueText={pricetext}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                id="category-select"
                multiple
                value={category}
                onChange={handleChangeCategory}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
              >
                {categories.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={category.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="maxSpeed-select-label">MaxSpeed</InputLabel>
              <Select
                id="maxSpeed-select"
                multiple
                value={maxSpeed}
                onChange={handleChangeMaxSpeed}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
              >
                {speeds.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={maxSpeed.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="chargingTime-select-label">Charging Time</InputLabel>
              <Select
                id="chargingTime-select"
                multiple
                value={chargingTime}
                onChange={handleChangeChargingTime}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
              >
                {chargingTimes.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={chargingTime.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="distance-select-label">Distance</InputLabel>
              <Select
                id="distance-select"
                multiple
                value={distance}
                onChange={handleChangeDistance}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
              >
                {distances.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={distance.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="color-select-label">Color</InputLabel>
              <Select
                id="color-select"
                multiple
                value={color}
                onChange={handleChangeColor}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
              >
                {colors.map((name) => (
                  <MenuItem
                    button
                    key={name}
                    value={name}
                    className={classes.colorItem}
                  >
                    <div
                      className={classes.colorDiv}
                      style={{ backgroundColor: name }}
                    />
                  </MenuItem>
                ))}
              </Select>
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

export default connect(mapStateToProps)(Filter);
