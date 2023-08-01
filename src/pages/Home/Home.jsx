import React from 'react';
import {
	HeroBanner,
	HeroRightSide,
	MainContainer,
	HeroLeftSide,
	HeroTitle,
	HeroText,
} from './HomeStyles';
import Button from '../../components/subComponents/Button/Button';

const Home = () => {
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
					<Button text={'Our Mission'} />
				</HeroLeftSide>
				<HeroRightSide>Image</HeroRightSide>
			</HeroBanner>
		</MainContainer>
	);
};

export default Home;
