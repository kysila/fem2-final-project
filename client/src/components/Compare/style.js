import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down(360)]: {
      padding: '0 7px',
    },
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  tableWrapper: {
    maxHeight: 500,
    overflow: 'auto',
  },
  card: {
    overflow: 'visible',
    maxWidth: 251,
    boxSizing: 'border-box',
    border: '1px solid #EAEAEA',
    borderRadius: 0,
    position: 'relative',
    '&:hover': {
      backgroundColor: 'none',
      zIndex: 100,
    },
  },
  'button .MuiButton-root': {
    marginBottom: 10,
  },
  media: {
    height: 200,
    width: 200,
    margin: 'auto',
    backgroundPosition: 'center center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  newPrice: {
    marginRight: 10,
    fontSize: 20,
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
  headerRow: {
    fontWeight: '900',
    position: 'sticky',
    left: 0,
    background: '#fff',
    zIndex: '2',
  },
  firstRow: {
    position: 'sticky',
    left: 0,
    background: 'linear-gradient(to right, #fff, transparent)',
    zIndex: '2',
  },
  detailsName: {
    display: 'inline-block',
    width: 125,
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailsDesc: {
    display: 'inline-block',
    width: 'auto',
    fontSize: 14,
  },
  margin: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
}));
