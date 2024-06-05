'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { tanstackClient } from '@/shared/config';

export const TanstackClient: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={tanstackClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
