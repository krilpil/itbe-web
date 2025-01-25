import React, { PropsWithChildren } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { TanstackClient } from './tanstack-client';
import { AntDesignProvider } from './ant-design-provider';
import { StyledComponentsProvider } from './styled-components';
import { StyledComponentsRegistry } from './styled-components-registry';

export function Providers({ children }: PropsWithChildren) {
  return (
    <TanstackClient>
      <StyledComponentsProvider>
        <StyledComponentsRegistry>
          <AntDesignProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </AntDesignProvider>
        </StyledComponentsRegistry>
      </StyledComponentsProvider>
    </TanstackClient>
  );
}
