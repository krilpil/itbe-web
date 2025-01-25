'use client';

import React, { FC } from 'react';

import { CategoryListProps } from '../../model/categoryList.types';
import { SButton, SList } from './categoryList.styles';

const CategoryList: FC<CategoryListProps> = ({ activeId, list, onEnter }) => {
  return (
    <SList>
      {list.map(({ name, id, tree }) => (
        <li key={id}>
          <SButton onMouseEnter={() => onEnter(id)} $selected={id === activeId} $tree={tree}>
            {name}
          </SButton>
        </li>
      ))}
    </SList>
  );
};

export default CategoryList;
