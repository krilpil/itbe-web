import React, { FC } from 'react';

import { getPriceWithSpace } from '@/shared/lib';
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
import { IFeedCard } from '../../model/visualFeed.types';

const FeedCard: FC<IFeedCard> = ({ gallery, price, brand, category, url }) => {
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
            {gallery.map((src, index) => (
              <SImagesContainer key={src}>
                <SImage fill src={src} alt={src} priority={index === 0} quality={50} />
              </SImagesContainer>
            ))}
          </SCarousel>
        </SCarouselContainer>
        <SActionContainer>
          <ButtonIcon href={url} target={'_blank'}>
            {/*<ArrowRightIcon size={'2xl'} />*/}
            <span>Перейти</span>
          </ButtonIcon>
          <ButtonIcon>
            {/*<LikeIcon size={'2xl'} />*/}
            <span>Нравится</span>
          </ButtonIcon>
          <ButtonIcon>
            {/*<SharedIcon size={'2xl'} />*/}
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
