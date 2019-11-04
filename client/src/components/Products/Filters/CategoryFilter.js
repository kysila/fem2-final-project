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
  const [category, setCategory] = useState([]);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    props.selectFilters(event, event.target.value, 'category');
  };

  const handleChangeMultipleCategory = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setCategory(value);
    props.selectFilters(event, event.target.value, 'category');
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
  selectedFilters: state.filterReducer.selectedFilters,
  filterType: state.filterReducer.filterType,
});

export default connect(mapStateToProps, { selectFilters })(CategoryFilter);
