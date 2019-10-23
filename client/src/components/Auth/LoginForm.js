import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {dispatchLogin} from "../../store/auth/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));


function LoginForm(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    loginOrEmail: '',
    password: '',
  });

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
    }
  };

  return (
    <form action="#" className={classes.container}>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="loginOrEmail">
            Login or Email
        </InputLabel>
        <OutlinedInput
          id="loginOrEmail"
          value={state.loginOrEmail}
          onChange={onChange('loginOrEmail')}
          labelWidth={0}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel htmlFor="password">
            Password
        </InputLabel>
        <OutlinedInput
          id="password"
          type="password"
          value={state.password}
          onChange={onChange('password')}
          labelWidth={0}
        />
      </FormControl>
      <Button onClick={onSubmit}>
        Submit
      </Button>
    </form>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    login: (data) => dispatch(dispatchLogin(data)),
  };
}

const ConnectLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

function LoginModal() {
  return (
    <React.Fragment>
      <DialogTitle>
        Log In
      </DialogTitle>
      <DialogContent>
        <ConnectLoginForm />
      </DialogContent>
    </React.Fragment>
  );
}

export {
  ConnectLoginForm as LoginForm,
  LoginModal,
};
