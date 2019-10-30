import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from '../../commons';
import StayInTouch from "../../commons/Footer/StayInTouch";

import { ProductGallery } from "./ProductGallety";
import { ProductDescription } from './ProductDescription'

import {makeStyles} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import ProductBreadcrumbs from '../Products/ProductBreadcrumbs';

const useStyles = makeStyles(() => ({
  space: {
    marginBottom: '40px',
  },
  paddingTop: {
    paddingTop: '20px',
  },
  productPage: {
    paddingTop: 20,
    display: 'flex',
  },
  productInfo: {
    maxWidth: 500,
  }
}));


export const ProductDetails = (props) => {

  const [ state, setState ] = useState({});

  const classes = useStyles();

  useEffect(() => {
    axios.get(`/products/${props.match.params.id}`)
      .then(data => {
        setState(data.data);
      })
  }, []);


  return (
    <div>
      <Header callCenter="1-855-324-5387" />
      <Container maxWidth="md" className={classes.paddingTop}>
        <ProductBreadcrumbs link={state.name} />
        <div className={classes.productPage}>
          <div className={classes.productInfo}>
            <ProductGallery image={state.imageUrls}/>
            <ProductDescription data={state} />
          </div>
        </div>
      </Container>
      <StayInTouch />
    </div>
  )
};
