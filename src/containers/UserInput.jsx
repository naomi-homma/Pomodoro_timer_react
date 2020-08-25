//ロジック担当:Viewではなくcomponentを返すcomponent
import React, {useState} from 'react';
import UserInputComponent from '../components/userInput';


const UserInputContainer = (props) => {
  const[inputWorkTime, setInputWorkTime] = useState(props.workTime);
  const[inputBreakTime, setInputBreakTime] = useState(props.breakTime);
  const[inputLongBreakTime, setInputLongBreakTime] = useState(props.longBreakTime);
  const[inputCycleCount, setInputCycleCount] = useState(props.cycleCount);

  const handleInputWorkTime = (e) => {
    setInputWorkTime(e.target.value);
  }

  const handleInputBreakTime = (e) => {
    setInputBreakTime(e.target.value);
  }

  const handleInputLongBreakTime = (e) => {
    setInputLongBreakTime(e.target.value);
  }
  
  const handleInputCycleCount = (e) => {
    setInputCycleCount(e.target.value);
    console.log(e.target.value);
  }

  const callInputValueSet = (e) => {
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