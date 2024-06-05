'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

import { FeedCard, useGetProductsQuery } from '@/entities/product';
import SkeletonFeedCard from '@/screens/home-screen/ui/skeleton-feed-card';

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
            <>
              {data?.length === index + 1 && <div ref={lastElement.ref} />}
              <FeedCard key={index} {...product} />
            </>
          ))}
        </>
      )}
      {isLoading && <SkeletonFeedCard />}
      {isError && <p>Ошибка...</p>}
    </SHomeScreen>
  );
}
