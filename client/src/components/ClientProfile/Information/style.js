import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  expansionPanelDetails: {
    [theme.breakpoints.down(600)]: {
      background: 'linear-gradient(180deg, #F8F8F8 0%, rgba(248, 248, 248, 0) 100%)',
    },
  },
  gridFormsInfo: {
    marginTop: '15px',
  },
  formsInfo: {
    fontSize: '20px',
    paddingBottom: '0',
  },
  heading: {
    fontWeight: '600',
    flexBasis: '66.66%',
    // flexShrink: 0,
  },
  ordinaryText: {
    marginTop: '10px',
    fontSize: '14px',
  },
  formControl: {
    width: '100%',
    marginTop: '12px',
  },
  title: {
    fontSize: '36px',
    margin: '12px 0',
  },
  label: {
    zIndex: 1,
    transform: 'translate(14px, 12px) scale(1)',
    pointerEvents: 'none',
  },
  labelDate: {
    paddingRight: '17px',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    fontSize: '14px',
  },
  inputDate: {
    height: '40px',
    fontSize: '14px',
  },
  selectData: {
    padding: '10px 14px',
    fontSize: '14px',
  },
  submitBtn: {
    height: '50px',
    marginTop: '24px',
  },
}));
