import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import {
  Typography,
  Grid,
  Box,
  Button,
  Link,
  useMediaQuery,
  withTheme,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { InputField } from '../../commons/InputField/InputField';

import { dispatchLogin } from '../../store/auth/actions';
import { dispatchModalClose, dispatchModalOpen } from '../../store/modal/actions';
import { enqueueSnackbar } from '../../store/notification/actions';
// import { createCart } from '../../store/cart/actions';

import { useStyles, useMobileStyles } from './styles';
import Tungsten from '../../fonts/Tungsten-Book.woff';

import MuseoSans from '../../fonts/MuseoSans-500.woff';
// import FacebookSvg from '../../img/auth/facebook.svg';
// import GoogleSvg from '../../img/auth/google.svg';

const tungsten = {
  fontFamily: 'Tungsten Book',
  fontStyle: 'normal',
  src: `
    local('Tungsten Book'),
    url(${Tungsten}) format('woff')
  `,
};

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

function LoginForm(props) {
  const classes = useStyles();
  const classesMobile = useMobileStyles();
  const [state, setState] = useState({
    loginOrEmail: {
      value: '',
      error: null,
    },
    password: {
      value: '',
      error: null,
    },
  });
  const matchMobile = useMediaQuery(props.theme.breakpoints.down(960));

  const validate = () => {
    if (!state.loginOrEmail.value.trim()) {
      setState({
        ...state,
        loginOrEmail: {
          ...state.loginOrEmail,
          error: <Typography className={classes.toolTip} component="p" style={museo}>Login or email input should be filled.</Typography>,
        },
      });
      return false;
    }

    if (!state.password.value.trim() || state.password.value.trim().length < 8) {
      setState({
        ...state,
        password: {
          ...state.password,
          error: <Typography className={classes.toolTip} component="p" style={museo}>Password should be at least 8 chars.</Typography>,
        },
      });
      return false;
    }

    return true;
  };

  const onChange = (stateName) => (event) => {
    setState({ ...state, [stateName]: { error: null, value: event.target.value } });
  };


  const onSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      props.login(
        Object.keys(state).reduce((memo, key) => {
          memo[key] = state[key].value;
          return memo;
        }, {}),
      );
    }
  };

  return (
    <Grid
      component="form"
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      className={classes.container}
      action="#"
    >
      <Grid
        container
        className={classes.container__body}
        direction={matchMobile ? 'column' : 'row'}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          lg={5}
          md={5}
          xs={12}
        >
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <Box className={classNames(classesMobile.title)}>
              <Typography className={classes.title} style={tungsten} variant="h3" color="textPrimary" align="center">
                Log In
              </Typography>
              {
                matchMobile ? (
                  <Typography
                    onClick={() => props.registerModal()}
                    className={classNames(classes.title, classesMobile.inactive)}
                    style={tungsten}
                    variant="h3"
                    color="textPrimary"
                    align="center"
                  >
                    Create Account
                  </Typography>
                ) : null
              }
            </Box>
            <InputField
              id="loginOrEmail"
              label="Login or Email"
              onChange={onChange('loginOrEmail')}
              labelWidth={105}
              value={state.loginOrEmail.value}
              error={state.loginOrEmail.error}
            />
            <InputField
              id="password"
              type="password"
              label="Password"
              onChange={onChange('password')}
              labelWidth={70}
              value={state.password.value}
              error={state.password.error}
            />
            <Button fullWidth className={classes.submitBtn} onClick={onSubmit}>
              login
            </Button>
            <Typography className={classes.agree}>
              By continuing, you agree to
              <Link className={classes.link} href="/terms-and-conditions" target="_blank"> Electra&#39;s Conditions </Link>
              of
              <Link className={classes.link} href="/privacy-policy" target="_blank"> Use and Privacy Notice.</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          className={classesMobile.separ}
          item
          lg={2}
          md={2}
          xs={2}
        >
          <Grid
            container
            direction={matchMobile ? 'row' : 'column'}
            justify="center"
            alignItems="center"
          >
            <Box className={classes.separ} style={matchMobile ? { left: 0, width: '40%', height: '1px' } : { top: 0 }} />
            <Typography style={museo}>
              OR
            </Typography>
            <Box className={classes.separ} style={matchMobile ? { right: 0, width: '40%', height: '1px' } : { bottom: 0 }} />
          </Grid>
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          xs={12}
        >
          <Grid
            container
            direction={matchMobile ? 'row' : 'column'}
            justify="center"
            alignItems="center"
          >
            {
              /* <Typography
                  className={classes.title}
                  style={tungsten} variant="h3"
                  color="textPrimary"
                  align="center"
               >
                Enter With
              </Typography> */
            }
            {
              /* <Grid
                container
                direction={matchMobile ? 'row' : 'column'}
                justify="space-around"
              >
                <Grid
                  item
                  lg={12}
                  md={12}
                  xs={5}
                  className={classNames(classes.socialButton, classes.socialFacebook)}
                >
                  <img src={FacebookSvg} className={
                    classNames(classes.socialIcon, classesMobile.socialIcon)
                  } alt="" />
                  {
                    !matchMobile ? (
                      <Grid
                        container
                        justify="center"
                        alignItems="center"
                      >
                        <Typography className={classes.socialText}>
                          FACEBOOK
                        </Typography>
                      </Grid>
                    ) : null
                  }
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  xs={5}
                  className={
                    classNames(classes.socialButton, classes.socialGoogle)
                  }
                >
                  <img src={GoogleSvg} className={
                    classNames(classes.socialIcon, classesMobile.socialIcon)
                  } alt="" />
                  {
                    !matchMobile ? (
                      <Grid
                        container
                        justify="center"
                        alignItems="center"
                      >
                        <Typography className={classes.socialText}>
                          GOOGLE
                        </Typography>
                      </Grid>
                    ) : null
                  }
                </Grid>
              </Grid> */
            }
            {
              !matchMobile ? (
                <React.Fragment>
                  <Typography className={classes.toLeft}>
                    New to Electra?
                  </Typography>
                  <Button
                    fullWidth
                    classes={{ root: classes.createButton, label: classes.createButtonLabel }}
                    onClick={() => props.registerModal()}
                  >
                    Create Account
                  </Button>
                </React.Fragment>
              ) : null
            }
          </Grid>
        </Grid>
      </Grid>
      <Box className={classes.closeWrapper} onClick={props.closeModal}>
        <CloseIcon className={classes.close} />
      </Box>
    </Grid>
  );
}

const mapStateToProps = (state) => (
  {
    cart: state.cartReducer.cart.products,

  });

const mapDispatchToProps = (dispatch) => ({
  // createCart: (payload) => dispatch(createCart(payload)),
  login: (data) => dispatch(dispatchLogin(data)),
  registerModal: () => dispatch(dispatchModalOpen('register')),
  closeModal: () => dispatch(dispatchModalClose()),
  warning: (message) => dispatch(enqueueSnackbar({ message, options: { variant: 'warning', preventDuplicate: true } })),
});

const ConnectLoginForm = withTheme(
  connect(mapStateToProps, mapDispatchToProps)(
    LoginForm,
  ),
);

export {
  ConnectLoginForm as LoginForm,
};
