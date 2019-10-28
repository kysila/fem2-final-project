import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import {
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Link,
  useMediaQuery,
  withTheme,
  makeStyles,
} from '@material-ui/core';

import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { dispatchLogin } from '../../store/auth/actions';
import { dispatchModalClose, dispatchModalOpen } from '../../store/modal/actions';

import { useStyles } from './styles';
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

const useMobileStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(768)]: {
      width: '90%',
    },
  },
  title: {
    [theme.breakpoints.down(768)]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  separ: {
    [theme.breakpoints.down(768)]: {
      marginTop: '25px',
    },
  },
  inactive: {
    [theme.breakpoints.down(768)]: {
      color: '#AAAAAA !important',
      cursor: 'pointer',
    },
  },
  socialIcon: {
    [theme.breakpoints.down(768)]: {
      backgroundColor: 'transparent',
      width: '100%',
    },
  },
}));

function LoginForm(props) {
  const classes = useStyles();
  const classesMobile = useMobileStyles();

  const [passwordHidden, setPasswordVisible] = useState(true);
  const PasswordIcon = passwordHidden ? VisibilityIcon : VisibilityOffIcon;
  const [state, setState] = useState({
    loginOrEmail: '',
    password: '',
  });
  const matchMobile = useMediaQuery(props.theme.breakpoints.down(768));

  const validate = () => {
    if (!state.loginOrEmail.trim()) {
      // TODO:  Input notification about error
      return false;
    }

    if (!state.password.trim() || state.password.trim().length < 8) {
      // TODO:  Input notification about error
      return false;
    }

    return true;
  };

  const onChange = (stateName) => (event) => {
    setState({ ...state, [stateName]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // TODO: send request onSubmit
      props.login(state);
      props.closeModal();
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
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          lg={5}
          md={5}
          xs={12}
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
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel classes={{ root: classes.label }} htmlFor="loginOrEmail">
              Login or Email
            </InputLabel>
            <OutlinedInput
              id="loginOrEmail"
              classes={{
                root: classes.inputRoot,
                input: classes.input,
              }}
              value={state.loginOrEmail}
              onChange={onChange('loginOrEmail')}
              labelWidth={105}
              fullWidth
            />
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel classes={{ root: classes.label }} htmlFor="password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              type={passwordHidden ? 'password' : 'text'}
              classes={{
                root: classes.inputRoot,
                input: classes.input,
              }}
              value={state.password}
              onChange={onChange('password')}
              labelWidth={105}
              fullWidth
              endAdornment={
                state.password
                  ? (
                    <PasswordIcon
                      style={{ cursor: 'pointer' }}
                      onMouseDown={() => setPasswordVisible(false)}
                      onMouseUp={() => setPasswordVisible(true)}
                    />
                  ) : null
              }
            />
          </FormControl>
          <Button fullWidth className={classes.submitBtn} onClick={onSubmit}>
            login
          </Button>
          <Typography className={classes.agree}>
            By continuing, you agree to
            <Link className={classes.link} href="/conditions"> Electra&#39;s Conditions </Link>
            of
            <Link className={classes.link} href="/privacy"> Use and Privacy Notice.</Link>
          </Typography>
          <Link
            className={classes.forgotPassword}
            href="/forgot-password"
          >
            Forgot your password?
          </Link>
        </Grid>
        <Grid
          className={classesMobile.separ}
          container
          direction={matchMobile ? 'row' : 'column'}
          justify="center"
          alignItems="center"
          lg={2}
          md={2}
          xs={2}
        >
          <Box className={classes.separ} style={matchMobile ? { left: 0, width: '40%', height: '1px' } : { top: 0 }} />
          <Typography style={museo}>
            OR
          </Typography>
          <Box className={classes.separ} style={matchMobile ? { right: 0, width: '40%', height: '1px' } : { bottom: 0 }} />
        </Grid>
        <Grid
          container
          direction={matchMobile ? 'row' : 'column'}
          justify="center"
          alignItems="center"
          lg={5}
          md={5}
          xs={12}
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
      <Box className={classes.closeWrapper} onClick={props.closeModal}>
        <CloseIcon className={classes.close} />
      </Box>
    </Grid>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(dispatchLogin(data)),
  registerModal: () => dispatch(dispatchModalOpen('register')),
  closeModal: () => dispatch(dispatchModalClose()),
});

const ConnectLoginForm = withTheme(connect(mapStateToProps, mapDispatchToProps)(LoginForm));

export {
  ConnectLoginForm as LoginForm,
};
