import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
  menuItem: {
    marginRight: '15px',
    marginLeft: '15px',
    color: '#444444',
    '&:hover': {
      color: ' #6686FF ',
    },
    [theme.breakpoints.down(480)]: {
      display: 'none',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  drawer: {},
  paper: {
    minWidth: '20%',
    paddingTop: '2%',
    fontSize: '20px',
    color: '#9c80ff',
  },
  list_box: {
    width: '100%',
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
    paddingRight: '3%',
    paddingLeft: '3%',
    textTransform: 'uppercase',

  },
  logo: {
    paddingLeft: '8%',
    marginBottom: '7%',
  },
  link: {
    color: '#9c80ff',
  },
}));
