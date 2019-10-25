import React, { Component } from 'react';

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MainCarousel.css';

const useStyles = makeStyles(theme => ({
  blueBG: {
    background: 'linear-gradient(180deg, rgba(102,134,255, .1) 0%, rgba(143, 141, 226, .1) 100%)',
    paddingTop: '51px',
    paddingBottom: '49px'

  },
  showItemBtn: {
    display: 'inline-flex',
    marginTop: '30px',
    alignItems: 'center',
    padding: '15px 20px',
    '&>span': {
      width: 'auto'
    }
  },
  text: {
    marginBottom: '24px',
  }
}));


function MainCarousel() {
  const classes = useStyles();

  const settings = {
    // adaptiveHeight: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  }
  return (
    <div className="main-Carousel" >
      <Slider {...settings}>
        <div className="slide-container">
          <img
            src="img/slides/01.jpeg"
            alt="First slide"
            className="slick-image"
          />
          <div className="slide-information">
            <Typography
              component="h2"
              className="slick-description">Show Summer Who’s Boss
            </Typography>
            <Typography
              component="body1"
              className="slick-information__explanation">
              Say hello to the UBCO FRX1 free ride bike. Built for extreme off-road riding, whether you’re shredding the trail, climbing uphill, or taking on the local tracks.
                </Typography>
            <Button className={classes.showItemBtn}>
              Shop Electric BIkes</Button>
          </div>
        </div>
        <div className="slide-container">
          <img
            src="img/slides/02.jpeg"
            alt="Second slide"
            className="slick-image"
          />
          <div className="slide-information">
            <p className="slick-description">Show Summer Who’s Boss2
            </p>
            <p className="slick-information__explanation">Say hello to the UBCO FRX1 free ride bike. Built for extreme off-road riding, whether you’re shredding the trail, climbing uphill, or taking on the local tracks.</p>
          </div>
        </div>
      </Slider>
    </div >

  );
}

export default MainCarousel;