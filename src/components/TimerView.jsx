import React, { useState, useEffect } from 'react';
import '../App.css';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(1),
  },
}));

const TimerView = () => {
  const [startTime, setStartTime] = useState(0);
  //後々inputから取得できるようにする
  const[time, setTime] = useState(25);
  const[timeLeft, setTimeLeft] = useState({restMin: String(time).padStart(2, '0'),
  restSec:'00'});
  const[isRunning, setIsRunning] = useState(false);
  const[elapsedTime, setElapsedTime] = useState(0);
  const[timerState, setTimerState] = useState('work');

  const classes = useStyles();

  const handleStartTime = () => {
    setStartTime(Date.now());
    setIsRunning(!isRunning);
  } 

  const handleStopTime = () => {
    setIsRunning(!isRunning);
    setElapsedTime(e => e + Date.now() - startTime);
  }

  const handleResetTime = () => {
    //initialStateを作成すれば簡潔に書けそう
    setTimeLeft({restMin: String(time).padStart(2, '0'),
    restSec:'00'});
    setElapsedTime(0);
  }

  const calculateRemainigTime = () => {
    let timeLeft = {};
    const remainigTime = (time * 60 *1000) - elapsedTime - (Date.now() - startTime); 
    if( remainigTime > 0 ) {
      timeLeft = {
        restMin: String(Math.floor((remainigTime / 1000 / 60) % 60)).padStart(2, '0'),
        restSec: String(Math.floor((remainigTime / 1000) % 60)).padStart(2, '0')
      };
    }
    return timeLeft;
  }

  //1つのuseEffectでcycleをif分岐で構築
  //ただ、ネストが深くなるので恐らく最終的にはuseReducerか？

  //
  useEffect(() => {
    let timeoutId = null;
    if(isRunning) {
      timeoutId = setTimeout(() => {
        setTimeLeft(calculateRemainigTime());
      }, 1000);
    } else if (!isRunning) {
      clearTimeout(timeoutId)
    }
    return () => clearTimeout(timeoutId);
  },[isRunning, timeLeft]);


  console.log(timeLeft);
  console.log(isRunning);

  return (
    <>
      <div className="timerView_main">{timeLeft.restMin}:{timeLeft.restSec}</div>
      <div className={classes.root}>
       <Button variant="contained" onClick={handleStartTime}>START</Button>
       <Button variant="contained" onClick={handleStopTime}>STOP</Button>
       <Button variant="contained" onClick={handleResetTime}>RESET</Button>
      </div>
    </>
  );
}

export default TimerView;