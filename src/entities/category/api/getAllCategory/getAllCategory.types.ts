import { CategoryEntity } from '@/shared/model/graphql';

export type APIGetAllCategory = Array<
  Pick<CategoryEntity, 'category' | 'subCategory' | 'sex' | 'section'>
>;
