import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';
import SubsectionTitle from '../../../components/Mainpage/SubsectionTitle/SubsectionTitle';
import { SubscribeLetter } from './SubscribeLetter';

const StayInTouch = () => {
  const classes = useStyles();
  const [mail, setMail] = useState('');
  const [formError, setFormError] = useState(false);

  const MySwal = withReactContent(Swal);

  const showSwalSuccess = () => {
    MySwal.fire({
      title: <p>Thank You!</p>,
      html: <p>You Have Successfully Subscribed</p>,
      type: 'success',
      confirmButtonColor: '#6A86E8',
      onClose: () => {
        TextField.value = '';
      },
    });
  };

  const showSwalFailed = () => {
    MySwal.fire({
      title: <p>You Already Subscribed!</p>,
      html: <p>Congratulations!</p>,
      type: 'info',
      confirmButtonColor: '#6A86E8',
      onClose: () => {
        TextField.value = '';
      },
    });
  };

  const showSwalValidatorError = () => {
    MySwal.fire({
      title: <p>Sorry!</p>,
      html: <p>Introduced Email is Incorrect</p>,
      type: 'error',
      confirmButtonColor: '#6A86E8',
      onClose: () => {
        setMail('');
      },
    });
  };

  const formValidator = (value) => {
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (!emailValid) {
      setFormError(true);
    } else {
      setFormError(false);
    }
  };

  const onChangeHandle = (e) => {
    console.log(e.target.value);
    setMail(e.target.value);
    formValidator(e.target.value);
  };

  const newSubscriber = {
    email: mail,
    letterSubject: 'Congratulations! You are new member of our community',
    letterHtml: SubscribeLetter({ email: mail }),
  };


  const onSubmit = (e) => {
    e.preventDefault();
    if (!formError) {
      axios
        .post('/subscribers', newSubscriber)
        .then((subscriber) => {
          setMail('');
          showSwalSuccess();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            showSwalFailed();
          }
          console.log(err);
        });
    } else {
      showSwalValidatorError();
      setMail('');
    }
  };

  return (
    <section className={classes.blueBG}>
      <Container maxWidth="md">
        <SubsectionTitle color="#6A86E8" title="Stay in touch" />
        <Typography align="center" className={classes.text}>
          Subscribe to get the latest promo actions, discounts, and new arrivals
        </Typography>
        <form noValidate autoComplete="off" className={classes.subscribeForm} onSubmit={onSubmit}>
          <TextField
            onChange={onChangeHandle}
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            fullWidth
            error={formError}
          />
          <Button type="submit" className={classes.subscribeBtn}>
            <svg className={classes.subscribeIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.45336 1.29641L3.30592 0.123077C1.38014 1.62462 0.112337 3.93846 0 6.5641H1.60481C1.72518 4.38974 2.81645 2.48615 4.45336 1.29641ZM14.3952 6.5641H16C15.8796 3.93846 14.6118 1.62462 12.6941 0.123077L11.5547 1.29641C13.1755 2.48615 14.2748 4.38974 14.3952 6.5641ZM12.8144 6.97436C12.8144 4.45538 11.4985 2.34667 9.20361 1.78872V1.23077C9.20361 0.549744 8.666 0 8 0C7.334 0 6.79639 0.549744 6.79639 1.23077V1.78872C4.49348 2.34667 3.18556 4.44718 3.18556 6.97436V11.0769L1.58074 12.7179V13.5385H14.4193V12.7179L12.8144 11.0769V6.97436ZM8 16C8.11234 16 8.21665 15.9918 8.32096 15.9672C8.84253 15.8523 9.2678 15.4913 9.47643 14.999C9.55667 14.8021 9.59679 14.5887 9.59679 14.359H6.38716C6.39519 15.2615 7.10933 16 8 16Z" fill="white" />
            </svg>
            Subscribe
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default StayInTouch;
