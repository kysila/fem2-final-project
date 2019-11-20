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


const AddToCompareButton = ({ ...props }) => {
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();

  const addToCompare = () => {
    props.addProductsToCompare({ ...props });
    setClicked(true);
  };

  if (clicked) {
    return (
      <Link to="/compare" className={classes.linkStyle}>
      <Button
        className={classes.buttonStyle}
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
