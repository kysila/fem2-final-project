import React, {useState} from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";

const categories = [
  'e-bikes',
  'e-scooters',
  'e-skates',
];
const CategoryFilter = () => {
  const [category, setCategory] = useState([]);

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
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
        {categories.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={category.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

export default CategoryFilter;