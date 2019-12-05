import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  search: {
    fontSize: '12px',
    color: '#444444',
    width: '100%',
    '&.MuiPaper-elevation1': {
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.1), '
          + '0px 1px 1px 0px rgba(0,0,0,0.1), '
          + '0px 1px 3px 0px rgba(0,0,0,0.1)',
    },
  },
}));
