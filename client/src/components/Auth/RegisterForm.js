import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Link,
  makeStyles,
  Box,
  useMediaQuery, withTheme,
} from '@material-ui/core';

import classNames from 'classnames';

import CloseIcon from '@material-ui/icons/Close';
import { InputField } from '../../commons/InputField/InputField';

import { dispatchRegister } from '../../store/auth/actions';
import { dispatchModalClose, dispatchModalOpen } from '../../store/modal/actions';
import { enqueueSnackbar } from '../../store/notification/actions';

import { useStyles, useMobileStyles } from './styles';
import Tungsten from '../../fonts/Tungsten-Book.woff';
import MuseoSans from '../../fonts/MuseoSans-500.woff';
import FacebookSvg from '../../img/auth/facebook.svg';
import GoogleSvg from '../../img/auth/google.svg';

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

function RegisterForm(props) {
  const classes = useStyles();
  const classesMobile = useMobileStyles();
  const [state, setState] = useState({
    email: {
      value: '',
      error: null,
    },
    login: {
      value: '',
      error: null,
    },
    password: {
      value: '',
      error: null,
    },
    repeatPassword: {
      value: '',
      error: null,
    },
  });

  const matchMobile = useMediaQuery(props.theme.breakpoints.down(960));

  const validate = () => {
    const trimmed = Object.keys(state).reduce((trm, key) => {
      trm[key] = state[key].value.trim();
      return trm;
    }, {});

    if (!trimmed.email || !validator.isEmail(trimmed.email)) {
      setState({
        ...state,
        email: {
          ...state.email,
          error: <Typography className={classes.toolTip} component="p" style={museo}>Email should be not empty, for example: example@domain.com</Typography>,
        },
      });
      return false;
    }

    if (!trimmed.login || trimmed.login.length < 4) {
      setState({
        ...state,
        login: {
          ...state.login,
          error: <Typography className={classes.toolTip} component="p" style={museo}>Login should be more than 3 chars.</Typography>,
        },
      });
      return false;
    }

    if (!trimmed.password || trimmed.password.length < 8) {
      setState({
        ...state,
        password: {
          ...state.password,
          error: <Typography className={classes.toolTip} component="p" style={museo}>Password should be at least 8 chars.</Typography>,
        },
      });
      return false;
    }

    if (trimmed.password !== trimmed.repeatPassword) {
      setState({
        ...state,
        repeatPassword: {
          ...state.repeatPassword,
          error: <Typography className={classes.toolTip} component="p" style={museo}>Passwords aren&#39;t equal each other.</Typography>,
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
      props.register(
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
        direction="row"
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
            direction={matchMobile ? 'column' : 'row'}
            justify="flex-start"
            alignItems="center"
          >
            <Box className={classesMobile.title}>
              {
                matchMobile ? (
                  <Typography
                    onClick={() => props.loginModal()}
                    className={classNames(classes.title, classesMobile.inactive)}
                    style={tungsten}
                    variant="h3"
                    color="textPrimary"
                    align="center"
                  >
                    Log In
                  </Typography>
                ) : null
              }
              <Typography
                className={classNames(classes.title)}
                style={tungsten}
                variant="h3"
                color="textPrimary"
                align="center"
              >
                Create Account
              </Typography>
            </Box>
            <InputField
              id="email"
              type="email"
              label="Email"
              value={state.email.value}
              error={state.email.error}
              onChange={onChange('email')}
              labelWidth={40}
            />
            <InputField
              id="login"
              label="Login"
              value={state.login.value}
              error={state.login.error}
              onChange={onChange('login')}
              labelWidth={40}
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
            <InputField
              id="repeatPassword"
              type="password"
              label="Repeat password"
              onChange={onChange('repeatPassword')}
              labelWidth={125}
              value={state.repeatPassword.value}
              error={state.repeatPassword.error}
              InputProps={{ endAdornment: null }}
            />
            <Button fullWidth className={classes.submitBtn} onClick={onSubmit}>
              Sign up
            </Button>
            <Typography className={classes.agree}>
              By continuing, you agree to
              <Link className={classes.link} href="/conditions"> Electra&#39;s Conditions </Link>
              of
              <Link className={classes.link} href="/privacy"> Use and Privacy Notice.</Link>
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
            <Typography className={classes.title} style={tungsten} variant="h3" color="textPrimary" align="center">
              Enter With
            </Typography>
            <Grid
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
                <img src={FacebookSvg} className={classNames(classes.socialIcon, classesMobile.socialIcon)} alt="" />
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
                className={classNames(classes.socialButton, classes.socialGoogle)}
              >
                <img src={GoogleSvg} className={classNames(classes.socialIcon, classesMobile.socialIcon)} alt="" />
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
            </Grid>
            {
              !matchMobile ? (
                <React.Fragment>
                  <Typography className={classes.toLeft}>
                    Already Have Account?
                  </Typography>
                  <Button
                    fullWidth
                    classes={{ root: classes.createButton, label: classes.createButtonLabel }}
                    onClick={() => props.loginModal()}
                  >
                    Sign In
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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(dispatchRegister(data)),
  loginModal: () => dispatch(dispatchModalOpen()),
  closeModal: () => dispatch(dispatchModalClose()),
  warning: (message) => dispatch(enqueueSnackbar({ message, options: { variant: 'warning', preventDuplicate: true } })),
});

const ConnectRegisterForm = withTheme(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));

export {
  ConnectRegisterForm as RegisterForm,
};
