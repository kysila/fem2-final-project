import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const MaxSpeedFilter = ({ maxSpeeds }) => {
  const [maxSpeed, setMaxSpeed] = useState([]);

  const handleChangeMaxSpeed = (event) => {
    setMaxSpeed(event.target.value);
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
        {maxSpeeds.map(({ _id, name }) => (
          <MenuItem key={_id} value={name}>
            <Checkbox checked={maxSpeed.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

export default MaxSpeedFilter;
