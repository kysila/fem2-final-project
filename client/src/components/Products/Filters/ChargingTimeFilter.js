import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const ChargingTimeFilter = ({ chargingTimes }) => {
  console.log('chargingTimes', chargingTimes);
  const [chargingTime, setChargingTime] = useState([]);

  const handleChangeChargingTime = (event) => {
    setChargingTime(event.target.value);

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
        {chargingTimes.map(({ _id, name }) => (
          <MenuItem key={_id} value={name}>
            <Checkbox checked={chargingTime.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

export default ChargingTimeFilter;
