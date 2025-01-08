'use client';

import React from 'react';
import { ModalProps } from 'antd';

import { useTabBarStore } from '../../lib/tabBar.store';
import { SCatalog, SModal } from './catalog.styles';

const modalRender: ModalProps['modalRender'] = () => {
  return <SModal>aa</SModal>;
};

const Catalog = () => {
  const { activeTab } = useTabBarStore();

  const isOpen = activeTab === 'open_catalog';

  return <SCatalog open={isOpen} modalRender={modalRender} />;
};

export default Catalog;
