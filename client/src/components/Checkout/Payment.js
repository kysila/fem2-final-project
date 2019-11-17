import React, { useState } from 'react';
// TODO: Vallidation of bank card number, import luhn from 'luhn';
import {
  Button, Box, Grid, Typography, useMediaQuery, withTheme,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Mask from 'react-text-mask';
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

export const Payment = connect(null, {
  openMap: (inject) => dispatchModalOpen('map', inject),
  closeModal: () => dispatchModalClose(),
})(withTheme((props) => {
  const classes = useStyles(props);
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  const [state, setState] = useState({
    card: {
      value: '',
      error: null,
    },
    date: {
      value: '',
      error: null,
    },
    cvv: {
      value: '',
      error: null,
    },
    name: {
      value: '',
      error: null,
    },
  });

  const onChange = (stateName) => (e) => setState({ ...state, [stateName]: { value: e.target.value, error: 'null' } });

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
        <Box className={classes.cardContainer}>
          <Box
            className={classes.cardBack}
          >
            <Box
              style={{
                position: 'relative',
                top: '20px',
                width: '100%',
                height: '50px',
                background: '#111111',
              }}
            />
            <Mask
              mask={[/\d/, /\d/, /\d/]}
              placeholderChar="X"
              value={state.cvv.value}
              placeholder="XXX"
              onChange={onChange('cvv')}
              type="text"
              style={{
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: '20px',
                position: 'relative',
                display: 'block',
                top: '30px',
                width: '50px',
                height: '40px',
                background: 'transparent',
                border: 'none',
                fontSize: '25px',
                lineHeight: '35px',
                outline: 'none',
                color: 'white',
                ...museo,
              }}
            />
            <Box
              style={{
                position: 'relative',
                top: '50px',
                margin: '0 auto',
                width: '80%',
                height: '50px',
                transform: 'scale(-1, 1)',
                textAlign: 'center',
                color: '#2f2f2f',
                whiteSpace: 'nowrap',
                textShadow: '0 0 3px #111111',
                fontSize: '25px',
                lineHeight: '35px',
              }}
            >
              {state.card.value}
            </Box>
            <Box
              style={{
                position: 'relative',
                top: '50px',
                marginLeft: '20px',
                width: '80px',
                height: '50px',
                whiteSpace: 'nowrap',
                transform: 'scale(-1, 1)',
                color: '#2f2f2f',
                textShadow: '0 0 2px #111111',
                fontSize: '25px',
                lineHeight: '35px',
              }}
            >
              {state.date.value}
            </Box>
            <Box
              style={{
                position: 'relative',
                top: '0',
                marginLeft: 'auto',
                marginRight: '20px',
                whiteSpace: 'nowrap',
                width: '80px',
                height: '50px',
                transform: 'scale(-1, 1)',
                color: '#2f2f2f',
                textShadow: '0 0 2px #222222',
                fontSize: '25px',
                lineHeight: '35px',
              }}
            >
              {state.name.value}
            </Box>
          </Box>
          <Box
            className={classes.cardFace}
          >
            <Box style={{
              display: 'inline-block',
              position: 'relative',
              width: '70px',
              height: '15px',
              background: '#f3fdff',
              top: '20px',
              left: '50px',
              opacity: '.5',
            }}
            />
            <Box
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '1px',
                height: '20px',
                background: '#BEC5C7',
                top: '22px',
                left: '50px',
                opacity: '.8',
                margin: '0 10px',
              }}
            />
            <Box
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '100px',
                height: '15px',
                background: '#5e6263',
                top: '20px',
                left: '50px',
                opacity: '.5',
              }}
            />
            <Box
              style={{
                display: 'inline-block',
                position: 'relative',
                width: '60px',
                height: '15px',
                background: '#FFFFFF',
                top: '20px',
                left: '110px',
                opacity: '.5',
              }}
            />
            <Box
              style={{
                position: 'relative',
                width: '55px',
                height: '56px',
                background: 'radial-gradient(#ffffff 5%, #ffe18c)',
                top: '50px',
                left: '50px',
                borderRadius: '6px',
              }}
            />
            <Mask
              mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
              placeholderChar="X"
              value={state.card.value}
              placeholder="XXXX XXXX XXXX XXXX"
              onChange={onChange('card')}
              type="tel"
              style={{
                textAlign: 'center',
                position: 'relative',
                display: 'block',
                top: '60px',
                left: '50px',
                width: '80%',
                height: '35px',
                background: 'transparent',
                border: 'none',
                fontSize: '25px',
                lineHeight: '35px',
                outline: 'none',
                color: 'white',
                ...museo,
              }}
            />
            <input
              placeholder="Enter your name"
              value={state.name.value}
              onChange={onChange('name')}
              style={{
                textAlign: 'left',
                position: 'relative',
                display: 'block',
                top: '70px',
                left: '50px',
                width: '210px',
                height: '25px',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                lineHeight: '25px',
                outline: 'none',
                color: 'white',
                ...museo,
              }}
            />
            <Box
              style={{
                display: 'inline-block',
                position: 'relative',
                background: 'transparent',
                top: '-27px',
                left: 'calc(80% - 80px)',
              }}
            >
              <Mask
                mask={[/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/]}
                value={state.date.value}
                type="tel"
                placeholder="XX / XX"
                placeholderChar="X"
                onChange={onChange('date')}
                style={{
                  textAlign: 'center',
                  position: 'relative',
                  display: 'inline-block',
                  background: 'transparent',
                  top: '70px',
                  left: '50px',
                  width: '80px',
                  height: '25px',
                  border: 'none',
                  fontSize: '20px',
                  lineHeight: '25px',
                  outline: 'none',
                  color: 'white',
                  ...museo,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
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
          <Link to="/checkout/shipping">
            <Typography component="span" className={classes.editCart} style={museo}>
              <ArrowBackIosIcon style={{ fontSize: '14px', lineHeight: '30px' }} />
              Edit Shipping
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
              style={{
                padding: '13px 42px', fontSize: '14px', marginTop: '20px', fontWeight: 'bold', ...museo,
              }}
            >
                Buy Products
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}));
