import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, BagIcon, WeigherIcon } from "../Icons/Icons";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

import { useStyles } from "./style";

export function ProductCard({
  name, itemImg, price, url, rating, key, itemNo,
}) {
  const [state, setState] = useState({
    openButtons: false,
  });

  const showButtonsPanel = () => {
    setState(() => ({
      openButtons: true,
    }));
  };

  const hideButtonsPanel = () => {
    setState({
      openButtons: false,
    });
  };

  const viewedItemListener = () => {
    onmouseover = false;
    const product = JSON.parse(localStorage.getItem('product'));
    if (!product) {
      const newProduct = [].concat([{
        name, itemImg, price, url, rating, key, itemNo,
      }]);
      localStorage.setItem('product', JSON.stringify(newProduct));
    } else {
      localStorage.setItem('product', JSON.stringify(product.concat([{
        name, itemImg, price, url, rating, key, itemNo,
      }])));
    }
  };

  const products = JSON.parse(localStorage.getItem('product'));


  const classes = useStyles();

  return (
    <Link to={url} className={classes.link}>
      <Card
        onClick={viewedItemListener}
        className={classes.card}
        onMouseOver={showButtonsPanel}
        onMouseOut={hideButtonsPanel}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${itemImg}`}
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
              {price}
            </Typography>
            <Typography
              className={classes.oldPrice}
              gutterBottom
              variant="h5"
              display="inline"
              component="h2"
            >
                $4,010
            </Typography>
            <Typography
              className={classes.fontDesc}
              variant="body2"
              component="p"
            >
              {name}
            </Typography>
            <Rating
              name="half-rating"
              precision={0.5}
              value={rating}
              readOnly
            />
          </CardContent>
        </CardActionArea>
        <CardActions
          className={classes.buttonField}
          style={state.openButtons ? { bottom: '-49px', opacity: 1, boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.25)' } : null}
        >
          <ButtonGroup
            className={classes.buttonGroup}
            variant="contained"
            aria-label="full-width contained primary button group"
          >
            <Button
              className={classes.buttonStyle}
            >
              <HeartIcon
                className="icon"
                color="action"/>
            </Button>
            <Button
              className={classes.buttonStyle}
            >
              <WeigherIcon
                className="icon"
                style={{
                  width: 30,
                  height: 23,
                }}
                color="action"/>
            </Button>
            <Button
              className={classes.buttonStyle}
            >
              <BagIcon
                className="icon"
                style={{
                  width: 30,
                  height: 23,
                }}
                color="action"/>
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Link>
  );
}
