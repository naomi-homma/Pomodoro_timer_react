//containersはロジックを担当
import React, { useState, useEffect } from 'react';
import '../App.css';

const useCountdown = () => {
  const [startTime, setStartTime] = useState(0);
  const[stateTime, setStateTime] = useState({workTime: 25, breakTime: 5, longBreakTime: 20});
  const[isRunning, setIsRunning] = useState(false);
  const[elapsedTime, setElapsedTime] = useState(0);
  const[timerState, setTimerState] = useState('work');
  const[secLeft, setSecLeft] = useState(stateTime.workTime * 60 * 1000);

  const[remainigTime, setRemainigTime] = useState(secToMMSS(stateTime.workTime * 60 * 1000));

  //カウントダウンスタート：STARTボタン押下で実行
  const handleStartTime = () => {
    setStartTime(Date.now());
    setIsRunning(!isRunning);
  } 

  //カウントダウンストップ及び経過時間の保持：STOPボタン押下で実行
  const handleStopTime = () => {
    setIsRunning(!isRunning);
    setElapsedTime(e => e + Date.now() - startTime);
  }

  //リセット(設定時間に戻る)：RESETボタン押下で実行
  const handleResetTime = () => {
    setElapsedTime(0);
    //initialStateを作成すれば簡潔に書けそう
    setRemainigTime(secToMMSS(stateTime.workTime * 60 * 1000));
  }

  //残り時間を計算する関数
  const calculateRemainigTime = (time) => {
    setSecLeft((time * 60 *1000) - elapsedTime - (Date.now() - startTime)); 
  }

  //1つのuseEffect内でif分岐すればポモドーロサイクル構築可能か？
  //ただ、ネストが深くなるので恐らく最終的にはuseReducerか？
  useEffect(() => {
    let timeoutId = null;
    if ( isRunning && secLeft >= 0) {
      timeoutId = setTimeout(() => {
        setRemainigTime(secToMMSS(secLeft));
        calculateRemainigTime(time);
      }, 100);
    } else if ( secLeft < 0 ) {

    }
    return () => clearTimeout(timeoutId);
  },[isRunning, secLeft ,timerState]);

  //デバッグ用
  console.log(remainigTime);
  console.log(isRunning);
  console.log(secLeft);
  console.log(elapsedTime);

  return (
    <CountdownComponent
      remainigTime={remainigTime}
      handleStartTime={handleStartTime}
      handleStopTime={handleStopTime}
      handleResetTime={handleResetTime}
    />
  );
}

export default TimerView;