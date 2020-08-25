//見た目担当
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontSize: '1.2rem',
    },
  },
}));

const StyledInputField = styled.div`
  display: flex;
  justify-content: center;
`

const StyledTextField = styled(TextField)`
  &.MuiFormControl-root{
    width: 100px;
    margin-right: 20px;
    &.MuiInputLabel-formControl {
      top: -10px;
      text-align: left;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 100px;
`;

const UserInputComponent = ({
  handleInputWorkTime, inputWorkTime,
  handleInputBreakTime, inputBreakTime,
  handleInputLongBreakTime, inputLongBreakTime,
  handleInputCycleCount, inputCycleCount,
  callInputValueSet
}) => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <StyledInputField>
        <StyledTextField id="standard-basic" 
          onChange={handleInputWorkTime} 
          value={inputWorkTime} 
          label="作業時間"
        />
        <StyledTextField id="standard-basic"
          onChange={handleInputBreakTime} 
          value={inputBreakTime}
          label="小休憩時間"
        />
        <StyledTextField id="standard-basic"
          onChange={handleInputLongBreakTime} 
          value={inputLongBreakTime}
          label="長休憩時間"
        />
        <StyledTextField id="standard-basic"
          onChange={handleInputCycleCount} 
          value={inputCycleCount}
          label="長休憩までの作業回数"
        />
      </StyledInputField>
      <StyledButton variant="contained"
        type="submit"
        onClick={callInputValueSet}
      >OK</StyledButton>
    </form>
  );
};

export default UserInputComponent;