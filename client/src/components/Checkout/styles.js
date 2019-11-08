import { makeStyles } from '@material-ui/core';

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
    [theme.breakpoints.down(1024)]: {
      margin: '31px 40px',
    },
  },
  steps: {
    marginTop: '20px',
  },
  body: {
    marginTop: '60px',
  },
  contact: {

  },
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
  },
  mapModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    padding: '20px',
    background: 'white',
  },
}));
