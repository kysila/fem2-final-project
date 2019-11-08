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
  productsContainer: {
    height: '700px',
    overflow: 'auto',
  },

}));
