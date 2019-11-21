import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TableCell } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';

import compareReducer from '../../store/compare/compareReducer';
import { useStyles } from './style';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';


const mapStateToProps = (store) => ({
  products: store.compareReducer.products,
});

// const deleteHandler = (e) => {
//   e.preventDefault()
// };

const ProductForCompare = (
  {
    name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime, ...props
  },
) => {
  const classes = useStyles();
  const obj = props.products;

  const comparableProducts = obj.map((el) => (
    <TableCell key={el.itemNo}>
      <Link to={el.url} className={classes.link}>
        <Card
          className={classes.card}
        >
          <CardActionArea>
            {/*<IconButton*/}
            {/*  aria-label="delete"*/}
            {/*  className={classes.margin}*/}
            {/*  onClick={deleteHandler}*/}
            {/*>*/}
            {/*  <DeleteIcon fontSize="small" />*/}
            {/*</IconButton>*/}
            <CardMedia
              className={classes.media}
              image={`${el.itemImg}`}
            />
            <CardContent
              className={classes.cardContent}
            >
              <Typography
                className={classes.fontDesc}
                variant="body2"
                component="p"
              >
                {el.name}
              </Typography>
              <AddToCartButton
                text="ADD TO CART"
              />
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </TableCell>
  ));

  return (
    <React.Fragment>
      {comparableProducts}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, { compareReducer })(ProductForCompare);
