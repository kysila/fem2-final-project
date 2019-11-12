import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box, Typography } from '@material-ui/core';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MuseoSans from '../../fonts/MuseoSans-500.woff';

import { useStyles, useItemStyles } from './styles';

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
    <Box component="span"><ArrowForwardIosIcon className={props.classes.separator} /></Box>
  );
}

export function StepsItem(props) {
  const classes = useItemStyles(props);

  return (
    <Typography
      style={museo}
      component="span"
      className={classes.item}
    >
      {props.text}
    </Typography>
  );
}

export function Steps(props) {
  const classes = useStyles(props);

  return (
    <Box className={classNames(props.className, classes.container)}>
      {props.items.reduce(
        (result, item) => result.concat([
          <StepsItem key={item.key} {...item} />,
          <Separator key={item.key.concat('s')} classes={classes} />,
        ]), [],
      ).slice(0, -1)}
    </Box>
  );
}
