'use client';
import React from 'react';

import { HomeIcon, LikeIcon, ProfileIcon } from '@/shared/assets';
import { ButtonIcon } from '@/shared/components';

import { STabBar } from './tabbar.styles';

const TabBar = () => {
  return (
    <STabBar>
      <ButtonIcon>
        <HomeIcon size={'xl'} />
        <span>Главная</span>
      </ButtonIcon>

      <ButtonIcon>
        <LikeIcon size={'xl'} />
        <span>Нравится</span>
      </ButtonIcon>

      <ButtonIcon>
        <ProfileIcon size={'xl'} />
        <span>Профиль</span>
      </ButtonIcon>
    </STabBar>
  );
};

export default TabBar;
