import styled from 'styled-components';
import Heading from '../../Heading/Heading';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme, isNight }) => (isNight ? theme.white : theme.gray)};

  ${Heading}:last-child {
    text-align: right;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: grid;
    justify-content: unset;

    ${Heading}:last-child {
      text-align: left;
    }
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    padding-left: 11rem;

    ${Heading}:last-child {
      margin-top: 0.9rem;
    }
  }
`;


const Detail = ({isNight, title, value}) => {
  return (
    <Wrapper isNight={isNight}>
      <Heading h6 as="h6">
        {title}
      </Heading>
      <Heading h2 as="h2">
        {value}
      </Heading>
    </Wrapper>
  );
}
 
export default Detail;