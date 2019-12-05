import { makeStyles } from '@material-ui/core';

export const useItemStyles = makeStyles({
  item: {
    color: (props) => (props.isActive ? '#444444' : '#AAAAAA !important'),
  },
});

export const useStyles = makeStyles(() => ({
  container: {},
  separator: {
    color: '#AAAAAA',
    fontSize: '9px',
    margin: '0 9px',
  },
}));
