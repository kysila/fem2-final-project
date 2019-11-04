import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { selectFilters } from '../../../store/selectedFilters/actions';

const useStyles = makeStyles(() => ({
  colorItem: {
    margin: '10px 15px',
    padding: '5px',
    display: 'inline-flex',
    '&:hover': {
      borderRadius: '50%',
    },
    '&.MuiMenuItem-root': {
      minHeight: 'auto',
    },
    '&.Mui-selected': {
      boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.05)',
      borderRadius: '50%',
      padding: '5px',
    },
  },
  colorDiv: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  },
}));

const ColorFilter = (props) => {
  const classes = useStyles();
  const [color, setColor] = useState([]);
  const handleChangeColor = (event) => {
    setColor(event.target.value);
    props.selectFilters(event, event.target.value, 'color');
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
    props.selectFilters(event, event.target.value, 'color');
  };

  return (
    <React.Fragment>
      <InputLabel id="color-select-label">Color</InputLabel>
      <Select
        id="color-select"
        multiple
        value={color}
        onChange={handleChangeColor}
        input={<Input />}
        renderValue={(selected) => selected.join(', ')}
      >
        {props.colors.map(({ name, cssValue }) => (
          <MenuItem
            button
            key={name}
            value={name}
            className={classes.colorItem}
          >
            <div
              className={classes.colorDiv}
              style={{ backgroundColor: cssValue }}
            />
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  selectedFilters: state.filterReducer.selectedFilters,
  filterType: state.filterReducer.filterType,
});

export default connect(mapStateToProps, { selectFilters })(ColorFilter);
