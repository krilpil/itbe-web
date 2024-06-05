import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';

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

const FeedCard: FC<IFeedCard> = ({ gallery, price, brand, category }) => {
  const convertedConst = getPriceWithSpace(price);

  const { inView, ref } = useInView({});

  return (
    <SFeedProduct ref={ref}>
      <STitleContainer>
        <SCategoryName>{category}</SCategoryName>
        <SBrandName>{brand}</SBrandName>
      </STitleContainer>
      <SContent>
        <SCarouselContainer>
          <SCarousel>
            {gallery.map((src, index) => (
              <SImagesContainer key={src}>
                <SImage fill src={src} alt={src} priority={inView || index === 0} quality={50} />
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
