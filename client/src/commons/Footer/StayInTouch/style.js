import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  blueBG: {
    background: 'linear-gradient(180deg, rgba(102,134,255, .1) 0%, rgba(143, 141, 226, .1) 100%)',
    paddingTop: '51px',
    paddingBottom: '49px',

  },
  textField: {
    width: '50%',
    '&>div>input': {
      backgroundColor: '#fff',
    },

  },
  subscribeForm: {
    '&>div': {
      margin: '0',
    },
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subscribeBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '15px 20px',
    '&>span': {
      width: 'auto',
    },
  },
  subscribeIcon: {
    marginRight: '4px',
    [theme.breakpoints.down(480)]: {
      margin: '5px auto',
    },
  },
  buttonText: {
    [theme.breakpoints.down(480)]: {
      display: 'none',
    },
  },
  text: {
    marginBottom: '24px',
  },
}));