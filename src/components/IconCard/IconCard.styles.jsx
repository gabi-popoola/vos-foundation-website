import { styled } from 'styled-components';

export const MainContainer = styled.div`
  background-color: var(--vos-light-yellow);
  border: 1px solid var(--vos-light-yellow);
  border-radius: 5px;
  margin: 2em 1em;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 992px) {
    height: 50vh;
    width: 22vw;
    margin-top: 1em;
  }
`;
export const CardTitle = styled.h2``
export const CardIcon = styled.img`
    border: 1px solid var(--vos-purple);
    width: 150px;
    height: 150px;
  @media only screen and (min-width: 992px) {
    margin-bottom: 1em;
  }
`;
export const CardText = styled.p`
    margin: 1em 2.5em;
  @media only screen and (min-width: 992px) {
    margin: 1em 2em;
  }
`;
