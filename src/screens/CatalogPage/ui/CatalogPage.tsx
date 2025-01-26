'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import {
  CategoryList,
  getCategories,
  getSections,
  CategoryListProps,
  useTabStore,
  getSubcategories,
} from '@/entities/category';
import { useGenderStore } from '@/entities/gender';

import { SModal, SMotion } from './catalogPage.styles';

const CatalogPage = () => {
  const { gender } = useGenderStore();
  const { section, category, subcategory, setSection, setCategory, setSubcategory, destroy } = useTabStore();
  const router = useRouter();

  const sectionsList = getSections(gender);
  const categoriesList = getCategories(gender, section);
  const subcategoriesList = getSubcategories(gender, section, category);

  const keyCategory = 'category-' + section;
  const keySubcategory = 'subcategory-' + category;

  const onSelect: CategoryListProps['onSelect'] = (href) => {
    router.push(href);
    destroy();
  };

  const onEnterSection: CategoryListProps['onEnter'] = (id) => {
    setSection(id);
  };

  const onEnterCategories: CategoryListProps['onEnter'] = (id) => {
    setCategory(id);
  };

  const onEnterSubcategories: CategoryListProps['onEnter'] = (id) => {
    setSubcategory(id);
  };

  useEffect(() => {
    return () => destroy();
  }, []);

  return (
    <SModal>
      <CategoryList activeId={section} list={sectionsList} onSelect={onSelect} onEnter={onEnterSection} />

      <SMotion key={keyCategory}>
        <CategoryList activeId={category} list={categoriesList} onSelect={onSelect} onEnter={onEnterCategories} />
      </SMotion>

      <SMotion key={keySubcategory}>
        <CategoryList
          activeId={subcategory}
          list={subcategoriesList}
          onSelect={onSelect}
          onEnter={onEnterSubcategories}
        />
      </SMotion>
    </SModal>
  );
};

export default CatalogPage;
