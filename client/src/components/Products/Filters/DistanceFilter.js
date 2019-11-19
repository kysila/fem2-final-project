import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from 'react-redux';

import { selectFilters } from '../../../store/selectedFilters/actions';

const DistanceFilter = (props) => {
  const [distance, setDistance] = useState(() => {
    if (props.selectedFilters.distance) {
      return [props.selectedFilters.distance];
    }
    return [];
  });

  const handleChangeDistance = (event) => {
    setDistance(event.target.value);
    props.selectFilters(event, event.target.value, 'distance', { ...props.selectedFilters });
  };

  return (
    <React.Fragment>
      <InputLabel id="distance-select-label">Distance</InputLabel>
      <Select
        id="distance-select"
        multiple
        value={distance}
        onChange={handleChangeDistance}
        input={<Input />}
        renderValue={(selected) => selected.join(', ')}
      >
        {props.distances.map(({ _id, name }) => (
          <MenuItem key={_id} value={name}>
            <Checkbox checked={distance.indexOf(name) > -1} />
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
export default connect(mapStateToProps, { selectFilters })(DistanceFilter);
