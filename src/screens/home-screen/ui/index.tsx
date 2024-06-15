'use client';

import React, { Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

import { FeedCard, useGetProductsQuery } from '@/entities/product';

import SkeletonFeedCard from './skeleton-feed-card';
import { SHomeScreen } from './home-screen.styles';

export function HomeScreen() {
  const { data, isSuccess, isLoading, isError, fetchNextPage } = useGetProductsQuery();

  const lastElement = useInView({
    onChange: (view) => {
      view && fetchNextPage();
    },
  });

  return (
    <SHomeScreen>
      {isSuccess && (
        <>
          {data.map((product, index) => (
            <Fragment key={product.url}>
              {data?.length === index + 1 && <div ref={lastElement.ref} />}
              <FeedCard {...product} />
            </Fragment>
          ))}
        </>
      )}
      {isLoading && <SkeletonFeedCard />}
      {isError && <p>Ошибка...</p>}
    </SHomeScreen>
  );
}
