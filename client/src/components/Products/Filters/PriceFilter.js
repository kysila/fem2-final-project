import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core';
import { useStyles } from './style';


function pricetext(value) {
  return `$${value}`;
}


const PriceFilter = () => {
  const classes = useStyles();

  const [price, setPrice] = useState([100, 3000]);
  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice);
  };
  return (
    <React.Fragment>
      <Typography id="range-slider" gutterBottom className={classes.priceLabel}>
        Price
      </Typography>
      <Slider

        value={price}
        max={3000}
        min={100}
        step={50}
        onChange={handleChangePrice}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={pricetext}
      />
    </React.Fragment>
  );
};

export default PriceFilter;
