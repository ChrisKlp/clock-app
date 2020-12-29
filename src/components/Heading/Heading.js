import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: 10rem;
  line-height: 10rem;
  letter-spacing: -0.25rem;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 17.5rem;
    line-height: 17.5rem;
    letter-spacing: -0.437rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    font-size: 20rem;
    line-height: 20rem;
    letter-spacing: -0.5rem;
  }

  ${({ h2 }) =>
    h2 &&
    css`
      font-size: 2rem;
      line-height: 2.4rem;
      letter-spacing: 0;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 4rem;
        line-height: 4.8rem;
        letter-spacing: 0;
      }

      @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
        font-size: 5.6rem;
        line-height: 6.8rem;
        letter-spacing: 0;
      }
    `};

  ${({ h3 }) =>
    h3 &&
    css`
      font-size: 1.5rem;
      line-height: 2.8rem;
      letter-spacing: 0.3rem;
      text-transform: uppercase;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 1.8rem;
        line-height: 2.8rem;
        letter-spacing: 0.36rem;
      }

      @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
        font-size: 2.4rem;
        line-height: 2.8rem;
        letter-spacing: 0.48rem;
      }
    `};

  ${({ h4 }) =>
    h4 &&
    css`
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.5rem;
      letter-spacing: 0.3rem;
      text-transform: uppercase;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 1.8rem;
        line-height: 2.8rem;
        letter-spacing: 0.36rem;
      }

      @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
        font-size: 2rem;
        line-height: 2.8rem;
        letter-spacing: 0.4rem;
      }
    `};

  ${({ h5 }) =>
    h5 &&
    css`
      font-size: 1.2rem;
      line-height: 2.2rem;
      letter-spacing: 0;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 1.8rem;
        line-height: 2.8rem;
        letter-spacing: 0;
      }
    `};

  ${({ h6 }) =>
    h6 &&
    css`
      font-weight: 400;
      font-size: 1rem;
      line-height: 2.8rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;

      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 1.3rem;
        line-height: 2.8rem;
        letter-spacing: 0.26rem;
      }

      @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
        font-size: 1.5rem;
        line-height: 2.8rem;
        letter-spacing: 0.3rem;
      }
    `};
`;

export default Heading;
