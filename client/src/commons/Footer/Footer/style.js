import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    '&>.MuiGrid-spacing-xs-3': {
      margin: 0,

    },
    '&>.MuiGrid-spacing-xs-3 > .MuiGrid-item': {
      padding: '24px 0 0',

    },
    '&>.MuiGrid-spacing-xs-3 > .MuiGrid-item>.MuiTypography-root': {
      color: '#888888',
    },
  },
  copyright: {
    color: '#888888',
    fontWeight: 300,
    fontSize: '12px',
    letterSpacing: '-0.02em',
  },
  adaptive: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0',
    [theme.breakpoints.up(480)]: {
      justifyContent: 'center',
    },
  },
  socialLink: {
    display: 'block',
    marginRight: '28px',
  },
  logo: {
    display: 'block',

  },
  container: {
    padding: '6px 0 30px',
  },
}));
