import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  colorItem: {
    margin: '10px 15px',
    padding: '5px',
    display: 'inline-flex',
    '&:hover': {
      borderRadius: '50%',
    },
    '&.MuiMenuItem-root': {
      minHeight: 'auto',
    },
    '&.Mui-selected': {
      boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.05)',
      borderRadius: '50%',
      padding: '5px',
    },
  },
  colorDiv: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  },
  filterBtn: {
    background: '#F5F5F5 !important',
    fontWeight: 600,
    fontSize: '14px',
    letterSpacing: '-0.02em',
    color: '#444444 !important',
    textTransform: 'capitalize',
    padding: '15px 20px',
    width: '94px',
    borderRadius: '0 !important',
    boxShadow: 'none',
  },
  filterRow: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    '&.MuiGrid-spacing-xs-6': {
      width: '100%',
      margin: 'auto',
    },
    '&> .MuiGrid-item': {
      padding: 0,
    },
  },
  filterForm: {
    width: '100%',
    paddingTop: '10px',
    paddingBottom: '53px',
    '&>.MuiGrid-spacing-xs-3>.MuiGrid-item': {
      paddingTop: '43px',
    },
  },
  formControl: {
    padding: '7px 10px',
    width: '100%',
    border: '1px solid #AAAAAA',
    borderRadius: '3px',
    '&>label': {
      color: '#888888',
      fontSize: '11px',
      lineHeight: '20px',
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      top: '-23px',
      transform: 'translate(0, -50%) scale(1)',
    },
    '&>.MuiInput-underline': {
      marginTop: '0',
    },
    '&>.MuiInput-underline:before': {
      borderBottom: '0',
    },
  },
  applyBtn: {
    marginTop: '50px',
    padding: '18px 26px',
    position: 'relative',
    '&:before': {
      content: "''",
      display: 'block',
      width: '1000px',
      height: '2px',
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      position: 'absolute',
      left: 'calc(100% + 30px)',
      top: '50%',
    },
    '&:after': {
      content: "''",
      display: 'block',
      width: '1000px',
      height: '2px',
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      position: 'absolute',
      right: 'calc(100% + 30px)',
      top: '50%',
    },
  },
  applyBtnContainer: {
    textAlign: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  priceLabel: {
    color: '#888888',
    fontSize: '11px',
    lineHeight: '20px',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    marginTop: '-30px',
  },
}));
