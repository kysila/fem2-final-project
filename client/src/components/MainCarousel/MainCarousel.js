import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Material UI import
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// Slick slider import
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import './MainCarousel.css';
//
import Preloader from '../Preloader/Preloader';

const useStyles = makeStyles((theme) => ({
  blueBG: {
    background:
      'linear-gradient(180deg, rgba(102,134,255, .1) 0%, rgba(143, 141, 226, .1) 100%)',
    paddingTop: '51px',
    paddingBottom: '49px',
  },
  showItemBtn: {
    display: 'block',
    marginTop: '30px',
    alignItems: 'center',
    padding: '15px 20px',
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
          <Typography component="h2" className="slick-description">
            {item.title}
          </Typography>
          <Typography
            component="body1"
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
