import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 251,
    margin: '0 auto 25px',
  },
  card: {
    overflow: 'visible',
    width: '100%',
    minHeight: 355,
    boxSizing: 'border-box',
    border: '1px solid #EAEAEA',
    borderRadius: 0,
    '&:hover': {
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.25)',
      zIndex: 100,
    },
  },
  media: {
    height: 200,
    width: 200,
    margin: '10px auto',
    backgroundPosition: 'center center',
  },
  cardContent: {
    padding: '0 20px 20px 20px',
  },
  newPrice: {
    marginRight: 10,
    fontSize: 20,
  },
  oldPrice: {
    fontSize: 20,
    color: '#AAAAAA !important',
    textDecoration: 'line-through',
  },
  fontDesc: {
    height: 41,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: '20px',
    overflow: 'hidden',
    color: '#444444',
    textTransform: 'capitalize',
  },
  buttonField: {
    width: '100%',
    display: 'block',
    opacity: 0,
    padding: 0,
    height: 49,
    transition: 'opacity 0.5s linear',
    [theme.breakpoints.down(481)]: {
      opacity: 1,
    },
  },
  buttonStyle: {
    margin: 0,
    height: '100%',
    width: 'calc(100% / 3)',
    borderRight: '1px solid #bdbdbd',
    borderRadius: '0 !important',
    background: 'rgba(255, 255, 255, 1) !important',
    '&:hover': {
      background: 'rgba(238, 238, 238, 1) !important',
      boxShadow: 'none',
      '& .icon': {
        fill: '#6686FF',
      },
    },
  },
  buttonGroup: {
    width: '100%',
    height: '100%',
    '& a': {
      width: '33.3%',
    }
  },
  linkStyle: {
    margin: 0,
    textAlign: 'center',
    height: '100%',
    width: '19.9%',
    borderRadius: '0 !important',
    background: 'rgba(255, 255, 255, 1) !important',
    '&:hover': {
      background: 'rgba(238, 238, 238, 1) !important',
      boxShadow: 'none',
      '& .icon': {
        fill: '#6686FF',
      },
    },
  },
  buttonCompare: {
    width: '100%',
    margin: 0,
    height: '100%',
    borderRadius: '0 !important',
    background: 'rgba(255, 255, 255, 1) !important',
    '&:hover': {
      background: 'rgba(238, 238, 238, 1) !important',
      boxShadow: 'none',
      '& .icon': {
        fill: '#6686FF',
      },
    },
  },
}));
