import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { Title } from '../Title/Title';
import CategoryImages from './CategoryImages';
import { useStyles } from './Style';
import { getCategories } from '../../store/categories/actions';


const Categories = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.spaces}>
      <Container maxWidth="md">
        <Title title="How do you ride?" />
        <CategoryImages categories={props.categories} />
        <Box mx="auto" mt="50px" className={classes.box}>
          <Link to="/shop/filter?perPage=8&startPage=1" className={classes.link}>
            <Button className={classes.button}>shop all categories</Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
  isCatalogFetching: state.categoryReducer.isCatalogFetching,
  categories: state.categoryReducer.categories,
});

export default connect(mapStateToProps, { getCategories })(Categories);
