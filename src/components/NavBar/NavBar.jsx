import React from 'react';
import {
	IconContainer,
	MainContainer,
	NavContainer,
	NavItem,
} from './NavBarStyles';
import { useNavigate } from 'react-router';

const NavBar = () => {
	const navigate = useNavigate();

	return (
		<MainContainer>
			<IconContainer onClick={() => navigate('/')}>Icon</IconContainer>
			<NavContainer>
				<NavItem onClick={() => navigate('/')}>Home</NavItem>
				<NavItem onClick={() => navigate('about-us')}>AboutUs</NavItem>
				<NavItem onClick={() => navigate('donate')}>Donate</NavItem>
			</NavContainer>
		</MainContainer>
	);
};

export default NavBar;
