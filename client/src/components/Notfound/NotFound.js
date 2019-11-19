import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import { useStyles } from './style';
import { Footer, Header } from '../../commons';

import { Title } from '../Title/Title';


export const NotFound = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header callCenter="1-855-324-5387" />
      <div className={classes.container}>
        <Container maxWidth="md">

          <Grid container spacing={1} alignItems="center" justify="center">
            <Grid item xs={12} sm={6}>
              <div className={classes.leftSide}>
                <p className={classes.err}>404</p>
                <Title title="Page Not Found" />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img className={classes.img404} src="/img/404.png" alt="page not found" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};
