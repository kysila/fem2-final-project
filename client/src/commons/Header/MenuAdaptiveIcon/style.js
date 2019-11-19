import { createStyles, makeStyles } from '@material-ui/core';


export const useStyles = makeStyles((theme) => createStyles({
  menu_icon: {
    color: '#9c80ff',
  },
  paper: {
    padding: '2%',
    paddingTop: '2%',
    fontSize: '20px',
    color: '#444444',
    maxWidth: '320px',
  },
  logo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginRight: '5%',
  },
  close_icon: {
    marginTop: '7px',
  },
  title: {
    fontSize: '28px',
    margin: '0',
    fontFamily: 'Tungsten Book',
  },
  call: {
    textAlign: 'center',
    fontSize: '11px',
    color: '#6A86E8',
  },
  nested: {
  },
  list_icon: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  menuItem: {
    color: '#444444',
  },
  arrow_icon: {
    marginTop: '8px',
    fontSize: '16px',
  },
  link: {
    fontSize: '16px',

  },
}));
