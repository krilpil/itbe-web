import React, { PropsWithChildren } from 'react';

import { Header } from '@/widgets/Header';
import { TabBar } from '@/widgets/TabBar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <TabBar />
      <div style={{ width: '100%', height: 1000, backgroundColor: 'black' }}></div>
    </>
  );
}
