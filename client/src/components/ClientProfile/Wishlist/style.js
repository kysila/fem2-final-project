import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  expansionPanelDetails: {
    [theme.breakpoints.down(600)]: {
      background: 'linear-gradient(180deg, #F8F8F8 0%, rgba(248, 248, 248, 0) 100%)',
    },
  },
  heading: {
    fontWeight: '600',
    flexBasis: '66.66%',
    flexShrink: 0,
  },
  formsInfo: {
    paddingBottom: '0',
  },
}));
