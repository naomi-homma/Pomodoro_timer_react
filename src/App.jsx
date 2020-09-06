import React, {useState}from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import Header from './components/Header';
import CountdownContainer from './containers/Countdown';
import UserInputContainer from './containers/UserInput';
import InputTimeDisplay from './components/InputTimeDisplay';
import DescriptionPomodoro from './components/DescriptionPomodoro';

//reset css
const GlobalStyle = createGlobalStyle`
  ${reset}
`;

//InputTimeDesplayはcomponentから直接(ロジック切り出していない)
const App = () => {
  //
  const[workTime, setWorkTime] = useState(0.1);
  const[breakTime, setBreakTime] = useState(0.2);
  const[longBreakTime, setLongBreakTime] = useState(2);
  const[cycleCount, setCycleCount] = useState(3);
  
  const inputValueSet = (inputWorkTime, inputBreakTime, inputLongBreakTime, inputCycleCount) => {
    setWorkTime(inputWorkTime);
    setBreakTime(inputBreakTime);
    setLongBreakTime(inputLongBreakTime);
    setCycleCount(inputCycleCount);
  }

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
}

export default App;
