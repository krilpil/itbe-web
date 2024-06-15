import { CollapseProps } from 'antd';
import React from 'react';

import { APIGetAllCategory } from '@/entities/category';
import { getSortAlphabet } from '@/shared/lib';

import { SMenuButton } from '../ui/sideMenu.styles';

interface IGetMenuItems {
  sections: string[];
  category: APIGetAllCategory;
}

export const getMenuItems = ({ sections, category }: IGetMenuItems): CollapseProps['items'] => {
  const sortSections = sections.sort(getSortAlphabet);
  const getFilterCategory = (categoryList: APIGetAllCategory, section: string) => {
    const filter = categoryList.filter((item) => item.section === section);
    const categories = filter.map(({ category }) => category);
    return categories.sort(getSortAlphabet);
  };

  return sortSections.map((section, index) => ({
    key: `${index}`,
    label: section,
    children: getFilterCategory(category, section).map((item) => (
      <SMenuButton key={item} type={'link'}>
        {item}
      </SMenuButton>
    )),
  }));
};
