'use client';

import React, { PropsWithChildren } from 'react';

import { TabBar } from '../../widgets/tabbar';
import { AppBar } from '../../widgets/appbar';
import { SLayout } from './layout.styles';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <SLayout>
      <AppBar />
      {children}
      <TabBar />
    </SLayout>
  );
}
