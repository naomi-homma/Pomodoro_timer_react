import React from 'react';
import styled from 'styled-components';

const Styledheader = styled.header`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 25px;
  color: #fff;
`;

const Header = () => {
  return (
    <Styledheader>
      <p>Pomodoro Timer</p>
    </Styledheader>
  );
};

export default Header;