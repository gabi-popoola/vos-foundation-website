import { styled } from 'styled-components';

export const MainContainer = styled.div`
	min-height: 100vh;
`;
export const HeroBanner = styled.div`
	min-height: 45vh;
	background-color: var(--vos-yellow);
	display: flex;
	justify-content: space-between;
	@media only screen and (min-width: 992px) {
		padding-left: 10em;
	}
`;
export const HeroLeftSide = styled.div`
	margin: auto 1em;
	@media only screen and (min-width: 992px) {
		width: 55%;
	}
`;
export const HeroRightSide = styled.div`
	display: none;
	width: 45%;
	border: solid 1px red;
	background-color: grey;
	@media only screen and (min-width: 992px) {
		display: block;
	}
`;
export const HeroTitle = styled.h1``;
export const HeroText = styled.p`
	@media only screen and (min-width: 992px) {
		max-width: 65%;
	}
`;
