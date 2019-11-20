import React, { useEffect, useState } from 'react';
import {
  Button, Checkbox, FormControlLabel, Grid, Typography, useMediaQuery, withTheme,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import validator from 'validator';
import { InputField } from '../../commons/InputField/InputField';
import { useStyles } from './styles';
import { MapContainer } from './MapContainer';
import MuseoSans from '../../fonts/MuseoSans-500.woff';
import { dispatchModalClose, dispatchModalOpen } from '../../store/modal/actions';

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

export const Checkout = withRouter(connect(({ auth: { user } }) => ({ user }), {
  openMap: (inject) => dispatchModalOpen('map', inject),
  openLogin: () => dispatchModalOpen('login'),
  closeModal: () => dispatchModalClose(),
})(withTheme((props) => {
  const classes = useStyles();
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  const [state, setState] = useState({
    email: {
      value: '',
      error: null,
    },
    phone: {
      value: '',
      error: null,
    },
    firstName: {
      value: '',
      error: null,
    },
    lastName: {
      value: '',
      error: null,
    },
    company: {
      value: '',
      error: null,
    },
    appartment: {
      value: '',
      error: null,
    },
    address: {
      value: '',
      error: null,
    },
    promote: {
      value: true,
    },
  });

  useEffect(() => {
    const oldState = JSON.parse(localStorage.getItem('/checkout/info'));
    if (oldState) {
      setState(oldState);
    }
  }, []);

  const validate = () => {
    const {
      email,
      phone,
      firstName,
      lastName,
      address,
    } = Object.keys(state).reduce((memo, key) => {
      if (typeof state[key] === 'object') {
        memo[key] = state[key].value;
      }
      return memo;
    }, {});

    const isEmail = (value) => validator.isEmail(value);
    const isEmpty = (value) => validator.isEmpty(value);
    const isMobilePhone = (value) => validator.isMobilePhone(value);


    if (isEmpty(email) || !isEmail(email)) {
      setState({ ...state, email: { ...state.email, error: 'Email is invalid. Please fill right email. Example: john.doe@example.com' } });
      return false;
    }

    if (isEmpty(phone) && !isMobilePhone(phone)) {
      setState({ ...state, phone: { ...state.phone, error: 'Phone number is wrong, please fill write mobile phone to contact with you.' } });
      return false;
    }

    if (isEmpty(firstName) && firstName.length <= 2) {
      setState({ ...state, firstName: { ...state.firstName, error: 'Please fill your first name.' } });
      return false;
    }

    if (isEmpty(lastName) && lastName.length <= 2) {
      setState({ ...state, lastName: { ...state.lastName, error: 'Please fill your last name.' } });
      return false;
    }

    if (isEmpty(address)) {
      setState({ ...state, address: { ...state.address, error: 'Please add your shipping address.' } });
      return false;
    }

    return true;
  };

  const onSubmit = (e) => {
    if (e) e.preventDefault();
    if (validate()) {
      localStorage.setItem('/checkout/info', JSON.stringify(state));
      props.history.push('/checkout/shipping');
    }
  };

  const onChange = (stateName) => (event) => {
    setState({
      ...state,
      [stateName]: {
        value: event.target.checked || event.target.value,
        error: null,
      },
    });
  };

  return (
    <Grid
      className={classes.contact}
      container
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        component="form"
        onSubmit={onSubmit}
      >
        <Grid
          container
          direction={mobile ? 'column' : 'row'}
          alignItems={mobile ? null : 'center'}
          justify="space-between"
        >
          <Typography style={{ lineHeight: '30px', fontSize: '20px', ...museo }}>
            Contact information
          </Typography>
          <Typography style={{ fontSize: '14px', ...museo }}>
            Already have an account?
            <Typography
              component="span"
              style={{ color: '#8F8DE2', cursor: 'pointer' }}
              onClick={() => {
                props.history.push('/');
                props.openLogin();
              }}
            >
              {' '}
               Log In
            </Typography>
          </Typography>
        </Grid>
        <Grid
          container
          direction={mobile ? 'column' : 'row'}
          alignItems={mobile ? null : 'center'}
          justify="center"
          spacing={mobile ? 0 : 2}
        >
          <Grid
            item
            lg={mobile ? 12 : 6}
            md={mobile ? 12 : 6}
            xs={mobile ? 12 : 6}
          >
            <InputField
              id="email"
              type="email"
              label="Email"
              labelWidth={35}
              onChange={onChange('email')}
              value={state.email.value}
              error={state.email.error}
            />
          </Grid>
          <Grid
            item
            lg={mobile ? 12 : 6}
            md={mobile ? 12 : 6}
            xs={mobile ? 12 : 6}
          >
            <InputField
              id="phone"
              type="tel"
              label="Phone"
              labelWidth={40}
              onChange={onChange('phone')}
              value={state.phone.value}
              error={state.phone.error}
            />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <FormControlLabel
              style={{ marginTop: mobile ? '20px' : 'auto' }}
              control={<Checkbox color="default" checked={state.promote.value} onChange={onChange('promote')} value="" />}
              label="Keep me up to date on news and exclusive offers"
            />
          </Grid>
        </Grid>
        <Grid
          className={classes.shipping}
          container
          direction={mobile ? 'column' : 'row'}
          alignItems={mobile ? null : 'center'}
          justify="space-between"
        >
          <Typography style={{ lineHeight: '30px', fontSize: '20px', ...museo }}>
            Shipping address
          </Typography>
        </Grid>
        <Grid
          container
          direction={mobile ? 'column' : 'row'}
          alignItems={mobile ? null : 'center'}
          justify="center"
          spacing={mobile ? 0 : 2}
        >
          <Grid
            item
            lg={mobile ? 12 : 6}
            md={mobile ? 12 : 6}
            xs={mobile ? 12 : 6}
          >
            <InputField
              id="firstName"
              type="text"
              label="First name"
              labelWidth={65}
              onChange={onChange('firstName')}
              value={state.firstName.value}
              error={state.firstName.error}
            />
          </Grid>
          <Grid
            item
            lg={mobile ? 12 : 6}
            md={mobile ? 12 : 6}
            xs={mobile ? 12 : 6}
          >
            <InputField
              id="lastName"
              type="text"
              label="Last name"
              labelWidth={65}
              onChange={onChange('lastName')}
              value={state.lastName.value}
              error={state.lastName.error}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction={mobile ? 'column' : 'row'}
          alignItems={mobile ? null : 'center'}
          justify="center"
          spacing={mobile ? 0 : 2}
        >
          <Grid
            item
            lg={mobile ? 12 : 6}
            md={mobile ? 12 : 6}
            xs={mobile ? 12 : 6}
          >
            <InputField
              id="company"
              type="text"
              label="Company (optional)"
              labelWidth={130}
              onChange={onChange('company')}
              value={state.company.value}
              error={state.company.error}
            />
          </Grid>
          <Grid
            item
            lg={mobile ? 12 : 6}
            md={mobile ? 12 : 6}
            xs={mobile ? 12 : 6}
          >
            <InputField
              id="appartment"
              type="text"
              label="Appartment, suite, etc (optional)"
              labelWidth={210}
              onChange={onChange('appartment')}
              value={state.appartment.value}
              error={state.appartment.error}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction={mobile ? 'column' : 'row'}
          alignItems={mobile ? null : 'center'}
          justify="center"
          spacing={2}
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <InputField
              id="address"
              label={mobile ? 'Address' : 'Address (start writing or select on the map)'}
              labelWidth={280}
              onChange={onChange('address')}
              value={state.address.value}
              error={state.address.error}
              InputProps={{
                endAdornment: (
                  <LocationOnIcon
                    style={{ color: '#888888' }}
                    onClick={() => props.openMap({
                      onChange: onChange('address'),
                      className: classes.map,
                      mapElementClass: classes.mapElement,
                      address: state.address.value.trim(),
                      marker: null,
                      Container: (pps) => <MapContainer {...pps} onClick={props.closeModal} />,
                    })}
                  />),
              }}
            />
          </Grid>
        </Grid>
        <Grid
          className={classes.navigation}
          container
          direction={mobile ? 'column' : 'row'}
          alignItems="center"
          justify="space-between"
        >
          <Grid
            item
            lg={mobile ? 12 : 6}
            md={mobile ? 12 : 6}
            xs={mobile ? 12 : 6}
          >
            <Typography component="span" className={classes.editCart} style={museo}>
              <ArrowBackIosIcon style={{ fontSize: '14px', lineHeight: '30px' }} />
              Edit Cart
            </Typography>
          </Grid>
          <Grid
            item
            lg={mobile ? 12 : 6}
            md={mobile ? 12 : 6}
            xs={mobile ? 12 : 6}
          >
            <Grid
              container
              direction="row"
              alignItems={mobile ? null : 'center'}
              justify={mobile ? 'center' : 'flex-end'}
            >
              <Button
                type="submit"
                style={{
                  padding: '13px 42px', fontSize: '14px', marginTop: '20px', fontWeight: 'bold', ...museo,
                }}
              >
                  Continue to Shipping
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
})));
