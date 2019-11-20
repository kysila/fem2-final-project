import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Material UI
import {
  Button, ExpansionPanel, ExpansionPanelActions,
  ExpansionPanelDetails, ExpansionPanelSummary,
  Grid, Divider, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Local imports
import { useStyles } from './style';
import ProductCard from '../../ProductCard/ProductCard';
import Preloader from '../../Preloader/Preloader';
import {
  dispatchGetWishlist, dispatchDeleteWishlist,
} from '../../../store/wishlist/actions';

const Wishlist = (props) => {
  const classes = useStyles();
  const {
    getWishlist, deleteWishlist, createWishlist, addProductToWishlist,
    wishlist,
  } = props;

  const [expanded, setExpanded] = useState('panel3');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const getWishlistInfo = () => {
    if (wishlist) {
      getWishlist();
      console.log('%c⧭ wishlist.data.products', 'color: #0ba062', props.wishlist.products);
    } else {
      console.log('%c⧭ У вас нет созданного Wishlist', 'color: #d30909');
    }
  };
  const deleteWishlistInfo = () => {
    deleteWishlist();
    console.log('%c⧭ wishlist.result', 'color: #0a77b6', props.wishlist.result);
  };

  useEffect(() => {
    if (wishlist) {
      if (wishlist && wishlist.products) {
        wishlist.uniqueProducts = wishlist.products.filter((thing, index,
          self) => index === self.findIndex((t) => (
            t.place === thing.place && t.name === thing.name
          )));
        setList(wishlist.uniqueProducts);
      }
    }
    setLoading(false);
  }, []);

  let wishlistProducts;
  if (list && !loading) {
    wishlistProducts = list.map((el, i) => (

      <Grid
        item
        md={4}
        sm={6}
        xs={12}
        className={classes.formsInfo}
        // eslint-disable-next-line no-underscore-dangle
        key={el._id}
      >
        <ProductCard
          name={el.name}
          itemImg={el.imageUrls[0]}
          price={el.currentPrice}
          obj={el}
          url={`products/${el.itemNo}`}
          rating={el.rating}
          itemNo={el.itemNo}
          // eslint-disable-next-line no-underscore-dangle
          id={el._id}
          distance={el.distance}
          maxSpeed={el.maxSpeed}
          chargingTime={el.chargingTime}
        />
      </Grid>

    ));
  } else if (loading) {
    return <Preloader />;
  }

  return (
    <React.Fragment>
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            className={classes.heading}
            style={{ color: '#6A86E8' }}
          >
            My Wishlist
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          className={classes.expansionPanelDetails}
        >
          {
            wishlist ? (
              <Grid
                className={classes.root}
                container
                spacing={2}
              >
                {wishlistProducts}
              </Grid>
            ) : (
                <Typography
                  variant="h5"
                  className={classes.formsInfo}
                >
                  You have an empty wishlist
              </Typography>
              )
          }
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button
            size="medium"
            color="primary"
            onClick={getWishlistInfo}

          >
            Show wishlist
          </Button>
          <Button
            size="medium"
            color="primary"
            onClick={deleteWishlistInfo}

          >
            Delete wishlist
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </React.Fragment>
  );
};

function putStateToProps(state) {
  return {
    wishlist: state.wishlist.wishlist,
  };
}

function putActionsToProps(dispatch) {
  return {
    getWishlist: () => dispatch(dispatchGetWishlist()),
    deleteWishlist: () => dispatch(dispatchDeleteWishlist()),
  };
}

const WishlistComponent = connect(putStateToProps, putActionsToProps)(Wishlist);
export { WishlistComponent as Wishlist };
