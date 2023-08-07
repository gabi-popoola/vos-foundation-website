import React from 'react';
import {
  HeroBanner,
  HeroRightSide,
  MainContainer,
  HeroLeftSide,
  HeroTitle,
  HeroText,
  CoreWorkContainer,
  CoreWorkTitle,
  CoreWorkSubContainer,
  CoreWorkRightSide,
  CoreWorkLefttSide,
} from './HomeStyles';
import Button from '../../components/subComponents/Button/Button';
import { useNavigate } from 'react-router';
import IconCard from '../../components/IconCard/IconCard';
import { HomeContants } from '../../utils/constants';

const Home = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <HeroBanner>
        <HeroLeftSide>
          <HeroTitle>{HomeContants('heroTitle')}</HeroTitle>
          <HeroText>{HomeContants('heroText')}</HeroText>
          <Button text={HomeContants('heroBtn')} handleClick={() => navigate('about-us')} />
        </HeroLeftSide>
        <HeroRightSide>Image</HeroRightSide>
      </HeroBanner>
      <CoreWorkContainer>
        <CoreWorkTitle>{HomeContants('coreWorkTitle')}</CoreWorkTitle>
        <CoreWorkSubContainer>
          <CoreWorkRightSide>Right side</CoreWorkRightSide>
          <CoreWorkLefttSide>
            <IconCard />
          </CoreWorkLefttSide>
        </CoreWorkSubContainer>
      </CoreWorkContainer>
    </MainContainer>
  );
};

export default Home;
