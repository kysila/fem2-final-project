import React, { useState } from 'react';

import axios from 'axios';

import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './style';

export const ProductCustomerReviews = ({user}) => {

  const [value, setValue] = useState(0);

  const classes = useStyles();

  return (
    <Box className={classes.reviewsMainBox}>
      <Typography className={classes.reviewsHeader}>CUSTOMER REVIEWS (4)</Typography>
      <Box
        className={classes.userReview}
        style={
          user ? {display: 'block'} : {display: 'none'}
        }
      >
        <TextField
          multiline
          rows="4"
          placeholder="Your review"
          className={classes.userComment}
          margin="normal"
          variant="outlined"
        />
        <Rating
          name="simple-controlled"
          value={value}
          size="large"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Button
          className={classes.addReview}
          onClick={() => {
            console.log(user, value);
          }}
        >
          Add a review
        </Button>
      </Box>
      <Box className={classes.commentItem}>
        <div className={classes.commentTitle}>
          <div className={classes.customerName}>
            Nicola Cherezzabornoguzaderischenko
          </div>
          <div className={classes.commentDate}>
            11/28/2019
          </div>
        </div>
        <Rating
          name="read-only"
          value={4}
          precision={0.5}
          readOnly
          size="small"
        />
        <div className={classes.commentDesc}>
          I purchased this bike directly from the vendor, and it is an amazing bike! I've had it for about 6 weeks and have had a blast with it! I'm in my 60's and am a big guy (6'2; 240) and this bike is perfect for me. Very solid and well built, it supports my body without any problem.
        </div>
      </Box>
      <Box className={classes.commentItem}>
        <div className={classes.commentTitle}>
          <div className={classes.customerName}>
            Nicola Cherezzabornoguzaderischenko
          </div>
          <div className={classes.commentDate}>
            11/28/2019
          </div>
        </div>
        <Rating
          name="read-only"
          value={4}
          precision={0.5}
          readOnly
          size="small"
        />
        <div className={classes.commentDesc}>
          I purchased this bike directly from the vendor, and it is an amazing bike! I've had it for about 6 weeks and have had a blast with it! I'm in my 60's and am a big guy (6'2; 240) and this bike is perfect for me. Very solid and well built, it supports my body without any problem.
        </div>
      </Box>
      <Box className={classes.commentItem}>
        <div className={classes.commentTitle}>
          <div className={classes.customerName}>
            Nicola Cherezzabornoguzaderischenko
          </div>
          <div className={classes.commentDate}>
            11/28/2019
          </div>
        </div>
        <Rating
          name="read-only"
          value={4}
          precision={0.5}
          readOnly
          size="small"
        />
        <div className={classes.commentDesc}>
          I purchased this bike directly from the vendor, and it is an amazing bike! I've had it for about 6 weeks and have had a blast with it! I'm in my 60's and am a big guy (6'2; 240) and this bike is perfect for me. Very solid and well built, it supports my body without any problem.
        </div>
      </Box>
    </Box>
  );
};
