//ロジック担当
import React, {useState} from 'react';
import UserInputComponent from '../components/UserInput';



const UserInputContainer = () => {
  const[inputWorkTime, setInputWorkTime] = useState(25);

  const handleInputWorkTime = (e) => {
    setInputWorkTime(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <UserInputComponent 
        handleInputWorkTime={handleInputWorkTime}
        inputWorkTime={inputWorkTime}
      />
    </>
  );
};

export default UserInputContainer;