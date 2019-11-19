import { makeStyles, createStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
  container: {
    minWidth: 287,
    display: 'none',
    [theme.breakpoints.down(769)]: {
      maxWidth: 287,
      display: 'block',
    },
    '& > p': {
      fontSize: '15px',
      color: '#6A86E8',
      textTransform: 'uppercase',
    },
    '& > h2': {
      fontFamily: "'Tungsten Book'",
      textTransform: 'capitalize',
      [theme.breakpoints.down(769)]: {
        fontSize: '48px',
      }
    },
  },
  name: {
    marginTop: 10,
    marginBottom: 15,
  },
  otherColors: {
    marginTop: 20,
    marginBottom: 20,
    height: 24,
    display: 'flex',
    '& > a': {
      marginRight: '8px',
      padding: '2px 7px 0px 7px',
      display: 'inline-block',
      textAlign: 'center',
      backgroundColor: '#EAEAEA',
      color: '#707070',
      borderRadius: '3px',
      textTransform: 'capitalize',
    }
  },
  price: {
    display: 'flex',
    '& > p': {
      marginRight: 10,
      fontSize: 20,
      lineHeight: '24px',
      '&.oldPrice': {
        textDecoration: 'line-through',
        color: '#AAAAAA',
      },
    },
  },
  buttons: {
    width: '100%',
    marginTop: 25,
    boxShadow: 'none',
    '& button': {
      height: 50,
      width: '19.9%',
      fontSize: 14,
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      }
    },
    '& .Mui-disabled': {
      background: '#b9b9b9',
    },
    '& .otherBtn': {
      background: 'none',
      color: '#444',
      '&:hover path': {
        fill: '#6686FF'
      }
    }
  },
}));