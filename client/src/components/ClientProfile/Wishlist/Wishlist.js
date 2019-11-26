import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Material UI
import {
  Button, Checkbox, ExpansionPanel, ExpansionPanelActions,
  ExpansionPanelDetails, ExpansionPanelSummary,
  Grid, Divider, Typography, FormControlLabel,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Local imports
import { useStyles } from './style';
import ProductCard from '../../ProductCard/ProductCard';
import Preloader from '../../Preloader/Preloader';
import {
  getWishlistFromDB, addProductAndCreateWishlistInDB,
  deleteProductFromWishlistDB, deleteWishlistFromDB,
} from '../../../store/wishlist/actions';

const Wishlist = (props) => {
  const classes = useStyles();
  const {
    getWishlist, wishlist, addProductToWishlist,
    wishlistProducts, user, deleteProductFromWishlist, deleteWishlist,
  } = props;
  // deleteWishlist

  const [expanded, setExpanded] = useState('');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const deleteWishlistInfo = () => {
    deleteWishlist();
  };

  const deleteOneWishlistItem = (event) => {
    deleteProductFromWishlist(event.target.name);
  };

  useEffect(() => {
    if (user) {
      getWishlist();
    }
  }, [user]);


  useEffect(() => {
    if (wishlist) {
      setList(wishlistProducts);
    }
    setLoading(false);
  }, [wishlist]);
  let wishlistAllProducts;
  if (list && !loading) {
    wishlistAllProducts = list.map((el, i) => (

      <Grid
        item
        md={4}
        sm={6}
        xs={12}
        className={classes.formsInfo}
        key={el.id}
      >
        <FormControlLabel
          control={(
            <Checkbox
              onChange={deleteOneWishlistItem}
              indeterminate
              name={el.id}
            />
          )}
          label="Delete from wishlist"
        />
        <ProductCard
          name={el.name}
          obj={el}
          itemImg={el.itemImg}
          price={el.price}
          url={el.url}
          rating={el.rating}
          itemNo={el.itemNo}
          id={el.id}
          wishlist={wishlist}
          addProductToWishlist={addProductToWishlist}
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
            wishlist.length ? (
              <Grid
                className={classes.root}
                container
                spacing={2}
              >
                {wishlistAllProducts}
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
    wishlist: state.wishlist.arr,
    wishlistProducts: state.wishlist.products,
  };
}

const WishlistComponent = connect(putStateToProps, {
  addProductToWishlist: addProductAndCreateWishlistInDB,
  getWishlist: getWishlistFromDB,
  deleteProductFromWishlist: deleteProductFromWishlistDB,
  deleteWishlist: deleteWishlistFromDB,
})(Wishlist);
export { WishlistComponent as Wishlist };
