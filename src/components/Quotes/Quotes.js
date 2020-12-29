import styled, { css } from 'styled-components';
import Heading from '../Heading/Heading';
import iconRefresh from '../../assets/desktop/icon-refresh.svg';
import { useContext } from 'react';
import { Context } from '../../Context';

const Wrapper = styled.section`
  padding-top: 3.2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
  color: ${({ theme }) => theme.white};
  transition: opacity 0.5s cubic-bezier(0.13, 0.66, 0.36, 1),
    transform 0.5s cubic-bezier(0.13, 0.66, 0.36, 1);

  ${({ active }) =>
    active &&
    css`
      opacity: 0;
      transform: translateY(-4rem);
    `};

  @media (orientation: landscape) and (max-height: 350px) {
    display: none;
  }

  @media (orientation: landscape) and (min-width: ${({ theme }) =>
      theme.mediaSize.md}) and (max-height: 550px) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding-top: 7.7rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    padding-top: 5.6rem;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  gap: 0.8rem;
  max-width: 54rem;
`;

const Quote = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.2rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;

const Author = styled(Heading)``;

const RefreshButton = styled.button`
  display: block;
  margin: -1rem -1rem;
  padding: 2rem;
  flex: 0 0 1.8rem;
  height: 1.8rem;
  border: none;
  background: transparent url(${iconRefresh}) no-repeat center;
  cursor: pointer;
`;

const Quotes = () => {
  const {
    isActive,
    getQuote,
    quote: { author, content },
  } = useContext(Context);

  return (
    <Wrapper active={isActive}>
      <InnerWrapper>
        <Quote>“{content}”</Quote>
        <Author h5 as="h5">
          {author}
        </Author>
      </InnerWrapper>
      <RefreshButton aria-label="refresh quotes button" onClick={getQuote} />
    </Wrapper>
  );
};

export default Quotes;
