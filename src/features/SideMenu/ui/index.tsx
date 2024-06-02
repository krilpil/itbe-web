import React, { FC } from 'react';

import { SideMenuProps } from '../model/sideMenu.types';
import { SSideMenu } from './sideMenu.styles';

const SideMenu: FC<SideMenuProps> = ({ open, onClose }) => {
  return (
    <SSideMenu open={open} onClose={onClose}>
      SideMenu
    </SSideMenu>
  );
};

export default SideMenu;
