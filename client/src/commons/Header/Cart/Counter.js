import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  underline: {
    '&::after': {
      content: 'none',
    },
    '&::before': {
      content: 'none',
    },
  },
  input: {
    maxWidth: '40px',
    paddingLeft: '25%',
    fontSize: '13px',
  },
}));

const Counter = (props) => {
  const classes = useStyles();
  return (
    <ButtonGroup variant="contained" size="small">
      <Button> - </Button>
      <Button variant="text">
          {/* eslint-disable-next-line max-len */}
        <Input defaultValue={props.count} classes={{ underline: classes.underline, root: classes.input, input: classes.input }} />
      </Button>
      <Button> + </Button>
    </ButtonGroup>
  );
};


export default Counter;
