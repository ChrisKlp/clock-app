import styled from 'styled-components';
import Button from '../Button/Button';
import { useContext } from 'react';
import { Context } from '../../Context';
import Greeting from './Greeting/Greeting';
import Time from './Time/Time';
import Location from './Location/Location';

const Wrapper = styled.section`
  position: absolute;
  bottom: 4rem;
  display: grid;
  gap: 1.6rem;
  color: ${({ theme }) => theme.white};
  transition: transform 0.3s;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    bottom: 6.4rem;
    gap: 0;
  }

  @media (orientation: landscape) and (min-width: ${({ theme }) =>
      theme.mediaSize.lg}) {
    width: calc(100% - 12.8rem);
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    width: calc(100% - 33rem);
    bottom: 9.8rem;
    gap: 1.6rem;
    transform: translateY(${({ isActive }) => isActive && '4.2rem'});
  }
`;

const StyledButton = styled(Button)`
  @media (orientation: landscape) and (max-height: 350px) {
    display: none;
  }

  @media (orientation: landscape) and (max-height: 500px) and (max-width: 1400px) {
    display: none;
  }

  @media (orientation: landscape) and (min-width: ${({ theme }) =>
      theme.mediaSize.lg}) {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const Clock = () => {
  const { isActive, showDetails, time, dayTime, isNight } = useContext(Context);

  return (
    <Wrapper isActive={isActive}>
      <Greeting dayTime={dayTime} isNight={isNight} />
      <Time time={time} />
      <Location time={time} />
      <StyledButton active={isActive} onClick={showDetails} />
    </Wrapper>
  );
};

export default Clock;
