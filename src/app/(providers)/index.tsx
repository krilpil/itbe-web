import React, { PropsWithChildren } from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { AntDesignProvider } from './ant-design-provider';
import { StyledComponentsProvider } from './styled-components';
import { StyledComponentsRegistry } from './styled-components-registry';

export function Providers({ children }: PropsWithChildren) {
  return (
    <StyledComponentsProvider>
      <AntdRegistry>
        <StyledComponentsRegistry>
          <AntDesignProvider>{children}</AntDesignProvider>
        </StyledComponentsRegistry>
      </AntdRegistry>
    </StyledComponentsProvider>
  );
}
