import { makeStyles } from '@material-ui/core';

import Locator from '../../img/map/locator.svg';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    alignItems: 'flex-start',
  },
  container: {
    margin: '31px 220px',
    [theme.breakpoints.down(1260)]: {
      margin: '31px 40px',
    },
    [theme.breakpoints.down(769)]: {
      margin: '18px 20px',
    },
  },
  steps: {
    marginTop: '20px',
  },
  body: {
    marginTop: '60px',
  },
  contact: {},
  summary: {
    borderLeft: '0 solid #AAAAAA',
  },
  shipping: {
    marginTop: '33px',
  },
  navigation: {
    marginTop: '40px',
  },
  editCart: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '14px',
    cursor: 'pointer',
  },
  dividerFormControl: {
    width: '100%',
  },
  discountLabel: {
    transform: 'translate(14px, 14px) scale(1)',
  },
  discountButton: {
    padding: '10px 24px',
    textTransform: 'capitalize',
    background: '#AAAAAA !important',
    borderTopLeftRadius: '0 !important',
    borderBottomLeftRadius: '0 !important',
  },
  discountAdornedEnd: {
    paddingRight: 0,
  },
  discountInput: {
    padding: '9px 14px',
  },
  afterDiscount: {
    padding: '5px 0',
    fontSize: '12px',
    color: '#888888 !important',
  },
  divider: { margin: '20px 0' },
  total: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  footer: {
    borderTop: '1px solid #EAEAEA',
    height: '78px',
    display: 'flex',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% - 400px)',
    [theme.breakpoints.down(1025)]: {
      width: 'calc(100% - 20px)',
    },
  },
  mapContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    backgroundColor: 'white',
    [theme.breakpoints.down(321)]: {
      width: '100%',
      transform: 'translate(-50%, -50%) scale(.8)',
    },
  },
  mapBody: {
    padding: '20px',
    [theme.breakpoints.down(481)]: {
      padding: '5px',
    },
  },
  map: {
    position: 'relative',
    width: '626px',
    height: '342px',
    [theme.breakpoints.down(768)]: {
      width: '310px',
    },
    background: 'white',
    '&::before': {
      content: '""',
      zIndex: '10',
      position: 'absolute',
      top: '50.5%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '1px',
      backgroundImage: 'linear-gradient(90deg, #6A86E8, #6A86E8 50%, transparent 50%, transparent 100%)',
      backgroundSize: '10px 6px',
      border: 'none',
      pointerEvents: 'none',
    },
    '&::after': {
      content: '""',
      zIndex: 11,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      width: '40px',
      height: '40px',
      background: `url(${Locator})`,
      pointerEvents: 'none',
      opacity: '.8',
    },
  },
  mapElement: {
    '&::after': {
      content: '""',
      zIndex: '10',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-53%, -49%)',
      width: '1px',
      height: '100%',
      backgroundImage: 'linear-gradient(0deg, #6A86E8, #6A86E8 50%, transparent 50%, transparent 100%)',
      backgroundSize: '3px 10px',
      border: 'none',
      pointerEvents: 'none',
    },
  },
  closeWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#F8F8F8',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    [theme.breakpoints.down(769)]: {
      top: '-10px',
      right: '-10px',
    },
  },
  close: {
    stroke: '#888888',
    width: '15px',
    height: '15px',
    cursor: 'pointer',
  },
  cardContainer: {
    position: 'relative',
    transform: 'scale(.8)',
    [theme.breakpoints.down(768)]: {
      transform: 'scale(.5)',
    },
  },
  cardFace: {
    position: 'relative',
    top: '-200px',
    left: '-155px',
    zIndex: '1',
    width: '390px',
    height: '250px',
    borderRadius: '6px',
    background: 'linear-gradient(45deg, #000000 30%, #555555, #333333)',
    boxShadow: '5px 5px 5px black',
  },
  cardBack: {
    position: 'relative',
    top: '115px',
    left: '50px',
    width: '390px',
    height: '250px',
    borderRadius: '6px',
    background: 'linear-gradient(235deg, #333333 30%, #555555, #000000)',
    boxShadow: '5px 5px 5px black',
  },
}));
