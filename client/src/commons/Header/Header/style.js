import { makeStyles, createStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => createStyles({
  appBar: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: '10px',
     
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  logo: {
    color: '#444444',
    margin: '2%',
    alignItems: 'center',
    fontSize: '14px',
    [theme.breakpoints.down(480)]: {
      marginTop: '4%',
    },
    [theme.breakpoints.down(380)]: {
      marginTop: '5%',
    },
    [theme.breakpoints.down(340)]: {
      marginTop: '6%',
    },
  },
  link: {
    color: '#444444',
    margin: '2%',
    alignItems: 'center',
    fontSize: '14px',
    [theme.breakpoints.down(480)]: {
      display: 'none',
    },
  },
  input: {
    width: '45%',
    [theme.breakpoints.down(680)]: {
      width: '30%',
    },
    [theme.breakpoints.down(480)]: {
      display: 'none',
    },
  },
  drawer: {},
  paper: {
    paddingRight: '2%',
    paddingTop: '2%',
    background: '#f4efff',
    fontSize: '20px',
    color: '#9c80ff',
  },
  basket: {
    position: 'relative',
    borderRadius: '50%',
    border: '1px solid #6A86E8',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    paddingTop: '14px',
  },
  circle: {
    backgroundColor: ' #6A86E8 ',
    borderRadius: '50%',
    height: '15px',
    width: '15px',
    position: 'absolute',
    top: '0px',
    right: '0px',
    fontSize: '11px',
    color: ' #FFFFFF ',
    [theme.breakpoints.down(480)]: {
      top: '5px',
      right: '5px',
    },
  },
  call: {
    color: ' #6A86E8 ',
    [theme.breakpoints.down(680)]: {
      fontSize: '10px',
    },
    [theme.breakpoints.down(570)]: {
      display: 'none',
    },
  },
  menu_icon: {
    display: 'none',
    [theme.breakpoints.down(480)]: {
      display: 'inline-block',
    },
  },
  profileLink: {
    textDecoration: 'underline !important',
    color: '#3f51b5',
  },
}));
