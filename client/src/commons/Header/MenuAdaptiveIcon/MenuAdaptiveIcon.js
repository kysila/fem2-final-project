import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';

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

import Box from '@material-ui/core/Box';
import Searches from '../Searchbar/Searchbar';
import { useStyles } from './style';
import { categorySelect } from '../../../store/selectedFilters/actions';
import { dispatchModalOpen } from '../../../store/modal/actions';
import { dispatchLogout } from '../../../store/auth/actions';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    categories: state.categoryReducer.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (child) => dispatch(dispatchModalOpen(child)),
    logout: () => dispatch(dispatchLogout()),
    categorySelect: (id) => dispatch(categorySelect(id)),
  };
}

const MenuAdaptiveIcon = (props) => {
  const {
    openModal,
    logout,
    // eslint-disable-next-line no-shadow
    categorySelect,
    categories,
    callCenter,
    user,
  } = props;
  const classes = useStyles();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  let category;

  const handleClick = () => {
    setOpen(!open);
  };
  const openLogin = (e) => {
    e.preventDefault();
    openModal('login');
    setMenuIsOpen(false);
  };
  const openRegister = (e) => {
    e.preventDefault();
    openModal('register');
    setMenuIsOpen(false);
  };

  if (categories) {
    category = categories.map((el) => (
      <ListItem key={el.name} button className={classes.nested}>
        <Link
          to={`/shop/filter?perPage=8&startPage=1&categories=${el.id}`}
          onClick={() => {
            categorySelect(el.id);
            setMenuIsOpen(false);
          }}
        >
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
            className={classes.close_icon}
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
            {callCenter}
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
              {category}
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

            <HashLink to="/#favourites" className={classes.menuItem}>
              <ArrowForwardIosIcon className={classes.arrow_icon} />
            </HashLink>
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
            <HashLink to="/#contact" className={classes.menuItem}>
              <ArrowForwardIosIcon className={classes.arrow_icon} />
            </HashLink>
          </ListItem>
          <ListItem
            className={classes.list_icon}
            key="3"
            button
          >
            {
              !props.user ? (
                <Box className={classes.link}>
                  <Link to="/login" onClick={openLogin}>Login |</Link>
                  <Link to="/register" onClick={openRegister}> Sign Up</Link>
                </Box>
              ) : (
                <Box className={classes.link}>
                  <Link className={classes.profileLink} to="/profile">
                    {`Hello, ${user.firstName || user.login}`}
                  </Link>
                  <span> | </span>
                  <Link to="/logout" className={classes.profileLink} onClick={(e) => { e.preventDefault(); logout(); setMenuIsOpen(false); }}>
                      Logout
                  </Link>
                </Box>
              )
            }

          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuAdaptiveIcon);
