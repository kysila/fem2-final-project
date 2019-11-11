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
import { useStyles } from './style';

export const NavBar = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [catalog, setCatalog] = useState({});
  let categories;
  const classes = useStyles();

  if (catalog.data) {
    categories = catalog.data.map((el) => (
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
    axios.get('/catalog')
    // eslint-disable-next-line no-shadow
      .then((catalog) => {
        setCatalog(catalog);
      })
      .catch((err) => {
        console.log('Unsuccessful axios', err);
      });
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
        <Link component="button" variant="body2" underline="none" className={classes.menuItem}>
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
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link component="button" variant="body2" underline="none" className={classes.menuItem}>
          <HashLink to="#favourites">  Customer Favorites </HashLink>
        </Link>
        <Link component="button" variant="body2" underline="none" className={classes.menuItem}>
          <HashLink to="#contact">  Contact</HashLink>
        </Link>
      </Box>
    </React.Fragment>
  );
};
