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
  const[time, setTime] = useState(25);

  const classes = useStyles();

  //カウントダウンはstateが変わる
  //setTimeを1000秒毎に呼び出す？
  const handleCalculateTimeLeft = () => {
    setStartTime(Date.now());
  } 
  //<span>タグuseEffect：非同期処理をコールバック関数を　秒を
  //副作用がある処理がuseEffect
  //useEffect
  //フロントエンドの技術に必要なものを洗い出す 
  //現在地の確認
  //必要な勉強を。。。

  // ①クリックでhandleCountStartを呼び出す
  //②handleCountStart⇒startTimeセット、countDownの呼び出し？
  //③useEffectとどのタイミングで連携させるのか？

  const calculateTimeLeft = () => {
    let elapsedTime = 0;
    let timeLeft = {};
    const remainigTime = (25 * 60 *1000) - elapsedTime - (Date.now() - startTime); 
    if( remainigTime > 0 ) {
      timeLeft = {
        restMin: String(Math.floor((remainigTime / 1000 / 60) % 60)).padStart(2, '0'),
        restSec: String(Math.floor((remainigTime / 1000) % 60)).padStart(2, '0')
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  console.log(timeLeft);

  return (
    <>
      <div className="timerView_main">{timeLeft.restMin}:{timeLeft.restSec}</div>
      <div className={classes.root}>
       <Button variant="contained" onClick={handleCalculateTimeLeft}>START</Button>
      </div>
    </>
  );
}

export default TimerView;