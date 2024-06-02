import styled from 'styled-components';
import { Carousel } from 'antd';
import Image from 'next/image';

export const SFeedProduct = styled.div`
  height: 100dvh;
  position: relative;
  display: grid;
  grid-template-rows: 116px 1fr 120px;
  scroll-snap-align: start;
  color: black;
`;

export const SContent = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  height: 100%;
`;

export const SActionContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  justify-self: center;
  align-self: end;
  font-size: 10px;
`;

export const STitleContainer = styled.div`
  z-index: 5;
  display: grid;
  margin-bottom: -16px;
  padding: 80px 16px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 70%,
    rgb(255, 255, 255, 0.8) 75%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const SCategoryName = styled.p`
  font-size: 14px;
  text-transform: uppercase;
`;

export const SBrandName = styled.p`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SCarouselContainer = styled.div`
  display: flex;
  border-radius: 0 32px 32px 0;
  overflow: hidden;
  overflow-x: scroll;
  isolation: isolate;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SCarousel = styled(Carousel).attrs({
  draggable: true,
  accessibility: true,
  swipeToSlide: true,
  touchThreshold: 100,
})`
  display: flex;
  width: calc(100vw - 82px);
  height: 100%;

  .slick-list,
  .slick-track,
  .slick-slide > div {
    height: 100%;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`;

export const SImagesContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;

export const SImage = styled(Image)`
  pointer-events: none;
`;

export const SDescriptionContainer = styled.div`
  padding: 16px;
`;

export const SCost = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
