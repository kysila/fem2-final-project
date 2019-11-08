import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { Title } from '../Title/Title';
import Preloader from '../Preloader/Preloader';
import { useStyles } from './Style';

export const CategoryImages = () => {
  const classes = useStyles();
  let categoryBlocks;
  const [categoryLink, setCategoryLink] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getData() {
      axios.get('/catalog')
        .then((catalog) => {
          setCategoryLink(catalog.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  if (categoryLink && !loading) {
    categoryBlocks = categoryLink.map((tile) => (
      <GridListTile key={tile._id} cols={+tile.cols || 1}>
        <Link to={`/${tile.id}`} className={classes.hover}>
          <div className={classes.img} style={{ background: `rgb(0, 130, 67) url('${tile.imgUrl}')` }} />
          <GridListTileBar
            className={classes.titleBar}
            title={tile.name.toUpperCase()}
            actionIcon={(
              <div className={classes.arrowBox}>
                <ArrowForwardIcon className={classes.icon} />
              </div>
                              )}
          />
        </Link>
      </GridListTile>
    ));
  } else if (loading) {
    return <Preloader />;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={266} className={classes.gridList} cols={3}>
        {categoryBlocks}
      </GridList>
    </div>
  );
};

export const Categories = () => {
  const classes = useStyles();

  return (
    <div className={classes.spaces}>
      <Container maxWidth="md">
        <Title title="How do you ride?" />
        <CategoryImages />
        <Box mx="auto" mt="50px" className={classes.box}>
          <Link to="/products" className={classes.link}>
            <Button className={classes.button}>shop all categories</Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Categories;
