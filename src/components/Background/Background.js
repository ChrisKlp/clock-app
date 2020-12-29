import styled from 'styled-components';
import dayImgM from '../../assets/mobile/bg-image-daytime.jpg';
import dayImgT from '../../assets/tablet/bg-image-daytime.jpg';
import dayImgD from '../../assets/desktop/bg-image-daytime.jpg';
import nightImgM from '../../assets/mobile/bg-image-nighttime.jpg';
import nightImgT from '../../assets/tablet/bg-image-nighttime.jpg';
import nightImgD from '../../assets/desktop/bg-image-nighttime.jpg';

const Wrapper = styled.main`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-image: url(${({ isNight }) => (isNight ? nightImgM : dayImgM)});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: 0;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    background-image: url(${({ isNight }) => (isNight ? nightImgT : dayImgT)});
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    background-image: url(${({ isNight }) => (isNight ? nightImgD : dayImgD)});
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(0, 0%, 0%, 0.4);
    z-index: -1;
    content: '';
  }
`;

const Background = ({ children, isNight }) => {
  return <Wrapper isNight={isNight}>{children}</Wrapper>;
};

export default Background;
