import { useContext } from 'react';
import styled, { css } from 'styled-components';
import Clock from '../Clock/Clock';
import Details from '../Details/Details';
import Quotes from '../Quotes/Quotes';
import { Context } from '../../Context';
import Background from '../Background/Background';

const InnerWrapper = styled.div`
  position: relative;
  padding: 0 2.6rem;
  height: 100vh;
  transition: height 0.5s cubic-bezier(0.13, 0.66, 0.36, 1);

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0 6.4rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    padding: 0 16.5rem;
  }

  ${({ active }) =>
    active &&
    css`
      height: calc(100vh - 25.6rem);

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        height: calc(100vh - 44rem);
      }

      @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
        height: calc(100vh - 40rem);
      }
    `};
`;

const Main = () => {
  const { isActive, isNight } = useContext(Context);

  return (
    <Background isNight={isNight}>
      <InnerWrapper active={isActive}>
        <Quotes/>
        <Clock/>
      </InnerWrapper>
      <Details />
    </Background>
  );
};

export default Main;
