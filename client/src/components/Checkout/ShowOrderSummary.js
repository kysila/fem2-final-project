import {
  Button, Divider, Grid, Typography, useMediaQuery, withTheme,
} from '@material-ui/core';
import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Transition } from 'react-transition-group';
import { useStyles } from './styles';
import { CheckoutOrderProduct } from './CheckoutOrderProduct';
import { InputField } from '../../commons/InputField/InputField';
import MuseoSans from '../../fonts/MuseoSans-500.woff';

const museo = {
  fontFamily: 'Museo Sans 500',
  fontStyle: 'normal',
  src: `
    local('Museo Sans 500'),
    url(${MuseoSans}) format('woff')
  `,
};

export const ShowOrderSummary = withTheme((props) => {
  const mobile = useMediaQuery(props.theme.breakpoints.down(768));

  const classes = useStyles();
  const [expanded, setExpand] = useState(false);

  const ExpandIcon = expanded ? ExpandLessIcon : ExpandMoreIcon;

  const defaultStyle = {
    flexWrap: 'nowrap',
    transition: 'all 1000ms',
    maxHeight: '0',
    opacity: '0',
  };

  const transitionStyles = {
    entering: { maxHeight: '10000px', opacity: '1' },
    entered: { maxHeight: '10000px', opacity: '1' },
    exiting: { maxHeight: '0', opacity: '0' },
    exited: { maxHeight: '0', opacity: '0' },
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ margin: '0 0 40px 0' }}
    >
      <Divider style={{ backgroundColor: '#AAAAAA', width: '100%' }} />
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        style={{ padding: '20px 0', cursor: 'pointer', userSelect: 'none' }}
        onClick={() => setExpand(!expanded)}
      >
        <Typography
          style={{
            color: '#888888',
            fontSize: '18px',
            zIndex: 10,
            ...museo,
          }}
        >
          Show order summary
          <span style={{ lineHeight: '1px', verticalAlign: 'middle' }}><ExpandIcon /></span>
        </Typography>
        {
          !expanded ? (
            <Typography>
              $
              {
                props.products
                  .reduce((total, { price }) => (Number(total) + Number(price)).toFixed(2), 0)
              }
            </Typography>
          ) : null
        }
      </Grid>
      <Transition
        in={expanded}
        timeout={{
          enter: 1000,
          exit: 0,
        }}
      >
        {
          /* https://reactcommunity.org/react-transition-group/transition */
          (state) => (
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              { props.products.map((item) => <CheckoutOrderProduct {...item} />) }
              <Divider style={{ width: '100%', backgroundColor: '#EAEAEA' }} />
              <Grid
                container
                direction={mobile ? 'column' : 'row'}
                justify="center"
                alignItems={mobile ? null : 'flex-start'}
                spacing={mobile ? 0 : 5}
              >
                <Grid
                  item
                  lg={mobile ? 12 : 7}
                  md={mobile ? 12 : 7}
                  xs={mobile ? 12 : 7}
                >
                  <InputField
                    id="discount"
                    type="text"
                    label="Discount code"
                    labelWidth={110}
                    {...props.DiscountProps}
                    FormControlProps={{
                      style: { marginTop: '20px' },
                      className: classes.dividerFormControl,
                    }}
                    LabelProps={{
                      classes: {
                        root: classes.discountLabel,
                      },
                    }}
                    InputProps={{
                      classes: {
                        input: classes.discountInput,
                        adornedEnd: classes.discountAdornedEnd,
                      },
                      endAdornment: (
                        <Button
                          style={museo}
                          className={classes.discountButton}
                          variant="text"
                        >
                          Apply
                        </Button>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item
                  lg={mobile ? 12 : 5}
                  md={mobile ? 12 : 5}
                  xs={mobile ? 12 : 5}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="flex-start"
                    justify="center"
                    style={{
                      marginTop: '20px',
                      marginBottom: '12px',
                    }}
                  >
                    { mobile ? <Divider style={{ width: '100%', backgroundColor: '#EAEAEA', margin: '15px 0' }} /> : null }
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justify="space-between"
                    >
                      <Typography className={classes.afterDiscount} style={museo}>
                        Subtotal
                      </Typography>
                      <Typography className={classes.afterDiscount} style={museo}>
                        $
                        {
                          props.products
                            .reduce((total, { price }) => (Number(total) + Number(price))
                              .toFixed(2), 0)
                        }
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justify="space-between"
                    >
                      <Typography className={classes.afterDiscount} style={museo}>
                        Shipping
                      </Typography>
                      <Typography className={classes.afterDiscount} style={museo}>
                        Calculated at next step
                      </Typography>
                    </Grid>
                    { mobile ? <Divider style={{ width: '100%', backgroundColor: '#EAEAEA', margin: '15px 0' }} /> : null }
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                    style={{
                      marginBottom: '20px',
                    }}
                  >
                    <Typography className={classes.total} style={museo}>
                      Total
                    </Typography>
                    <Typography className={classes.total} style={museo}>
                      $
                      {
                        props.products
                          .reduce((total, { price }) => (Number(total) + Number(price))
                            .toFixed(2), 0)
                      }
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )
        }
      </Transition>
      <Divider style={{ backgroundColor: '#AAAAAA', width: '100%' }} />
    </Grid>
  );
});
