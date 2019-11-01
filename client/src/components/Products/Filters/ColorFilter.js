import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
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

const colors = [
  'red',
  'blue',
  'green',
];
const ColorFilter = () => {
  const classes = useStyles();
  const [color, setColor] = useState([]);
  const handleChangeColor = (event) => {
    setColor(event.target.value);
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
    </React.Fragment>
  );
};

export default ColorFilter;
