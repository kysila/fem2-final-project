import React from 'react';


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useStyles } from './style';


export const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} md={3}>
            <Link to="/" className={classes.logo}>
              <img src="/img/logo.svg" alt="Logo" />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.copyContainer}>
            <Typography align="center" className={classes.copyright}>
              Copyright &copy; 2019 Electra.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} className={classes.socialBlock}>
            <a href="https://facebook.com" className={classes.socialLink}>
              <img src="/img/fb.svg" alt="Logo" />
            </a>
            <a href="https://instagram.com" className={classes.socialLink}>
              <img src="/img/insta.svg" alt="Logo" />
            </a>
            <a href="mailto:support@electra.com">
              <img src="/img/mail.svg" alt="Logo" />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
