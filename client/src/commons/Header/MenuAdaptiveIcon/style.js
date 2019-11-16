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
  title: {
    fontSize: '28px',
    margin: '0',
    fontFamily: 'Tungsten',
  },
  call: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#6A86E8',
  },
  nested: {
  },
  list_icon: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));
