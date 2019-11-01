import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Material UI import
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Tungsten from '../../fonts/Tungsten-Book.woff';

// Slick slider import
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import './MainCarousel.css';
//
import Preloader from '../Preloader/Preloader';

const tungsten = {
  fontFamily: 'Tungsten Book',
  fontStyle: 'normal',
  src: `
    local('Tungsten Book'),
    url(${Tungsten}) format('woff')
  `,
};

const useStyles = makeStyles((theme) => ({
  showItemBtn: {
    display: 'block',
    marginTop: '30px',
    alignItems: 'center',
    padding: '15px 20px',
    [theme.breakpoints.down(480)]: {
      padding: '10px 15px',
    },
    '&>span': {
      textTransform: 'uppercase',
      width: 'auto',
    },
  },
}));

export const MainCarousel = () => {
  const classes = useStyles();

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  const [carousel, setCarousel] = useState([]);
  const [loading, setLoading] = useState(true);

  let mainCarouselInfo;

  useEffect(() => {
    axios.get('/slides')
      .then((slides) => {
        setCarousel(slides.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (carousel && !loading) {
    mainCarouselInfo = carousel.map((item) => (
      <div
        className="slide-container"
        key={item.customId}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="slick-image"
        />
        <div className="slide-information">
          <Typography
            variant="h2"
            className="slick-description"
            /* align="center" */
            style={tungsten}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body1"
            className="slick-information__explanation"
          >
            {item.description}
          </Typography>
          <Button
            className={classes.showItemBtn}
          >
            <span>SHOP {item.htmlContent} &rarr;</span>
          </Button>
        </div>
      </div>
    ));
  } else if (loading) {
    return <Preloader />;
  }

  return (
    <div className="main-Carousel">
      <Slider {...settings}>
        {mainCarouselInfo}
      </Slider>
    </div>
  );
};
