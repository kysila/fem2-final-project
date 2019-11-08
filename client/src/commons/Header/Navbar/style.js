import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => createStyles({
  menuItem: {
    marginRight: '15px',
    marginLeft: '15px',
    color: ' #444444 ',
    '&:hover': {
      color: ' #6686FF ',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawer: {},
  paper: {
    paddingRight: '0.5%',
    paddingTop: '2%',
    background: '#f4efff',
    fontSize: '20px',
    color: '#9c80ff',
  },
  list: {
    marginRight: '50px',
    divider: 'true',
    width: '250px',
  },
  item: {
    marginLeft: '2%',
    marginRight: '2%',
  },
  text: {
    display: 'inline-block',
    paddingRight: '3%',
    paddingLeft: '3%',
    textTransform: 'uppercase',

  },
  logo: {
    paddingLeft: '8%',
    marginBottom: '5%',
  },

}));
