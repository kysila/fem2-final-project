import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux';

import { selectFilters } from '../../../store/selectedFilters/actions';

import { useStyles } from './style';

function pricetext(value) {
  return `$${value}`;
}


const PriceFilter = (props) => {
  const classes = useStyles();

  const [price, setPrice] = useState([0, 3000]);
  const handleChangePrice = (event, newPrice) => {
    setPrice(newPrice);
    console.log('price', price);
    console.log('newPrice', newPrice);
    const minPrice = newPrice[0];
    props.selectFilters(event, minPrice, 'minPrice', { ...props.selectedFilters });
    const maxPrice = newPrice[1];
    props.selectFilters(event, maxPrice, 'maxPrice', { ...props.selectedFilters });
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
export default connect(mapStateToProps, { selectFilters })(PriceFilter);
