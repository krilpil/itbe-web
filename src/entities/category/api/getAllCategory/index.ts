import { queryOptions, useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';

import { graphQLClient } from '@/shared/config';
import { Query } from '@/shared/model/graphql';
import { APIGetAllCategory } from '@/entities/category/api/getAllCategory/getAllCategory.types';

const getAllCategoryQuery = async (): Promise<APIGetAllCategory> => {
  const query: Pick<Query, 'getAllCategory'> = await graphQLClient.request(gql`
    query {
      getAllCategory {
        category
        subCategory
        sex
        section
      }
    }
  `);

  return query.getAllCategory;
};

export const groupGetAllCategoryQuery = () =>
  queryOptions({
    queryKey: ['allCategory'],
    queryFn: () => getAllCategoryQuery(),
  });

export const useGetAllCategoryQuery = () => useQuery(groupGetAllCategoryQuery());
export type { APIGetAllCategory } from './getAllCategory.types';
