import React from 'react';
import '../App.css';
import TimerView from './TimerView';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Pomodoro Timer</p>
      </header>
      <TimerView />
    </div>
  );
}

export default App;
