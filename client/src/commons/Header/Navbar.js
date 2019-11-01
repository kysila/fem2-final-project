/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import axios from 'axios';


import Link from '@material-ui/core/Link';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import TollIcon from '@material-ui/icons/Toll';
import Modal from "@material-ui/core/Modal";


const useStyles = makeStyles(() => createStyles({
  menuItem: {
    marginRight: '15px',
    marginLeft: '15px',
    color: ' #444444 ',
    '&:hover': {
      color: ' #6686FF ',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawer: {},
  paper: {
    paddingRight: '0.5%',
    paddingTop: '2%',
    background: '#f4efff',
    fontSize: '20px',
    color: '#9c80ff',
  },
  list: {
    marginRight: '50px',
    divider: 'true',
    width: '250px',
  },
  item: {
    marginLeft: '2%',
    marginRight: '2%',
  },
  text: {
    display: 'inline-block',
    paddingRight: '3%',
    paddingLeft: '3%',
    textTransform: 'uppercase',

  },
  logo: {
    paddingLeft: '8%',
    marginBottom: '5%',
  },

}));

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
        <Link component="button" variant="body2" underline="none" className={classes.menuItem}>
                    Customer Favorites
        </Link>
        <Link component="button" variant="body2" underline="none" className={classes.menuItem}>
                    Contact
                </Link>
            </Box>
        </React.Fragment>
    )
};
