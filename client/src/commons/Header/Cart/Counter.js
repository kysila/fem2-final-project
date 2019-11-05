import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { useStyles } from './style';

const Counter = (props) => {
  const classes = useStyles();
  return (
    <ButtonGroup classesName={classes.button_group} variant="contained" size="small" >
      <Button> - </Button>
      <Button variant="text">
        <Input defaultValue={props.count} classes={{ underline: classes.underline, root: classes.input, input: classes.input }} />
      </Button>
      <Button> + </Button>
    </ButtonGroup>
  );
};


export default Counter;
