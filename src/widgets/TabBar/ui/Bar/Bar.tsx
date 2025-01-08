'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faUser, faHouse, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Segmented, SegmentedProps } from 'antd';

import { TabType } from '../../model/tabBarStore.types';
import { useTabBarStore } from '../../lib/tabBar.store';
import { SFontAwesomeIcon, SSegmented, SWrapper } from './tabbar.styles';

const defaultOptions: SegmentedProps<TabType>['options'] = [
  { value: 'home', icon: <SFontAwesomeIcon icon={faHouse} /> },
  { value: 'favourites', icon: <SFontAwesomeIcon icon={faHeart} /> },
  { value: 'profile', icon: <SFontAwesomeIcon icon={faUser} /> },
];

const openCatalogOptions = defaultOptions.slice(0, 1).concat(
  {
    value: 'open_catalog',
    icon: <SFontAwesomeIcon icon={faBars} />,
  },
  defaultOptions.slice(1)
);

const closeCatalogOptions = defaultOptions.slice(0, 1).concat(
  {
    value: 'close_catalog',
    className: 'ant-segmented-item-selected',
    icon: <SFontAwesomeIcon icon={faXmark} />,
  },
  defaultOptions.slice(1)
);

const TabBar = () => {
  const { activeTab, setActiveTab } = useTabBarStore();

  const [segmentedOptions, setSegmentedOptions] =
    useState<SegmentedProps<TabType>['options']>(openCatalogOptions);
  const [preventValue, setPreventValue] = useState<TabType>(null);

  const handleChangeSegmented: SegmentedProps<TabType>['onChange'] = (value) => {
    setPreventValue(activeTab);

    if (value === 'open_catalog') {
      setSegmentedOptions(closeCatalogOptions);
    } else {
      setSegmentedOptions(openCatalogOptions);
    }

    if (value === 'close_catalog') {
      setActiveTab(preventValue);
    } else {
      setActiveTab(value);
    }
  };

  return (
    <SWrapper>
      <SSegmented value={activeTab} options={segmentedOptions} onChange={handleChangeSegmented} />
    </SWrapper>
  );
};

export default TabBar;
