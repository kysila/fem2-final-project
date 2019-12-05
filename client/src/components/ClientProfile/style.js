import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  mainContainerTop: {
    paddingTop: '20px',
    backgroundColor: '#fff',
    marginBottom: '20px',
    [theme.breakpoints.down(600)]: {
      padding: '10px 0 0 0',
      marginBottom: '10px',
    },
  },
  mainContainer: {
    backgroundColor: '#fff',
    marginBottom: '80px',
    minHeight: '47vh',
    [theme.breakpoints.down(600)]: {
      padding: '0',
      marginBottom: '80px',
    },
  },
  contentSection: {
    width: '80%',
    margin: '30px auto 0 50px',
    [theme.breakpoints.down(768)]: {
      width: '100%',
      margin: '20px auto 0 auto',
    },
    [theme.breakpoints.down(600)]: {
      width: '100%',
      margin: '0',
    },
  },
  expansionPanelDetails: {
    [theme.breakpoints.down(600)]: {
      background: 'linear-gradient(180deg, #F8F8F8 0%, rgba(248, 248, 248, 0) 100%)',
    },
  },
  h2Name: {
    marginLeft: '50px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '56px',
    textTransform: 'capitalize',
    [theme.breakpoints.down(768)]: {
      fontSize: '48px',
    },
    [theme.breakpoints.down(600)]: {
      fontSize: '36px',
      textAlign: 'center',
      margin: '20px auto 30px',
    },
  },
  heading: {
    fontWeight: '600',
    flexBasis: '66.66%',
    flexShrink: 0,
  },
}));
