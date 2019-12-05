import React from 'react';
import {
  Grid, Typography, useMediaQuery, withTheme,
} from '@material-ui/core';
import MuseoSans from '../../fonts/MuseoSans-500.woff';

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

export const CheckoutOrderProduct = withTheme((props) => {
  const tablet = useMediaQuery(props.theme.breakpoints.down(1024));
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-between"
      style={{ marginBottom: '20px' }}
    >
      <Grid
        item
        lg={tablet && !mobile ? 1 : 3}
        md={tablet && !mobile ? 1 : 3}
        xs={tablet && !mobile ? 1 : 3}
      >
        <img width={64} height={64} style={{ marginRight: '10px' }} src={props.src} alt={props.title} />
      </Grid>
      <Grid
        item
        lg={tablet && !mobile ? 11 : 9}
        md={tablet && !mobile ? 11 : 9}
        xs={tablet && !mobile ? 11 : 9}
      >
        <Grid
          container
          direction={tablet && !mobile ? 'row' : 'column'}
          alignItems={tablet && !mobile ? 'flex-start' : null}
          justify="space-between"
        >
          <Grid
            item
            lg={tablet && !mobile ? 7 : 12}
            md={tablet && !mobile ? 7 : 12}
            xs={tablet && !mobile ? 7 : 12}
          >
            <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
            >
              <Typography style={{ fontSize: '12px', lineHeight: '20px', ...museo }}>
                {props.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            lg={tablet && !mobile ? 5 : 12}
            md={tablet && !mobile ? 5 : 12}
            xs={tablet && !mobile ? 5 : 12}
          >
            <Grid
              container
              alignItems="center"
              justify="space-between"
            >
              <Typography style={{
                color: '#888888', fontSize: '12px', lineHeight: '20px', ...museo,
              }}
              >
                { `Quantity: ${props.quantity}` }
              </Typography>
              <Typography style={{ fontSize: '12px', lineHeight: '20px', ...museo }}>
                $
                {props.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});
