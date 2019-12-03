import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  gridList: {
    width: '100%',
    height: 540,
    [theme.breakpoints.down(480)]: {
      height: 'auto',
    },
    '&>.MuiGridListTile-root': {
      [theme.breakpoints.down(480)]: {
        width: '100% !important',
      },
    },
  },
  icon: {
    color: 'white',
    fontSize: 20,
    marginTop: 14,
  },
  arrowBox: {
    background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
    width: 45,
    height: 48,
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  titleBar: {
    background: 'rgba(54, 62, 99, 0.9)',
  },
  hover: {
    '&:hover': {
      '&::before': {
        content: "''",
        width: '100%',
        height: '100%',
        position: 'absolute',
        background: 'rgba(0, 130, 67, 0.5)',
      },
    },
  },
  button: {
    textTransform: 'uppercase',
    background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
    color: 'white',
    borderRadius: 4,
    fontSize: 14,
    width: 204,
    height: 50,
    '&:before': {
      content: "''",
      display: 'block',
      width: '1000px',
      height: 2,
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      position: 'absolute',
      left: 'calc(100% + 30px)',
      top: '50%',
    },
    '&:after': {
      content: "''",
      display: 'block',
      width: '1000px',
      height: 2,
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      position: 'absolute',
      right: 'calc(100% + 30px)',
      top: '50%',
    },
  },
  link: {
    textDecoration: 'none',
  },
  box: {
    marginTop: '50px',
    textAlign: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  spaces: {
    marginTop: 50,
    marginBottom: 50,
  },
}));
