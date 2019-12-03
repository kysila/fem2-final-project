import React from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from './style';

import { Header } from '../../commons/Header/Header/Header';
import { Footer } from '../../commons/Footer/Footer/Footer';
import ProductForCompare from './ProductForCompare';

import compareReducer from '../../store/compare/compareReducer';
import {Container} from "@material-ui/core";

const mapStateToProps = (store) => ({
  products: store.compareReducer.products,
});

const Compare = ({
  name, itemImg, price, url, rating, key, itemNo, distance, maxSpeed, chargingTime, obj, ...props
}) => {
  const productsArray = props.products;
  const classes = useStyles();
  const headerRow = ['Price', 'Max speed', 'Distance', 'Charg time'];

  const PriceRow = () => {
    const priceRow = productsArray.map((row) => (
      <React.Fragment key={row.itemNo}>
        <TableCell align="center">{row.currentPrice || row.price}</TableCell>
      </React.Fragment>
    ));
    return (
      <React.Fragment>
        {priceRow}
      </React.Fragment>
    );
  };

  const MaxSpeedRow = () => {
    const speedRow = productsArray.map((row) => (
      <React.Fragment key={row.itemNo}>
        <TableCell align="center">{row.maxSpeed}</TableCell>
      </React.Fragment>
    ));
    return (
      <React.Fragment>
        {speedRow}
      </React.Fragment>
    );
  };

  const DistanceRow = () => {
    const distanceRow = productsArray.map((row) => (
      <React.Fragment key={row.itemNo}>
        <TableCell align="center">{row.distance}</TableCell>
      </React.Fragment>
    ));
    return (
      <React.Fragment>
        {distanceRow}
      </React.Fragment>
    );
  };

  const ChargingTimeRow = () => {
    const chTimeRow = productsArray.map((row) => (
      <React.Fragment key={row.itemNo}>
        <TableCell align="center">{row.chargingTime}</TableCell>
      </React.Fragment>
    ));
    return (
      <React.Fragment>
        {chTimeRow}
      </React.Fragment>
    );
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md" className={classes.container}>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.firstRow} />
              <ProductForCompare
                obj={obj}
                align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row" className={classes.headerRow}>
                {headerRow[0]}
              </TableCell>
              <PriceRow />
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" className={classes.headerRow}>
                {headerRow[1]}
              </TableCell>
              <MaxSpeedRow />
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" className={classes.headerRow}>
                {headerRow[2]}
              </TableCell>
              <DistanceRow />
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row" className={classes.headerRow}>
                {headerRow[3]}
              </TableCell>
              <ChargingTimeRow />
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      </Container>
      <Footer />
    </div>
  );
};
export default connect(mapStateToProps, { compareReducer })(Compare);
