import React, { FC } from 'react';

import { getPriceWithSpace } from '@/shared/lib';
import { ArrowRightIcon, LikeIcon, SharedIcon } from '@/shared/assets';
import { ButtonIcon } from '@/shared/components';

import {
  SActionContainer,
  SBrandName,
  SCategoryName,
  SCost,
  SDescriptionContainer,
  SFeedProduct,
  SImagesContainer,
  SContent,
  STitleContainer,
  SCarousel,
  SCarouselContainer,
  SImage,
} from './feed-card.styles';
import { IFeedCard } from '../../model/feed-card.types';

const FeedCard: FC<IFeedCard> = ({ images, price, brand, category }) => {
  const convertedConst = getPriceWithSpace(price);

  return (
    <SFeedProduct>
      <STitleContainer>
        <SCategoryName>{category}</SCategoryName>
        <SBrandName>{brand}</SBrandName>
      </STitleContainer>
      <SContent>
        <SCarouselContainer>
          <SCarousel>
            {images.map((src) => (
              <SImagesContainer key={src}>
                <SImage
                  fill
                  src={src}
                  alt={src}
                  priority
                  quality={1}
                  objectFit={'cover'}
                  objectPosition={'center'}
                />
              </SImagesContainer>
            ))}
          </SCarousel>
        </SCarouselContainer>
        <SActionContainer>
          <ButtonIcon>
            <ArrowRightIcon size={'2xl'} />
            <span>Перейти</span>
          </ButtonIcon>
          <ButtonIcon>
            <LikeIcon size={'2xl'} />
            <span>Нравится</span>
          </ButtonIcon>
          <ButtonIcon>
            <SharedIcon size={'2xl'} />
            <span>Отправить</span>
          </ButtonIcon>
        </SActionContainer>
      </SContent>
      <SDescriptionContainer>
        <SCost>{convertedConst}</SCost>
      </SDescriptionContainer>
    </SFeedProduct>
  );
};

export default FeedCard;
