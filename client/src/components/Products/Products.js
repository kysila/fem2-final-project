import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

import {makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import {ProductCard} from "../ProductCard/ProductCard";
import {Header} from "../../commons";
import ProductBreadcrumbs from "./ProductBreadcrumbs";
import {Title} from "../Title/Title"
import StayInTouch from "../Mainpage/StayInTouch";
import Filter from "./Filter";
import Preloader from "../Preloader/Preloader";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: 0,
        maxWidth: 'auto',
    },
    space:{
        marginBottom: '40px'
    },
    paddingTop: {
        paddingTop: '20px'
    },

}));

export  const Products = () => {
    const classes = useStyles();

    const [list, setList] = useState({
    });
    const {state, setState} = useState({
        isDataFetching: false
    });
    console.log(state);
    let products;
    if(list.data) {
        products = list.data.map((el)=>{
            return <Grid item xs={12} sm={4} md={3} key={el.itemNo}><ProductCard
                className={classes.card}
                name={el.name}
                itemImg={el.imageUrls[0]}
                price={el.currentPrice}
                url={`products/${el.itemNo}`}
                rating={el.rating}

            /></Grid>
        })
    }

    useEffect(()=> {

        axios.get("/products").then(data => {
            setList(data);
     });


        return () => {
            console.log('unmount');
        }
    },[]);

    return (
        <React.Fragment>
            <Header callCenter={'1-855-324-5387'}/>
            <Container maxWidth="md" className={classes.paddingTop}>
                <ProductBreadcrumbs/>
                <Title title="All products"/>
                <Typography
                    variant="body1"
                    gutterBottom
                    align="center"
                    className={classes.space}
                    >
                    Our full collection of electric devices
                </Typography>
                <Filter/>
                <main>
                    <Grid container spacing={0}>
                        {products}
                    </Grid>
                </main>

            </Container>
            <StayInTouch/>
        </React.Fragment>
    )
}