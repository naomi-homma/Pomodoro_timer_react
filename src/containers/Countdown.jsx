//containersはロジックを担当
import React, { useState, useEffect } from 'react';
import '../App.css';
import CountdownComponent from '../components/Countdown';

const useCountdown = () => {
  const[active, setActive] = useState(false);
  const[leftSec, setLeftSec] = useState();
  let[timerObj, setTimerObj] = useState('');
  const[elapsedTime, setElapsedTime] = useState(0);
  const[startTime, setStartTime] = useState(0);


  const countDown = (time) => {
    let leftSec;
    leftSec = (time * 60 *1000) - elapsedTime - (Date.now() - startTime);
  };

  const handleStart = (time) => {
    if( !active ) {
      clearTimeout(timerObj);
      countDown(time);
    }
  }

  const handleStop = () => {
    setActive(false);
    clearTimeout(timerObj);
  }

  const handleReset = () => {
    setLeftSec(25);
  }

  useEffect(() => {
    setTimerObj(setTimeout(() => {
      setLeftSec(countDown());
      }, 100)
    );
    return () => clearTimeout(timerObj);
  },[]);

  //デバッグ用
  // console.log(remainigTime);
  // console.log(isRunning);
  // console.log(secLeft);
  // console.log(elapsedTime);

  return (
    <CountdownComponent
      leftSec={leftSec}
      hancleStart={handleStart}
      handleStop={handleStop}
      handleReset={handleReset}
    />
  );
}

export default useCountdown;