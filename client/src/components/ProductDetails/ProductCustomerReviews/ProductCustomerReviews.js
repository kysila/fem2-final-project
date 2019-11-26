import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './style';

export const ProductCustomerReviews = ({user, obj}) => {

  const [value, setValue] = useState(0);
  const [comments, setComments] = useState({
    allComments: [],
  });
  const [comment, setComment] = useState({
    product: '',
    content: '',
    rating: 0,
  });

  const classes = useStyles();

  const renderComments = (arr) => {
    return arr.map((el, i) => {
      return (
        <Box
          className={classes.commentItem}
          key={i}
        >
          <div className={classes.commentTitle}>
            <div className={classes.customerName}>
              {el.customer.login}
            </div>
            <div className={classes.commentDate}>
              {el.customer.date.slice(0, 10)}
            </div>
          </div>
          <Rating
            name="read-only"
            value={+el.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <div className={classes.commentDesc}>
            {el.content}
          </div>
        </Box>
      );
    });
  };

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    if (obj._id) {
      setComment(() => ({
        ...comment,
        // eslint-disable-next-line no-underscore-dangle
        product: obj._id,
      }));
    }
    // eslint-disable-next-line
  }, [obj]);

  useEffect(() => {
    if (comment.product !== '') {
      axios.get(`/comments/product/${comment.product}`)
        .then((data) => {
          setComments(() => ({
            ...comments,
            allComments: data.data,
          }));
        });
    }
    // eslint-disable-next-line
  }, [comment.product]);

  return (
    <Box className={classes.reviewsMainBox}>
      {/* eslint-disable-next-line max-len */}
      <Typography className={classes.reviewsHeader}>
        {' '}
        CUSTOMER REVIEWS (
        { comments.allComments.length }
        )
      </Typography>
      <Box
        className={classes.userReview}
        style={
          user ? { display: 'block' } : { display: 'none' }
        }
      >
        <TextField
          multiline
          rows="4"
          placeholder="Your review"
          className={classes.userComment}
          margin="normal"
          variant="outlined"
          onChange={(e) => {
            setComment({
              ...comment,
              content: e.target.value,
            });
          }}
        />
        <Rating
          name="simple-controlled"
          value={value}
          size="large"
          onChange={(e, newValue) => {
            setComment(() => ({
              ...comment,
              rating: e.target.value,
            }));
            setValue(newValue)
          }}
        />
        <Button
          className={classes.addReview}
          onClick={() => {
            axios.post('/comments', comment)
              .then(() => {
                axios.get(`/comments/product/${comment.product}`)
                  .then((data) => {
                    setComments(() => ({
                      ...comments,
                      allComments: data.data,
                    }));
                  });
              });
          }}
        >
          Add a review
        </Button>
      </Box>
      { comments.allComments.length !== 0 ? renderComments(comments.allComments) : null }
    </Box>
  );
};
