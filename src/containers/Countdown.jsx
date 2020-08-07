//containersはロジックを担当
import React, { useState, useEffect } from 'react';
import '../App.css';
import CountdownComponent from '../components/Countdown';

const useCountdown = (limit) => {
  const[workTime, setWorkTime] = useState(0.2);
  const[breakTime, setBreakTime] = useState(0.3);
  const[longBreakTime, setLongBreakTime] = useState(20);
  const[timerState, setTimerState] = useState('work');
  const[cycleCount, setCycleCount] = useState(1);
  const[active, setActive] = useState(false);
  let[leftSec, setLeftSec] = useState(workTime*60);
  let[timerObj, setTimerObj] = useState('');

  const handleSwitch = () => {
    //3回目のworkが終了したらlongbreakに入る
    //longbreakまでの作業時間
    if( timerState === 'work' && cycleCount === 3 ) {
      setLeftSec(longBreakTime*60);
      setTimerState('longBreak');
      setCycleCount(1);
    } else if (timerState === 'work') {
      setLeftSec(breakTime*60);
      setTimerState('break');
      console.log('handleSwitchのwork');
    } else if ( timerState === 'break' ) {
      setLeftSec(workTime*60);
      setTimerState('work');
      setCycleCount(c => c + 1);
      console.log(cycleCount); 
    } 
  }

  const handleStart = () => {
    console.log('start click!')
    setActive(true);
  };

  const handleStop = () => {
    setActive(false);
    clearTimeout(timerObj);
    console.log('stop click')
  };

  const handleReset = () => {
    switch (timerState) {
      case "work": setLeftSec(workTime);
        break;
      case "break": setLeftSec(breakTime);
        break;
      case "longBreak": setLeftSec(longBreakTime);
        break;
    }
  };

  useEffect(() => {
    if( active && leftSec > 0 ) {
      setTimerObj(
        setTimeout(() => {
          setLeftSec(prev => prev - 1);
        }, 1000)
      )
    } else if ( active && leftSec <= 0 ) {
      clearTimeout(timerObj);
      console.log(leftSec);
      console.log(timerState);
      handleSwitch();
    } else {
      clearTimeout(timerObj);
    }
    return () => clearTimeout(timerObj);
  },[active, leftSec])

  return[[workTime, leftSec, active], [handleStart, handleStop, handleReset]];
}


const CountdownContainer = () => {
  const[[workTime, leftSec, active], [handleStart, handleStop, handleReset]] = useCountdown(25*60);
  return (
    <CountdownComponent
      leftSec={leftSec}
      active={active}
      handleStart={handleStart}
      handleStop={handleStop}
      handleReset={handleReset}
    />
  );
}

export default CountdownContainer;