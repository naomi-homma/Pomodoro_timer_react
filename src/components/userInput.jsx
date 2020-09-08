//見た目担当
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontSize: '1.2rem',
    },
  },
}));

const StyledTypography = styled(Typography)`
  &.MuiTypography-body1 {
    font-size: 1rem;
  }
`

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
    <>
      <StyledTypography variant="body1">
        ■お好きな時間・回数を設定できます■
      </StyledTypography>
      <div className="module_spacer_small" />
      <form className={classes.root} noValidate autoComplete="off">
        <StyledInputField>
          <StyledTextField id="standard-basic" 
            onChange={handleInputWorkTime} 
            value={inputWorkTime} 
            label="作業時間"
            type="number"
          />
          <StyledTextField id="standard-basic"
            onChange={handleInputBreakTime} 
            value={inputBreakTime}
            label="小休憩時間"
            type="number"
          />
          <StyledTextField id="standard-basic"
            onChange={handleInputLongBreakTime} 
            value={inputLongBreakTime}
            label="長休憩時間"
            type="number"
          />
          <StyledTextField id="standard-basic"
            onChange={handleInputCycleCount} 
            value={inputCycleCount}
            label="長休憩までの作業回数"
            type="number"
          />
        </StyledInputField>
        <StyledButton variant="contained"
          type="submit"
          onClick={callInputValueSet}
        >OK</StyledButton>
      </form>
    </>
  );
};

export default UserInputComponent;