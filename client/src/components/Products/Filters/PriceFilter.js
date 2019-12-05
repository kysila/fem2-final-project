import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux';

import { priceSelectFilters } from '../../../store/selectedFilters/actions';

import { useStyles } from './style';

function pricetext(value) {
  return `$${value}`;
}


const PriceFilter = (props) => {
  const classes = useStyles();

  const [price, setPrice] = useState(() => {
    if (props.selectedFilters.minPrice) {
      return [+props.selectedFilters.minPrice, +props.selectedFilters.maxPrice];
    } else {
      return [0, 3000];
    }

  });
  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice);
    props.priceSelectFilters(event, newPrice[0], newPrice[1], { ...props.selectedFilters });

  };
  return (
    <React.Fragment>
      <Typography id="range-slider" gutterBottom className={classes.priceLabel}>
        Price
      </Typography>
      <Slider

        value={price}
        max={3000}
        min={0}
        step={50}
        onChange={handleChangePrice}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={pricetext}
      />
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  ...state,
  selectedFilters: state.selectFilterReducer.selectedFilters,
});
export default connect(mapStateToProps, { priceSelectFilters })(PriceFilter);
