'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faUser, faHouse } from '@fortawesome/free-solid-svg-icons';

import { STabBar, STabButton, SWrapper } from './tabbar.styles';

const TabBar = () => {
  return (
    <SWrapper>
      <STabBar>
        <STabButton>
          <FontAwesomeIcon icon={faHouse} size={'xl'} />
          {/*<span>Главная</span>*/}
        </STabButton>

        <STabButton>
          <FontAwesomeIcon icon={faBars} size={'xl'} />
          {/*<span>Каталог</span>*/}
        </STabButton>

        <STabButton>
          <FontAwesomeIcon icon={faHeart} size={'xl'} />
          {/*<span>Избранное</span>*/}
        </STabButton>

        <STabButton>
          <FontAwesomeIcon icon={faUser} size={'xl'} />
          {/*<span>Профиль</span>*/}
        </STabButton>
      </STabBar>
    </SWrapper>
  );
};

export default TabBar;
