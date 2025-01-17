'use client';

import React from 'react';
import { ModalProps } from 'antd';

import {
  CategoryList,
  getCategories,
  getSections,
  CategoryListProps,
  useTabStore,
  getSubcategories,
} from '@/entities/category';
import { useGenderStore } from '@/entities/gender';

import { useTabBarStore } from '../../lib/tabBar.store';
import { SCatalog, SModal, SMotion } from './catalog.styles';

const ModalRender: ModalProps['modalRender'] = () => {
  const { gender } = useGenderStore();
  const { section, category, subcategory, setSection, setCategory, setSubcategory } = useTabStore();

  const sectionsList = getSections(gender);
  const categoriesList = getCategories(gender, section);
  const subcategoriesList = getSubcategories(gender, section, category);

  const keyCategory = 'category-' + section;
  const keySubcategory = 'subcategory-' + category;

  const onEnterSection: CategoryListProps['onEnter'] = (id) => {
    setSection(id);
  };

  const onEnterCategories: CategoryListProps['onEnter'] = (id) => {
    setCategory(id);
  };

  const onEnterSubcategories: CategoryListProps['onEnter'] = (id) => {
    setSubcategory(id);
  };

  return (
    <SModal>
      <CategoryList activeId={section} list={sectionsList} onEnter={onEnterSection} />

      <SMotion key={keyCategory}>
        <CategoryList activeId={category} list={categoriesList} onEnter={onEnterCategories} />
      </SMotion>

      <SMotion key={keySubcategory}>
        <CategoryList activeId={subcategory} list={subcategoriesList} onEnter={onEnterSubcategories} />
      </SMotion>
    </SModal>
  );
};

const Catalog = () => {
  const { activeTab } = useTabBarStore();

  const isOpen = activeTab === 'open_catalog';

  return <SCatalog open={isOpen} modalRender={ModalRender} />;
};

export default Catalog;
