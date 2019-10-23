import React, { useState, useEffect } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(() => ({
  text: {},
}));

export function Contacts() {
  const classes = useStyles();

  return (
    <Typography align="center" className={classes.text}>
        Subscribe to get the latest promo actions, discounts, and new arrivals
    </Typography>
  );
}
