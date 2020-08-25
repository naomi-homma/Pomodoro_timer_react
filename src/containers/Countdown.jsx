//containersはロジックを担当
import React, { useState, useEffect } from 'react';
import '../App.css';
import CountdownComponent from '../components/Countdown';

const CountdownContainer = (props) => {
  //各時間の値はAppで管理する
  const[timerState, setTimerState] = useState('work');
  const[active, setActive] = useState(false);
  let[leftSec, setLeftSec] = useState(props.workTime*60);
  let[leftCycleCount, setLeftCycleCount] = useState(props.cycleCount);
  let[timerObj, setTimerObj] = useState('');

  const handleSwitch = () => {
    //3回目のworkが終了したらlongbreakに入る
    //longbreakまでの作業時間
    if( timerState === 'work' && leftCycleCount === props.cycleCount ) {
      setLeftSec(props.longBreakTime*60);
      setTimerState('longBreak');
      setLeftCycleCount(1);
    } else if (timerState === 'work') {
      setLeftSec(props.breakTime*60);
      setTimerState('break');
      console.log('handleSwitchのwork');
    } else if ( timerState === 'break' ) {
      setLeftSec(props.workTime*60);
      setTimerState('work');
      setLeftCycleCount(c => c + 1);
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
      case "work": setLeftSec(props.workTime);
        break;
      case "break": setLeftSec(props.breakTime);
        break;
      case "longBreak": setLeftSec(props.longBreakTime);
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
      handleSwitch();
    } else {
      clearTimeout(timerObj);
    }
    return () => clearTimeout(timerObj);
  },[active, leftSec])

  useEffect(() => {
    setLeftSec(props.workTime*60);
  }, [props.workTime])

  return (
    <CountdownComponent
      workTime={props.workTime}
      leftSec={leftSec}
      active={active}
      handleStart={handleStart}
      handleStop={handleStop}
      handleReset={handleReset}
    />
  );
}

export default CountdownContainer;