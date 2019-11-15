import React, { useState } from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import Searches from '../Searchbar/Searchbar';
import { useStyles } from './style';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    categories: state.categoryReducer.categories,
  };
}

const MenuAdaptiveIcon = (props) => {
  const classes = useStyles();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  let categories;

  const handleClick = () => {
    setOpen(!open);
  };

  if (props.categories) {
    categories = props.categories.map((el) => (
      <ListItem key={el.name} button className={classes.nested}>
        <Link to={`/products/filter?perPage=8&startPage=1&categories=${el.id}`}>
          <ListItemText secondary={el.name} />
        </Link>
      </ListItem>
    ));
  }

  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => {
          setMenuIsOpen(true);
        }}
        edge={false}
        className={classes.menu_icon}
      >
        <MenuIcon />
      </IconButton>

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
        onClose={() => {
          setMenuIsOpen(false);
        }}
      >
        <div className={classes.logo}>
          <CloseIcon
            fontSize="large"
            onClick={() => {
              setMenuIsOpen(false);
            }}
          />
          <p className={classes.title}>MENU</p>
        </div>
        <Divider />
        <div className={classes.call}>
          <p>
                  Call or text us toll-free:
            {props.callCenter}
          </p>
        </div>
        <Searches />

        <List>
          <ListItem key="0" button onClick={handleClick}>
            <ListItemText primary="Shop" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {categories}
            </List>
          </Collapse>

          <ListItem
            className={classes.list_icon}
            key="1"
            button
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            <HashLink to="/#favourites" className={classes.menuItem}>
              <ListItemText primary="Customer Favorites" />
            </HashLink>
            <ArrowForwardIosIcon fontSize="small" />
          </ListItem>
          <ListItem
            className={classes.list_icon}
            key="2"
            button
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            <HashLink to="/#contact" className={classes.menuItem}>
              <ListItemText primary="Contact" />
            </HashLink>
            <ArrowForwardIosIcon fontSize="small" />
          </ListItem>
          <ListItem
            className={classes.list_icon}
            key="3"
            button
            >
            <Link to="/login">
              <ListItemText primary="Log in | Sign Up" />
            </Link>
            <ArrowForwardIosIcon fontSize="small" />
          </ListItem>
          <ListItem
            className={classes.list_icon}
            key="4"
            button
            >
            <Link to="/">
              <ListItemText primary="Cart" />
            </Link>
            <ArrowForwardIosIcon fontSize="small" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(MenuAdaptiveIcon);
