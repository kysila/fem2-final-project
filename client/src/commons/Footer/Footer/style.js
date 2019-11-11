import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  copyright: {
    color: '#888888',
    fontWeight: 300,
    fontSize: '12px',
    letterSpacing: '-0.02em',
  },
  copyContainer: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0',
  },
  socialLink: {
    display: 'block',
    marginRight: '28px',
  },
  logo: {
    display: 'block',
    padding: '36px 0',
  },
}));
