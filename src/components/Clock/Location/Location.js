import styled from 'styled-components';
import Heading from '../../Heading/Heading';

const StyledHeading = styled(Heading)`
  margin-bottom: 3.2rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 8rem;
  }

  @media (orientation: landscape) and (min-width: ${({ theme }) =>
      theme.mediaSize.lg}) {
    margin-bottom: 0;
  }
`;

const Location = ({ time: { city, country_code } }) => (
  <StyledHeading h3 as="h3">
    IN {city}, {country_code}
  </StyledHeading>
);

export default Location;
