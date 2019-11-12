import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
  container: {
    display: 'flex',
    // flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  base_container: {
    gridTemplateColumns: '5fr 2fr 1fr 1fr',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawer: {
  },
  paper: {
    width: '60%',
    background: '#f4efff',
    fontSize: '20px',
    color: '#9c80ff',
    [theme.breakpoints.down(710)]: {
      width: '80%',
    },
  },
  basket: {
    position: 'relative',
    borderRadius: '50%',
    border: '1px solid #6A86E8',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    paddingTop: '14px',
    cursor: 'pointer',
    [theme.breakpoints.down(480)]: {
      border: 'none',
    },
  },
  circle: {
    backgroundColor: ' #6A86E8 ',
    borderRadius: '50%',
    height: '15px',
    width: '15px',
    position: 'absolute',
    top: '0px',
    right: '0px',
    fontSize: '11px',
    color: ' #FFFFFF ',
  },
  cart_container: {
    paddingTop: '3%',
    paddingRight: '6%',
    padding: '3%',
    background: '#FFFFFF',
    margin: '2%',
    borderRadius: '10px',
    boxShadow: '3px 6px 5px -1px rgba(185,163,196,0.72)',
    overflowX: 'hidden',
  },
  ship_text: {
    fontSize: '12px',
    color: '#888888',
    lineHeight: '20px',
    letterSpacing: '-0.02em',
  },
  subtotal_text: {
    fontSize: '20px',
    lineHeight: '20px',
    textTransform: ' capitalize',
    color: '#444444',
  },
  subtotal_price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#444444',
  },
  price_block: {
    justify: 'space-between',
    paddingTop: '2%',
  },
  btn_grey: {
    background: '#F8F8F8 !important',
    color: '#6A86E8 !important',
    borderRadius: '4px',
    textAlign: 'center',
    width: '200px',
  },
  btn_main: {
    width: '200px',
  },
  root: {
    padding: theme.spacing(2),
    marginTop: '2%',
  },
  image: {
    width: '99px',
    height: '74px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    objectFit: 'contain',
    display: 'block',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: '12px',
    textDecoration: 'underline',
    color: '#444444',
    paddingBottom: '7px',
  },
  main_block: {
    // flexBasis: '40%',
    marginLeft: '2%',
    marginRight: '2%',
    flexDirection: 'column',
  },
  button: {
    paddingLeft: '4px',
    paddingRight: '4px',
    fontSize: '12px',
    display: 'block',
    color: '#888888',
    textTransform: 'none',
  },
  price: {
    paddingLeft: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  underline: {
    '&::after': {
      content: 'none',
    },
    '&::before': {
      content: 'none',
    },
  },
  input: {
    maxWidth: '40px',
    paddingLeft: '25%',
    fontSize: '13px',
  },
  buttons: {
    '& > button': {
      background: 'none',
      color: '#444444',
    },
  },
  counter: {
    // flexGrow: '1',
    marginRight: '1%',
  },
}));
