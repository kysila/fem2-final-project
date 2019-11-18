import React from 'react';

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

function createData(name, calories, fat, carbs, protein) {
  return {
    name, calories, fat, carbs, protein,
  };
}

const rows = [
  createData('Price'),
  createData('Maximum speed'),
  createData('Distance'),
  createData('Charging time'),
  createData('Gingerbread'),
];

export const Compare = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell>
                <ProductForCompare />
              </TableCell>
              <TableCell>
                <ProductForCompare />
              </TableCell>
              <TableCell>
                <ProductForCompare />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <Footer />
    </div>
  );
};
