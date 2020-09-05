//componentsは見た目を担当
import React from 'react';
import {secToMMSS} from '../lib/time';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledTimeDesplay = styled.div`
  color: #282c34;
  font-size: 100px;
`;

const StyledButton = styled(Button)`
  &.MuiButton-root {
    width: '130px';
    font-size: 1.3rem;
    margin-right: 10px;
  }
`;

const CountdownComponent = ({leftSec, handleStart, handleStop, handleReset, buttonState}) => {
  return (
    <>
      <StyledTimeDesplay>{secToMMSS(leftSec)}</StyledTimeDesplay>
      <div className="module-spacer" />
      <div>
       <StyledButton variant="contained" onClick={handleStart} disabled={buttonState.start}>START</StyledButton>
       <StyledButton variant="contained" onClick={handleStop} disabled={buttonState.stop}>STOP</StyledButton>
       <StyledButton variant="contained" onClick={handleReset} disabled={buttonState.reset}>RESET</StyledButton>
      </div>
    </>
  );
}

export default CountdownComponent