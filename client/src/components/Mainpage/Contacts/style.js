import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '100px',
    marginBottom: '100px',
  },
  body: {
    marginTop: '50px',
  },
  title: {
    fontSize: '56px',
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '48px',
    },
  },
  item: {
    marginTop: '14px',
    marginBottom: '14px',
  },
  item__title: {
    marginLeft: '10px',
    fontSize: '16px',
    letterSpacing: '-0.02em',
    color: '#444444 !important',
    fontWeight: 'bold',
  },
  item__text: {
    marginLeft: '35px',
    fontSize: '14px',
    letterSpacing: '-0.02em',
    color: '#888888 !important',
  },
  map: {
    height: '327px',
    width: '667px',
    [theme.breakpoints.down(1440)]: {
      height: '327px',
      width: '344px',
    },
    [theme.breakpoints.down(960)]: {
      marginTop: '16px',
      height: '280px',
      width: '280px',
    },
  },
}));
