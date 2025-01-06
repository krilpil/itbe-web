import styled, { css } from 'styled-components';
import Image from 'next/image';

import { SShapeProps } from '../../model/feedCard.types';

export const SFeedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;
  font-size: 18px;
  font-weight: 400;
`;

export const SImageWrapper = styled.div`
  height: 265px;
  width: 100%;
  position: relative;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
`;

export const SImage = styled(Image)`
  pointer-events: none;
  object-position: center;
  object-fit: cover;
`;

export const STitle = styled.p`
  text-align: right;
`;

export const SBrand = styled.span`
  text-transform: uppercase;
  font-weight: 600;
`;

export const SShapeGroup = styled.div`
  display: flex;
  gap: 4px;
`;

export const SShape = styled.span<SShapeProps>`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  box-shadow: inset 0 0 16px ${({ color }) => color};
  display: inline-block;

  ${({ color }) =>
    color === 'white' &&
    css`
      border: 1px solid gray;
    `};
`;
