/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";
import Header from "./components/Header";
import CountdownContainer from "./containers/Countdown";
import UserInputContainer from "./containers/UserInput";
import InputTimeDisplay from "./components/InputTimeDisplay";
import DescriptionPomodoro from "./components/DescriptionPomodoro";

// reset css
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

// InputTimeDesplayはcomponentから直接(ロジック切り出していない)
const App: React.FC = () => {
  const [workTime, setWorkTime] = useState<number>(25);
  const [breakTime, setBreakTime] = useState<number>(5);
  const [longBreakTime, setLongBreakTime] = useState<number>(20);
  const [cycleCount, setCycleCount] = useState<number>(4);

  const inputValueSet = (
    inputWorkTime: number,
    inputBreakTime: number,
    inputLongBreakTime: number,
    inputCycleCount: number
  ) => {
    setWorkTime(inputWorkTime);
    setBreakTime(inputBreakTime);
    setLongBreakTime(inputLongBreakTime);
    setCycleCount(inputCycleCount);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className="module_spacer_medium" />
      <CountdownContainer
        workTime={workTime}
        breakTime={breakTime}
        longBreakTime={longBreakTime}
        cycleCount={cycleCount}
      />
      <div className="module_spacer_medium" />
      <InputTimeDisplay
        workTime={workTime}
        breakTime={breakTime}
        longBreakTime={longBreakTime}
        cycleCount={cycleCount}
      />
      <div className="module_spacer_medium" />
      <UserInputContainer
        inputValueSet={inputValueSet}
        workTime={workTime}
        breakTime={breakTime}
        longBreakTime={longBreakTime}
        cycleCount={cycleCount}
      />
      <div className="module_spacer_medium" />
      <div className="module_spacer_medium" />
      <DescriptionPomodoro />
      <div className="module_spacer_medium" />
    </div>
  );
};

export default App;
