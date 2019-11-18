import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  base_container: {
    width: '100%',
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
      width: '90%',
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
  not_circle: {
    display: 'none',
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
    width: '12%',
    height: '74px',
    display: 'flex',
    [theme.breakpoints.down(480)]: {
      width: '25%',
    },
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: '12px',
    color: '#444444',
    paddingBottom: '7px',
  },
  main_block_text: {
    flexDirection: 'column',
  },
  main_block: {
    flexBasis: '40%',
    marginLeft: '2%',
    marginRight: '2%',
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
    flexBasis: '35%',
    paddingLeft: '1%',
    fontSize: '14px',
    fontWeight: 'bold',
    [theme.breakpoints.down(600)]: {
      fontSize: '12px',
      flexBasis: '0',
      textAlign: 'center',
    },
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
    marginRight: '5px',
    '& > button': {
      padding: '3px 2px',
      background: 'none',
      color: '#444444',
    },
  },
  counter: {
    marginRight: '1%',
  },
  counter_price_box: {
    flexBasis: '30%',
  },
  counter_price: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    [theme.breakpoints.down(600)]: {
      flexBasis: '30%',
      flexDirection: 'column',
    },
  },
}));
