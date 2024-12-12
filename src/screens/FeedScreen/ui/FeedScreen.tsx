'use client';

import React from 'react';

import { FeedCard } from '@/entities/product';

import { SBread, SFeed, SFeedScreen, STitle } from './feedScreen.styles';

const src1 =
  'https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/' +
  'product/3/1/31-10-24-tc_ih8543_1.jpg';

const src2 =
  'https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/' +
  '2/7/27-07-2023-LB_560771_2_1.jpg';
const src3 =
  'https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/' +
  '0/8/08-10-2024-JD_FQ8138-002_m8_1.jpg';
const src4 =
  'https://media.endclothing.com/media/f_auto,q_auto:eco,w_768/prodmedia/media/catalog/product/' +
  '0/7/07-11-24-AJ_FZ4238-001_m9_1.jpg';

const FeedScreen = () => {
  return (
    <SFeedScreen>
      <section>
        <STitle>кроссовки</STitle>
        <SBread items={[{ title: 'главная' }, { title: 'обувь' }, { title: 'кроссовки' }]} />
      </section>
      <SFeed>
        <FeedCard
          colors={['pink', 'black']}
          brand={'Adidas'}
          model={"END. x adidas Gazelle Indoor 'Laundromat'"}
          imageSrc={src1}
          price={11000}
        />
        <FeedCard
          colors={['brown']}
          brand={'Birkenstock'}
          model={'Boston SFB'}
          imageSrc={src2}
          price={19000}
        />
        <FeedCard
          colors={['black', 'red', 'white']}
          brand={'Air Jordan'}
          model={'4 Retro Sneaker'}
          imageSrc={src3}
          price={14900}
        />
        <FeedCard
          colors={['grey']}
          brand={'Nike'}
          model={'Air Max SNDR Gore-Tex W Sneaker'}
          imageSrc={src4}
          price={19000}
        />
      </SFeed>
    </SFeedScreen>
  );
};

export default FeedScreen;
