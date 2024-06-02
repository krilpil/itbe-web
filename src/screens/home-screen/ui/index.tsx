'use client';

import React from 'react';

import { FeedCard } from '@/entities/product';

import { SHomeScreen } from './home-screen.styles';

export function HomeScreen() {
  return (
    <SHomeScreen>
      <FeedCard
        brand={'Aeronautica Militare'}
        category={'кроссовки'}
        price={'18900'}
        images={[
          'https://a.lmcdn.ru/product/R/T/RTLADJ556001_23201133_1_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADJ556001_23201134_2_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADJ556001_23201135_3_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADJ556001_23201136_4_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADJ556001_23201137_5_v1_2x.jpg',
        ]}
      />
      <FeedCard
        brand={'Philipp Plein'}
        category={'кеды'}
        price={'18900'}
        images={[
          'https://a.lmcdn.ru/product/R/T/RTLADH796001_22515825_1_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADH796001_22515826_2_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADH796001_22515827_3_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADH796001_22515828_4_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADH796001_22515829_5_v1_2x.jpg',
        ]}
      />
      <FeedCard
        brand={'Versace Jeans Couture'}
        category={'Кроссовки'}
        price={'18900'}
        images={[
          'https://a.lmcdn.ru/product/R/T/RTLADJ859301_23054512_1_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADJ859301_23054513_2_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADJ859301_23054514_3_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADJ859301_23054515_4_v1_2x.jpg',
          'https://a.lmcdn.ru/product/R/T/RTLADJ859301_23054516_5_v1_2x.jpg',
        ]}
      />
    </SHomeScreen>
  );
}
