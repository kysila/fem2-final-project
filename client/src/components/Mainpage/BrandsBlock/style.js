import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '&>div': {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  box: {
    padding: theme.spacing(2),
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  img: {
    width: '100%',
    filter: 'grayscale(100%)',
    opacity: '.5',
    transition: 'all 0.5s ease-out',
    '&:hover': {
      filter: 'none',
      opacity: '1',
    },
  },
  greyBG: {
    paddingTop: '44px',
    paddingBottom: '35px',
    backgroundColor: '#F8F8F8',
  },

}));
