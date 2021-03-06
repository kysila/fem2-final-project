import React from 'react';
import {
  Typography, Grid, Box, Container, useMediaQuery, withTheme,
} from '@material-ui/core';
import { Map } from '../../Map/Map';
import Tungsten from '../../../fonts/Tungsten-Book.woff';
import MuseoSans from '../../../fonts/MuseoSans-500.woff';
import mobileSvg from '../../../img/contact/mobile.svg';
import mailSvg from '../../../img/contact/mail.svg';
import markerSvg from '../../../img/contact/marker.svg';

import { useStyles } from './style';

const tungsten = {
  fontFamily: 'Tungsten Book',
  fontStyle: 'normal',
  src: `
    local('Tungsten Book'),
    url(${Tungsten}) format('woff')
  `,
};

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

const ContactItem = (props = {
  key: 'xJNdndwqiBIqwd', icon: 'star', title: '', list: [],
}) => (
  <Box
    className={props.classes.item}
  >
    <Box>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Box><img src={props.icon} alt="" width="24" height="24" /></Box>
        <Typography style={museo} className={props.classes.item__title}>
          {props.title}
        </Typography>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        {
          props.list.map((text, idx) => (
            <Typography key={idx} style={museo} className={props.classes.item__text}>
              {text}
            </Typography>
          ))
        }
      </Grid>
    </Box>
  </Box>
);

const Contacts = withTheme((props) => {
  const classes = useStyles();
  const matchesMobile = useMediaQuery(props.theme.breakpoints.down(960));

  const contacts = [{
    key: 'qweqwe1',
    icon: mobileSvg,
    title: 'Call or text us toll-free',
    list: ['1-855-324-5387', '1-855-324-5377', '1-855-324-5367'],
  }, {
    key: 'qweqwe2',
    icon: mailSvg,
    title: 'Write to our Customer Support',
    list: ['support@electra.com'],
  }, {
    key: 'qweqwe3',
    icon: markerSvg,
    title: 'Visit our Showroom',
    list: ['4804 Chicago Ave, Minneapolis,', ' MN 55417, United States', <br />, 'We work 24/7, not including', ' National Hollidays'],
  }];
  return (
    <Container id="contact" className={classes.wrapper}>
      <Typography className={classes.title} style={tungsten} variant="h3" color="textPrimary" align="center">
        Contact
      </Typography>
      <Grid
        container
        className={classes.body}
        direction={matchesMobile ? 'column' : 'row'}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          lg={3}
          md={5}
          xs={12}
        >
          <Box>
            {contacts.map(
              ({ key, ...data }) => (<ContactItem key={key} classes={classes} {...data} />),
            )}
          </Box>
        </Grid>
        <Grid
          item
          lg={7}
          md={5}
          xs={12}
        >
          <Grid
            container
            justify="flex-end"
            alignItems="flex-end"
          >
            <Map className={classes.map} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
});

export {
  Contacts,
};
