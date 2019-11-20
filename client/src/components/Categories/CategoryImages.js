import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Preloader from '../Preloader/Preloader';
import { useStyles } from './Style';
import { getCategories } from '../../store/categories/actions';

const CategoryImages = (props) => {
  const classes = useStyles();
  let categoryBlocks;
  // const [categoryLink, setCategoryLink] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.getCategories();
  }, []);

  if (props.categories && !props.isCatalogFetching) {
    categoryBlocks = props.categories.map((tile) => (
      <GridListTile key={tile.id} cols={+tile.cols || 1}>
        <Link
          to={`/products/filter?perPage=8&startPage=1&categories=${tile.id}`}
          className={classes.hover}
        >
          <div className={classes.img} style={{ background: `rgb(0, 130, 67) url('${tile.imgUrl}')` }} />
          <GridListTileBar
            className={classes.titleBar}
            title={tile.name.toUpperCase()}
            actionIcon={(
              <div className={classes.arrowBox}>
                <ArrowForwardIcon className={classes.icon} />
              </div>
            )}
          />
        </Link>
      </GridListTile>
    ));
  } else {
    return <Preloader />;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={266} className={classes.gridList} cols={3}>
        {categoryBlocks}
      </GridList>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ...state,
  isCatalogFetching: state.categoryReducer.isCatalogFetching,
  categories: state.categoryReducer.categories,
});

export default connect(mapStateToProps, { getCategories })(CategoryImages);
