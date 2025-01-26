import React, { PropsWithChildren } from 'react';

import { Header } from '@/widgets/Header';
import { TabBar } from '@/widgets/TabBar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div style={{ minHeight: '100vh' }}>{children}</div>
      <TabBar />
      <div style={{ width: '100%', height: 400, backgroundColor: 'black' }}></div>
    </>
  );
}
