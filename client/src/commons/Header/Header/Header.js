import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import { dispatchLogout } from '../../../store/auth/actions';
import { dispatchModalOpen } from '../../../store/modal/actions';
import Searches from '../Searchbar/Searchbar';
import NavBar from '../Navbar/Navbar';
import Cart from '../Cart/Cart';
import { Logo } from '../../Logo/Logo';
import { useStyles } from './style';
import MenuAdaptiveIcon from '../MenuAdaptiveIcon/MenuAdaptiveIcon';

const Header = (props) => {
  const classes = useStyles();
  const openLogin = (e) => {
    e.preventDefault();
    props.openModal('login');
  };
  const openRegister = (e) => {
    e.preventDefault();
    props.openModal('register');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar} id="header">
        <Container maxWidth="md">

          <Box className={classes.container}>
            <Box className={classes.menu_icon}>
              <MenuAdaptiveIcon callCenter={props.callCenter}/>
            </Box>
            <Box className={classes.logo}>
              {' '}
              <Logo />
              {' '}
            </Box>
            <Box className={classes.input}>
              <Searches />
            </Box>

            {
              props.user ? (
                <Box className={classes.link}>
                  <Link className={classes.profileLink} to="/profile">
                    {`Hello, ${props.user.firstName || props.user.login}`}
                  </Link>
                  <span> | </span>
                  <Link to="/logout" onClick={(e) => { e.preventDefault(); props.logout(); }}>
                    Logout
                  </Link>
                </Box>
              ) : (
                <Box className={classes.link}>
                  <Link to="/login" onClick={openLogin}>Login |</Link>
                  <Link to="/register" onClick={openRegister}> Sign Up</Link>
                </Box>
              )
            }
            <Cart />
          </Box>
          <Box className={classes.container}>
            <Box>
              <NavBar />
            </Box>
            <Box className={classes.call}>
              <p>
                Call or text us toll-free:
                {props.callCenter}
              </p>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    openModal: (child) => dispatch(dispatchModalOpen(child)),
    logout: () => dispatch(dispatchLogout()),
  };
}
const ConnectHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export { ConnectHeader as Header };
