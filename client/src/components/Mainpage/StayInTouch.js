import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import SubsectionTitle from "./SubsectionTitle";

const useStyles = makeStyles(theme => ({
    blueBG: {
        background: 'linear-gradient(180deg, rgba(102,134,255, .1) 0%, rgba(143, 141, 226, .1) 100%)',
        paddingTop: '51px',
        paddingBottom: '49px'

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



            </Container>


        </section>
    );
};

export default StayInTouch;