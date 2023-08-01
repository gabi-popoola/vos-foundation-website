import { styled } from 'styled-components';

export const MainContainer = styled.div`
	min-height: 100vh;
`;
export const HeroBanner = styled.div`
	min-height: 50vh;
	background-color: var(--vos-yellow);
	display: flex;
	justify-content: space-between;
	padding: 0.5em 1em;
	@media only screen and (min-width: 992px) {
		padding: 0 10em;
	}
`;
export const HeroLeftSide = styled.div`
	width: 100%;
	margin: auto;

	@media only screen and (min-width: 992px) {
		width: 50%;
	}
`;
export const HeroTitle = styled.h1``;
export const HeroText = styled.p``;
export const HeroRightSide = styled.div`
	display: none;
	@media only screen and (min-width: 992px) {
		display: block;
		width: 50%;
	}
`;
