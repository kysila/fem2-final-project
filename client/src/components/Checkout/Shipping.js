import React, { useState } from 'react';
import {
  Button, Grid, Typography, Divider, Radio, FormControlLabel, useMediaQuery, withTheme,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
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

export const Shipping = connect(null, {
  openMap: (inject) => dispatchModalOpen('map', inject),
  closeModal: () => dispatchModalClose(),
})(withTheme((props) => {
  const classes = useStyles(props);
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  const [shippingMethod, setShippingMethod] = useState('free');

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
              john.doe@gmail.com
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
              165 Courtland St NE, Atlanta, GA 30303, United States
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
                  You gonna be an ass choosing this method.
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
                  You gonna be an arse choosing this method.
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
              <Link to="/checkout/payment">
                <Button
                  style={{
                    padding: '13px 42px', fontSize: '14px', marginTop: '20px', fontWeight: 'bold', ...museo,
                  }}
                >
                  Continue to Payment
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}));
