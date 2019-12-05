import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  card: {
    marginBottom: 0,
    maxWidth: 'auto',
  },
  space: {
    marginBottom: '40px',
  },
  mainContainer: {
    paddingTop: '20px',
    backgroundColor: '#fff',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 100,
  },
  productsContainer: {
    height: '700px',
    overflow: 'auto',
  },
  applyBtn: {
    marginTop: '50px',
    padding: '18px 26px',
    position: 'relative',
    '&:before': {
      content: "''",
      display: 'block',
      width: '1000px',
      height: '2px',
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      position: 'absolute',
      left: 'calc(100% + 30px)',
      top: '50%',
    },
    '&:after': {
      content: "''",
      display: 'block',
      width: '1000px',
      height: '2px',
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      position: 'absolute',
      right: 'calc(100% + 30px)',
      top: '50%',
    },
  },
  chipsContainer: {
    padding: '15px 0',
  },
  applyBtnContainer: {
    textAlign: 'center',
    overflow: 'hidden',
    width: '100%',
  },

}));
