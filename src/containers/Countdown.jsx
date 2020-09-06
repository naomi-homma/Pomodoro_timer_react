//containersはロジックを担当
import React, { useState, useEffect } from 'react';
import '../App.css';
import CountdownComponent from '../components/Countdown';


const CountdownContainer = (props) => {
  //作業時間など各時間(inputで入力した値も含めて)の値はAppで管理する
  //①stateの種類が多い。まとめられる？無駄なstateを設定していないか？
  //②stateの初期値をpropsで設定しても問題ないか？
  const[timerState, setTimerState] = useState('work');
  const[running, setRunning] = useState(false);
  //③buttonStateの値としてオブジェクトを代入。この形は問題ないか？スマートな書き方ある？
  const[buttonState, setButtonState] = useState({start: false, stop: true, reset: true})
  let[leftSec, setLeftSec] = useState(props.workTime*60);
  let[worksCount, setWorksCount] = useState(1);
  let[timerObj, setTimerObj] = useState('');

  // 効果音再生
  const audio = new Audio();

  const handleSwitch = () => {
    //3回目のworkが終了したらlongbreakに入る
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
    //④buttonのdisabledの値を指定。更新の書き方は正しい？
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
        setTimeout(() => {
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