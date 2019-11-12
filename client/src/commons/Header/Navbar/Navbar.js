/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import axios from 'axios';

import Link from '@material-ui/core/Link';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import TollIcon from '@material-ui/icons/Toll';
import { connect } from 'react-redux';
import { useStyles } from './style';
import { getCategories } from '../../../store/categories/actions';

const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const NavBar = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [catalog, setCatalog] = useState({});
  let categories;
  const classes = useStyles();

  if (props.categories) {
    categories = props.categories.map((el) => (
      <ListItem
        divider="true"
        dense="true"
        button
        key={el.name}
        className={classes.list}
        classes={{ button: classes.item }}
      >
        <TollIcon />
        <ListItemText classes={{ primary: classes.text }} primary={el.name} />
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
          <img src="img/logo.svg" alt="Logo" />
        </div>
        <List>
          {categories}
        </List>

      </Drawer>

      <Box className={classes.container}>
        <Link href="#" component="button" variant="body2" underline="none" className={classes.menuItem}>
          <Box
            onClick={(menuIsOpen) => {
              setMenuIsOpen(true);
            }}
            className={classes.container}
          >
            <p>Shop</p>
            <ExpandMoreSharpIcon fontSize="small" />
          </Box>
        </Link>
        <HashLink to="/#favourites" className={classes.menuItem}>  Customer Favorites </HashLink>
        <HashLink to="/#contact" className={classes.menuItem}> Contact</HashLink>
      </Box>
    </React.Fragment>
  );
};
export default connect(mapStateToProps, { getCategories })(NavBar);
