import React, { FC } from 'react';

import { getPriceWithSpace } from '@/shared/lib';

import { FeedCardProps } from '../../model/feedCard.types';
import {
  SBrand,
  SFeedCard,
  SImage,
  SImageWrapper,
  SShape,
  SShapeGroup,
  STitle,
} from './feedCard.styles';

const FeedCard: FC<FeedCardProps> = ({ imageSrc, colors, model, brand, price }) => {
  const priceWithSpace = getPriceWithSpace(price);

  return (
    <SFeedCard>
      <SImageWrapper>
        <SImage src={imageSrc} alt={model} fill />
      </SImageWrapper>
      <SShapeGroup>
        {colors.map((color) => (
          <SShape color={color} key={color} />
        ))}
      </SShapeGroup>
      <STitle>
        <SBrand>{brand}</SBrand> {model}
      </STitle>
      <span>{priceWithSpace}</span>
    </SFeedCard>
  );
};

export default FeedCard;
