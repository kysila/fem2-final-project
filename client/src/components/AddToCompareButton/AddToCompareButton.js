import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { WeigherIcon, GoToCompareIcon } from '../Icons/Icons';
import { addProductsToCompare } from '../../store/compare/actions';
import { useStyles } from '../ProductCard/style';

const mapStateToProps = (state) => ({
  products: state.compareReducer.products,
});


const AddToCompareButton = ({
  name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime, ...props
}) => {
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();

  const addToCompare = () => {
    console.log({
      name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime, ...props,
    })
    props.addProductsToCompare({
      name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime,
    });
    setClicked(true);
  };

  if (clicked) {
    return (
      <Link to="/compare" className={classes.linkStyle}>
      <Button
        className={classes.buttonCompare}
      >
        <GoToCompareIcon
          color="action"
          className="icon"
          style={{
            width: '30px',
            height: '23px',
          }}
        />
      </Button>
      </Link>
    );
  }
  return (
      <Button
        className={classes.buttonStyle}
        onClick={addToCompare}
      >
        <WeigherIcon
          color="action"
          className="icon"
          style={props.iconStyle}
        />
      </Button>
  );
};

export default connect(mapStateToProps, { addProductsToCompare })(AddToCompareButton);