import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ text, handleClick, className }) => {
  return (
    <StyledButton className={className} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
