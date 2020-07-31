import React from 'react';
import './App.css';
import CountdownContainer from './containers/Countdown';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Pomodoro Timer</p>
      </header>
      <CountdownContainer />
    </div>
  );
}

export default App;
