import {
  Box, Button, Grid, Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useStyles } from './styles';
import Tungsten from '../../fonts/Tungsten-Book.woff';
import MuseoSans from '../../fonts/MuseoSans-500.woff';

const tungsten = {
  fontFamily: 'Tungsten Book',
  fontStyle: 'normal',
  src: `
    local('Tungsten Book'),
    url(${Tungsten}) format('woff')
  `,
};

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

export function MapContainer(props) {
  const classes = useStyles();
  return (
    <Box
      className={classes.mapContainer}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
        className={classes.mapBody}
      >
        <Typography style={{ fontSize: '36px', ...tungsten }}>
          Location Selector
        </Typography>
        <Typography style={{
          marginTop: '8px', marginBottom: '20px', fontSize: '16px', color: '#888888', textAlign: 'center', ...museo,
        }}
        >
          Drag the map to place locator on the needed place.
          <br />
          When ready - press “Done”. You can then edit address inside Address field.
        </Typography>
        {props.children}
        <Button
          style={{
            padding: '13px 42px', fontSize: '14px', marginTop: '20px', fontWeight: 'bold', ...museo,
          }}
          onClick={props.onClick}
        >
          Done
        </Button>
      </Grid>
      <Box className={classes.closeWrapper} onClick={props.onClick}>
        <CloseIcon className={classes.close} />
      </Box>
    </Box>
  );
}
