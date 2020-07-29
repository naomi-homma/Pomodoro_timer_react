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
  const[remainigTime, setRemainigTime] = useState({restMin: String(time).padStart(2, '0'), restSec:'00'});
  const[isRunning, setIsRunning] = useState(false);
  const[elapsedTime, setElapsedTime] = useState(0);
  const[timerState, setTimerState] = useState('work');

  const classes = useStyles();

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
    //initialStateを作成すれば簡潔に書けそう
    setRemainigTime({restMin: String(time).padStart(2, '0'),
    restSec:'00'});
    setElapsedTime(0);
  }

  //残り時間の計算及び「分：秒」へ変換する関数
  const calculateRemainigTime = () => {
    let remainigTime = {};
    const result = (time * 60 *1000) - elapsedTime - (Date.now() - startTime); 
    if( result > 0 ) {
      remainigTime = {
        restMin: String(Math.floor((result / 1000 / 60) % 60)).padStart(2, '0'),
        restSec: String(Math.floor((result / 1000) % 60)).padStart(2, '0')
      };
    }
    return remainigTime;
  }

  //1つのuseEffect内でif分岐すればポモドーロサイクル構築可能か？
  //ただ、ネストが深くなるので恐らく最終的にはuseReducerか？
  useEffect(() => {
    let timeoutId = null;
    if( isRunning ) {
      timeoutId = setTimeout(() => {
        setRemainigTime(calculateRemainigTime());
      }, 1000);
    } else if ( !isRunning ) {
      clearTimeout(timeoutId)
    }
    return () => clearTimeout(timeoutId);
  },[isRunning, remainigTime ,timerState]);

  //デバッグ用
  console.log(remainigTime);
  console.log(isRunning);

  return (
    <>
      <div className="timerView_main">{remainigTime.restMin}:{remainigTime.restSec}</div>
      <div className={classes.root}>
       <Button variant="contained" onClick={handleStartTime}>START</Button>
       <Button variant="contained" onClick={handleStopTime}>STOP</Button>
       <Button variant="contained" onClick={handleResetTime}>RESET</Button>
      </div>
    </>
  );
}

export default TimerView;