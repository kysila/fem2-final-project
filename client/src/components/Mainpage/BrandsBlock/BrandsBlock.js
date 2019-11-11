import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { useStyles } from './style';
import Preloader from '../../Preloader/Preloader';
import SubsectionTitle from '../SubsectionTitle/SubsectionTitle';


const BrandsBlock = () => {
  const classes = useStyles();
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  let partners;


  useEffect(() => {
    function getLogos() {
      axios.get('/partners').then((data) => {
        setLogos(data);
        setLoading(false);
      })
        .catch((err) => { console.log(err); });
    }
    getLogos();
  }, []);
  if (logos.data && !loading) {
    partners = logos.data.map((el) => (
      <Grid item xs={3} sm={2} md={2} key={el.customId}>
        <Box className={classes.box}><img className={classes.img} src={el.imageUrl} alt="brand Logo" /></Box>
      </Grid>
    ));
  } else {
    return (
      <Preloader />
    );
  }
  return (
    <section className={classes.greyBG}>
      <Container maxWidth="md">
        <SubsectionTitle color="inherited" title="We are Proud to Be an Authorized Dealer for These Brands" />
        <div className={classes.root}>
          <Grid container spacing={3}>
            {partners}
          </Grid>


        </div>
      </Container>
    </section>
  );
};

export default BrandsBlock;
