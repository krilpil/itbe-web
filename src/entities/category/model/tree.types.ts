import { GenderType } from '@/entities/gender';

export interface ITree {
  section_name: string;
  section_id: string;
  category: Array<{
    category_name: string;
    category_id: string;
    subcategory: Array<{
      subcategory_name: string;
      subcategory_id: string;
    }>;
  }>;
}

export type ICategoryTree = {
  [key in GenderType]: ITree[];
};
