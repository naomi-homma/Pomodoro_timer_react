//ロジック担当:Viewではなくcomponentを返すcomponent
import React, {useState} from 'react';
import UserInputComponent from '../components/userInput';


const UserInputContainer = () => {
  const[inputWorkTime, setInputWorkTime] = useState(25);
  const[inputBreakTime, setInputBreakTime] = useState(5);
  const[inputLongBreakTime, setInputLongBreakTime] = useState(20);
  const[inputCycleCount, setInputCycleCount] = useState(4);



  const handleInputWorkTime = (e) => {
    setInputWorkTime(e.target.value);
    console.log(e.target.value);
  }

  const handleInputBreakTime = (e) => {
    setInputBreakTime(e.target.value);
    console.log(e.target.value);
  }

  const handleInputLongBreakTime = (e) => {
    setInputLongBreakTime(e.target.value);
    console.log(e.target.value);
  }
  
  const handleInputCycleCount = (e) => {
    setInputCycleCount(e.target.value);
    console.log(e.target.value);
  }

  const inputValueSet = (e) => {
    
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
      />
    </>
  );
};

export default UserInputContainer;