import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import SubsectionTitle from "./SubsectionTitle";

const useStyles = makeStyles(theme => ({
    blueBG: {
        background: 'linear-gradient(180deg, rgba(102,134,255, .1) 0%, rgba(143, 141, 226, .1) 100%)',
        paddingTop: '51px',
        paddingBottom: '49px'

    },
    textField: {
        '&>div>input':{
            backgroundColor: '#fff',
            paddingRight: '125px',
        },

    },
    subscribeForm: {
        width: '50%',
        position: 'relative',
        margin: '0 auto'
    },
    subscribeBtn:{
        position: 'absolute',
        right: '0'

    }
}));


const StayInTouch = () => {
    const classes = useStyles();

    return (
        <section className={classes.blueBG}>
            <Container maxWidth="md">
                <SubsectionTitle color="#6A86E8" title="Stay in touch"/>
                <Typography align='center'>
                    Subscribe to get the latest promo actions, discounts, and new arrivals
                </Typography>
                <form noValidate autoComplete="off" className={classes.subscribeForm}>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        fullWidth="true"
                    />
                    <Button className={classes.subscribeBtn}>Subscribe</Button>
                </form>




            </Container>


        </section>
    );
};

export default StayInTouch;