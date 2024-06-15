import React, { FC, useState } from 'react';
import { CollapseProps } from 'antd';

import { useGetAllCategoryQuery } from '@/entities/category';
import { getMenuItems } from '@/features/side-menu/lib/getMenuItems';

import { ITabSection, SideMenuProps } from '../model/sideMenu.types';
import { SCollapse, SMenuButton, SSideMenu, STabs } from './sideMenu.styles';
import { tabsItems } from '../lib/tabsItems';

const SideMenu: FC<SideMenuProps> = ({ open, onClose }) => {
  const { data: category } = useGetAllCategoryQuery();
  const [sex, setSex] = useState<'men' | 'women'>('men');

  const filterSex = category?.filter((item) => item.sex === sex) || [];
  const sections = filterSex.reduce((acc: string[], { section }) => {
    const isExist = acc.includes(section);
    return !isExist ? [...acc, section] : acc;
  }, []);

  const menuItems = getMenuItems({ sections, category: filterSex });

  const handleOnChange = (key: string) => setSex(key as ITabSection);

  return (
    <SSideMenu
      open={open}
      onClose={onClose}
      title={<STabs items={tabsItems} onChange={handleOnChange} />}
    >
      <SCollapse items={menuItems} />
    </SSideMenu>
  );
};

export default SideMenu;
