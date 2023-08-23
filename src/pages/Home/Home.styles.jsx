import { styled } from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
`;
export const HeroBanner = styled.div`
  min-height: 40vh;
  background-color: var(--vos-yellow);
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 992px) {
    min-height: 50vh;
  }
`;
export const HeroLeftSide = styled.div`
  margin: 1.5em 1em;
  @media only screen and (min-width: 992px) {
		margin: auto;
		margin-left: 11em;
		margin-right: 1em;
  }
`;
export const HeroRightSide = styled.div`
  display: none;
  width: 45vw;
  background-color: grey;
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;
export const HeroTitle = styled.h1``;
export const HeroText = styled.p`
    margin-bottom: 1.5em;
  @media only screen and (min-width: 992px) {
    max-width: 40vw;
  }
`;
export const CoreWorkContainer = styled.div`
  min-height: 65vh;
  text-align: center;
  @media only screen and (min-width: 992px) {
		padding: 0 15em;
		margin-top: 4em;
  }
`;
export const CoreWorkTitle = styled.h1`
	margin: 1.5em 0;
	@media only screen and (min-width: 992px) {
	}
`;
export const CoreWorkSubContainer = styled.div`
  min-height: 55vh;
  @media only screen and (min-width: 992px) {
		display: flex;
		justify-content: space-around;
	}
`;