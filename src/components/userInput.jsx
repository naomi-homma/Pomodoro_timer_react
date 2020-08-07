//見た目担当
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



const UserInputComponent = ({handleInputWorkTime, inputWorkTime}) => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" onChange={handleInputWorkTime} value={inputWorkTime} label="作業時間" />
      <TextField id="standard-basic" label="小休憩時間" />
      <TextField id="standard-basic" label="長休憩時間" />
      <TextField id="standard-basic" label="長休憩までの作業回数" />
      
      <Button variant="contained">OK</Button>
    </form>
  );
};

export default UserInputComponent;