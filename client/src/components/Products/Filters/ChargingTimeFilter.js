import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

import { connect } from 'react-redux';
import { selectFilters } from '../../../store/selectedFilters/actions';

const ChargingTimeFilter = (props) => {
  const [chargingTime, setChargingTime] = useState(() => {
    if (props.selectedFilters.chargingTime) {
      if (Array.isArray(props.selectedFilters.chargingTime)) {
        return [...props.selectedFilters.chargingTime];
      } else {
        return [props.selectedFilters.chargingTime];
      }
    } else {
      return [];
    }

  });

  const handleChangeChargingTime = (event) => {
    setChargingTime(event.target.value);
    props.selectFilters(event, event.target.value, 'chargingTime', { ...props.selectedFilters });
  };

  return (
    <React.Fragment>
      <InputLabel id="chargingTime-select-label">Charging Time</InputLabel>
      <Select
        id="chargingTime-select"
        multiple
        value={chargingTime}
        onChange={handleChangeChargingTime}
        input={<Input />}
        renderValue={(selected) => selected.join(', ')}
      >
        {props.chargingTimes.map(({ _id, name }) => (
          <MenuItem key={_id} value={name}>
            <Checkbox checked={chargingTime.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  selectedFilters: state.selectFilterReducer.selectedFilters,
});


export default connect(mapStateToProps, { selectFilters })(ChargingTimeFilter);
