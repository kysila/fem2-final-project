import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tungsten from '../../fonts/Tungsten-Book.woff';

const tungsten = {
  fontFamily: 'Tungsten Book',
  fontStyle: 'normal',
  src: `
    local('Tungsten Book'),
    url(${Tungsten}) format('woff')
  `,
};

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 56,
    fontWeight: '326',
    textTransform: 'capitalize',
    lineHeight: '100%',
    color: '#444444',
  },

}));

export const Title = (props) => {
  const classes = useStyles(props);

  return (
    <Typography align="center" style={tungsten} variant="h2" className={classes.title}>
      {props.title}
    </Typography>
  );
};
