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

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { dispatchRegister } from '../../store/auth/actions';
import { dispatchModalClose, dispatchModalOpen } from '../../store/modal/actions';
import { useStyles } from './styles';

import Tungsten from '../../fonts/Tungsten-Book.woff';
import MuseoSans from '../../fonts/MuseoSans-500.woff';

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
  socialButton: {},
}));


function RegisterForm(props) {
  const classes = useStyles();
  const classesMobile = useMobileStyles();

  const [passwordHidden, setPasswordVisible] = useState(true);
  const PasswordIcon = passwordHidden ? VisibilityIcon : VisibilityOffIcon;
  const [state, setState] = useState({
    email: '',
    login: '',
    password: '',
    repeatPassword: '',
  });

  const matchMobile = useMediaQuery(props.theme.breakpoints.down(768));

  const validate = () => {
    const trimmed = Object.keys(state).reduce((trm, key) => {
      trm[key] = state[key].trim();
      return trm;
    }, {});

    if (!trimmed.email || !validator.isEmail(trimmed.email)) {
      // TODO:  Input notification about error
      return false;
    }

    if (!trimmed.login || trimmed.login.length < 4) {
      // TODO:  Input notification about error
      return false;
    }

    if (!trimmed.password || trimmed.password.length < 8) {
      // TODO:  Input notification about error
      return false;
    }

    if (trimmed.password !== trimmed.repeatPassword) {
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

    const { email, login, password } = state;

    if (validate()) {
      console.log(state, 'REQUEST');
      // TODO: send request onSubmit
      props.register({ email, login, password });
      props.closeModal({ email, login, password });
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
      style={{ width: '350px' }}
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
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          lg={12}
          md={12}
          xs={12}
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
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel classes={{ root: classes.label }} htmlFor="email">
              Email
            </InputLabel>
            <OutlinedInput
              id="email"
              classes={{
                root: classes.inputRoot,
                input: classes.input,
              }}
              value={state.loginOrEmail}
              onChange={onChange('email')}
              labelWidth={40}
              fullWidth
            />
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel classes={{ root: classes.label }} htmlFor="login">
              Login
            </InputLabel>
            <OutlinedInput
              id="login"
              classes={{
                root: classes.inputRoot,
                input: classes.input,
              }}
              value={state.login}
              onChange={onChange('login')}
              labelWidth={40}
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
              labelWidth={75}
              fullWidth
              endAdornment={
                state.password
                  ? (
                    <PasswordIcon
                      onMouseDown={() => setPasswordVisible(false)}
                      onMouseUp={() => setPasswordVisible(true)}
                    />
                  ) : null
              }
            />
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel classes={{ root: classes.label }} htmlFor="repeatPassword">
              Repeat password
            </InputLabel>
            <OutlinedInput
              id="repeatPassword"
              type="password"
              classes={{
                root: classes.inputRoot,
                input: classes.input,
              }}
              value={state.repeatPassword}
              onChange={onChange('repeatPassword')}
              labelWidth={125}
              fullWidth
            />
          </FormControl>
          <Button fullWidth className={classes.submitBtn} onClick={onSubmit}>
            Create Account
          </Button>
          <Typography className={classes.agree}>
            By continuing, you agree to
            <Link className={classes.link} href="/conditions"> Electra&#39;s Conditions </Link>
            of
            <Link className={classes.link} href="/privacy"> Use and Privacy Notice.</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    register: (data) => dispatch(dispatchRegister(data)),
    loginModal: () => dispatch(dispatchModalOpen()),
    closeModal: () => dispatch(dispatchModalClose()),
  };
}

const ConnectRegisterForm = withTheme(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));

export {
  ConnectRegisterForm as RegisterForm,
};
