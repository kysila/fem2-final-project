/* eslint-disable no-shadow,react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import TollIcon from '@material-ui/icons/Toll';

import { Link } from 'react-router-dom';
import { useStyles } from './style';
import { getCategories } from '../../../store/categories/actions';
import { Logo } from '../../Logo/Logo';
import { categorySelect } from '../../../store/selectedFilters/actions';

const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const NavBar = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  let categories;
  const classes = useStyles();

  if (props.categories) {
    categories = props.categories.map((el) => (
      <ListItem
        divider
        dense
        button
        key={el.name}
        className={classes.list}
        classes={{ button: classes.item }}
        onClick={() => setMenuIsOpen(false)}
      >
        <TollIcon />
        <Link
          to={`/products/filter?perPage=8&startPage=1&categories=${el.id}`}
          onClick={() => {
            props.categorySelect(el.id);
          }}
        >
          <ListItemText classes={{ primary: classes.text }} primary={el.name} />
        </Link>
      </ListItem>
    ));
  }

  useEffect(() => {
    props.getCategories();
  }, []);

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.paper,
        }}
        open={menuIsOpen}
        BackdropProps={{
          style: {
            background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
            opacity: '0.5',
          },
        }}
        onClose={(menuIsOpen) => {
          setMenuIsOpen(false);
        }}
      >
        <div className={classes.logo}>
          <Logo />
        </div>
        <Box className={classes.list_box}>
          <List>
            {categories}
          </List>
        </Box>


      </Drawer>

      <Box className={classes.container}>
        <div className={classes.menuItem}>
          <Box
            onClick={(menuIsOpen) => {
              setMenuIsOpen(true);
            }}
            className={classes.container}
          >
            <p>Shop</p>
          </Box>
        </div>
        <HashLink smooth to="/#favourites" className={classes.menuItem}>  Customer Favorites </HashLink>
        <HashLink smooth to="/#contact" className={classes.menuItem}> Contact</HashLink>
      </Box>
    </React.Fragment>
  );
};
export default connect(mapStateToProps, { getCategories, categorySelect })(NavBar);
