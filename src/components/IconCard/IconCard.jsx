import React from 'react';
import { CardText, CardIcon, MainContainer, CardTitle } from './IconCard.styles';

const IconCard = ({ title, text, icon, alt }) => {
  return (
    <MainContainer>
      <CardTitle>{title}</CardTitle>
      <CardIcon src={icon} alt={alt} />
      <CardText>{text}</CardText>
    </MainContainer>
  );
};

export default IconCard;
