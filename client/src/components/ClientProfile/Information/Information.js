/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
// import validator from 'validator';
import classNames from 'classnames';
import DateFnsUtils from '@date-io/date-fns';
// Material UI
import {
  Button, Checkbox, Divider, Grid, ExpansionPanel, ExpansionPanelActions,
  ExpansionPanelDetails, ExpansionPanelSummary, FormControl, FormControlLabel,
  InputLabel, OutlinedInput, Typography, Link, Select,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// Local changes
import { useStyles } from './style';
import { dispatchGetCustomer } from '../../../store/auth/actions';


export const Info = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('panel1');
  const [customerInfo, setCustomerInfo] = useState('customer');
  const [passwordHidden, setPasswordVisible] = useState(true);
  const PasswordIcon = passwordHidden ? VisibilityIcon : VisibilityOffIcon;

  const inputLabel = React.useRef(null);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    repeatPassword: '',
    address: '',
    birthdate: new Date(),
    gender: '',
    haveChildren: '',
    haveCar: '',
    eBicycle: '',
    checkedSubscribe: true,
  });

  const preventDefault = (event) => event.preventDefault();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // TODO: complete validation

  const onChange = (stateName) => (event) => {
    if (stateName === 'checkedSubscribe') {
      setValues({ ...values, [stateName]: event.target.checked });
    } else {
      setValues({ ...values, [stateName]: event.target.value });
    }
  };

  const handleDateChange = (date) => {
    setValues({ ...values, dateOfBirth: date });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const {
      email, password, firstName,
      lastName, phone, address, birthdate,
      gender, haveChildren, haveCar, eBicycle,
      checkedSubscribe,
    } = values;
    // TODO: complete validation
    // console.log('%c⧭ values', 'color: #00ff73', values);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const updatedCustomer = {
  //   firstName: "Antonio",
  //   lastName: "Front End Developer"
  // };

  // const showItToConsole = () => {
  //   axios.put('/customers', updatedCustomer)
  //     // eslint-disable-next-line no-shadow
  //     .then((updatedCustomer) => {
  //       console.log('%c⧭ updatedCustomer', 'color: #00e600', updatedCustomer);
  //     })
  //     .catch((err) => {
  //       console.log('%c⧭ err', 'color: #00a3cc', err);
  //     });
  // };


  useEffect(() => {
    const { user } = props;
    setValues({ ...values, ...user });
  }, [props]);

  return (
    <React.Fragment>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            className={classes.heading}
            style={{ color: '#6A86E8' }}
          >
            Information
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          className={classes.expansionPanelDetails}
        >
          <Grid
            className={classes.root}
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              className={classes.gridFormsInfo}
            >
              <Typography
                variant="h5"
                className={classes.formsInfo}
              >
                Contact information
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                className={classes.formControl}
                variant="outlined"
              >
                <InputLabel
                  classes={{ root: classes.label }}
                  htmlFor="firstName"
                >
                  First Name
                </InputLabel>
                <OutlinedInput
                  id="firstName"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.input,
                  }}
                  value={values.firstName}
                  onChange={onChange('firstName')}
                  labelWidth={80}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                className={classes.formControl}
                variant="outlined"
              >
                <InputLabel
                  classes={{ root: classes.label }}
                  htmlFor="lastName"
                >
                  Last Name
                </InputLabel>
                <OutlinedInput
                  id="lastName"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.input,
                  }}
                  value={values.lastName}
                  onChange={onChange('lastName')}
                  labelWidth={80}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                className={classes.formControl}
                variant="outlined"
              >
                <InputLabel
                  classes={{ root: classes.label }}
                  htmlFor="email"
                >
                  Email
                </InputLabel>
                <OutlinedInput
                  id="email"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.input,
                  }}
                  value={values.login}
                  onChange={onChange('email')}
                  labelWidth={40}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                className={classes.formControl}
                variant="outlined"
              >
                <InputLabel
                  classes={{ root: classes.label }}
                  htmlFor="phone"
                >
                  Phone
                </InputLabel>
                <OutlinedInput
                  id="phone"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.input,
                  }}
                  value={values.login}
                  onChange={onChange('phone')}
                  labelWidth={50}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
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
                  value={values.password}
                  onChange={onChange('password')}
                  labelWidth={75}
                  fullWidth
                  endAdornment={
                    values.password
                      ? (
                        <PasswordIcon
                          style={{ cursor: 'pointer', userSelect: 'none' }}
                          onTouchStart={() => setPasswordVisible(false)}
                          onMouseDown={() => setPasswordVisible(false)}
                          onTouchEnd={() => setPasswordVisible(true)}
                          onMouseUp={() => setPasswordVisible(true)}
                        />
                      ) : null
                  }
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
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
                  value={values.repeatPassword}
                  onChange={onChange('repeatPassword')}
                  labelWidth={130}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              className={classes.gridFormsInfo}
            >
              <Typography
                variant="h5"
                className={classes.formsInfo}
              >
                Shipping Address
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
            >
              <FormControl
                className={classes.formControl}
                variant="outlined"
              >
                <InputLabel
                  classes={{ root: classes.label }}
                  htmlFor="address"
                >
                  Address
                </InputLabel>
                <OutlinedInput
                  id="address"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.input,
                  }}
                  value={values.lastName}
                  onChange={onChange('address')}
                  labelWidth={60}
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
            >
              <Typography
                variant="h5"
                className={classes.formsInfo}
              >
                Payment Information
              </Typography>
              <Typography
                variant="body2"
                className={classes.ordinaryText}
              >
                You have switched saving payment cards off.&ensp;
                <Link
                  variant="body2"
                  /* component="button" */
                  href="#"
                  onClick={preventDefault}
                  style={{ color: '#6A86E8' }}
                >
                  Add new payment card.
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              className={classes.gridFormsInfo}
            >
              <Typography
                variant="h5"
                className={classes.formsInfo}
              >
                Personal Information
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className={classes.formControl}
                  htmlFor="birthdate"
                  InputProps={{ className: classes.inputDate }}
                  InputLabelProps={{ className: classes.labelDate }}
                  id="birthdate"
                  autoOk
                  disableFuture
                  variant="inline"
                  inputVariant="outlined"
                  label="Date of Birth"
                  format="MM/dd/yyyy"
                  openTo="year"
                  value={values.birthdate}
                  InputAdornmentProps={{ position: 'end' }}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  classes={{ root: classes.label }}
                  htmlFor="gender"
                /* className={classes.selectData} */
                >
                  Gender
                </InputLabel>
                <Select
                  native
                  value={values.gender}
                  onChange={onChange('gender')}
                  labelWidth={60}
                  fullWidth
                  inputProps={{
                    name: 'gender',
                    id: 'gender',
                    className: classes.input,
                  }}
                >
                  <option key={1} value="" />
                  <option key={2} value="male">Male</option>
                  <option key={3} value="female">Female</option>
                  <option key={4} value="other">Other variant</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  classes={{ root: classes.label }}
                  htmlFor="haveChildren"
                >
                  I have a child
                </InputLabel>
                <Select
                  native
                  value={values.haveChildren}
                  onChange={onChange('haveChildren')}
                  labelWidth={100}
                  fullWidth
                  inputProps={{
                    name: 'haveChildren',
                    id: 'haveChildren',
                    className: classes.input,
                  }}
                >
                  <option key={1} value="" />
                  <option key={2} value="yes">Yes</option>
                  <option key={3} value="no">No</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  classes={{ root: classes.label }}
                  htmlFor="haveCar"
                >
                  I have a car
                </InputLabel>
                <Select
                  native
                  value={values.haveCar}
                  onChange={onChange('haveCar')}
                  labelWidth={90}
                  fullWidth
                  inputProps={{
                    name: 'haveCar',
                    id: 'haveCar',
                    className: classes.input,
                  }}
                >
                  <option key={1} value="" />
                  <option key={2} value="yes">Yes</option>
                  <option key={3} value="no">No</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormControl
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  classes={{ root: classes.label }}
                  htmlFor="eBicycle"
                >
                  I have an electric bicycle
                </InputLabel>
                <Select
                  native
                  value={values.eBicycle}
                  onChange={onChange('eBicycle')}
                  labelWidth={190}
                  fullWidth
                  inputProps={{
                    name: 'eBicycle',
                    id: 'eBicycle',
                    className: classes.input,
                  }}
                >
                  <option key={1} value="" />
                  <option key={2} value="yes">Yes</option>
                  <option key={3} value="no">No</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
            >
              <FormControlLabel
                control={(
                  <Checkbox
                    color="default"
                    checked={values.checkedSubscribe}
                    onChange={onChange('checkedSubscribe')}
                    value="checkedSubscribe"
                    inputProps={{
                      'aria-label': 'checkbox with default color',
                    }}
                  />
                )}
                label="Keep me up to date on news and exclusive offers"
              />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button
            size="medium"
            color="primary"
            onClick={onSubmit}

          >
            Save
          </Button>
          <Button
            size="medium"
          >
            Cancel
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </React.Fragment>
  );
};

function putStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

function putActionsToProps(dispatch) {
  return {
    getCustomerInfo: () => dispatch(dispatchGetCustomer()),
  };
}

export const Information = connect(putStateToProps, putActionsToProps)(Info);
