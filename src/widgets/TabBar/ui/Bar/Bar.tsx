'use client';

import React, { useCallback, useEffect } from 'react';
import { faBars, faHeart, faUser, faHouse } from '@fortawesome/free-solid-svg-icons';
import { SegmentedProps } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

import { useGenderStore } from '@/entities/gender';

import { TabType } from '../../model/tabBarStore.types';
import { useTabBarStore } from '../../lib/tabBar.store';
import { SFontAwesomeIcon, SSegmented, SWrapper } from './tabbar.styles';

const defaultOptions: SegmentedProps<TabType>['options'] = [
  { value: 'home', icon: <SFontAwesomeIcon icon={faHouse} /> },
  { value: 'catalog', icon: <SFontAwesomeIcon icon={faBars} /> },
  { value: 'favourites', icon: <SFontAwesomeIcon icon={faHeart} /> },
  { value: 'profile', icon: <SFontAwesomeIcon icon={faUser} /> },
];

const TabBar = () => {
  const { activeTab, setActiveTab } = useTabBarStore();
  const { gender } = useGenderStore();
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeSegmented: SegmentedProps<TabType>['onChange'] = (value) => {
    switch (value) {
      case 'home':
        router.push(`/${gender}`);
        break;
      case 'catalog':
        router.push(`/${gender}/catalog`);
        break;
      default:
        router.push(`/${value}`);
        break;
    }
  };

  const getActiveTab = useCallback((path: string): TabType => {
    if (path.includes('/catalog')) return 'catalog';
    if (path.includes('/men') || path.includes('/women')) return 'home';
    if (path.includes('/favourites')) return 'favourites';
    if (path.includes('/profile')) return 'profile';
    return null;
  }, []);

  useEffect(() => {
    setActiveTab(getActiveTab(pathname));
  }, [pathname]);

  return (
    <SWrapper>
      <SSegmented value={activeTab} options={defaultOptions} onChange={handleChangeSegmented} />
    </SWrapper>
  );
};

export default TabBar;
