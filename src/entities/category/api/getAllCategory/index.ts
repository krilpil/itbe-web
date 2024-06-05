import { queryOptions, useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { graphQLClient } from '@/shared/config';
import { Query } from '@/shared/model/graphql';

const getAllCategoryQuery = async (): Promise<Query['getAllCategory']> => {
  return await graphQLClient.request(gql`
    query {
      getAllCategory {
        category
        subCategory
        sex
        section
      }
    }
  `);
};

export const groupGetAllCategoryQuery = () =>
  queryOptions({
    queryKey: ['allCategory'],
    queryFn: () => getAllCategoryQuery(),
  });

export const useGetAllCategoryQuery = () =>
  useQuery(groupGetAllCategoryQuery());
