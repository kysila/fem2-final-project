import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Material UI import
import {
  Button, Container, Grid, Typography,
} from '@material-ui/core';
// Slick slider import
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import './MainCarousel.css';
// Fonts
import Tungsten from '../../fonts/Tungsten-Book.woff';
// Internal Components
import { useStyles } from './style';
import Preloader from '../Preloader/Preloader';

const tungsten = {
  fontFamily: 'Tungsten Book',
  fontStyle: 'normal',
  color: '#6a86e8',
  src: `
    local('Tungsten Book'),
    url(${Tungsten}) format('woff')
  `,
};

export const MainCarousel = () => {
  const classes = useStyles();

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
        <Container
          maxWidth="md"
          className={classes.containerMD}
        >
          <Grid
            container
            className={classes.flexContainer}
          >
            <Grid
              item
              sm={4}
              xs={12}
              className={classes.slickDescription}
            >
              <Typography
                variant="h2"
                // eslint-disable-next-line no-sequences
                style={tungsten}
                className={classes.slickDescriptionText}
              >
                {item.title}
              </Typography>
            </Grid>
            <Grid
              item
              sm={4}
              xs={12}
              className={classes.slickExplanation}
            >
              <Typography
                variant="body1"
                className={classes.slickExplanationText}
              >
                {item.description}
              </Typography>
              <Link to={`/products/filter?perPage=8&startPage=1&categories=${item.category.id}`}
              >
                <Button className={classes.showItemBtn}>
                  <span>SHOP {item.htmlContent} &rarr;</span>
                </Button>
              </Link>
            </Grid>

            <Grid
              item
              sm={12}
              xs={12}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
              />
            </Grid>
          </Grid>
        </Container >
      </div >
    ));
  } else {
    return <Preloader />;
  }

  return (
    <section className="main-Carousel">
      <Slider {...settings}>
        {mainCarouselInfo}
      </Slider>
    </section>
  );
};
