//componentsは見た目を担当
import React from 'react';
import {secToMMSS} from '../lib/time';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
  },
}));


const CowntdownComponent = ({leftSec, handleStart, handleStop, handleReset,active}) => {
  const classes = useStyles();
  return (
    <>
      <div className="timerView_main">{secToMMSS(leftSec)}</div>
      <div className={classes.root}>
       <Button variant="contained" onClick={handleStart} disabled={active}>START</Button>
       <Button variant="contained" onClick={handleStop} disabled={!active}>STOP</Button>
       <Button variant="contained" onClick={handleReset} disabled={!active}>RESET</Button>
      </div>
    </>
  );
}

export default CowntdownComponent