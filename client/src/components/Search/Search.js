import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import { Header } from '../../commons';
import Preloader from '../Preloader/Preloader';

import { Title } from '../Title/Title';
import StayInTouch from '../../commons/Footer/StayInTouch';


const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: 0,
    maxWidth: 'auto',
  },
  space: {
    marginBottom: '40px',
  },
  paddingTop: {
    paddingTop: '20px',
  },

}));

const mapStateToProps = (state) => ({
  searchValue: state.searchReducer.searchValue,
  searchProducts: state.searchReducer.searchProducts,
});

export const Search = connect(mapStateToProps)((props) => {
  const classes = useStyles();
  return (
      <React.Fragment>
        <Header />
        <Container maxWidth="md" className={classes.paddingTop}>
          <Title title="Search results" />
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            className={classes.space}
          >
                        Results of your searching:
          </Typography>
          <main>
            <Grid container spacing={0}>
              {props.searchProducts}
            </Grid>
          </main>
        </Container>
        <StayInTouch />
      </React.Fragment>

  );
});
