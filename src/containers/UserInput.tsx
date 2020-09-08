//ロジック担当:Viewではなくcomponentを返すcomponent
import React, {useState} from 'react';
import UserInputComponent from '../components/userInput';

type Props = {
  //
  inputValueSet: (inputWorkTime: number, inputBreakTime: number, inputLongBreakTime: number, inputCycleCount: number) => void;
  workTime: number;
  breakTime: number;
  longBreakTime: number;
  cycleCount: number;
};

const UserInputContainer = (props: Props) => {
  const[inputWorkTime, setInputWorkTime] = useState<number>(props.workTime);
  const[inputBreakTime, setInputBreakTime] = useState<number>(props.breakTime);
  const[inputLongBreakTime, setInputLongBreakTime] = useState<number>(props.longBreakTime);
  const[inputCycleCount, setInputCycleCount] = useState<number>(props.cycleCount);

  const handleInputWorkTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWorkTime(Number(e.currentTarget.value));
  }

  const handleInputBreakTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputBreakTime(Number(e.currentTarget.value));
  }

  const handleInputLongBreakTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLongBreakTime(Number(e.currentTarget.value));
  }
  
  const handleInputCycleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCycleCount(Number(e.currentTarget.value));
  }

  const callInputValueSet = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.inputValueSet(inputWorkTime, inputBreakTime, inputLongBreakTime, inputCycleCount);
  }

  return (
    <>
      <UserInputComponent 
        handleInputWorkTime={handleInputWorkTime}
        inputWorkTime={inputWorkTime}
        handleInputBreakTime={handleInputBreakTime}
        inputBreakTime={inputBreakTime}
        handleInputLongBreakTime={handleInputLongBreakTime}
        inputLongBreakTime={inputLongBreakTime}
        handleInputCycleCount={handleInputCycleCount}
        inputCycleCount={inputCycleCount}
        callInputValueSet={callInputValueSet}
      />
    </>
  );
};

export default UserInputContainer;