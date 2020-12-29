import styled from 'styled-components';
import Heading from '../../Heading/Heading';
import iconSun from '../../../assets/desktop/icon-sun.svg';
import iconMoon from '../../../assets/desktop/icon-moon.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const StyledHeading = styled(Heading)`
  span {
    display: none;

    @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
      display: inline-block;
    }
  }
`;

const Greeting = ({ dayTime, isNight }) => (
  <Wrapper>
    <img
      src={isNight ? iconMoon : iconSun}
      alt={isNight ? 'Moon Icon' : 'Sun Icon'}
    />
    <StyledHeading h4 as="h4">
      Good {dayTime} <span>, it’s currently</span>
    </StyledHeading>
  </Wrapper>
);

export default Greeting;
