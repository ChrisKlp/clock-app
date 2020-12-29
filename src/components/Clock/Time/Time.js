import styled from 'styled-components';
import Heading from '../../Heading/Heading';

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    gap: 1.1rem;
  }
`;

const TimeZone = styled.span`
  display: block;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 2.8rem;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-weight: 300;
    font-size: 3.2rem;
  }
`;

const Time = ({ time: { datetime, abbreviation } }) => (
  <Wrapper>
    <Heading>{datetime}</Heading>
    <TimeZone>{abbreviation}</TimeZone>
  </Wrapper>
);

export default Time;
