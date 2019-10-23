import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { ProductCard } from '../ProductCard/ProductCard';
import { Header } from '../../commons';

const GlobalCss = withStyles({
  '@global': {
    body: {
      fontFamily: "'Museo Sans 500'",
      color: '#444444',
    },
    '.MuiTypography-body2': {
      fontFamily: "'Museo Sans 500'",
    },
    a: {
      textDecoration: 'none',
    },
    '.MuiButton-root': {
      background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
      borderRadius: '4px',
      border: 'none',
      color: '#FFFFFF',
    },
    '.MuiTypography-root': {
      fontFamily: "'Museo Sans 500'",
    },

  },
})(() => null);
const useStyles = makeStyles((theme) => ({
  root: {

  },
  box: {

  },
  img: {

  },


}));

export const Products = () => {
  const classes = useStyles();

  const [list, setList] = useState({});
  console.log('list', list);
  let products;
  if (list.data) {
    console.log('зашел в условие if list.data');
    products = list.data.map((el) => (
      <ProductCard
        key={el.itemNo}
        name={el.name}
        itemImg={el.imageUrls[0]}
        price={el.currentPrice}
        url={`products/${el.itemNo}`}
        rating={el.rating}
      />
    ));
  }

  useEffect(() => {
    axios.get('/products').then((data) => {
      console.log('data in axios then', data);
      console.log('setList', setList);
      setList(data);
      console.log('list after axios', list);
    });


    return () => {
      console.log('unmount');
    };
  }, [list]);

  return (
    <>
      <GlobalCss />
      <Header count={2} callCenter="1-855-324-5387" />
      <Container maxWidth="md">
        <div>
          <Grid container spacing={3}>

            {products}


          </Grid>


        </div>
      </Container>
    </>
  );
};
