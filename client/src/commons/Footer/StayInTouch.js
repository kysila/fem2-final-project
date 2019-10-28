import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SubsectionTitle from '../../components/Mainpage/SubsectionTitle';

const useStyles = makeStyles((theme) => ({
  blueBG: {
    background: 'linear-gradient(180deg, rgba(102,134,255, .1) 0%, rgba(143, 141, 226, .1) 100%)',
    paddingTop: '51px',
    paddingBottom: '49px',

  },
  textField: {
    width: '50%',
    '&>div>input': {
      backgroundColor: '#fff',
    },

  },
  subscribeForm: {
    '&>div': {
      margin: '0',
    },
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subscribeBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '15px 20px',
    '&>span': {
      width: 'auto',
    },
  },
  subscribeIcon: {
    marginRight: '4px',
  },
  text: {
    marginBottom: '24px',
  },
}));

const StayInTouch = () => {
  const classes = useStyles();
  const [mail, setMail] = useState('');

  const onChangeHandle = (e) => {
    console.log(e.target.value);
    setMail(e.target.value);
  };

  const mailBody = `<!DOCTYPE html> <html lang='en'><head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <title>Document</title>
        <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body>
        <table>
             <tr>
                <td>
                    <h1>Wellcome!</h1>
                    <span>We are glad to see you in our store!</span>

                </td>
             </tr>
         </table>
         </body></html>`;

  const newSubscriber = {
    email: mail,
    letterSubject: 'Congratulations! You are new member of our community',
    letterHtml: mailBody,
  };


  console.log(mail);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/subscribers', newSubscriber)
      .then((subscriber) => {
        console.log(subscriber);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    // eslint-disable-next-line react/jsx-filename-extension
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
