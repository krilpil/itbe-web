import { GenderType } from '@/entities/gender';
import { getRouteLink } from '@/shared/router';

import { IList } from '../model/list.types';
import { ICategoryTree } from '../model/tree.types';
import { TabType } from '../model/tabStore.types';

const categoryTree: ICategoryTree = {
  men: [
    {
      section_name: 'одежда',
      section_id: 'all_clothing',
      category: [
        {
          category_name: 'вся одежда',
          category_id: 'all_clothing',
          subcategory: [],
        },
        {
          category_name: 'пляжная одежда и купальники',
          category_id: 'beachwear_and_swimwear',
          subcategory: [],
        },
        {
          category_name: 'пальто',
          category_id: 'coats',
          subcategory: [],
        },
        {
          category_name: 'куртки',
          category_id: 'jackets',
          subcategory: [],
        },
        {
          category_name: 'джинсы',
          category_id: 'jeans',
          subcategory: [],
        },
        {
          category_name: 'вязаные вещи',
          category_id: 'knitwear',
          subcategory: [],
        },
        {
          category_name: 'спортивная одежда',
          category_id: 'activewear',
          subcategory: [
            {
              subcategory_name: 'худи',
              subcategory_id: 'hoodie',
            },
            {
              subcategory_name: 'спортивные штаны',
              subcategory_id: 'sweatpants',
            },
            {
              subcategory_name: 'спортивные толстовки',
              subcategory_id: 'sweatshirts',
            },
          ],
        },
      ],
    },
    {
      section_name: 'обувь',
      section_id: 'all_shoes',
      category: [
        {
          category_name: 'вся обувь',
          category_id: 'all_shoes',
          subcategory: [],
        },
        {
          category_name: 'сапоги',
          category_id: 'boots',
          subcategory: [],
        },
        {
          category_name: 'ботинки',
          category_id: 'lace-ups',
          subcategory: [],
        },
        {
          category_name: 'сандалии и шлепанцы',
          category_id: 'sandals_and_slides',
          subcategory: [],
        },
        {
          category_name: 'туфли',
          category_id: 'slip-on_shoes',
          subcategory: [],
        },
        {
          category_name: 'кроссовки',
          category_id: 'sneakers',
          subcategory: [],
        },
      ],
    },
    {
      section_name: 'аксессуары',
      section_id: 'all_accessories',
      category: [
        {
          category_name: 'все аксессуары',
          category_id: 'all_accessories',
          subcategory: [],
        },
        {
          category_name: 'ремни',
          category_id: 'belts',
          subcategory: [],
        },
        {
          category_name: 'запонки',
          category_id: 'сufflinks',
          subcategory: [],
        },
        {
          category_name: 'маски',
          category_id: 'face_masks',
          subcategory: [],
        },
        {
          category_name: 'перчатки',
          category_id: 'gloves',
          subcategory: [],
        },
      ],
    },
    {
      section_name: 'сумки',
      section_id: 'all_bags',
      category: [
        {
          category_name: 'все сумки',
          category_id: 'all_bags',
          subcategory: [],
        },
      ],
    },
    {
      section_name: 'ювелирные изделия',
      section_id: 'all_jewelry',
      category: [
        {
          category_name: 'все ювелирные изделия',
          category_id: 'all_jewelry',
          subcategory: [],
        },
      ],
    },
    {
      section_name: 'бренды',
      section_id: 'all_brands',
      category: [],
    },
    {
      section_name: 'гайды',
      section_id: 'all_guides',
      category: [],
    },
  ],
  women: [],
};

export const getSections = (gender: GenderType): IList[] =>
  categoryTree[gender].map((section) => ({
    name: section.section_name,
    id: section.section_id,
    tree: !!section.category.length,
    href: getRouteLink({ gender, tab: 'category', category: section.section_id }),
  }));

export const getCategories = (gender: GenderType, section: TabType): IList[] => {
  const findSection = categoryTree[gender].find(({ section_id }) => section_id === section);
  if (!findSection) return [];

  return findSection.category.map((category) => ({
    name: category.category_name,
    id: category.category_id,
    tree: !!category.subcategory.length,
    href: getRouteLink({ gender, tab: 'category', category: category.category_id }),
  }));
};

export const getSubcategories = (gender: GenderType, section: TabType, category: TabType): IList[] => {
  const findSection = categoryTree[gender].find(({ section_id }) => section_id === section);
  if (!findSection) return [];

  const findCategory = findSection.category.find(({ category_id }) => category_id === category);
  if (!findCategory) return [];

  return findCategory.subcategory.map((subcategory) => ({
    name: subcategory.subcategory_name,
    id: subcategory.subcategory_id,
    tree: false,
    href: getRouteLink({ gender, tab: 'category', category: subcategory.subcategory_id }),
  }));
};
