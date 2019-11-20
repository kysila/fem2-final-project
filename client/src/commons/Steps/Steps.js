import React from 'react';
import classNames from 'classnames';
import {Box, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MuseoSans from '../../fonts/MuseoSans-500.woff';

import {useStyles, useItemStyles} from './styles';

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  fontSize: '13px',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

export function Separator(props) {
  return (
    <Box component="span"><ArrowForwardIosIcon className={props.classes.separator}/></Box>
  );
}

export function StepsItem(props) {
  const classes = useItemStyles(props);

  return (
    <Link
      className={classes.item}
      to={props.src || '#'}
    >
      <Typography
        style={museo}
        component="span"
      >
        {props.text}
      </Typography>
    </Link>
  );
}

export function Steps(props) {
  const classes = useStyles(props);

  return (
    <Box className={classNames(props.className, classes.container)}>
      {props.items.reduce(
        (result, item) => result.concat([
          <StepsItem key={item.key} {...item} />,
          <Separator key={item.key.concat('s')} classes={classes}/>,
        ]), [],
      ).slice(0, -1)}
    </Box>
  );
}
