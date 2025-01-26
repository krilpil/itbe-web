'use client';

import React, { FC } from 'react';

import { CategoryListProps } from '../../model/categoryList.types';
import { SButton, SList } from './categoryList.styles';

const CategoryList: FC<CategoryListProps> = ({ activeId, list, onEnter, onSelect }) => {
  return (
    <SList>
      {list.map(({ name, id, tree, href }) => {
        return (
          <li key={id}>
            <SButton
              onClick={() => onSelect(href)}
              onMouseEnter={() => onEnter(id)}
              $selected={id === activeId}
              $tree={tree}
            >
              {name}
            </SButton>
          </li>
        );
      })}
    </SList>
  );
};

export default CategoryList;
