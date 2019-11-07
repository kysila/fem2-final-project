import { makeStyles, createStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => createStyles({
  appBar: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    position: 'sticky',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: '#444444',
    margin: '2%',
    alignItems: 'center',
    fontSize: '14px',
  },
  input: {
    width: '45%',
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
  },
  call: {
    color: ' #6A86E8 ',
  },
}));
