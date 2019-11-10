import React, { useCallback, useState } from 'react';
import {
  Grid, Typography, Checkbox, FormControlLabel, Button, Divider, Box, useMediaQuery, withTheme,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { withProps } from 'recompose';
import { Transition } from 'react-transition-group';
import { Logo } from '../../commons/Logo/Logo';
import { Steps } from '../../commons/Steps/Steps';
import { InputField } from '../../commons/InputField/InputField';

import { useStyles } from './styles';


import MuseoSans from '../../fonts/MuseoSans-500.woff';
import Tungsten from '../../fonts/Tungsten-Book.woff';
import { dispatchModalOpen, dispatchModalClose } from '../../store/modal/actions';

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

const CheckoutOrderProduct = withTheme((props) => {
  const tablet = useMediaQuery(props.theme.breakpoints.down(1024));
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-between"
      style={{ marginBottom: '20px' }}
    >
      <Grid
        item
        lg={tablet && !mobile ? 1 : 3}
        md={tablet && !mobile ? 1 : 3}
        xs={tablet && !mobile ? 1 : 3}
      >
        <img width={64} height={64} style={{ marginRight: '10px' }} src={props.src} alt={props.title} />
      </Grid>
      <Grid
        item
        lg={tablet && !mobile ? 11 : 9}
        md={tablet && !mobile ? 11 : 9}
        xs={tablet && !mobile ? 11 : 9}
      >
        <Grid
          container
          direction={tablet && !mobile ? 'row' : 'column'}
          alignItems={tablet && !mobile ? 'flex-start' : null}
          justify="space-between"
        >
          <Grid
            item
            lg={tablet && !mobile ? 7 : 12}
            md={tablet && !mobile ? 7 : 12}
            xs={tablet && !mobile ? 7 : 12}
          >
            <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
            >
              <Typography style={{ fontSize: '12px', lineHeight: '20px', ...museo }}>
                {props.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            lg={tablet && !mobile ? 5 : 12}
            md={tablet && !mobile ? 5 : 12}
            xs={tablet && !mobile ? 5 : 12}
          >
            <Grid
              container
              alignItems="center"
              justify="space-between"
            >
              <Typography style={{
                color: '#888888', fontSize: '12px', lineHeight: '20px', ...museo,
              }}
              >
                { `Quantity: ${props.quantity}` }
              </Typography>
              <Typography style={{ fontSize: '12px', lineHeight: '20px', ...museo }}>
                $
                {props.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});

function MapContainer(props) {
  const classes = useStyles();
  return (
    <Box
      className={classes.mapContainer}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
        className={classes.mapBody}
      >
        <Typography style={{ fontSize: '36px', ...tungsten }}>
          Location Selector
        </Typography>
        <Typography style={{
          marginTop: '8px', marginBottom: '20px', fontSize: '16px', color: '#888888', textAlign: 'center', ...museo,
        }}
        >
          Drag the map to place locator on the needed place.
          <br />
          When ready - press “Done”. You can then edit address inside Address field.
        </Typography>
        {props.children}
        <Button
          style={{
            padding: '13px 42px', fontSize: '14px', marginTop: '20px', fontWeight: 'bold', ...museo,
          }}
          onClick={props.onClick}
        >
          Done
        </Button>
      </Grid>
      <Box className={classes.closeWrapper} onClick={props.onClick}>
        <CloseIcon className={classes.close} />
      </Box>
    </Box>
  );
}

const ShowOrderSummary = withTheme((props) => {
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  const classes = useStyles();
  const [expanded, setExpand] = useState(false);

  const ExpandIcon = expanded ? ExpandLessIcon : ExpandMoreIcon;

  const defaultStyle = {
    flexWrap: 'nowrap',
    transition: 'all 1000ms',
    maxHeight: '0',
    opacity: '0',
  };

  const transitionStyles = {
    entering: { maxHeight: '10000px', opacity: '1' },
    entered: { maxHeight: '10000px', opacity: '1' },
    exiting: { maxHeight: '0', opacity: '0' },
    exited: { maxHeight: '0', opacity: '0' },
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ margin: '0 0 40px 0' }}
    >
      <Divider style={{ backgroundColor: '#AAAAAA', width: '100%' }} />
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        style={{ padding: '20px 0', cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setExpand(!expanded)}
      >
        <Typography
          style={{
            color: '#888888',
            fontSize: '18px',
            zIndex: 10,
            ...museo,
          }}
        >
          Show order summary
          <span style={{ lineHeight: '1px', verticalAlign: 'middle' }}><ExpandIcon /></span>
        </Typography>
        {
          !expanded ? (
            <Typography>
              $
              {
                props.products
                  .reduce((total, { price }) => (Number(total) + Number(price)).toFixed(2), 0)
              }
            </Typography>
          ) : null
        }
      </Grid>
      <Transition
        in={expanded}
        timeout={{
          enter: 1000,
          exit: 0,
        }}
      >
        {
            /* https://reactcommunity.org/react-transition-group/transition */
            (state) => (
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ ...defaultStyle, ...transitionStyles[state] }}
              >
                { props.products.map((item) => <CheckoutOrderProduct {...item} />) }
                <Divider style={{ width: '100%', backgroundColor: '#EAEAEA' }} />
                <Grid
                  container
                  direction={mobile ? 'column' : 'row'}
                  justify="center"
                  alignItems={mobile ? null : 'flex-start'}
                  spacing={mobile ? 0 : 5}
                >
                  <Grid
                    item
                    lg={mobile ? 12 : 7}
                    md={mobile ? 12 : 7}
                    xs={mobile ? 12 : 7}
                  >
                    <InputField
                      id="discount"
                      type="text"
                      label="Discount code"
                      labelWidth={110}
                      {...props.DiscountProps}
                      FormControlProps={{
                        style: { marginTop: '20px' },
                        className: classes.dividerFormControl,
                      }}
                      LabelProps={{
                        classes: {
                          root: classes.discountLabel,
                        },
                      }}
                      InputProps={{
                        classes: {
                          input: classes.discountInput,
                          adornedEnd: classes.discountAdornedEnd,
                        },
                        endAdornment: (
                          <Button
                            style={museo}
                            className={classes.discountButton}
                            variant="text"
                          >
                            Apply
                          </Button>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={mobile ? 12 : 5}
                    md={mobile ? 12 : 5}
                    xs={mobile ? 12 : 5}
                  >
                    <Grid
                      container
                      direction="column"
                      alignItems="flex-start"
                      justify="center"
                      style={{
                        marginTop: '20px',
                        marginBottom: '12px',
                      }}
                    >
                      { mobile ? <Divider style={{ width: '100%', backgroundColor: '#EAEAEA', margin: '15px 0' }} /> : null }
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                      >
                        <Typography className={classes.afterDiscount} style={museo}>
                          Subtotal
                        </Typography>
                        <Typography className={classes.afterDiscount} style={museo}>
                          $
                          {
                            props.products
                              .reduce((total, { price }) => (Number(total) + Number(price))
                                .toFixed(2), 0)
                          }
                        </Typography>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="space-between"
                      >
                        <Typography className={classes.afterDiscount} style={museo}>
                          Shipping
                        </Typography>
                        <Typography className={classes.afterDiscount} style={museo}>
                          Calculated at next step
                        </Typography>
                      </Grid>
                      { mobile ? <Divider style={{ width: '100%', backgroundColor: '#EAEAEA', margin: '15px 0' }} /> : null }
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justify="space-between"
                      style={{
                        marginBottom: '20px',
                      }}
                    >
                      <Typography className={classes.total} style={museo}>
                        Total
                      </Typography>
                      <Typography className={classes.total} style={museo}>
                        $
                        {
                          props.products
                            .reduce((total, { price }) => (Number(total) + Number(price))
                              .toFixed(2), 0)
                        }
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )
          }
      </Transition>
      <Divider style={{ backgroundColor: '#AAAAAA', width: '100%' }} />
    </Grid>
  );
});

const Checkout = withTheme((props) => {
  const classes = useStyles(props);
  const tablet = useMediaQuery(props.theme.breakpoints.down(1024));
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
    discount: {
      value: '',
      error: null,
    },
  });

  const mockProducts = [
    {
      key: 'id-0',
      src: '/img/products/e-bikes/872426/001.jpg',
      title: 'Addmotor Hithot H1 Sport Mountain E-bike (green)',
      quantity: 1,
      price: '1699.99',
    },
    {
      key: 'id-1',
      src: '/img/products/e-bikes/872426/001.jpg',
      title: 'Civi Bikes Cheetah Vintage-Style Electric Fat Bike (Night Black)',
      quantity: 1,
      price: '2299.99',
    },
  ];

  const steps = [
    {
      key: 'id-0',
      isActive: true,
      text: 'Cart',
    },
    {
      key: 'id-1',
      isActive: true,
      text: 'Information',
    },
    {
      key: 'id-2',
      isActive: false,
      text: 'Shipping',
    },
    {
      key: 'id-3',
      isActive: false,
      text: 'Payment',
    },
  ];

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
      container
      direction="row"
      alignItems="center"
      justify="center"
      className={classes.wrapper}
    >
      <Grid
        className={classes.container}
        container
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
      >
        <Logo />
        <Steps className={classes.steps} items={steps} />
        <Grid
          className={classes.body}
          container
          direction={tablet ? 'column' : 'row'}
          alignItems={tablet && !mobile ? 'center' : mobile ? null : 'flex-start'}
          justify="center"
        >
          {
            tablet ? (
              <ShowOrderSummary products={mockProducts} DiscountProps={{ onChange: onChange('discount'), ...state.discount }} />
            ) : null
          }
          <Grid
            item
            lg={tablet ? 12 : 7}
            md={tablet ? 12 : 7}
            xs={tablet ? 12 : 7}
          >
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
                    <Typography component="span" style={{ color: '#8F8DE2', cursor: 'pointer' }} onClick={props.openLogin}> Log In</Typography>
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
                                withProps({ onClick: props.closeModal, })(MapContainer),
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
          </Grid>
          <Grid
            item
            lg={1}
            md={1}
            xs={1}
          />
          {
            !tablet ? (
              <Grid
                item
                lg={4}
                md={4}
                xs={4}
              >
                <Grid
                  container
                  direction="column"
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <Typography
                    style={{
                      fontSize: '16px',
                      lineHeight: '30px',
                      color: '#888888',
                      ...museo,
                    }}
                  >
                  Order Summary
                  </Typography>
                </Grid>
                {mockProducts.map((item) => <CheckoutOrderProduct {...item} />)}
                <Divider className={classes.divider} />
                <InputField
                  id="discount"
                  type="text"
                  label="Discount code"
                  labelWidth={110}
                  value={state.discount.value}
                  onChange={onChange('discount')}
                  FormControlProps={{
                    className: classes.dividerFormControl,
                  }}
                  LabelProps={{
                    classes: {
                      root: classes.discountLabel,
                    },
                  }}
                  InputProps={{
                    classes: {
                      input: classes.discountInput,
                      adornedEnd: classes.discountAdornedEnd,
                    },
                    endAdornment: (
                      <Button
                        style={museo}
                        className={classes.discountButton}
                        variant="text"
                      >
                      Apply
                      </Button>
                    ),
                  }}
                />
                <Divider className={classes.divider} />
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                  >
                    <Typography className={classes.afterDiscount} style={museo}>
                    Subtotal
                    </Typography>
                    <Typography className={classes.afterDiscount} style={museo}>
                      $
                      {
                        mockProducts
                          .reduce((total, { price }) => (Number(total) + Number(price))
                            .toFixed(2), 0)
                      }
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                  >
                    <Typography className={classes.afterDiscount} style={museo}>
                    Shipping
                    </Typography>
                    <Typography className={classes.afterDiscount} style={museo}>
                    Calculated at next step
                    </Typography>
                  </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Typography className={classes.total} style={museo}>
                  Total
                  </Typography>
                  <Typography className={classes.total} style={museo}>
                    $
                    {
                      mockProducts
                        .reduce((total, { price }) => (Number(total) + Number(price)).toFixed(2), 0)
                    }
                  </Typography>
                </Grid>
              </Grid>
            ) : null
          }
        </Grid>
      </Grid>
      <Box
        className={classes.footer}
      >
        <Typography style={{ color: '#888888', fontSize: '12px', ...museo }}>
          Copyright © 2019 Electra.
        </Typography>
      </Box>
    </Grid>
  );
});

const CheckoutConnect = connect(null, {
  openMap: (inject) => dispatchModalOpen('map', inject),
  closeModal: () => dispatchModalClose(),
})(Checkout);

export {
  CheckoutConnect as Checkout,
  CheckoutOrderProduct,
};
