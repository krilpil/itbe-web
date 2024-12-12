'use client';
import React from 'react';

import { HomeIcon, LikeIcon, ProfileIcon } from '@/shared/assets';

import { STabBar, STabButton } from './tabbar.styles';

const TabBar = () => {
  return (
    <STabBar>
      <STabButton>
        <HomeIcon size={'xl'} />
        <span>Главная</span>
      </STabButton>

      <STabButton>
        <LikeIcon size={'xl'} />
        <span>Нравится</span>
      </STabButton>

      <STabButton>
        <ProfileIcon size={'xl'} />
        <span>Профиль</span>
      </STabButton>
    </STabBar>
  );
};

export default TabBar;
