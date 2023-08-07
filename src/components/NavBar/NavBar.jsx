import React from 'react';
import { IconContainer, MainContainer, NavContainer, NavItem } from './NavBarStyles';
import { useNavigate } from 'react-router';
import Button from '../subComponents/Button/Button';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <IconContainer onClick={() => navigate('/')}>Icon</IconContainer>
      <NavContainer>
        <NavItem onClick={() => navigate('/')}>Home</NavItem>
        <NavItem onClick={() => navigate('about-us')}>About us</NavItem>
        <Button text={'Donate'} handleClick={() => navigate('donate')} />
      </NavContainer>
    </MainContainer>
  );
};

export default NavBar;
