import React, { useState } from 'react';
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
  CoreWorkLeftSide,
  CoreWorkSubTitle,
} from './HomeStyles';
import Button from '../../components/subComponents/Button/Button';
import { useNavigate } from 'react-router';
import IconCard from '../../components/IconCard/IconCard';
import { HomeContants } from '../../utils/constants';

const Home = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState({ value: 1, text: HomeContants('coreSubText1') });

  const handleCoreSubtitleClick = ({ val, t }) => {
    setActive({ value: val, text: t });
  };
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
          <CoreWorkRightSide>
            <CoreWorkSubTitle
              className={active.value === 1 && 'active'}
              onClick={() => handleCoreSubtitleClick({ value: 1, t: HomeContants('coreSubText1') })}
            >
              {HomeContants('coreSubtitle1')}
            </CoreWorkSubTitle>
            <CoreWorkSubTitle
              className={active.value === 2 && 'active'}
              onClick={() => handleCoreSubtitleClick({ value: 3, t: HomeContants('coreSubText2') })}
            >
              {HomeContants('coreSubtitle2')}
            </CoreWorkSubTitle>
            <CoreWorkSubTitle
              className={active.value === 3 && 'active'}
              onClick={() => handleCoreSubtitleClick({ value: 3, t: HomeContants('coreSubText3') })}
            >
              {HomeContants('coreSubtitle3')}
            </CoreWorkSubTitle>
          </CoreWorkRightSide>
          <CoreWorkLeftSide>
            <IconCard text={active.text} />
          </CoreWorkLeftSide>
        </CoreWorkSubContainer>
      </CoreWorkContainer>
    </MainContainer>
  );
};

export default Home;
