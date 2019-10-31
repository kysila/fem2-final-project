import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import { ProductCard } from '../ProductCard/ProductCard';
import { Footer, Header } from '../../commons';
import AllBreadcrumbs from './AllBreadcrumbs';
import { Title } from '../Title/Title';
import StayInTouch from '../../commons/Footer/StayInTouch';
import Filter from './Filter';
import Preloader from '../Preloader/Preloader';

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: 0,
    maxWidth: 'auto',
  },
  space: {
    marginBottom: '40px',
  },
  mainContainer: {
    paddingTop: '20px',
    backgroundColor: '#fff',
  },

}));

export const Products = () => {
  const classes = useStyles();

  const [list, setList] = useState({
  });
  const [loading, setLoading] = useState(true);
  let products;


  useEffect(() => {
    function getList() {
      axios.get('/products').then((data) => {
        setList(data);
        setLoading(false);
      })
        .catch((err) => { console.log(err); });
    }
    getList();
  }, []);
  if (list.data && !loading) {
    products = list.data.map((el) => (
      <Grid item xs={12} sm={4} md={3} key={el.itemNo}>
        <ProductCard
          className={classes.card}
          name={el.name}
          itemImg={el.imageUrls[0]}
          price={el.currentPrice}
          url={`/products/${el.itemNo}`}
          rating={el.rating}
        />
      </Grid>
    ));
  } else {
    return (
      <React.Fragment>
        <Header callCenter="1-855-324-5387" />
        <Container maxWidth="md" className={classes.paddingTop}>
          <AllBreadcrumbs />
          <Title title="All products" />
          <Typography
            variant="body1"
            gutterBottom
            align="center"
            className={classes.space}
          >
                    Our full collection of electric devices
          </Typography>
          <Filter />
          <main>
            <Preloader />
          </main>
        </Container>
        <StayInTouch />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Header callCenter="1-855-324-5387" />
      <Container maxWidth="md" className={classes.mainContainer}>
        <AllBreadcrumbs />
        <Title title="All products" />
        <Typography
          variant="body1"
          gutterBottom
          align="center"
          className={classes.space}
        >
                    Our full collection of electric devices
        </Typography>
        <Filter />
        <main>
          <Grid container spacing={0}>
            {products}
          </Grid>
        </main>
      </Container>
      <StayInTouch />
      <Footer />
    </React.Fragment>
  );
};
