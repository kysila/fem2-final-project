import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.25)',
      zIndex: 100,
    },
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
