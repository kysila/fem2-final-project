import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { addProductToCart, getCartFromLS } from '../../store/cart/actions';
import compareReducer from '../../store/compare/compareReducer';
import { useStyles } from './style';

import { BagIcon } from '../Icons/Icons';

const mapStateToProps = (store) => ({
  products: store.compareReducer.products,
});

const ProductForCompare = (props) => {
  const classes = useStyles();
  const obj = props.products;
  console.log('props', obj);

  return (
    <Link to={props.url} className={classes.link}>
      <Card
        className={classes.card}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${props.itemImg}`}
          />
          <CardContent
            className={classes.cardContent}
          >
            <Typography
              className={classes.newPrice}
              gutterBottom
              variant="h5"
              display="inline"
              component="h2"
            >
              {props.currentPrice}
            </Typography>
            <Typography
              className={classes.fontDesc}
              variant="body2"
              component="p"
            >
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button
        className="addToCardBtn"
      >
        <BagIcon
          style={{
            width: 21,
            height: 20,
            fill: '#fff',
            marginRight: 8,
          }}
        />
          ADD TO CART
      </Button>
    </Link>
  );
};

export default connect(mapStateToProps, { compareReducer })(ProductForCompare);
