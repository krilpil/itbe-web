import { infiniteQueryOptions, useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { graphQLClient } from '@/shared/config';
import { Query } from '@/shared/model/graphql';

import { IGetProducts } from './getProducts.types';

const getProductsQuery = async ({ page }: IGetProducts): Promise<Query['getProducts']> => {
  const query: Pick<Query, 'getProducts'> = await graphQLClient.request(
    gql`
      query getProducts($page: Float!) {
        getProducts(page: $page) {
          brand
          category
          gallery
          price
        }
      }
    `,
    {
      page,
    }
  );

  return query.getProducts;
};

export const groupGetProductsQuery = () =>
  infiniteQueryOptions({
    queryKey: ['products'],
    queryFn: ({ pageParam }) => getProductsQuery({ page: pageParam }),
    initialPageParam: 1,
    select: ({ pages }) => pages.flat(),
    getNextPageParam: (lastPage, _, lastPageParam) =>
      lastPage.length ? lastPageParam + 1 : undefined,
  });

export const useGetProductsQuery = () => useInfiniteQuery(groupGetProductsQuery());
