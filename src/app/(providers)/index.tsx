import React, { PropsWithChildren } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { TanstackClient } from '@/app/(providers)/tanstack-client';

import { AntDesignProvider } from './ant-design-provider';
import { StyledComponentsProvider } from './styled-components';
import { StyledComponentsRegistry } from './styled-components-registry';

export function Providers({ children }: PropsWithChildren) {
  return (
    <StyledComponentsProvider>
      <AntDesignProvider>
        <TanstackClient>
          <AntdRegistry>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </AntdRegistry>
        </TanstackClient>
      </AntDesignProvider>
    </StyledComponentsProvider>
  );
}
