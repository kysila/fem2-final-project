import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';

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
    paddingTop: '53px',
    paddingBottom: '53px',
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
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    overflow: 'hidden',
    width: '100%',


  },

  filterSelect: {
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
  'green'
]
const Filter = () => {
  const classes = useStyles();
  // useEffect(() => {
  //
  // }, []);
  const [open, setOpen] = useState({ open: false });
  const [category, setCategory] = React.useState([]);
  const [color, setColor] = useState([]);
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeColor = (event) => {
    setColor(event.target.value);
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
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                id="category-select"
                multiple
                className={classes.filterSelect}
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
          <Grid item xs={12} sm={6} md={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="color-select-label">Color</InputLabel>
              <Select
                id="color-select"
                multiple
                className={classes.filterSelect}
                value={color}
                onChange={handleChangeColor}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
              >
                {colors.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={color.indexOf(name) > -1} />
                    <ListItemText primary={name} />
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
    </div>
  );
};

export default connect(mapStateToProps)(Filter);
