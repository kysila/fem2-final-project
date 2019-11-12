import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar/AppBar';
import { Link } from 'react-router-dom';

import { useStyles } from './Style';
import { UnsubscribeLetter } from './UnsubscribeLetter';

export const Unsubscribe = (props) => {
  const classes = useStyles();

  const MySwal = withReactContent(Swal);

  const showSwalUnsubscribed = () => {
    MySwal.fire({
      title: <p>You Unsubscribed</p>,
      html: <p>You email has been disconnected successfully</p>,
      type: 'success',
      confirmButtonColor: '#6A86E8',
      onClose: () => {
        window.location = '/';
      },
    });
  };

  const updateSubscriber = {
    enabled: false,
    letterSubject: 'Unsubscribe',
    letterHtml: UnsubscribeLetter(),
  };

  const unsubscribeHandle = () => {
    const url = props.match.params.email;
    console.log('props.match', props.match);
    console.log('props.location', props.location);
    console.log('props.mail', url);
    axios
      .put(`${url}`, updateSubscriber)
      .then((res) => {
        console.log(res);
        showSwalUnsubscribed();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Container maxWidth="md">
          <Box className={classes.link}>
            <Link to="/">
              <img src="/img/logo.svg" alt="Logo" />
            </Link>
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth="md">
        <Box className={classes.box}>
          <Box display="flex" justifyContent="center">
            <h2 className={classes.head}>Hello!</h2>
          </Box>
          <p className={classes.text}>We are very sorry that you want to unsubscribe.</p>
          <p className={classes.text}>We hope that this is not forever and we will see each other again soon.</p>
          <div className={classes.margin}>
            <p className={classes.indication} mt="40px">To unsubscribe enter your email and click on 'unsubscribe'</p>
            <p className={classes.indication}>But if you’ve changed your mind or entered here by mistake, click cancel</p>
          </div>
          <Box display="flex" flexWrap="wrap" justifyContent="center" className={classes.buttonBlock}>
            <Button onClick={unsubscribeHandle}>Unsubscribe</Button>
            <Link to="/">
              <Button
                className={classes.cancel}
                style={{
                  background: '#fff', border: '1px solid', borderImg: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%', color: '#8F8DE2', paddingLeft: 25, paddingRight: 25,
                }}
              >
Cancel
              </Button>
            </Link>
          </Box>
          <p className={classes.indication}>Thank you for being with us.</p>
        </Box>
      </Container>
    </React.Fragment>
  );
};
