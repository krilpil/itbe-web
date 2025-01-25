'use client';

import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import styledComponentsTheme from '../(theme)/styled-components-theme';

export const StyledComponentsProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={styledComponentsTheme}>{children}</ThemeProvider>
);
