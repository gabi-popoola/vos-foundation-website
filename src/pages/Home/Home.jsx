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
} from './HomeStyles';
import Button from '../../components/subComponents/Button/Button';
import { useNavigate } from 'react-router';
import IconCard from '../../components/IconCard/IconCard';

const Home = () => {
	const navigate = useNavigate();
	return (
		<MainContainer>
			<HeroBanner>
				<HeroLeftSide>
					<HeroTitle>Vivian Osunkoya Shodipo (VOS) Foundation</HeroTitle>
					<HeroText>
						We are dedicated to enhancing the educational development of young
						people in various regions of Nigeria. Through accessible educational
						supplies, programs, and activities, we empower individuals to reach
						their full potential and become active, responsible citizens.
					</HeroText>
					<Button
						text={'Our Mission'}
						handleClick={() => navigate('about-us')}
					/>
				</HeroLeftSide>
				<HeroRightSide>Image</HeroRightSide>
			</HeroBanner>
			<CoreWorkContainer>
				<CoreWorkTitle>The core of our work involves</CoreWorkTitle>
				<CoreWorkSubContainer>
					<IconCard />
				</CoreWorkSubContainer>
			</CoreWorkContainer>
		</MainContainer>
	);
};

export default Home;
