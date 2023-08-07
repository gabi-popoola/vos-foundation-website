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
    min-height: 30vh;
  }
`;
export const HeroLeftSide = styled.div`
  margin: auto 1em;
  padding: 1.5em 0;
  @media only screen and (min-width: 992px) {
    padding: 1.5em;
  }
`;
export const HeroRightSide = styled.div`
  display: none;
  width: 50vw;
  background-color: grey;
  @media only screen and (min-width: 992px) {
    display: block;
  }
`;
export const HeroTitle = styled.h1`
  margin-top: 0;
`;
export const HeroText = styled.p`
  @media only screen and (min-width: 992px) {
    max-width: 65vw;
  }
`;
export const CoreWorkContainer = styled.div`
  border: 1px solid red;
  min-height: 70vh;
  padding: 0 1em;
  text-align: center;
  @media only screen and (min-width: 992px) {
    padding-top: 3em;
  }
`;
export const CoreWorkSubContainer = styled.div`
  ${'' /* border: 1px solid red; */}
  min-height: 55vh;
  display: block;
  @media only screen and (min-width: 992px) {
    display: flex;
    justify-items: space-between;
  }
`;
export const CoreWorkTitle = styled.h1``;
export const CoreWorkRightSide = styled.div`
  border: 1px solid red;
  min-height: 70vh;
  @media only screen and (min-width: 992px) {
    width: 50vw;
  }
`;
export const CoreWorkSubTitle = styled.h2`
  ${'' /* border: 1px solid red; */}
  text-align: left;
  margin-left: 1em;
  cursor: pointer;
  &:hover,
  &.active {
    text-decoration: underline var(--vos-yellow) solid 5px;
  }
`;
export const CoreWorkLeftSide = styled.div`
  border: 1px solid red;
  min-height: 55vh;
  @media only screen and (min-width: 992px) {
    width: 50vw;
  }
`;
