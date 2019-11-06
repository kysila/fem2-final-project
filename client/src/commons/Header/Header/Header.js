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
import { NavBar } from '../Navbar/Navbar';
import Cart from '../Cart/Cart';
import { useStyles } from './style';

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
      <AppBar className={classes.appBar}>
        <Container maxWidth="md">
          <Box className={classes.container}>
            <Box className={classes.link}>
              <Link to="/">
                <img src="/img/logo.svg" alt="Logo" />
              </Link>
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
                  <a href="/logout" onClick={(e) => { e.preventDefault(); props.logout(); }}>
                    Logout
                  </a>
                </Box>
              ) : (
                <Box className={classes.link}>
                  <a href="/login" onClick={openLogin}>Login |</a>
                  <a href="/register" onClick={openRegister}> Sign Up</a>
                </Box>
              )
            }
            <Cart count={2} />
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
