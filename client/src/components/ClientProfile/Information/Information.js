import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Material UI
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Main style (fonts and so on)
import '../../../index.css';
import Preloader from '../../Preloader/Preloader';


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
  },
}));

export const Information = (props) => {
  const [customerInfo, setCustomerInfo] = useState('customer');
  const [loading, setLoading] = useState(true);


  // let mainCarouselInfo;

  // if (customerInfo && !loading) {
  //   mainCustomerInfo = 
  // } else if (loading){
  //   return <Preloader />
  // }




  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        className={classes.root}
        container
        spacing={3}

      >
        <Grid
          item
          xs={12}
          sm={12}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus natus aut sit autem eum cupiditate magni?
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
