import React from 'react';
import './App.css';
import CountdownContainer from './containers/Countdown';
import UserInputContainer from './containers/UserInput';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Pomodoro Timer</p>
      </header>
      <CountdownContainer />
      <UserInputContainer />
    </div>
  );
}

export default App;
