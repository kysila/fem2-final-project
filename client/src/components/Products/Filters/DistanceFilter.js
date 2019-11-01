import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';


const distances = [
  '15 miles',
  '10 miles',
  '20 miles',
];
const DistanceFilter = () => {
  const [distance, setDistance] = useState([]);

  const handleChangeDistance = (event) => {
    setDistance(event.target.value);
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
        {distances.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={distance.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

export default DistanceFilter;
