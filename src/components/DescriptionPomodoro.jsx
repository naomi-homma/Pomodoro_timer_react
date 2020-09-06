import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 23,
    },
    body1: {
      fontWeight: 500,
      fontSize: 15,
    },
  },
});

const useStyles = makeStyles(() =>
    createStyles({
      descriptionFeild: {
        width: 400,
        margin: "0 auto",
        border: "solid 2px #bbb",
        borderRadius: 3,
        padding: 15,
      },
      descriptionText: {
        textAlign: "left"
      }
    }),
);

const DescriptionPomodoro = () => {
  const classes = useStyles();
  return(
    <div className={classes.descriptionFeild}>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Pomodoro Timerについて</Typography>
        <div className="module_spacer_medium" />
        <Typography className={classes.descriptionText}>
        ポモドーロタイマーは、ポモドーロテクニックを実践するためのアイテム。ポモドーロ・テクニックとは、1980年代にイタリア人のフランチェスコ・シリロによって考案された時間管理術一つ。25分の作業と5分の休憩を繰り返し、途中に長い休息を取るサイクルを回す。集中力を高め、効率的に仕事を進めるテクニック。
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default DescriptionPomodoro;