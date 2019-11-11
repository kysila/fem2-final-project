import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
    marginTop: '12px',
  },
  label: {
    zIndex: 1,
    transform: 'translate(14px, 12px) scale(1)',
    pointerEvents: 'none',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '3px',
  },
}));
