import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  copyright: {
    color: '#888888',
    fontWeight: 300,
    fontSize: '12px',
    letterSpacing: '-0.02em',
  },
  copyContainer: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0',
  },
  socialLink: {
    display: 'block',
    marginRight: '28px',
  },
  logo: {
    display: 'block',
    padding: '36px 0',
  },
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} md={3}>
            <Link to="/" className={classes.logo}>
              <img src="img/logo.svg" alt="Logo" />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6} alignItems="center" className={classes.copyContainer}>
            <Typography align="center" className={classes.copyright}>
              Copyright &copy; 2019 Electra.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} className={classes.socialBlock}>
            <a href="https://facebook.com" className={classes.socialLink}>
              <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66165 9H5.95489C5.95489 13.0625 5.95489 18 5.95489 18H1.89474C1.89474 18 1.89474 13.0625 1.89474 9H0V5.8125H1.89474V3.75C1.89474 2.25 2.6391 0 5.95489 0H8.93233V3.0625C8.93233 3.0625 7.10526 3.0625 6.76692 3.0625C6.42857 3.0625 5.88722 3.25 5.88722 3.9375V5.8125H9L8.66165 9Z" fill="#AAAAAA" />
              </svg>
            </a>
            <a href="https://instagram.com" className={classes.socialLink}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 2H4C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16H14C15.1046 16 16 15.1046 16 14V4C16 2.89543 15.1046 2 14 2ZM4 0C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H14C16.2091 18 18 16.2091 18 14V4C18 1.79086 16.2091 0 14 0H4Z" fill="#AAAAAA" />
                <path fillRule="evenodd" clipRule="evenodd" d="M9 11.5C10.3807 11.5 11.5 10.3807 11.5 9C11.5 7.61929 10.3807 6.5 9 6.5C7.61929 6.5 6.5 7.61929 6.5 9C6.5 10.3807 7.61929 11.5 9 11.5ZM9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5 6.51472 11.4853 4.5 9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5Z" fill="#AAAAAA" />
                <circle cx="13.5" cy="4.01147" r="1.125" fill="#AAAAAA" />
              </svg>
            </a>
            <a href="mailto:support@electra.com">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20H15V18H10C5.66 18 2 14.34 2 10C2 5.66 5.66 2 10 2C14.34 2 18 5.66 18 10V11.43C18 12.22 17.29 13 16.5 13C15.71 13 15 12.22 15 11.43V10C15 7.24 12.76 5 10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C11.38 15 12.64 14.44 13.54 13.53C14.19 14.42 15.31 15 16.5 15C18.47 15 20 13.4 20 11.43V10C20 4.48 15.52 0 10 0ZM10 13C8.34 13 7 11.66 7 10C7 8.34 8.34 7 10 7C11.66 7 13 8.34 13 10C13 11.66 11.66 13 10 13Z" fill="#AAAAAA" />
              </svg>
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
