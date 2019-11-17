import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

// export function workWithWishlist(props) {

// const [stateWishList, setStateWishList] = useState({
//   customerId: '', wishlist: [],
// });
// const newWishlist = {
//   products: ["5db6fbeebfb42a414c724e7a", "5db6fc32bfb42a414c724e7b"]
// };

// useEffect(() => {
//   axios
//     .post('/wishlist', newWishlist)
//     .then((newWishlist) => {
//       console.log('%c⧭ newWishlist', 'color: #f2ceb6', newWishlist);
//       /* Do something with newWishlist */
//     })
//     .catch((err) => {
//       console.log('%c⧭ err', 'color: #00e600', err.response.data);
//       /* Do something with error, e.g. show error to user */
//     });
// }, [stateWishList]);
// }

const Wishlist = (props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState('panel3');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const {
    getWishlist, deleteWishlist, createWishlist, addProductToWishlist, wishlist,
  } = props;

  useEffect(() => {
    getWishlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  // Wishlist handlers
  const getWishlistInfo = () => {
    if (wishlist.data) {
      console.log('%c⧭ wishlist.data.products', 'color: #0ba062', wishlist.data.products);
    } else {
      console.log('%c⧭ У вас нет созданного Wishlist', 'color: #d30909');
    }
  };
  const deleteWishlistInfo = () => {
    deleteWishlist();
    console.log('%c⧭ wishlist.result', 'color: #0a77b6', wishlist.result);
  };

  const createWishlistInfo = () => {
    const newWishlist = {
      products: ["5db6fbeebfb42a414c724e7a", "5db6fc32bfb42a414c724e7b"],
    };
    createWishlist(newWishlist);
  };

  const addProductToWishlistInfo = () => {
    addProductToWishlist();
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
    addProductToWishlist: () => dispatch(dispatchAddProductAndCreateWishlist()),
  };
}

const WishlistComponent = connect(putStateToProps, putActionsToProps)(Wishlist);
export { WishlistComponent as Wishlist };
