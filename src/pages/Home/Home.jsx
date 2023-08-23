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
} from './Home.styles';
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
        <HeroRightSide></HeroRightSide>
      </HeroBanner>
      <CoreWorkContainer>
        <CoreWorkTitle>{HomeContants('coreWorkTitle')}</CoreWorkTitle>
        <CoreWorkSubContainer>
          <IconCard title={HomeContants('coreSubtitle1')} text={HomeContants('coreSubText1')} />
          <IconCard title={HomeContants('coreSubtitle2')} text={HomeContants('coreSubText2')} />
          <IconCard title={HomeContants('coreSubtitle3')} text={HomeContants('coreSubText3')} />
        </CoreWorkSubContainer>
      </CoreWorkContainer>
    </MainContainer>
  );
};

export default Home;
