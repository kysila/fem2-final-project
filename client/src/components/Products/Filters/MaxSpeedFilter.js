import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from 'react-redux';

import { selectFilters } from '../../../store/selectedFilters/actions';

const MaxSpeedFilter = (props) => {
  const [maxSpeed, setMaxSpeed] = useState([]);

  const handleChangeMaxSpeed = (event) => {
    setMaxSpeed(event.target.value);
    props.selectFilters(event, event.target.value, 'maxSpeed', { ...props.selectedFilters });
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
    props.selectFilters(event, event.target.value, 'maxSpeed', { ...props.selectedFilters });
  };
  return (
    <React.Fragment>
      <InputLabel id="maxSpeed-select-label">MaxSpeed</InputLabel>
      <Select
        id="maxSpeed-select"
        multiple
        value={maxSpeed}
        onChange={handleChangeMaxSpeed}
        input={<Input />}
        renderValue={(selected) => selected.join(', ')}
      >
        {props.maxSpeeds.map(({ _id, name }) => (
          <MenuItem key={_id} value={name}>
            <Checkbox checked={maxSpeed.indexOf(name) > -1} />
            <ListItemText primary={name} />
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
export default connect(mapStateToProps, { selectFilters })(MaxSpeedFilter);
