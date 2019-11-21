import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Box from '@material-ui/core/Box';

import { useStyles } from './style';


export const ProductGallery = ({ image }) => {
  const [state, setState] = useState({
    img: [],
  });
  const [mainImage, setMainImage] = useState('');
  const classes = useStyles();

  const renderGallery = (arr) => arr.map((item, i) => (
    <img
      className={classes.img}
      src={item}
      alt={i}
      key={i}
      onClick={(e) => {
      	e.preventDefault();
      	selectedImage(i, e.target);
      }}
    />
  ));

  const selectedImage = (index, el) => {
    el.style.opacity = 1;

    let next = el.nextSibling;
    let prev = el.previousSibling;

    while (next) {
      next.style.opacity = '.5';
      next = next.nextSibling;
    }
    while (prev) {
      prev.style.opacity = '.5';
      prev = prev.previousSibling;
    }
    setMainImage(state.img[index]);
  };

  useEffect(() => {
    if (image && image.length !== 0) {
      setState(() => ({
        img: image,
      }));
      setMainImage(image[0]);
    }
  }, [image]);

  return (
    <Box className={classes.productGallery}>
      <img className={classes.mainImage} src={mainImage || state.img[0]} alt="" />
      <div className={classes.allImage}>
        {renderGallery(state.img)}
      </div>
    </Box>
  );
};
