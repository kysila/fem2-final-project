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
    // disableRipple: 'true',
    // disableFocusRipple: 'true',
    maxWidth: '40px',
    paddingLeft: '35%',
    fontSize: '13px',
  },

}));
const Counter = (props) => {
  const classes = useStyles();
  return (
    <ButtonGroup variant="contained" size="small" >
      <Button> - </Button>
      <Input defaultValue="1" classes={{ underline: classes.underline, root: classes.input, input: classes.input }} />
      <Button> + </Button>
    </ButtonGroup>
  );
};


export default Counter;
