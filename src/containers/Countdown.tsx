//containersはロジックを担当
import React, { useState, useEffect } from 'react';
import '../App.css';
import CountdownComponent from '../components/Countdown';

type Props = {
  workTime: number,
  breakTime: number,
  longBreakTime: number,
  cycleCount: number,
}

type ButtonStateType = {
  start: boolean,
  stop: boolean,
  reset: boolean
}

const CountdownContainer = (props: Props) => {
  const[timerState, setTimerState] = useState<string>('work');
  const[running, setRunning] = useState<boolean>(false);
  const[buttonState, setButtonState] = useState<ButtonStateType>({start: false, stop: true, reset: true})
  let[leftSec, setLeftSec] = useState<number>(props.workTime*60);
  let[worksCount, setWorksCount] = useState<number>(1);
  let[timerObj, setTimerObj] = useState<number>();

  // 効果音再生
  const audio = new Audio();

  const handleSwitch = () => {
    if( timerState === 'work' && worksCount === props.cycleCount ) {
      setLeftSec(props.longBreakTime*60);
      setTimerState('longBreak');
    } else if (timerState === 'work') {
      setLeftSec(props.breakTime*60);
      setTimerState('break');
      audio.src = "../asse";
      const playPromise = audio.play();
        if(playPromise !== undefined) {
          playPromise.then(_ => {
          })
          .catch(error => {
            console.log(error);
          });
        }
    } else if ( timerState === 'break' ) {
      setLeftSec(props.workTime*60);
      setTimerState('work');
      setWorksCount(c => c + 1);
    } else if ( timerState === 'longBreak' ) {
      setLeftSec(props.workTime*60);
      setTimerState('work');
      setWorksCount(1);
    } 
  }

  const handleStart = () => {
    setRunning(true);
    setButtonState({start: true, stop: false, reset: true});
  };

  const handleStop = () => {
    setRunning(false);
    setButtonState({start: false, stop: true, reset: false});
  };

  const handleReset = () => {
    setButtonState({start: false, stop: true, reset: true});
    switch (timerState) {
      case "work": setLeftSec(props.workTime*60);
        break;
      case "break": setLeftSec(props.breakTime*60);
        break;
      case "longBreak": setLeftSec(props.longBreakTime*60);
        break;
    }
  };

  useEffect(() => {
    if( running && leftSec > 0 ) {
      setTimerObj(
        //window:明示的にブラウザのsetTimeout()を使うことを指示する
        window.setTimeout(() => {
          setLeftSec(prev => prev - 1);
        }, 1000)
      )
    } else if ( running && leftSec <= 0 ) {
      clearTimeout(timerObj);
      handleSwitch();
    } else {
      clearTimeout(timerObj);
    }
    return () => clearTimeout(timerObj);
  },[running, leftSec])

  useEffect(() => {
    setLeftSec(props.workTime*60);
  }, [props.workTime])

  return (
    <CountdownComponent
      leftSec={leftSec}
      timerState={timerState}
      worksCount={worksCount}
      cycleCount={props.cycleCount}
      buttonState={buttonState}
      handleStart={handleStart}
      handleStop={handleStop}
      handleReset={handleReset}
    />
  );
}

export default CountdownContainer;