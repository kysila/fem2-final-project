import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { WeigherIcon } from '../Icons/Icons';
import { addProductsToCompare } from '../../store/compare/actions';

const mapStateToProps = (state) => ({
  products: state.compareReducer.products,
});


const AddToCompareButton = ({ obj, name, itemImg, price, url, rating, key, itemNo, id, ...props
}) => {
  const addToCompare = () => {
    props.addProductsToCompare({ name, itemImg, price, url, rating, key, itemNo, id });
  };

  return (
    <Button
      className={props.className}
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
