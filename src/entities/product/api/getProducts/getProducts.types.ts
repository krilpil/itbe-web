import { ProductEntity } from '@/shared/model/graphql';

export interface IGetProducts {
  page: number;
}

export type APIGetProducts = Array<
  Pick<ProductEntity, 'brand' | 'category' | 'gallery' | 'price' | 'url'>
>;
