import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Material UI
import {
  Button, ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary, Divider, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Local imports
import { useStyles } from './style';
// import { UPDATE_PASSWORD, UPDATE_CUSTOMER } from '../../../axios/endpoints';
import {
  dispatchGetWishlist, dispatchDeleteWishlist,
  dispatchAddProductAndCreateWishlist, dispatchCreateWishlist,
} from '../../../store/wishlist/actions';

// const [stateWishList, setStateWishList] = useState({
//   customerId: '', wishlist: [],
// });

const Wishlist = (props) => {
  const {
    getWishlist, deleteWishlist, createWishlist, addProductToWishlist,
    wishlist,
  } = props;

  const classes = useStyles();

  const [expanded, setExpanded] = useState('panel3');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  useEffect(() => {
    // getWishlist();
    console.log('%c⧭ props', 'color: #12ce7f', props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.wishlist]);

  // Wishlist handlers
  const getWishlistInfo = () => {
    if (wishlist.data) {
      getWishlist();
      console.log('%c⧭ wishlist.data.products', 'color: #0ba062', props.wishlist.data.products);
    } else {
      console.log('%c⧭ У вас нет созданного Wishlist', 'color: #d30909');
    }
  };
  const deleteWishlistInfo = () => {
    deleteWishlist();
    console.log('%c⧭ wishlist.result', 'color: #0a77b6', props.wishlist.result);
  };

  const createWishlistInfo = () => {
    const newWishlist = {
      products: ["5db6fbeebfb42a414c724e7a", "5db6fc32bfb42a414c724e7b"],
    };
    createWishlist(newWishlist);
  };

  const link = '/wishlist/5db6fbeebfb42a414c724e7a';
  const addProductToWishlistInfo = () => {
    addProductToWishlist(link);
  };

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
            My Favorite Items
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          className={classes.expansionPanelDetails}
        >
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis facere nulla sequi quae tempore quisquam sapiente. A incidunt debitis voluptatem.
          </Typography>
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
            onClick={createWishlistInfo}

          >
            Create wishlist
          </Button>
          <Button
            size="medium"
            color="primary"
            onClick={addProductToWishlistInfo}

          >
            Add Product To Wishlist
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
    createWishlist: (data) => dispatch(dispatchCreateWishlist(data)),
    addProductToWishlist: (url) => dispatch(dispatchAddProductAndCreateWishlist(url)),
  };
}

const WishlistComponent = connect(putStateToProps, putActionsToProps)(Wishlist);
export { WishlistComponent as Wishlist };
