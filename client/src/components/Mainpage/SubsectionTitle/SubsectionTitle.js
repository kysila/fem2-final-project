import React from 'react';

import Typography from '@material-ui/core/Typography';
import Tungsten from '../../../fonts/Tungsten-Book.woff';
import { useStyles } from './style';


const tungsten = {
  fontFamily: 'Tungsten Book',
  fontStyle: 'normal',
  src: `
    local('Tungsten Book'),
    url(${Tungsten}) format('woff')
  `,
};
const SubsectionTitle = (props) => {
  const classes = useStyles(props);

  return (
    <Typography align="center" style={tungsten} variant="h3" className={classes.subsectionTitle}>
      {props.title}
    </Typography>
  );
};

export default SubsectionTitle;
