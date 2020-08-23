import React, {useState}from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import Header from './components/Header';
import CountdownContainer from './containers/Countdown';
import UserInputContainer from './containers/UserInput';
import InputTimeDesplay from './components/InputTimeDesplay';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

//InputTimeDesplayはcomponentから直接(ロジック切り出していない)
const App = () => {
  const[workTime, setWorkTime] = useState(25);
  const[breakTime, setBreakTime] = useState(0.3);
  const[longBreakTime, setLongBreakTime] = useState(20);

  const inputValueSet = (inputWorkTime) => {
    setWorkTime(inputWorkTime);
  }
  
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className="module-spacer" />
      <CountdownContainer
        workTime={workTime}
      />
      <div className="module-spacer" />
      <InputTimeDesplay />
      <div className="module-spacer" />
      <UserInputContainer 
        inputValueSet={inputValueSet}
      />
    </div>
  );
}

export default App;
