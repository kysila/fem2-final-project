import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  img404: {
    width: '100%',
  },
  container: {
    padding: '20px 0',
    background: 'linear-gradient(180deg, #6A86E8 0%, rgba(106, 134, 232, 0) 100%)',

  },
  leftSide: {
    position: 'relative',

  },
  err: {
    position: 'absolute',
    fontSize: '200px',
    fontWeight: '900',
    color: 'rgba(68, 68, 68, .1)',
    top: '-20%',
    lineHeight: 0,
    margin: 0,
  },
}));
