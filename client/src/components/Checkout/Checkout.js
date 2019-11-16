import React, { useState } from 'react';
import {
  Button, Checkbox, FormControlLabel, Grid, Typography, useMediaQuery, withTheme,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withProps } from 'recompose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

export const Checkout = connect(null, {
  openMap: (inject) => dispatchModalOpen('map', inject),
  closeModal: () => dispatchModalClose(),
})(withTheme((props) => {
  const classes = useStyles(props);
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
    promote: true,
  });

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
            <Typography component="span" style={{ color: '#8F8DE2', cursor: 'pointer' }} onClick={props.openLogin}>
              {' '}
Log
              In
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
              control={<Checkbox color="default" checked={state.promote} onChange={onChange('promote')} value="" />}
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
                      Container:
                        withProps({ onClick: props.closeModal })(MapContainer),
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
              <Link to="/checkout/shipping">
                <Button
                  style={{
                    padding: '13px 42px', fontSize: '14px', marginTop: '20px', fontWeight: 'bold', ...museo,
                  }}
                >
                  Continue to Shipping
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}));
