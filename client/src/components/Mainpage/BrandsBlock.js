import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {brandImg} from '../../img/brands';
import Tungsten from '../../fonts/Tungsten-Book.woff';


const tungsten = {
    fontFamily: 'Tungsten Book',
    fontStyle: 'normal',
    src: `
    local('Tungsten Book'),
    url(${Tungsten}) format('woff')
  `,
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        '&>div':{
            justifyContent: 'center',
        }
    },
    box: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    img: {
        width: '100%',
        filter: 'grayscale(100%)',
        opacity: '.5',
        transition: 'all 0.5s ease-out',
        '&:hover':{
            filter: 'none',
            opacity: '1',
        }
    },
    subsectionTitle: {
        fontSize: '33px',
        fontWeight: '326',
        textTransform: 'capitalize',
        marginBottom: '20px',
    },
    greyBG: {
        paddingTop: '44px',
        paddingBottom: '35px',
        backgroundColor: '#F8F8F8',
    }

}));



const BrandsBlock = () => {
    const classes = useStyles();

    return (
        <section className={classes.greyBG}>
            <Container maxWidth="md">
                <Typography align='center' style={tungsten} variant="h3"  className={classes.subsectionTitle}>
                    We are Proud to Be an Authorized Dealer for These Brands
                </Typography>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={3} md={2}>
                            <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo1} alt="brand Logo"/></Box>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo2} alt="brand Logo"/></Box>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo3} alt="brand Logo"/></Box>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo4} alt="brand Logo"/></Box>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo5} alt="brand Logo"/></Box>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2}>
                            <Box className={classes.box}><img className={classes.img} src={brandImg.brandLogo6} alt="brand Logo"/></Box>
                        </Grid>

                    </Grid>


                </div>
            </Container>
        </section>
    );
};

export default BrandsBlock;