import React, { useState } from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { useStyles } from './style';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

const MenuAdaptiveIcon = (props) => {
  const classes = useStyles();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleDrawerOpen = () => {

  };
  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => {
          setMenuIsOpen(true);
        }}
        edge="false"
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
          <img src="img/logo.svg" alt="Logo" />
        </div>
        <List>
          {/* {categories} */}
        </List>

      </Drawer>

    </React.Fragment>
  );
};


export default connect(mapStateToProps)(MenuAdaptiveIcon);
