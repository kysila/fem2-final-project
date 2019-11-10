import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '666px',
    background: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    [theme.breakpoints.down(769)]: {
      width: '279px',
    },
  },
  container__body: {
    padding: '24px 48px',
    [theme.breakpoints.down(769)]: {
      padding: '24px 20px',
    },
    height: '100%',
  },
  title: {
    fontSize: '36px',
    margin: '12px 0',
  },
  formControl: {
    width: '100%',
    marginTop: '12px',
  },
  label: {
    zIndex: 1,
    transform: 'translate(14px, 12px) scale(1)',
    pointerEvents: 'none',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '3px',
  },
  submitBtn: {
    height: '50px',
    marginTop: '24px',
  },
  link: {
    color: '#6A86E8 !important',
  },
  agree: {
    marginTop: '12px',
    fontSize: '14px',
    letterSpacing: '-0.02em',
  },
  forgotPassword: {
    marginTop: '16px',
    color: '#6A86E8 !important',
    fontSize: '14px',
    letterSpacing: '-0.02em',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  socialButton: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
    borderRadius: '4px',
    marginTop: '12px',
  },
  socialFacebook: {
    background: '#44619D',
  },
  socialGoogle: {
    background: '#4285F4',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    objectFit: 'scale-down',
    background: 'rgb(255,255,255, .08)',
  },
  socialText: {
    fontSize: '14px',
    color: '#ffffff !important',
  },
  toLeft: {
    marginTop: '88px',
    fontSize: '14px',
    letterSpacing: '-0.02em',
    alignSelf: 'flex-start',
  },
  createButton: {
    marginTop: '8px',
    height: '50px',
    borderColor: '#6686FF !important',
    borderWidth: '1px !important',
    borderStyle: 'solid !important',
    background: 'rgba(0,0,0,0) !important',
  },
  createButtonLabel: {
    color: '#6686FF',
  },
  separ: {
    width: '1px',
    height: '40%',
    background: '#EAEAEA',
    position: 'absolute',
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
  toolTip: {
    fontSize: '13px !important',
    lineHeight: '20px !important',
    color: 'white !important',
  },
}));
