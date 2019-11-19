import React, { useState } from 'react';

import { connect } from 'react-redux';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { selectFilters } from '../../../store/selectedFilters/actions';

const CategoryFilter = (props) => {
  const [category, setCategory] = useState(() => {
    if (props.selectedFilters.categories) {
      return [props.selectedFilters.categories];
    }
    return [];
  });


  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    props.selectFilters(event, event.target.value, 'categories', { ...props.selectedFilters });
  };

  return (
    <React.Fragment>
      <InputLabel id="category-select-label">Category</InputLabel>
      <Select
        id="category-select"
        multiple
        value={category}
        onChange={handleChangeCategory}
        input={<Input />}
        renderValue={(selected) => selected.join(', ')}
      >
        {props.categories.map(({ id }) => (
          <MenuItem key={id} value={id}>
            <Checkbox checked={category.indexOf(id) > -1} />
            <ListItemText primary={id} />
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  ...state,
  selectedFilters: state.selectFilterReducer.selectedFilters,
});

export default connect(mapStateToProps, { selectFilters })(CategoryFilter);
