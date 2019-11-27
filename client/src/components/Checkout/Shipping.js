import React, { useEffect, useState } from 'react';
import {
  Button, Grid, Typography, Divider, Radio, FormControlLabel, useMediaQuery, withTheme,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { useStyles } from './styles';
import MuseoSans from '../../fonts/MuseoSans-500.woff';
import { dispatchModalClose, dispatchModalOpen } from '../../store/modal/actions';
import { MapContainer } from './MapContainer';
import { ArrowTooltip } from '../../commons/Tooltip/Tooltip';

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

export const Shipping = withRouter(connect(({ auth: { user } }) => ({ user }), {
  openMap: (inject) => dispatchModalOpen('map', inject),
  closeModal: () => dispatchModalClose(),
})(withTheme((props) => {
  const classes = useStyles();
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  const [shippingMethod, setShippingMethod] = useState('free');
  const [info, setInfo] = useState(JSON.parse(localStorage.getItem('/checkout/shipping'))
    || JSON.parse(localStorage.getItem('/checkout/info'))
    || {
      email: { value: '' },
      address: { value: '', error: null },
    });

  const validate = () => {
    if (!info.address.value) {
      setInfo({ ...info, address: { ...info.address, error: 'Please fill ship address.' } });
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (props.user) {
      setInfo({ ...info, email: { value: props.user.email } });
    }
    // eslint-disable-next-line
  }, [info.email.value, props.user]);

  const onSubmit = () => {
    if (validate()) {
      localStorage.setItem('/checkout/shipping', JSON.stringify(info));
      props.history.push('/checkout/payment');
    }
  };

  return (
    <Grid
      className={classes.contact}
      container
      direction="row"
      alignItems="center"
      justify="center"
      style={{ marginTop: '18px' }}
    >
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
          justify="center"
        >
          <Grid
            item
            lg={2}
            md={2}
            xs={2}
          >
            <Typography style={{ fontSize: '14px', color: '#888888', ...museo }}>
              Contact
            </Typography>
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            xs={8}
          >
            <Typography style={{ fontSize: '14px' }}>
              {info.email.value}
            </Typography>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            xs={2}
          >
            <Link to="/checkout/info" style={{ fontSize: '14px', color: '#6A86E8', ...museo }}>
              Change
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          style={{ marginTop: '10px' }}
        >
          <Grid
            item
            lg={2}
            md={2}
            xs={2}
          >
            <Typography style={{
              whiteSpace: 'nowrap', fontSize: '14px', color: '#888888', ...museo,
            }}
            >
              Ship to
            </Typography>
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            xs={8}
            style={{
              minWidth: '0',
            }}
          >
            <Typography style={{
              fontSize: '14px',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              ...museo,
            }}
            >
              {info.address.value}
            </Typography>
          </Grid>
          <ArrowTooltip title={info.address.error}>
            <Grid
              item
              lg={2}
              md={2}
              xs={2}
            >
              <Typography
                onClick={() => props.openMap({
                  onChange: ({ target: { value } }) => setInfo({ ...info, address: { value } }),
                  className: classes.map,
                  mapElementClass: classes.mapElement,
                  address: info.address.value.trim(),
                  marker: null,
                  Container: (pps) => <MapContainer {...pps} onClick={props.closeModal} />,
                })}
                style={{
                  fontSize: '14px', cursor: 'pointer', color: '#6A86E8', ...museo,
                }}
              >
                Change
              </Typography>
            </Grid>
          </ArrowTooltip>
        </Grid>
        <Divider style={{ width: '100%', margin: '20px 0' }} />
        <Grid
          className={classes.shipping}
          container
          direction={mobile ? 'column' : 'row'}
          alignItems={mobile ? null : 'center'}
          justify="space-between"
        >
          <Typography style={{ lineHeight: '30px', fontSize: '20px', ...museo }}>
            Shipping Method
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems={mobile ? null : 'flex-start'}
          justify="space-between"
        >
          <FormControlLabel
            value="free"
            control={(
              <Radio
                checked={shippingMethod === 'free'}
                onChange={() => setShippingMethod('free')}
                value="free"
                color="default"
                name="free"
              />
            )}
            label={(
              <Grid container direction="column">
                <Typography style={{ fontSize: '16px', ...museo }}>
                  Free Shipping
                </Typography>
                <Typography style={{ fontSize: '14px', color: '#888888', ...museo }}>
                  Slow shipping to your destination address.
                </Typography>
              </Grid>
            )}
            labelPlacement="end"
          />
          <FormControlLabel
            value="high-cost"
            control={(
              <Radio
                checked={shippingMethod === 'high-cost'}
                onChange={() => setShippingMethod('high-cost')}
                value="high-cost"
                color="default"
                name="high-cost"
              />
            )}
            label={(
              <Grid container direction="column">
                <Typography style={{ fontSize: '16px', ...museo }}>
                  Super high-cost shipping
                </Typography>
                <Typography style={{ fontSize: '14px', color: '#888888', ...museo }}>
                  Really fast shipping to your destination address.
                </Typography>
              </Grid>
            )}
            labelPlacement="end"
            style={{ marginTop: '20px' }}
          />

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
            <Link to="/checkout/info">
              <Typography component="span" className={classes.editCart} style={museo}>
                <ArrowBackIosIcon style={{ fontSize: '14px', lineHeight: '30px' }} />
                Edit Information
              </Typography>
            </Link>
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
                onClick={onSubmit}
                style={{
                  padding: '13px 42px', fontSize: '14px', marginTop: '20px', fontWeight: 'bold', ...museo,
                }}
              >
                Continue to Payment
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
})));
