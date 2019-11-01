import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import { brandImg } from '../../img/brands';

import SubsectionTitle from './SubsectionTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '&>div': {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  box: {
    padding: theme.spacing(2),
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  img: {
    width: '100%',
    filter: 'grayscale(100%)',
    opacity: '.5',
    transition: 'all 0.5s ease-out',
    '&:hover': {
      filter: 'none',
      opacity: '1',
    },
  },
  greyBG: {
    paddingTop: '44px',
    paddingBottom: '35px',
    backgroundColor: '#F8F8F8',
  },

}));


const BrandsBlock = () => {
  const classes = useStyles();

  return (
    <section className={classes.greyBG}>
      <Container maxWidth="md">
        <SubsectionTitle color="inherited" title="We are Proud to Be an Authorized Dealer for These Brands" />
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3} sm={2} md={2}>
              <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo1} alt="brand Logo" /></Box>
            </Grid>
            <Grid item xs={3} sm={2} md={2}>
              <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo2} alt="brand Logo" /></Box>
            </Grid>
            <Grid item xs={3} sm={2} md={2}>
              <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo3} alt="brand Logo" /></Box>
            </Grid>
            <Grid item xs={3} sm={2} md={2}>
              <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo4} alt="brand Logo" /></Box>
            </Grid>
            <Grid item xs={3} sm={2} md={2}>
              <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo5} alt="brand Logo" /></Box>
            </Grid>
            <Grid item xs={3} sm={2} md={2}>
              <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo6} alt="brand Logo" /></Box>
            </Grid>

          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default BrandsBlock;
