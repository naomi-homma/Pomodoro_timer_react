import React from 'react';
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
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <div className="module-spacer" />
      <CountdownContainer />
      <div className="module-spacer" />
      <InputTimeDesplay />
      <div className="module-spacer" />
      <UserInputContainer />
    </div>
  );
}

export default App;
