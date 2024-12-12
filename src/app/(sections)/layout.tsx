import React, { PropsWithChildren } from 'react';

import { Header } from '@/widgets/Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
