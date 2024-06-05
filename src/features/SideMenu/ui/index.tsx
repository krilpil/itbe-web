import React, { FC } from 'react';

import { useGetAllCategoryQuery } from '@/entities/category';

import { SideMenuProps } from '../model/sideMenu.types';
import { SSideMenu } from './sideMenu.styles';

const SideMenu: FC<SideMenuProps> = ({ open, onClose }) => {
  const { data, isLoading } = useGetAllCategoryQuery();

  return (
    <SSideMenu open={open} onClose={onClose}>
      {isLoading && <p>Загрузка...</p>}
      {JSON.stringify(data)}
    </SSideMenu>
  );
};

export default SideMenu;
