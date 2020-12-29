import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import Detail from './Detail/Detail';

const Divider = styled.div`
  position: absolute;
  width: 1.5rem;
  top: 7.4rem;
  left: 50%;
  height: 25.2rem;
  border-right: ${({ isNight }) =>
    isNight
      ? '1px solid hsla(0, 0%, 100%, 0.15)'
      : '1px solid hsla(0, 0%, 19%, 0.25)'};
  display: none;
`;

const Wrapper = styled.section`
  position: relative;
  padding: 4.8rem 2.8rem;
  height: 100vh;
  align-content: start;
  display: grid;
  gap: 1.6rem 0;
  background: ${({ isNight }) =>
    isNight ? 'hsla(0, 0%, 0%, 0.65)' : 'hsla(0, 0%, 100%, 0.65)'};
  backdrop-filter: blur(1rem);

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 11.9rem 6.4rem;
    grid: repeat(2, auto) / repeat(2, 1fr);
    grid-auto-flow: column;
    gap: 4.8rem 8rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    padding: 7.4rem 5.5rem;
    gap: 4.2rem 1.5rem;

    ${Divider} {
      display: block;
    }
  }
`;

const Details = ({ className }) => {
  const { time, isNight } = useContext(Context);

  const detailsData = {
    'Current timezone': time.timezone,
    'Day of the year': time.day_of_year,
    'Day of the week': time.day_of_week,
    'Week number': time.week_number,
  };

  const detailsList = Object.entries(detailsData).map(([key, value]) => (
    <Detail key={key} title={key} value={value} isNight={isNight} />
  ));

  return (
    <Wrapper className={className} isNight={isNight}>
      {detailsList}
      <Divider isNight={isNight} />
    </Wrapper>
  );
};

export default Details;
