//componentsは見た目を担当
import React from 'react';
import {secToMMSS} from '../lib/time';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

const StyledTypography = styled(Typography)`
  &.MuiTypography-body1 {
    font-size: 2.5rem;
  }
  &.MuiTypography-body2 {
    font-size: 1.5rem;
  }
`
//timerとbuttonはcomponentで分けたい気持ち
const CountdownComponent = ({leftSec, timerState, worksCount, cycleCount, buttonState, handleStart, handleStop, handleReset}) => {
  return (
    <>
      <StyledTimeDesplay>{secToMMSS(leftSec)}</StyledTimeDesplay>
      <StyledTypography variant="body1">
        {timerState}
      </StyledTypography>
      <StyledTypography variant="body2">
        {worksCount}/{cycleCount}
      </StyledTypography>
      <div className="module_spacer_medium" />
      <div>
       <StyledButton variant="contained" onClick={handleStart} disabled={buttonState.start}>START</StyledButton>
       <StyledButton variant="contained" onClick={handleStop} disabled={buttonState.stop}>STOP</StyledButton>
       <StyledButton variant="contained" onClick={handleReset} disabled={buttonState.reset}>RESET</StyledButton>
      </div>
    </>
  );
}

export default CountdownComponent