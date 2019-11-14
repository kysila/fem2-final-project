import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  containerMD: {
    outline: 'none',
    [theme.breakpoints.down(600)]: {
      // maxWidth: '80%',
    },
  },
  flexContainer: {
    maxHeight: '480px',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    alignContent: 'space-evenly',
    wrap: 'wrap',
    [theme.breakpoints.down(768)]: {
      alignContent: 'space-evenly',
    },
    [theme.breakpoints.down(640)]: {
      maxHeight: '400px',
    },
    [theme.breakpoints.down(600)]: {
      maxHeight: 'none',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      justifyItems: 'center',
    },
  },
  slickDescription: {
    marginTop: '50px',
    [theme.breakpoints.down(1000)]: {
      marginLeft: '20px',
    },
    [theme.breakpoints.down(875)]: {
      marginLeft: '40px',
    },
    [theme.breakpoints.down(769)]: {
      marginLeft: '0',
    },
    [theme.breakpoints.down(500)]: {
      marginTop: '35px',
    },
  },
  slickDescriptionText: {
    width: '100%',
    fontSize: '3.5rem',
    textTransform: 'capitalize',
    [theme.breakpoints.down(900)]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down(625)]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down(480)]: {
      fontSize: '2.3rem',
      textAlign: 'center',
    },
  },
  slickExplanation: {
    [theme.breakpoints.down(1000)]: {
      marginLeft: '20px',
    },
    [theme.breakpoints.down(875)]: {
      marginLeft: '40px',
    },
    [theme.breakpoints.down(769)]: {
      marginLeft: '0',
    },
    [theme.breakpoints.down(600)]: {
      order: 1,
    },
  },
  slickExplanationText: {
    fontSize: '1rem',
    [theme.breakpoints.down(625)]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down(600)]: {
      textAlign: 'justify',
      margin: '0 20px',
    },
  },
  showItemBtn: {
    display: 'block',
    marginTop: '30px',
    alignItems: 'center',
    padding: '15px 20px',
    [theme.breakpoints.down(1000)]: {
      // marginLeft: '20px',
    },
    [theme.breakpoints.down(875)]: {
      // marginLeft: '40px',
    },
    [theme.breakpoints.down(810)]: {
      padding: '10px 15px',
    },
    [theme.breakpoints.down(780)]: {
      marginTop: '15px',
      padding: '10px 10px',
    },
    [theme.breakpoints.down(769)]: {
      marginLeft: '0',
    },
    [theme.breakpoints.down(600)]: {
      margin: '15px auto',
    },
    [theme.breakpoints.down(370)]: {
      margin: '15px auto 0 auto',
    },
    '&>span': {
      textTransform: 'uppercase',
      width: 'auto',
    },
  },
}));
