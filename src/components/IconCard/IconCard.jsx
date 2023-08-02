import React from 'react';
import { CardText, CardIcon, MainContainer } from './IconCardStyles';

const IconCard = ({ text, icon }) => {
	return (
		<MainContainer>
			IconCard
			<CardIcon src={icon} />
			<CardText>{text}</CardText>
		</MainContainer>
	);
};

export default IconCard;
