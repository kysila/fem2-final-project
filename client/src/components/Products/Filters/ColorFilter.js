import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { selectFilters } from '../../../store/selectedFilters/actions';
import { useStyles } from './style';


const ColorFilter = (props) => {

  const classes = useStyles();
  const [color, setColor] = useState(() => {
    if (props.selectedFilters.color) {
      if (Array.isArray(props.selectedFilters.color)) {
        return [...props.selectedFilters.color];
      } else {
        return [props.selectedFilters.color];
      }
    }
    return [];
  });
  const handleChangeColor = (event) => {
    setColor(event.target.value);
    props.selectFilters(event, event.target.value, 'color', { ...props.selectedFilters });
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
  ...state,
  selectedFilters: state.selectFilterReducer.selectedFilters,
});

export default connect(mapStateToProps, { selectFilters })(ColorFilter);
