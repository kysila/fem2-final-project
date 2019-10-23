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
const GlobalCss = withStyles({
    '@global': {
        body: {
            fontFamily: "'Museo Sans 500'",
            color: "#444444"
        },
        '.MuiTypography-body2': {
            fontFamily: "'Museo Sans 500'"
        },
        a: {
            textDecoration: 'none'
        },
        '.MuiButton-root': {
            background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
            borderRadius: '4px',
            border: 'none',
            color: '#FFFFFF'
        },
        '.MuiTypography-root':{
            fontFamily: "'Museo Sans 500'",
        },
        '.MuiContainer-maxWidthMd': {
            maxWidth: '1060px'
        },
        '.MuiCardMedia-root':{
            backgroundSize: 'contain',

        }

    },
})(() => null);
const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: 0,
        maxWidth: 'auto',
    },
    box: {

    },
    img: {

    },


}));

export  const Products = () => {
    const classes = useStyles();

    const [list, setList] = useState({});
    let products;
    if(list.data)  {
        products = list.data.map((el)=>{
            return <Grid item xs={12} sm={4} md={3}><ProductCard
                className={classes.card}
                key={el.itemNo}
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
            console.log('data in axios then', data);
            console.log('setList', setList)
            setList(data);
            console.log('list after axios', list)
     });


        return () => {
            console.log('unmount');
        }
    },[]);

    return (
        <React.Fragment>
            <GlobalCss/>
            <Header callCenter={'1-855-324-5387'}/>
            <Container maxWidth="md">
                <ProductBreadcrumbs/>
                <Title title="All products"/>
                 <div>
                    <Grid container spacing={0}>

                            {products}



                    </Grid>


                </div>
            </Container>
            <StayInTouch/>
        </React.Fragment>
    )
}