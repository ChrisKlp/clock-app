import styled from 'styled-components';
import { rgba } from 'polished';
import ArrowIcon from './ArrowIcon';

const Arrow = styled(ArrowIcon)`
  display: block;
  justify-self: flex-end;
  width: 3.2rem;
  height: 3.2rem;
  fill: ${({ theme }) => theme.gray};
  transform: ${({ active }) => (active ? 'rotate(0)' : 'rotate(180deg)')};
  transition: fill 0.2s, transform 0.2s;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 4rem;
    height: 4rem;
  }
`;

const ButtonText = styled.span`
  display: block;
  flex-grow: 1;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 0.375rem;
  color: ${({ theme }) => rgba(theme.black, 0.5)};
  text-transform: uppercase;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 1.6rem;
    line-height: 2.8rem;
    letter-spacing: 0.5rem;
  }
`;

const ButtonWrapper = styled.button`
  padding: 0.3rem 0.4rem 0.4rem;
  display: flex;
  align-items: center;
  width: 11.5rem;
  border-radius: 2.8rem;
  background: ${({ theme }) => theme.white};
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover ${Arrow} {
    fill: #999999;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0.8rem 0.9rem 0.8rem;
    width: 14.6rem;
  }
`;

const Button = ({active, ...props }) => (
  <ButtonWrapper {...props}>
    <ButtonText>{active ? 'less' : 'more'}</ButtonText>
    <Arrow active={active} />
  </ButtonWrapper>
);

export default Button;
